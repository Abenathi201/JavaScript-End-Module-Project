const adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

const myProducts = [
    {
        id: 1,
        image: "https://i.postimg.cc/Njj64KcG/3d-T-Shirts-Men-long-sleeve-flag-Online-Shopping-for-3d-T-Shirts-Men-long-sleeve-flag.png",
        name: "T-Shirts Men long Sleeve",
        price: 95,
        category: "T-Shirts",
        quantity: 15,
    },
    {
        id: 2,
        image: "https://i.postimg.cc/hjBqFWMj/Men-s-Shirt-Button-Down-Shirt-Casual-Shirt-Camisole-Summer-Shirt-Beach-Shirt-Black-White-Blushing-Pi.webp",
        name: "Men's Button Down Shirt",
        price: 75,
        category: "T-Shirts",
        quantity: 14,
    },
    {
        id: 3,
        image:"https://i.postimg.cc/BQ87C7cw/Men-s-Wedding-Shirt-Striped-Tops-Basic-White-Black-Blue.jpg",
        name: "Men’s Wedding Shirt Striped Tops Basic White",
        price: 599,
        category: "T-Shirts",
        quantity: 18,
    },
    {
        id: 4,
        image:"https://i.postimg.cc/x8jDCvwV/Men-s-Shirt-Linen-Shirt-Casual-Shirt-Summer-Shirt-Beach-Shirt-Cuban-Collar-Shirt-Black-White-Navy-Bl.webp",
        name: "Men's Shirt Linen Shirt",
        price: 149,
        category: "T-Shirts",
        quantity: 8,
    },
    {
        id: 5,
        image:"https://i.postimg.cc/x1nxSjVB/Global-Online-Shopping-for-Dresses-Home-Garden-Electronics-Wedding-Apparel-2.webp",
        name: "Men's Golf Shirt",
        price: 600,
        category: "T-Shirts",
        quantity: 2,
    },
    {
        id: 6,
        image:"https://i.postimg.cc/g2L9nkTj/Men-s-Shirt-Linen-Shirt-Button-Down-Shirt-Camisole-Summer-Shirt-Beach-Shirt-Guayabera-Black-White-Bl.webp",
        name: "Men's Shirt Linen Shirt Pink",
        price: 250,
        category: "T-Shirts",
        quantity: 20,
    },


    {
        id: 7,
        image: "https://i.postimg.cc/jSBbXJ7y/484c0f43-9792-4869-bfb1-d6afb7a6b2e1.jpg",
        name: "Men's Leather Jacket",
        price: 750,
        category: "Jackets",
        quantity: 15,
    },
    {
        id: 8,
        image: "https://i.postimg.cc/MTWrbWdy/4903e194-03a7-4882-8400-6d5021307957.jpg",
        name: "Men's Fury Winter Jacket",
        price: 1300,
        category: "Jackets",
        quantity: 30,
    },
    {
        id: 9,
        image:"https://i.postimg.cc/NMkvBJPx/Men-s-Winter-Coat-Wool-Coat-Overcoat-Business-Camping-Hiking-Winter-Wool-Windproof-Warm-Outerwear.webp",
        name: "Men’s Winter Wool Coat",
        price: 700,
        category: "Jackets",
        quantity: 18,
    },
    {
        id: 10,
        image:"https://i.postimg.cc/mZ98z1b0/G-nstige-Herren-Hoodies-und-Sweatshirts-Online-Herren-Hoodies-und-Sweatshirts-f-r-2023.webp",
        name: "Gunstige Herren Hoodie",
        price: 149,
        category: "Jackets",
        quantity: 16,
    },
    {
        id: 11,
        image:"https://i.postimg.cc/CLH7Jyn7/Panier.webp",
        name: "Panier",
        price: 900,
        category: "Jackets",
        quantity: 14,
    },
    {
        id: 12,
        image:"https://i.postimg.cc/dVhFr9Lq/Panier-1.webp",
        name: "Men's Striped Jacket",
        price: 1400,
        category: "Jackets",
        quantity: 20,
    },

    {
        id: 13,
        image: "https://i.postimg.cc/4xQ0K71J/37a40a79-5685-4f86-88b9-e44cc372f727.jpg",
        name: "Blue Shade Jeans",
        price: 750,
        category: "Pants",
        quantity: 15,
    },
    {
        id: 14,
        image: "https://i.postimg.cc/BbP52k9T/Carrito.webp",
        name: "Black Gutter Pants",
        price: 390,
        category: "Pants",
        quantity: 30,
    },
    {
        id: 15,
        image:"https://i.postimg.cc/V6r4FdX0/Men-Flap-Pocket-Drawstring-Waist-Cargo-Pants.jpg",
        name: "Men Flap Pocket Cargo Pants",
        price: 700,
        category: "Pants",
        quantity: 18,
    },
    {
        id: 16,
        image:"https://i.postimg.cc/fb7r93jz/Voordelige-Herenkleding-online-Herenkleding-voor-2023.webp",
        name: "Black Cargo Pants",
        price: 149,
        category: "Pants",
        quantity: 16,
    },
    {
        id: 17,
        image:"https://i.postimg.cc/L6fwp0Yg/Per-uomo-Per-sport-Streetwear-Pantaloni-della-tuta-Sportivo-A-cordoncino-Pantaloni-Per-uscire-Fine-s.webp",
        name: "SportOut Cargo Pants",
        price: 900,
        category: "Pants",
        quantity: 14,
    },
    {
        id: 18,
        image:"https://i.postimg.cc/766nZbKQ/Per-uomo-Pantaloni-cargo-Pantaloni-Luminoso-Colorato-All-aperto-Sport-Lunghezza-intera-Informale-Spo.webp",
        name: "USA Cargo Pants",
        price: 1400,
        category: "Pants",
        quantity: 20,
    },
]

