import "./style.css";
import * as THREE from "three";

import { geometries } from "./scenes/geometries.js";
import { rotateUniform } from "./utils.js";

// Set scene dynamically
const selectedScene = geometries;

// Initialize a renderer and link it to canvas with id "demo"
const canvas = document.querySelector("#demo");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

// Create main camera
const camera = new THREE.PerspectiveCamera(
  75,
  (window.innerWidth - 240) / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);

// Set renderer size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth - 240, window.innerHeight);

// Render each frame
function animate() {
  requestAnimationFrame(animate);

  renderer.render(selectedScene, camera);
}

animate();
