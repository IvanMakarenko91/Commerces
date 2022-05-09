// Cart
let cartIcon = document.querySelector(".fa-bag-shopping")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")
// Open cart
cartIcon.onclick = () => {
  cart.classList.add("activer");
};
// Close cart
closeCart.onclick = () => {
  cart.classList.remove("activer");
};

// Cart working JS
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready(){
  // remove item from cart
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons)
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem)
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Buy Button Work
  document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

// Buy Button
function buyButtonClicked() {
  alert('placé dans le panier')
  var cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

// Remove items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal()
}


// Quantity changes
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0 ){
    input.value = 1;
  }
  updateTotal();
}
// Add to cart
function addCartClicked(event){
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var prices = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, prices, productImg);
  updateTotal();
}
function addProductToCart(title, prices, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {  
      alert('deja ajouté');
      return;
    }
  }

  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <input type="number" value="1" class="cart-quantity text-center" placeholder="1">
                        <i class="fa-solid fa-trash cart-remove"></i>
                        <div class="detail-box mx-2">
                          <h4 class="cart-product-title">${title}</h4>
                          <div class="cart-price">${prices}</div>
                        </div>
                        `;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
  cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}


// Update Total
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value
    total = total + (price * quantity);
  }
    // If price containe some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    document.getElementById("prix").innerText = total +  "€" ;
  
}