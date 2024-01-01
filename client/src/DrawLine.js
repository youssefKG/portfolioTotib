import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
const DrawLine = () => {
    const containerRef = useRef();
    useEffect(() => {
        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current && containerRef.current.appendChild(renderer.domElement);
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);
        const scene = new THREE.Scene();
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        var points = [];
        points.push(new THREE.Vector3(-10, 0, 0));
        points.push(new THREE.Vector3(0, 10, 0));
        points.push(new THREE.Vector3(10, 0, 0));
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        renderer.render(scene, camera)

        var animate = function () {
            requestAnimationFrame(animate);
            line.rotation.x += 0.01;
            line.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate()
    }, [])
    return (
        <div ref={containerRef} >

        </div>
    )
}
export default DrawLine; 