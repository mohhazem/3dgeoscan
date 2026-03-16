"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const CONFIG = {
  initialRotationY: 268,
  maxRotationY: Math.PI / 5,
  maxRotationX: Math.PI / 8,
  lerpSpeed: 0.05,
  // 👇 Tune these to change which point on the model "chases" the cursor
  // x: left(-) / right(+)
  // y: down(-) / up(+)
  // z: back(-) / forward(+)
  pivotOffset: { x: 0, y: 0, z: 0 },
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const isInitializedRef = useRef(false);

  const cursorRef = useRef({ x: 0, y: 0 });
  const smoothCursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    if (isInitializedRef.current) return;

    const existingCanvas = containerRef.current.querySelector('canvas');
    if (existingCanvas) containerRef.current.removeChild(existingCanvas);

    const initScene = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      if (width === 0 || height === 0) {
        requestAnimationFrame(initScene);
        return;
      }

      isInitializedRef.current = true;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(8, 8, 8);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;
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
      // 👇 Shift wrapper to move the rotation center point
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

      const loader = new FBXLoader();
      loader.load(
        '/models/logo.fbx',
        (fbx) => {
          console.log('Model loaded!');

          const box = new THREE.Box3().setFromObject(fbx);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 4 / maxDim;
          fbx.scale.set(scale, scale, scale);

          fbx.rotation.x = -Math.PI / 2;
          fbx.updateMatrixWorld(true);

          const rotatedBox = new THREE.Box3().setFromObject(fbx);
          const center = rotatedBox.getCenter(new THREE.Vector3());
          fbx.position.set(-center.x, -center.y, -center.z);

          fbx.traverse((child) => {
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

          wrapper.add(fbx);
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

      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (!containerRef.current || !rendererRef.current) return;
          const w = containerRef.current.clientWidth;
          const h = containerRef.current.clientHeight;
          if (w === 0 || h === 0) return;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }, 100);
      };

      window.addEventListener('resize', handleResize);

      (containerRef.current as any).__cleanup = () => {
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
        const cleanup = (containerRef.current as any).__cleanup;
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
    />
  );
}