import * as THREE from "three";

import { rotateUniform } from "../utils.js";

const canvas = document.querySelector("#meshes");
const position = canvas.getBoundingClientRect();

const width = position.width;
const height = width / 2;

// Initialize scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdcdcdc);

// Initialize a renderer and link it to canvas with id "demo"
const renderer = new THREE.WebGLRenderer({
  canvas,
});

// Create main camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.setZ(30);

// Set renderer size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

// Create mesh
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
});
const cube01 = new THREE.Mesh(geometry, material);

// Create lighting
const pointLight01 = new THREE.PointLight(0xffffff);
const pointLight02 = new THREE.PointLight(0xffffff);
pointLight01.position.set(30, 30, 30);
pointLight02.position.set(-30, -30, -30);

// Helpers
const gridHelper = new THREE.GridHelper();
const lightHelper = new THREE.PointLightHelper(pointLight01);

// scene.add(gridHelper);
// scene.add(lightHelper);

// Add elements to scene
scene.add(cube01);
scene.add(pointLight01, pointLight02);

// Render each frame
function animate() {
  requestAnimationFrame(animate);

  rotateUniform(cube01);

  renderer.render(scene, camera);
}

animate();

export { scene as geometries };
