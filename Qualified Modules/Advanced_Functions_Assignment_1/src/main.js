/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks,name) {
  return parks.filter(park => park.location.state === name) 
}

function getWishlistParksForUser(parks,users,name) {return users[name].wishlist.map((id) => parks.find((park) => park.id == id))
} 

function userHasVisitedAllParksInState(parks,users,inputState,name) {
let stateParks = parks.filter(({location: {state}}) => state == inputState);
let ids = stateParks.map(item => item.id);
let visited = users[name].visited;
return ids.every((item) => {
return visited.includes(item)})};
      
function
userHasVisitedParkOnWishlist(users,user1,user2) {
let visited = users[user1].visited.map((visit) => 
users[user2].wishlist.includes(visit))
return visited.includes(true);
}

function getUsersForUserWishlist(users,name){
  let wish = users[name].wishlist;
  let visitors = [];
  for (let user in users) {
    if (wish.some(park => users[user].visited.includes(park))) {
visitors.push(user)
  }
}
  return visitors
}
module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};