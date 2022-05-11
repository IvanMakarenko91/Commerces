// Tableau contenant le nom des produits et leur prix
const products = [
  {
    product: "vet1",
    price: 30
  },
  {
    product: "vet2",
    price: 25
  },
  {
    product: "vet3",
    price: 10
  },
  {
    product: "vet4",
    price: 20
  },
  {
    product: "vet5",
    price: 25
  },
  {
    product: "vet6",
    price: 15
  },
  {
    product: "vet7",
    price: 39
  },
  {
    product: "vet8",
    price: 12
  },
  {
    product: "vet9",
    price: 15
  },
  {
    product: "vet10",
    price: 28
  },
  {
    product: "vet11",
    price: 9
  },
  {
    product: "vet12",
    price: 21
  },
]

// Fonction retournant le prix par une reduction
function getPromoPrice(price, percent) {
  return price - (price * percent / 100)
}

// Fonction donnant l'arrondi d'un nombre
function roundDecimal(number) {
  const tmp = Math.pow(10, 2) // Math.pow retourne l'exposant du chiffre de gauche par celui de droite, ici ce sera 10 ** 10 = 100
  return Math.round( number*tmp )/tmp // Math.round arrondi le chiffre a l'entier le plus proche.
}

// Fonction remplaçant une chaine de caractère par un autre modèle.
function formatPrice(price) {
  return price.toString().replace(".", ",") + " €"
}

for (let i = 0; i < products.length; i++) { // A chaque tour de boucle, on increment i de 1.
  let product = document.getElementById(products[i].product)  // A chaque incrementation, on obtient l'identifiant de notre tableau par la veleur de i.
  
  let newPromoPrice = getPromoPrice(products[i].price, 0) // On effectue le calcul de la fonction getPromoPrice, avec comme paramètres le prix de chaque bureau, et sa promotion.
  let roundedPrice = roundDecimal(newPromoPrice) // Avec le prix obtenu de la promotion au dessus, on arrondi le chiffre à l'entier le plus proche.
  
  product.innerText = formatPrice(roundedPrice) + " TTC" // innerText permet d'ecrire du code, dans notre cas ce sera a l'id selectionné.
  // Le prix sera interprété avec le resultat du prix arrondi et les points sont remplacés par des virgules. 
  }

function codePromo() {
for (let i = 0; i < products.length; i++) {
  let product = document.getElementById(products[i].product) 
  let li = document.createElement('del')
  li.innerText = products[i].price + " €"
  let newPromoPrice = getPromoPrice(products[i].price, 10) 
  let roundedPrice = roundDecimal(newPromoPrice) 
  
  
  product.innerText = formatPrice(roundedPrice) + " avec code promo "
  product.append(li) 
  }
}

function toutesTaxes() {
  for (let i = 0; i < products.length; i++) { 
    let product = document.getElementById(products[i].product)
    
    let newPromoPrice = getPromoPrice(products[i].price, 0) 
    let roundedPrice = roundDecimal(newPromoPrice) 
    
    product.innerText = formatPrice(roundedPrice) + " TTC"
    }
  }

function horsTva() {
  for (let i = 0; i < products.length; i++) { 
    let product = document.getElementById(products[i].product)  
      
    let newPromoPrice = getPromoPrice(products[i].price, 20) 
    let roundedPrice = roundDecimal(newPromoPrice) 
      
    product.innerText = formatPrice(roundedPrice) + " Hors TVA"
    }
  }

  // Declencher les evenements
let choiceOne = document.getElementById('choix1');
let choiceTwo = document.getElementById('choix2');
let choiceThree = document.getElementById('choix3');
choiceOne.addEventListener('click',toutesTaxes);
choiceTwo.addEventListener('click',horsTva);
choiceThree.addEventListener('click',codePromo);


// On selectionne les classes
var bouttons = document.querySelectorAll(".activation .btn")

for (var i = 0; i < bouttons.length; i++) {
  bouttons[i].addEventListener("click", function() { // A chaque tour de boucle, on effectue un evenement au click sur un boutton
    var activer = document.getElementsByClassName("active"); // On selectionne la classe active

      activer[0].className = activer[0].className.replace(" active", ""); // La classe active devient "none" au clic d'un nouveau boutton
    
    this.className += " active";
  })
}