// FOR FILTERING THROUGH MY PRODUCT


function displayProducts(category = "") {
    const ourProducts = document.getElementById("1st-products");
    ourProducts.innerHTML = "";
    myProducts.forEach((product) => {
      if (category === "" || product.category === category) {
        const productElement = document.createElement("div");
      productElement.innerHTML += `
    <div class="card">
        <div>
          <img src="${product.image}" alt="${product.name}" style="background-color: transparent;">
        </div>
        <div class="details">
        <div class="min-details">
        <h1>${product.name}<span>${product.name}</span></h1>
        <h1 class="price"> R ${product.price}</h1>
        </div>

        <div class="options">
        <div class="description">
        </div>
        </div>
        <button onclick="addToCart(${product.id})" class="cart-btn">Add to cart</button> 
        </div>
    </div>`;
      ourProducts.appendChild(productElement);
      }
    });
}
displayProducts();

for(let i = 0; i < adminProducts.length; i++) {
    myProducts.push(adminProducts[i]);
    displayProducts();
}

function filterByCategory() {
    const selectCategory = document.getElementById("category");
    const selectedCategory = selectCategory.value;
    displayProducts(selectedCategory);
}



let shoppingCart = JSON.parse(localStorage.getItem("cartProducts")) || [];

function addToCart(productId) {
    const product = myProducts.find((product) => product.id === productId);
    
    if (product) {
        if (product.quantity > 0) {
            product.quantity--;
            shoppingCart.push(product);
        } 
        else {
            console.log("Product Out Of Stock");
            alert("The product you're looking for is out of stock")
        }
    }
    cartDisplay();
    totalSum();
}

function cartDisplay() {
    const cartContent = document.getElementById("tbody");
    localStorage.setItem("cartProducts", JSON.stringify(shoppingCart));
    cartContent.innerHTML = "";
    shoppingCart.forEach((product, index) =>{
        const cartTable = document.createElement("tr");
        cartTable.innerHTML = `
            <td class="w-25">
            <img src="${product.image}" alt="logo-img">
            </td>
            <td class="">${product.name}</td>
            <td>R ${product.price}</td>
            <td>
            <button class="btn btn-danger btn-sm">
            <i class="fa fa-times" onclick="deleteItems(${index})"></i>
            </button>
            </td>
        `;
        cartContent.appendChild(cartTable);
    })
}
cartDisplay();


function totalSum () {
    const sumTotal = document.getElementById("total-price");
    let totalPrice = 0;

    shoppingCart.forEach((product) => {
        totalPrice += product.price;
    });
    sumTotal.innerText = `Total: R ${totalPrice}`;
}
totalSum();

function deleteItems(index) {
    let cart = localStorage.getItem("cartProducts");
    shoppingCart = JSON.parse(cart)
    shoppingCart.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(shoppingCart));
    totalSum();
    cartDisplay();
}
cartDisplay()

function clearCart() {
    shoppingCart = [];
    localStorage.removeItem("cartProducts");
    cartDisplay();
    totalSum();
}

function checkout() {
    if(shoppingCart.length > 0) {
        clearCart();
        alert("Thank you for your purchase")
    } else {
        alert("Your cart is empty, please add items before you checkout")
    }
}