import * as THREE from 'three';
import { Const } from 'three/src/nodes/TSL.js';

// 1. Define Geometries 
const Referanceplanegeometry = new THREE.PlaneGeometry(10,10,10,10);
const ReferanceCubegeometry = new THREE.BoxGeometry(1, 1, 1); 
const Referancespheregeometry = new THREE.SphereGeometry(1, 32, 32);
const Referancetorusgeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

// 2. Define Materials
const planematerial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const spherematerial = new THREE.MeshStandardMaterial({ color: 0x0000ff,metalness: 0.5, roughness: 0.5 });
const cubematerial = new THREE.MeshStandardMaterial({ color: 0x00ff00,metalness: 0.5, roughness: 0.5 });
const torusmaterial = new THREE.MeshStandardMaterial({ color: 0xff0000,metalness: 0.5, roughness: 0.5  });

// 3. Create Meshes (Fixed: Using the correct material and geometry variables)
export const planegeometry = new THREE.Mesh(Referanceplanegeometry, planematerial);
export const spheregeometry = new THREE.Mesh(Referancespheregeometry, spherematerial);
export const cubegeometry = new THREE.Mesh(ReferanceCubegeometry, cubematerial);
export const torusgeometry = new THREE.Mesh(Referancetorusgeometry, torusmaterial);

// 4. Setup

planegeometry.rotation.x = -Math.PI / 2;    