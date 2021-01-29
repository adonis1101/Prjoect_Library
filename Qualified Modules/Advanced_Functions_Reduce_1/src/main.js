/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
let total = 0
let result = parks.reduce((sum, area) => sum + area, total)
//for (let i=0; i < parks.length; i++){
  //total += parks[i].areaInSquareKm
  //}
  return result
}

function parkNameAndState(parks) {}

function parkByState(parks) {}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
