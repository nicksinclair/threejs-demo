// Rotates a given geometry by a uniform amount on each axis
export function rotateUniform(geometry, inc) {
  geometry.rotation.x += inc;
  geometry.rotation.y += inc;
  geometry.rotation.z += inc;
}
