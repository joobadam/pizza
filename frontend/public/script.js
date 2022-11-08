

//               form
const form = document.querySelector('#add-pizza');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const orderData = {
        pizza: document.querySelector(`.addToCart`).value,
        name: document.querySelector('#name').value,
        zip: parseInt(document.querySelector('#zip').value),
        city: document.querySelector('#city').value,
        street: document.querySelector('#street').value,
        house: parseInt(document.querySelector('#house').value),
        phone: parseInt(document.querySelector('#phone').value),
        email: document.querySelector('#email').value,
    }

    fetch("/upload", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData) 
      });
      console.log(orderData)
});



//                Pizzák
 let products =[
    alexandraPizza = {
    id: 1,
    name: "Alexandra",
    picture: "pf_alexandra.jpg",
    description:"sonka, kukorica, sajt, ananász", 
    price: 2490,
  },
    americanoPizza = {
    id: 2,
    name: "Americano",
    picture: "pf_americano.jpg",
    description:"csirkehús, mozzarella, bacon",
    price: 2790,
  },
    brianPizza = {
    id: 3,
    name: "Brian",
    picture: "pf_brian.jpg",
    description:"Paradicsomos alap, csípős olasz kolbász, kapribogyó, szárított paradicsom, tojás, mozzarella sajt",
    price: 2490,
  },
    magellanPizza = {
    id: 4,
    name: "Magellan",
    picture: "pf_magellan.jpg",
    description:"paradicsomos alap, kolbász, bacon, lilahagyma, tojás, pfefferoni paprika, 100% mozzarella sajt",
    price: 2690,
  },
    michellaPizza = {
    id: 5,
    name: "Michella",
    picture: "pf_michella.jpg",
    description: "Fokhagymás tejfölös alap, szalámi, bacon, pfefferoni paprika, 100% mozzarella sajt",
    price: 2590,
  },
    negyevszakPizza = {
    id: 6,
    name: "Négyévszak",
    picture: "pf_negyevszak.jpg",
    description:"sonka, borsó, kukorica, gomba, sajt",
    price: 2090,
  },
    siriusPizza = {
    id: 7,
    name: "Sirius",
    picture: "pf_sirius.jpg",
    description:"mustáros-tejfölös alap, tarja, kukorica, bacon, 100% mozzarella sajt",
    price: 2890,
  }
] 

//          pizza beillesztés html-be

let productsSection = document.querySelector('#products')

products.forEach(product => {
  productsSection.innerHTML += `<div class="pizza">
    <div class="pizza-img">
    <img src="./public/img/${product.picture}">
    </div>
    <div class="pizza-text">
    <h2 id="pizza-name">${product.name}</h2>
    <p>${product.description}</p>
    <h3>${product.price} Ft</h3>
    <button id="${product.id}" class="addToCart">Hozzáad</button>
    </div>
    </div>
    `
})




//          Kosár
 
 let cart = {}

let addToCartButtons = document.querySelectorAll(".addToCart")
let buttonCount =addToCartButtons.length 
 for(let i = 0; i < buttonCount; i++){
  addToCartButtons[i].addEventListener("click", function(event){
    if(cart[event.target.id] == undefined){
      cart[event.target.id] = 1
    }else{
      cart[event.target.id]++
    }
    
  })
}  


let total = 0

let cartIcon = document.querySelector("#cart-icon")
let cartContent = document.querySelector(".cart-content")
let cartItems = document.querySelector("#cart-items")


cartIcon.addEventListener("click", function(){
  cartContent.classList.toggle("menu-active")
  cartIcon.classList.toggle("change")

  
  for(let id in cart){
    let currentProduct = products.find(product => product.id == id)
    cartItems.innerHTML += `<li>${cart[id]} db - ${currentProduct.name} * ${currentProduct.price} Ft/db
    </li>`
    total += currentProduct.price*cart[id]
  }
  cartItems.innerHTML += `<li>Összesen: ${total} Ft</li>`
}) 







