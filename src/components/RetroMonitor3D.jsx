import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RetroMonitor3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 4.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for entire retro workstation
    const workstationGroup = new THREE.Group();
    scene.add(workstationGroup);

    // Monitor Bezel Body
    const monitorGeo = new THREE.BoxGeometry(2.4, 1.8, 1.1);
    const monitorMat = new THREE.MeshStandardMaterial({
      color: 0x1e2638,
      roughness: 0.4,
      metalness: 0.2,
    });
    const monitorMesh = new THREE.Mesh(monitorGeo, monitorMat);
    workstationGroup.add(monitorMesh);

    // CRT Screen Inner Curved Plane
    const screenGeo = new THREE.PlaneGeometry(2.0, 1.4, 32, 32);
    // Slight curvature
    const pos = screenGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = -(x * x + y * y) * 0.05 + 0.56;
      pos.setZ(i, z);
    }
    screenGeo.computeVertexNormals();

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x050c18,
      emissive: 0x22c55e,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.8,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    workstationGroup.add(screenMesh);

    // Base Stand
    const standNeckGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.5, 16);
    const standNeckMat = new THREE.MeshStandardMaterial({ color: 0x121824, roughness: 0.5 });
    const standNeck = new THREE.Mesh(standNeckGeo, standNeckMat);
    standNeck.position.set(0, -1.05, -0.1);
    workstationGroup.add(standNeck);

    const baseFootGeo = new THREE.BoxGeometry(1.6, 0.12, 1.2);
    const baseFoot = new THREE.Mesh(baseFootGeo, monitorMat);
    baseFoot.position.set(0, -1.3, 0);
    workstationGroup.add(baseFoot);

    // Retro Keyboard
    const keyboardGeo = new THREE.BoxGeometry(2.0, 0.1, 0.8);
    const keyboardMat = new THREE.MeshStandardMaterial({ color: 0x162032, roughness: 0.6 });
    const keyboard = new THREE.Mesh(keyboardGeo, keyboardMat);
    keyboard.position.set(0, -1.25, 0.85);
    keyboard.rotation.x = 0.1;
    workstationGroup.add(keyboard);

    // Retro Power LED on monitor chin
    const ledGeo = new THREE.SphereGeometry(0.04, 12, 12);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
    const led = new THREE.Mesh(ledGeo, ledMat);
    led.position.set(0.9, -0.75, 0.56);
    workstationGroup.add(led);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x818cf8, 2.0);
    dirLight.position.set(3, 4, 3);
    scene.add(dirLight);

    const screenLight = new THREE.PointLight(0x22c55e, 1.5, 3);
    screenLight.position.set(0, 0, 1.0);
    scene.add(screenLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle float
      workstationGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.05;

      // Smooth interpolation to target rotation
      workstationGroup.rotation.y += (targetRotationY - workstationGroup.rotation.y) * 0.05;
      workstationGroup.rotation.x += (targetRotationX - workstationGroup.rotation.x) * 0.05;

      // Screen glow flicker
      screenMat.emissiveIntensity = 0.22 + Math.sin(elapsedTime * 8) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 text-[10px] font-mono text-slate-500 bg-slate-900/60 px-3 py-1 rounded-full border border-white/5 pointer-events-none">
        Hover mouse to interact with 3D workstation
      </div>
    </div>
  );
}
