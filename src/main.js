import * as THREE from 'three';
import { planegeometry, cubegeometry } from './geometrys/simplegeometrys.js'; 
import { keys } from "./userinputs/keyboardinputs.js";
import { controls } from './userinputs/controls.js';
import { scene, camera, renderer, light} from './scene/scene.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'lil-gui'; 
import {useraycaster} from './userinputs/raycasting.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SelectionHelper } from 'three/examples/jsm/Addons.js';


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

scene.add(planegeometry);
planegeometry.name = "bottom";

light.position.y = 2.3
light.position.x = 0
light.position.z = 0.2



const gltfloader = new GLTFLoader();
gltfloader.load('../Public/Thingy.glb',(gltfschene) => {

  scene.add(gltfschene.scene);
})

function animate() {
  controls.update();    
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);