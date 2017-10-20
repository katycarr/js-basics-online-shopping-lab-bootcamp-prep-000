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
  } else if(cart.length===1) {
    var item = cart[0];
    var price = 
    string = string+`${item} at $${price}.`;
  } else if(cart.length===2) {
    string = 
  } 

  else {
    var string = "In your cart, you have ";
    for(i=0;i<cart.length;i++) {
      var item = cart[i];
      var price = cart[i][item];
      
      
      
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
