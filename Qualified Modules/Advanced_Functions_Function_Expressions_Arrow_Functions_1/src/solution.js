/*
  Convert the following volume calculating functions into arrow functions. Do not change the names of the functions.
*/

function calculateCubeVolume(length) {
  return length ** 3;
}

function calculateSphereVolume(radius) {
  return (4 / 3) * Math.PI * radius ** 3;
}

const calculateConeVolume = function (radius, height) {
  return (1 / 3) * Math.PI * radius ** 2 * height;
};

const calculateCylinderVolume = function (radius, height) {
  return Math.PI * radius ** 2 * height;
};

/////////////////////////////////////
// Do not edit anything below!
/////////////////////////////////////
module.exports = {
  calculateCubeVolume,
  calculateSphereVolume,
  calculateConeVolume,
  calculateCylinderVolume,
};
