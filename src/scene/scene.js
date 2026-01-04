import * as THREE from 'three';

const scene = new THREE.Scene();
// 1. Add Exponential Fog to create "depth" in the dark room
scene.fog = new THREE.FogExp2(0x000000, 0.1); 
scene.background = new THREE.Color('black');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// 2. Enable Shadows in the renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
// 3. Set Tonemapping for a more "Cycles/Filmic" look
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

document.body.appendChild(renderer.domElement);


const light = new THREE.SpotLight(0xfffaf0, 50);
light.intensity = 11
light.position.set(2, 5, 2);
light.angle = Math.PI / 4;   
light.penumbra = 1;         
light.decay = 2;              
light.castShadow = true;      


light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

scene.add(light);

export { scene, camera, renderer, light};