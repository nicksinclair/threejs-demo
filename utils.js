// Rotates a given geometry by a uniform amount on each axis
export function rotateUniform(geometry, inc = 0.01) {
  geometry.rotation.x += inc;
  geometry.rotation.y += inc;
  geometry.rotation.z += inc;
}
