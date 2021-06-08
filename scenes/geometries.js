import * as THREE from "three";

import { rotateUniform } from "../utils.js";

// Canvas setup
const canvas = document.querySelector("#geometries");
const position = canvas.getBoundingClientRect();

const width = position.width;
const height = width / 2;

// Controls
const geometrySelect = document.getElementById("geometry");

// Initialize scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdcdcdc);

// Initialize a renderer and link it to canvas
const renderer = new THREE.WebGLRenderer({
  canvas,
});

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.setZ(30);

// Set renderer size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

// Geometries
const box = new THREE.BoxGeometry(10, 10, 10);
const sphere = new THREE.SphereGeometry(5, 32, 32);
const cone = new THREE.ConeGeometry(5, 20, 32);
const cylinder = new THREE.CylinderGeometry(5, 5, 20, 32);
const icosahedron = new THREE.IcosahedronGeometry(5);
const dodecahedron = new THREE.DodecahedronGeometry(5);
const torus = new THREE.TorusGeometry(10, 3, 16, 100);
const torusknot = new THREE.TorusKnotGeometry(10, 3, 100, 16);

let selectedGeometry = box;

// Switch geometry
switch (geometrySelect.value) {
  case "box":
    selectedGeometry = box;
  case "sphere":
    selectedGeometry = sphere;
  case "cone":
    selectedGeometry = cone;
  case "cylinder":
    selectedGeometry = cylinder;
  case "icosahedron":
    selectedGeometry = icosahedron;
  case "dodecahedron":
    selectedGeometry = dodecahedron;
  case "torus":
    selectedGeometry = torus;
  case "torusknot":
    selectedGeometry = torusknot;
  default:
    selectedGeometry = box;
}

// Material
const material = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
});

// Mesh
const mesh = new THREE.Mesh(selectedGeometry, material);

// Lighting
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
scene.add(mesh);
scene.add(pointLight01, pointLight02);

// Render each frame
function animate() {
  requestAnimationFrame(animate);

  rotateUniform(mesh);

  // console.log(geometrySelect.value);

  renderer.render(scene, camera);
}

animate();

export { scene as geometries };
