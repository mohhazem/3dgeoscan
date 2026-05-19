"use client";

import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';

const CONFIG = {
  initialRotationY: 268,
  maxRotationY: Math.PI / 5,
  maxRotationX: Math.PI / 8,
  lerpSpeed: 0.05,
  frustumSize: 11,
  pivotOffset: { x: 0, y: 0, z: 0 },
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

function LoadingSpinner() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '3px solid rgba(241,90,39,0.15)',
          borderTopColor: '#f15a27',
          animation: 'logo3d-spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes logo3d-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const isInitializedRef = useRef(false);

  const cursorRef = useRef({ x: 0, y: 0 });
  const smoothCursorRef = useRef({ x: 0, y: 0 });

  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const initScene = async () => {
      if (!containerRef.current) return;
      if (isInitializedRef.current) return;

      const existingCanvas = containerRef.current.querySelector('canvas');
      if (existingCanvas) containerRef.current.removeChild(existingCanvas);

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      if (width === 0 || height === 0) {
        requestAnimationFrame(() => initScene());
        return;
      }

      isInitializedRef.current = true;

      const THREE = await import('three');
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');

      const scene = new THREE.Scene();

      const aspect = width / height;
      const frustumSize = CONFIG.frustumSize;
      const camera = new THREE.OrthographicCamera(
        (frustumSize * aspect) / -2,
        (frustumSize * aspect) /  2,
         frustumSize / 2,
        -frustumSize / 2,
        0.1,
        1000
      );
      camera.position.set(8, 8, 8);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;

      // Keep canvas hidden until model is ready, so the spinner shows through
      renderer.domElement.style.opacity = '0';
      renderer.domElement.style.transition = 'opacity 0.5s ease';
      containerRef.current?.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0xffffff, 1.2));

      const mainLight = new THREE.DirectionalLight(0xffffff, 2);
      mainLight.position.set(10, 10, 10);
      scene.add(mainLight);

      const leftLight = new THREE.DirectionalLight(0xffffff, 1.5);
      leftLight.position.set(-10, 5, 5);
      scene.add(leftLight);

      const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      backLight.position.set(0, 5, -10);
      scene.add(backLight);

      const accentLight = new THREE.PointLight(0xf15a27, 1, 30);
      accentLight.position.set(5, 5, 5);
      scene.add(accentLight);

      const pivot = new THREE.Group();
      pivot.rotation.y = degreesToRadians(CONFIG.initialRotationY);
      scene.add(pivot);

      const wrapper = new THREE.Group();
      wrapper.position.set(
        -CONFIG.pivotOffset.x,
        -CONFIG.pivotOffset.y,
        -CONFIG.pivotOffset.z
      );
      pivot.add(wrapper);

      const onMouseMove = (e: MouseEvent) => {
        cursorRef.current.x =  (e.clientX / window.innerWidth)  * 2 - 1;
        cursorRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      const onMouseLeave = () => {
        cursorRef.current.x = 0;
        cursorRef.current.y = 0;
      };

      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        cursorRef.current.x =  (e.touches[0].clientX / window.innerWidth)  * 2 - 1;
        cursorRef.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseleave', onMouseLeave);
      window.addEventListener('touchmove', onTouchMove, { passive: true });

      const loader = new GLTFLoader();
      loader.load(
        '/images/models/logo.glb',
        (gltf) => {
          const model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 4 / maxDim;
          model.scale.set(scale, scale, scale);

          model.updateMatrixWorld(true);

          const scaledBox = new THREE.Box3().setFromObject(model);
          const center = scaledBox.getCenter(new THREE.Vector3());
          model.position.set(-center.x, -center.y, -center.z);

          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const name = child.name.toLowerCase();
              if (name.includes('wall') || name.includes('generic')) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0xf15a27,
                  metalness: 0.3,
                  roughness: 0.4,
                  emissive: 0xf15a27,
                  emissiveIntensity: 0.1,
                });
              } else if (name.includes('floor')) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0xffffff,
                  metalness: 0.2,
                  roughness: 0.5,
                });
              } else {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0xf15a27,
                  metalness: 0.3,
                  roughness: 0.4,
                });
              }
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          wrapper.add(model);

          // Fade in the canvas and hide the spinner
          if (rendererRef.current) {
            rendererRef.current.domElement.style.opacity = '1';
          }
          setModelReady(true);
        },
        undefined,
        (error) => console.error('Error loading model:', error)
      );

      const baseRotationY = degreesToRadians(CONFIG.initialRotationY);

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        smoothCursorRef.current.x +=
          (cursorRef.current.x - smoothCursorRef.current.x) * CONFIG.lerpSpeed;
        smoothCursorRef.current.y +=
          (cursorRef.current.y - smoothCursorRef.current.y) * CONFIG.lerpSpeed;

        pivot.rotation.y = baseRotationY + smoothCursorRef.current.x * CONFIG.maxRotationY;
        pivot.rotation.x = -smoothCursorRef.current.y * CONFIG.maxRotationX;

        renderer.render(scene, camera);
      };

      animate();

      let resizeTimeout: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (!containerRef.current || !rendererRef.current) return;
          const w = containerRef.current.clientWidth;
          const h = containerRef.current.clientHeight;
          if (w === 0 || h === 0) return;

          const newAspect = w / h;
          (camera as THREE.OrthographicCamera).left   = (frustumSize * newAspect) / -2;
          (camera as THREE.OrthographicCamera).right  = (frustumSize * newAspect) /  2;
          (camera as THREE.OrthographicCamera).top    =  frustumSize / 2;
          (camera as THREE.OrthographicCamera).bottom = -frustumSize / 2;

          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }, 100);
      };

      window.addEventListener('resize', handleResize);

      (containerRef.current as HTMLDivElement & { __cleanup?: () => void }).__cleanup = () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
        window.removeEventListener('touchmove', onTouchMove);
        clearTimeout(resizeTimeout);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
        renderer.dispose();
        scene.clear();
      };
    };

    // Start loading immediately on mount so Three.js + FBX are ready as fast as possible.
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          if (!isInitializedRef.current) initScene();
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    initScene();

    return () => {
      resizeObserver.disconnect();
      isInitializedRef.current = false;

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }

      if (containerRef.current) {
        const cleanup = (containerRef.current as HTMLDivElement & { __cleanup?: () => void }).__cleanup;
        if (cleanup) cleanup();
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) containerRef.current.removeChild(canvas);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      style={{ minWidth: '100%', minHeight: '100%', position: 'relative' }}
    >
      {!modelReady && <LoadingSpinner />}
    </div>
  );
}
