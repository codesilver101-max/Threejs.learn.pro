import * as THREE from 'three';
import { planegeometry,cubegeometry} from './geometrys/simplegeometrys.js'; 
import { keys } from "./userinputs/keyboardinputs.js";
import { controls } from './userinputs/controls.js';
import { scene, camera, renderer, light } from './scene/scene.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import init from 'https://esm.sh/@dimforge/rapier3d';
import { GUI } from 'lil-gui'; 


light.intensity = 1.5; 
light.position.set(5, 5, 5);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 


cubegeometry.position.y = 0.51; 


scene.add(planegeometry);
scene.add(cubegeometry); 

const gui = new GUI();

const lightFolder = gui.addFolder('Lighting');
lightFolder.add(light, 'intensity', 0, 10).name('Intensity');
lightFolder.add(light.position, 'y', 1, 20).name('Light Height');


function animate() {
  
  controls.update();  
 
  if (keys.forward)  light.position.z -= 0.1;
  if (keys.backward) light.position.z += 0.1;
  if (keys.left)     light.position.x -= 0.1;
  if (keys.right)    light.position.x += 0.1;

  // Final Render
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);