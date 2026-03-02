"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const CONFIG = {
  stopAngles: [268],
  pauseDuration: 3000,
  easeDuration: 800,
  dragSensitivity: 0.01,
  // Orthographic zoom — lower = more zoomed in
  orthoZoom: 6,
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

type AnimationState = 'idle' | 'dragging' | 'easing_to_stop' | 'paused';

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const isInitializedRef = useRef(false);

  const isDraggingRef = useRef(false);
  const previousMouseXRef = useRef(0);
  const animationStateRef = useRef<AnimationState>('idle');
  const pivotRef = useRef<THREE.Group | null>(null);
  const easeDataRef = useRef({
    startTime: 0,
    startAngle: 0,
    targetAngle: 0,
    pauseStartTime: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;
    if (isInitializedRef.current) return;

    const existingCanvas = containerRef.current.querySelector('canvas');
    if (existingCanvas) {
      containerRef.current.removeChild(existingCanvas);
    }

    const initScene = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      if (width === 0 || height === 0) {
        requestAnimationFrame(initScene);
        return;
      }

      isInitializedRef.current = true;

      // Scene setup
      const scene = new THREE.Scene();

      // ---- ORTHOGRAPHIC CAMERA ----
      const aspect = width / height;
      const zoom = CONFIG.orthoZoom;
      const camera = new THREE.OrthographicCamera(
        -zoom * aspect, // left
         zoom * aspect, // right
         zoom,          // top
        -zoom,          // bottom
        0.1,            // near
        1000            // far
      );
      camera.position.set(8, 8, 8);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;
      containerRef.current?.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

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

      // Pivot structure
      const pivot = new THREE.Group();
      pivotRef.current = pivot;
      scene.add(pivot);

      const wrapper = new THREE.Group();
      pivot.add(wrapper);

      // Stop angles in radians
      const stopAnglesRad = CONFIG.stopAngles
        .map(degreesToRadians)
        .sort((a, b) => a - b);

      const normalizeAngle = (angle: number): number => {
        angle = angle % (Math.PI * 2);
        if (angle < 0) angle += Math.PI * 2;
        return angle;
      };

      const findNearestStopAngle = (currentAngle: number): number => {
        const normalized = normalizeAngle(currentAngle);
        let nearest = stopAnglesRad[0];
        let minDistance = Infinity;

        for (const stopAngle of stopAnglesRad) {
          const dist1 = Math.abs(stopAngle - normalized);
          const dist2 = Math.PI * 2 - dist1;
          const distance = Math.min(dist1, dist2);

          if (distance < minDistance) {
            minDistance = distance;
            nearest = stopAngle;
          }
        }

        let target = nearest;
        const diff = target - normalized;
        if (diff > Math.PI) target -= Math.PI * 2;
        if (diff < -Math.PI) target += Math.PI * 2;

        return currentAngle + (target - normalized);
      };

      // ============================================
      // DRAG EVENT HANDLERS
      // ============================================
      const onMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        isDraggingRef.current = true;
        previousMouseXRef.current = e.clientX;
        animationStateRef.current = 'dragging';
        renderer.domElement.style.cursor = 'grabbing';
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current || !pivotRef.current) return;
        const deltaX = e.clientX - previousMouseXRef.current;
        previousMouseXRef.current = e.clientX;
        pivotRef.current.rotation.y += deltaX * CONFIG.dragSensitivity;
      };

      const onMouseUp = () => {
        if (!isDraggingRef.current || !pivotRef.current) return;
        isDraggingRef.current = false;
        renderer.domElement.style.cursor = 'grab';

        animationStateRef.current = 'easing_to_stop';
        easeDataRef.current.startTime = Date.now();
        easeDataRef.current.startAngle = pivotRef.current.rotation.y;
        easeDataRef.current.targetAngle = findNearestStopAngle(pivotRef.current.rotation.y);

        console.log(
          `Easing to ${(normalizeAngle(easeDataRef.current.targetAngle) * 180 / Math.PI).toFixed(1)}°`
        );
      };

      const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        isDraggingRef.current = true;
        previousMouseXRef.current = e.touches[0].clientX;
        animationStateRef.current = 'dragging';
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!isDraggingRef.current || e.touches.length !== 1 || !pivotRef.current) return;
        e.preventDefault();
        const deltaX = e.touches[0].clientX - previousMouseXRef.current;
        previousMouseXRef.current = e.touches[0].clientX;
        pivotRef.current.rotation.y += deltaX * CONFIG.dragSensitivity;
      };

      const onTouchEnd = () => {
        if (!isDraggingRef.current || !pivotRef.current) return;
        isDraggingRef.current = false;

        animationStateRef.current = 'easing_to_stop';
        easeDataRef.current.startTime = Date.now();
        easeDataRef.current.startAngle = pivotRef.current.rotation.y;
        easeDataRef.current.targetAngle = findNearestStopAngle(pivotRef.current.rotation.y);
      };

      renderer.domElement.style.cursor = 'grab';
      renderer.domElement.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true });
      renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false });
      renderer.domElement.addEventListener('touchend', onTouchEnd);

      // Load FBX model
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

      // ============================================
      // ANIMATION LOOP
      // ============================================
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        const now = Date.now();
        const state = animationStateRef.current;
        const pivot = pivotRef.current;

        if (!pivot) {
          renderer.render(scene, camera);
          return;
        }

        switch (state) {
          case 'idle':
          case 'dragging':
            break;

          case 'easing_to_stop': {
            const { startTime, startAngle, targetAngle } = easeDataRef.current;
            const progress = Math.min((now - startTime) / CONFIG.easeDuration, 1);
            const eased = easeOutCubic(progress);

            pivot.rotation.y = startAngle + (targetAngle - startAngle) * eased;

            if (progress >= 1) {
              pivot.rotation.y = targetAngle;
              animationStateRef.current = 'paused';
              easeDataRef.current.pauseStartTime = now;
              console.log(
                `Paused at ${(normalizeAngle(pivot.rotation.y) * 180 / Math.PI).toFixed(1)}°`
              );
            }
            break;
          }

          case 'paused': {
            if (now - easeDataRef.current.pauseStartTime >= CONFIG.pauseDuration) {
              animationStateRef.current = 'idle';
            }
            break;
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      // ---- RESIZE — update ortho camera bounds ----
      let resizeTimeout: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (!containerRef.current || !rendererRef.current) return;
          const w = containerRef.current.clientWidth;
          const h = containerRef.current.clientHeight;
          if (w === 0 || h === 0) return;

          const aspect = w / h;
          const zoom = CONFIG.orthoZoom;
          camera.left   = -zoom * aspect;
          camera.right  =  zoom * aspect;
          camera.top    =  zoom;
          camera.bottom = -zoom;
          camera.updateProjectionMatrix();

          renderer.setSize(w, h);
        }, 100);
      };

      window.addEventListener('resize', handleResize);

      (containerRef.current as any).__cleanup = () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        renderer.domElement.removeEventListener('touchstart', onTouchStart);
        renderer.domElement.removeEventListener('touchmove', onTouchMove);
        renderer.domElement.removeEventListener('touchend', onTouchEnd);
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
          if (!isInitializedRef.current) {
            initScene();
          }
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