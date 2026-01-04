import * as THREE from 'three';
import { camera, scene } from '../scene/scene.js'; // Import your camera/scene

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// We create a function that takes 'callback' as an argument
export function useraycaster(onClickCallback) {
    window.addEventListener('click', (event) => {
        // 1. Normalize Mouse
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // 2. Set Ray
        raycaster.setFromCamera(mouse, camera);

        // 3. Intersect
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            const Robject = intersects[0].object;
            
            // 4. Send the object back to whoever called this function
            if (onClickCallback) {
                onClickCallback(Robject);
            }
        }
    });
}