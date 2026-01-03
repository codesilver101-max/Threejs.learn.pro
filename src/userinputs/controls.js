
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera } from '../scene/scene.js';
import { renderer } from '../scene/scene.js';

const controls = new OrbitControls(camera, renderer.domElement);

export { controls };