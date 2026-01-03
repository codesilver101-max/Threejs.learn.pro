import * as THREE from 'three';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080); // Grey background so white objects show up

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 0.5); // Lowered intensity from 30 to 2
light.position.set(1, 1, 1);
scene.add(light);



export { scene, camera, renderer,light};