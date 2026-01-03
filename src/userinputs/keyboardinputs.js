import { rotate } from "three/tsl";

// This object will hold the current state of our keys
export const keys = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    rotateN: false,
    rotateP: false
};

window.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w': keys.forward = true; break;
        case 's': keys.backward = true; break;
        case 'a': keys.left = true; break;
        case 'd': keys.right = true; break;
        case 'e': keys.rotateP = true; break;
        case 'q': keys.rotateN = true; break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w': keys.forward = false; break;
        case 's': keys.backward = false; break;
        case 'a': keys.left = false; break;
        case 'd': keys.right = false; break;
        case 'e': keys.rotateP = false; break;
        case 'q': keys.rotateN = false; break;
    }
});