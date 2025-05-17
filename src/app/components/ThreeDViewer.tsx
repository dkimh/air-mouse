'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeDViewer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        // === Setup scene ===
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 200);
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        containerRef.current.appendChild(renderer.domElement);
        
        // === Lighting ===
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);
        
        // === Load and stylize model ===
        const loader = new GLTFLoader();
        loader.load(
            '/models/lungs/model.glb', // make sure this is correct
            (gltf) => {
                const model = gltf.scene;
                console.log(gltf.scene); // ✅ Inspect in DevTools
                
                
                // Traverse and apply X-ray material
                model.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        const mesh = child as THREE.Mesh;
                        mesh.material = new THREE.MeshStandardMaterial({
                            color: 0xffffff,
                            transparent: true,
                            opacity: 0.2,
                            side: THREE.DoubleSide,
                            depthWrite: false,
                            blending: THREE.AdditiveBlending,
                        });
                    }
                });
                
                model.scale.set(1, 1, 1);
                scene.add(model);
            },
            undefined,
            (error) => {
                console.error('Failed to load GLB model:', error);
            }
        );
        
        // === Controls ===
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.dampingFactor = 0.05;
        
        // === Animation loop ===
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
        
        // === Resize ===
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize);
        
        // === Cleanup ===
        return () => {
            window.removeEventListener('resize', onWindowResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);
    
    return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeDViewer;
