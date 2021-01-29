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

function findParkByName(parks, name) {
  let found = parks.find((park) => park.name === name) 
  return found;
}

function allParksAboveCertainSize(parks, minSize) {
  let result = Object.keys(parks).every((park) => minSize <= 100
  )
  return result  
}
 

function getBigParkNames(parks, minSize) {
  const result = parks.filter((park) => park.areaInSquareKm > 2000)
  const allParks = result.map((park) => park.name)
  return allParks
  }

function doesStateHaveOneBigPark(parks, minSize, state) {
  const result = parks.filter((park) => park.areaInSquareKm > 2000)
  const states = result.some((park) => park.location.state === state) 
return states
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
