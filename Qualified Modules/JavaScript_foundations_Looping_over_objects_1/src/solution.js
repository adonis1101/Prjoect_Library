/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let totalPrice = 0;
for (let item in cart) {
  const product = cart[item]
  const cost = product.priceInCents;
  totalPrice += (product.quantity * product.priceInCents)
  }
return totalPrice;
}

function printCartInventory(cart) {
let allItems = "";
for (let item in cart) {
  const product = cart[item];
  const quantity = product.quantity;
  const total = (`${quantity}x${item}\n`);
  allItems += (total);
  }

return allItems;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
