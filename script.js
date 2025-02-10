const products = [
    { id: 1, name: "O-So Grape" ,price: "₱ 30.00" ,image:"images/product-1.png"},
    { id: 2, name: "Black Lemonade" ,price: " ₱ 45.00" ,image:"images/product-2.png"},
    { id: 3, name: "Fentimans" ,price: "₱ 55.00" ,image:"images/product-3.png"},
    { id: 4, name: "Kickapoo" ,price: "₱ 50.00" ,image:"images/product-4.png"},
    { id: 5, name: "Harmony Spring" ,price: "₱ 90.00" ,image:"images/product-5.png"},
    { id: 6, name: "Hawaiian Soda" ,price: "₱ 45.00" ,image:"images/product-6.png"},
    { id: 7, name: "Poppi Ginger Lime" ,price: "₱ 35.00" ,image:"images/product-7.png"},
    { id: 8, name: "Dr. Browns" ,price: "₱ 50.00" ,image:"images/product-8.png"},
    { id: 9, name: "Juniper Lime" ,price: "₱ 30.00" ,image:"images/product-9.png"},
    { id: 10, name: "Zevia" ,price: "₱ 35.00" ,image:"images/product-10.png"},
    { id: 11, name: "Shasta Tiki Punch" ,price: "₱ 37.00" ,image:"images/product-11.png"},
    { id: 12, name: "Brawls" ,price: "₱ 35.00" ,image:"images/product-12.png"},

];

const productContainer = document.getElementById("product-container");
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
let cart = [];

// Function to display products
function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}

// Function to add items to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    cartItemsContainer.innerHTML = ""; // Clear the cart display
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            ${item.name} - ${item.price}
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);

        //calculate total price
        total += parseFloat(item.price.replace('₱',''));

    });
        // displaying price
        totalPriceElement.innerText = `Total: ₱ ${total.toFixed(2)}`;
}

// Load products on page load
displayProducts();
