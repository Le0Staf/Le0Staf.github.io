function cartOpen() {
    document.getElementById("cart-menu").classList.toggle("visible");
    document.getElementById("grayout").classList.toggle("visible");
    document.getElementById("body").classList.toggle("visible");
    window.scrollTo(0, 0);

    if (totalQuantity > 0) {
        document.getElementById("buy-box").style.display = "flex";
    } else {
        document.getElementById("buy-box").style.display = "none";
    }
} 

function openProduct() {
    document.getElementById("item-section").style.display = "none";
    document.getElementById("product-section").style.display = "flex";
}

function shop() {
    document.getElementById("item-section").style.display = "flex";
    document.getElementById("product-section").style.display = "none";
}

let totalQuantity = 0;

function addToCart(productName, productPrice) {
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';

    const cartItemData = {
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
    };

    cartItemElement.dataset.cartItemData = JSON.stringify(cartItemData);

    cartItemElement.innerHTML = `
    <div class="cart-item-item">
        <a class="cart-item-image"><img src="iconmonstr-product-3-240.png" width="100px"></a>
        <h1 class="cart-item-name">${cartItemData.name}</h1>
    </div>
    <div class="cart-item-quantity">
        <button class="cart-decrease" onclick="decreaseQuantity(this)">-</button>
        <div class="cart-quantity">1</div>
        <button class="cart-add" onclick="increaseQuantity(this)">+</button>
    </div>
    <div class="cart-item-price">
        <h1 class="cart-price">${cartItemData.price} kr.</h1>
    </div>
    <div class="cart-line"></div>
    `;

    const cartMenu = document.getElementById('cart-menu');
    cartMenu.appendChild(cartItemElement);

    totalQuantity += 1;
    document.getElementById("total-quantity").innerHTML = totalQuantity;
}

function decreaseQuantity(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 1) {
        quantity--;
        totalQuantity -= 1;
        quantityElement.textContent = quantity;
        updateCartItemPrice(button.closest('.cart-item'), quantity);


    } else if (quantity === 1) {
        const cartItem = button.closest('.cart-item');
        if (cartItem) {
            cartItem.remove();
        }

        totalQuantity -= 1;
        document.getElementById("total-quantity").innerHTML = totalQuantity;
    }
}

function increaseQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);

    totalQuantity += 1;
    quantity++;
    quantityElement.textContent = quantity;
    updateCartItemPrice(button.closest('.cart-item'), quantity);
}

function updateCartItemPrice(cartItem, quantity) {
    const cartItemData = JSON.parse(cartItem.dataset.cartItemData);
    const priceElement = cartItem.querySelector('.cart-price');
    const updatedPrice = (cartItemData.price * quantity);
    priceElement.textContent = `${updatedPrice} kr.`;

    document.getElementById("total-quantity").innerHTML = totalQuantity;
}
