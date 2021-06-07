import * as THREE from "three";

// Initialize scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x555555);

// Create mesh
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
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

scene.add(gridHelper);
scene.add(lightHelper);

// Add elements to scene
scene.add(cube01);
scene.add(pointLight01, pointLight02);

export { scene as geometries };
