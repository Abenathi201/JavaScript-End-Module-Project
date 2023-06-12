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
        image:"https://i.postimg.cc/RV7BtQ7T/gaming-Monitor.jpg",
        name: "MSI Optix MAG342CQR 1500R",
        desc: "144Hz Refresh Rate, 1ms response time Mystic Light",
        price: 12000.00,
        category: "Accessories",
        quantity:8,
    },
    {
        id: 4,
        image:"https://i.postimg.cc/W3qR1Mpg/keyboard-1.jpg",
        name: "Corsair 4-in-1",
        desc: "IP42 Protection, iCUE Compatible",
        price: 750,
        category: "Accessories",
        quantity: 8,
    },
    {
        id: 5,
        image:"https://i.postimg.cc/FKR5wM2P/mouse-1.jpg",
        name: "Corsair HARPOON Mouse",
        desc: "Wired, Black, Red",
        price: 600,
        category: "Accessories",
        quantity: 2,
    },
    {
        id: 6,
        image:"https://i.postimg.cc/Vsb1fc5p/cpu-cooler.jpg",
        name: "ASUS TUF GAMING LC 120 RGB Cooler",
        desc: "120mm Cooler, RGB Fans, Compatible With Intel AND AMD CPU",
        price: 1600,
        category: "Accessories",
        quantity:4,
    },
];
// const id = Math.floor(Math.random() * 1000000)

function displayProducts() {
    const ourProducts = document.getElementById("1st-products");
    myProducts.forEach((product) => {
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
        <button onclick="addToCart(${product.id})" class="cart-btn">Add to cart</button> 
        </div>
    </div>`;
          
      ourProducts.appendChild(productElement);
      console.log(ourProducts);
    });
  }
displayProducts();

let shoppingCart = JSON.parse(localStorage.getItem("products")) || [];

function addToCart(productId) {
    const product = myProducts.find((product) => product.id === productId);
    if (product && product.quantity > 0) {
        product.quantity--;
        shoppingCart.push(product);
        cartDisplay();
    } else if(product == product.id) {
        product++;
        shoppingCart.push(product);
    }
}

function cartDisplay() {
    const cartContent = document.getElementById("cart-modal");
    localStorage.setItem("products", JSON.stringify(shoppingCart));
    cartContent.innerHTML = "";
    shoppingCart.forEach((product, index) =>{
        const cartTable = document.createElement("div");
        cartTable.innerHTML = `
        <table class="table table-image" id="table">
            <thead>
            <tr>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="w-25">
            <img src="${product.image}" alt="logo-img">
            </td>
            <td class="">${product.name}</td>
            <td>R ${product.price}</td>
            <td class="quantity"><input type="number" class="form-control" id="input1" value="0" disabled></td>
            <td></td>
            <td>
            <button class="btn btn-danger btn-sm">
            <i class="fa fa-times" onclick="deleteItems(${index})"></i>
            </button>
            </td>
            </tr>
            </tbody>
        </table>
        `;
        cartContent.appendChild(cartTable);
    })
}
cartDisplay();

function deleteItems(index) {
    let cart = localStorage.getItem("products");
    shoppingCart = JSON.parse(cart);
    shoppingCart.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(shoppingCart));
    cartDisplay();
}