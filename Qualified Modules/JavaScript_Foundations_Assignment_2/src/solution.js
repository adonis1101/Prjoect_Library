/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products,name,size) {
  let items = null
  for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    if (prod.name === name && prod.availableSizes.includes(size)) {
      return prod;
    }
  }
  return items;
}


function addProductToCart({ name, priceInCents }, cart = {}) {
  const item = cart[name];
  if (item) {
    item.quantity++;
  } else {
    cart[name] = { priceInCents, quantity: 1 };
  }

  return cart;
}

function calculateTotal(cart) {
  let result = 0;
  for (let name in cart) {
    const item = cart[name];
    result += item.quantity * item.priceInCents;
  }
  return result;
}

function printReceipt(cart) {
  let total = calculateTotal(cart);
  if (!total) return null;
let totalCart = ""
for (let item in cart) {
const {quantity , priceInCents} = cart[item]
const amount = printablePrice(quantity*priceInCents);
    totalCart += `${quantity}x${item} - ${amount}\n`;
  }
  return totalCart + `Total: ${printablePrice(total)}`;
}
  //console.log(totalcart) 

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
