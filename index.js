var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var object = {};
 object[item] = price;
 console.log(`${item} has been added to your cart.`);
 cart.push(object);
 return cart;
}

function viewCart() {
  if(cart.length===0) {
    console.log("Your shopping cart is empty.")
  }  else {
    var string = "In your cart, you have ";
    if(cart.length===1) {
      var itemObj = cart[i];
      var itemName = Object.keys(itemObj);
      var itemPrice = itemObj[itemName];
      var itemString = `${itemName} at $${itemPrice}`;
      string = `${string} ${itemString}.`;
      console.log(string);
    }
    /*
    for(var i=0;i<cart.length;i++) {
      var itemObj = cart[i];
      var itemName = Object.keys(itemObj);
      var itemPrice = itemObj[itemName];
      var itemString = `${itemName} at $${itemPrice}`;
    }
    */


  }
}
/*
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
*/
