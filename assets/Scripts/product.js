const cartContent = document.getElementById("tablebody");
// const input = document.getElementById("input");

const myProducts = [
  {
    id: 1,
    image: "https://i.postimg.cc/6pKBb1WS/C20P1.jpg",
    name: "Nokia C20 Plus",
    desc: "3 GB RAM, Wireless, Android 11 (Go edition) ",
    price: 45,
    category: "Cellphones",
    quantity: 7,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/rmPb6zSs/OP9P1.jpg",
    name: "OnePlus 9 Pro 5G LE2121",
    desc: "Dual SIM, 256 GB Storage, 8.0 M",
    price: 45,
    category: "Cellphones",
    quantity: 8,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/RV7BtQ7T/gaming-Monitor.jpg",
    name: "MSI Optix MAG342CQR 1500R",
    desc: "144Hz Refresh Rate, 1ms response time Mystic Light",
    price: 12000.0,
    category: "Accessories",
    quantity: 8,
  },
  {
    id: 4,
    image: "https://i.postimg.cc/W3qR1Mpg/keyboard-1.jpg",
    name: "Corsair 4-in-1",
    desc: "IP42 Protection, iCUE Compatible",
    price: 750,
    category: "Accessories",
    quantity: 8,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/FKR5wM2P/mouse-1.jpg",
    name: "Corsair HARPOON Mouse",
    desc: "Wired, Black, Red",
    price: 600,
    category: "Accessories",
    quantity: 2,
  },
  {
    id: 6,
    image: "https://i.postimg.cc/Vsb1fc5p/cpu-cooler.jpg",
    name: "ASUS TUF GAMING LC 120 RGB Cooler",
    desc: "120mm Cooler, RGB Fans, Compatible With Intel AND AMD CPU",
    price: 1600,
    category: "Accessories",
    quantity: 4,
  },
];
// const id = Math.floor(Math.random() * 1000000)

function displayProducts() {
  const ourProducts = document.getElementById("1st-products");
  myProducts.forEach((product, id) => {
    const productElement = document.createElement("div");
    productElement.innerHTML += `
    <div class="card">
        <div>
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="details">
        <div class="min-details">
        <h1>${product.name}<span>${product.name}</span></h1>
        <h1 class="price"> R ${product.price}</h1>
        </div>

        <div class="options">
        <div class="description">
        <h1>Description</h1>
        <p>${product.desc}</p>
        </div>
        </div>
        <button onclick="addToCart(${id})" class="cart-btn">Add to cart</button> 
        </div>
    </div>`;

    ourProducts.appendChild(productElement);
  });
}
displayProducts();

let shoppingCart = JSON.parse(localStorage.getItem("myProducts")) || [];

function addToCart(id) {
  const product = myProducts[id];
  const cartItem = shoppingCart.find(item => item.id === product.id);

  if (!cartItem) {
    const newCartItem = { ...product, quantity: 1 };
    shoppingCart.push(newCartItem);
  } else {
    if (cartItem.quantity < 5) {
      cartItem.quantity++;
    } else {
      alert ("You cannot enter more than 5 items")
    }
  }
  localStorage.setItem("myProducts", JSON.stringify(shoppingCart));
  cartDisplay();
}

function cartDisplay() {
  cartContent.innerHTML = "";
  shoppingCart.forEach((product, index) => {
    const cartRow = document.createElement("tr");
    cartRow.innerHTML = `
            <td class="w-25">
            <img src="${product.image}" alt="logo-img">
            </td>
            <td class="">${product.name}</td>
            <td id="price">R ${product.price}</td>
            <td>
            <button class="btn btn-danger btn-sm">
            <i class="fa fa-times" onclick="deleteItems(${index})"></i>
            </button>
            </td>
        `;
    cartContent.appendChild(cartRow);
  });
  subTotal();
}
cartDisplay();

function subTotal() {
  let total = 0;
  shoppingCart.forEach((product, index) =>{
    let price = document.getElementById(`price_${index}`)
    let priceTotal = parseFloat(product.price);
    total += priceTotal
  })
  let sub_total = document.getElementById("total");
  sub_total.innerText = "R" + total
}

function deleteItems(index) {
  shoppingCart.splice(index, 1);
  localStorage.setItem("myProducts", JSON.stringify(shoppingCart));
  cartDisplay();
  subTotal();
}