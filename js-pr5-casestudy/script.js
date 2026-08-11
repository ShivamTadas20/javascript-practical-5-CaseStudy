const cart = [];

displayCart();

function displayCart() {
    const cartElement = document.getElementById("cart");

    if (cart.length === 0) {
        cartElement.innerHTML = "<p class='empty'>Your cart is empty.</p>";
        return;
    }

    const rows = cart.map(item => {
        const subtotal = (item.price * item.quantity).toFixed(2);
        return `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${subtotal}</td>
            </tr>`;
    }).join("");

    cartElement.innerHTML = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>`;
}

function addItem() {
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);

    if (!name) {
        showResult("Please enter a product name.");
        return;
    }

    if (!Number.isFinite(price) || price < 1 || price > 1000) {
        showResult("Price must be between $1 and $1000.");
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        showResult("Quantity must be an integer between 1 and 10.");
        return;
    }

    cart.push({ name, price, quantity });
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";

    displayCart();
    showResult(`Added ${quantity} x ${name} to the cart.`);
}

function removeLastItem() {
    if (cart.length === 0) {
        showResult("Cart is already empty.");
        return;
    }

    const removed = cart.pop();
    displayCart();
    showResult(`Removed ${removed.name} from the cart.`);
}

function clearCart() {
    if (cart.length === 0) {
        showResult("Cart is already empty.");
        return;
    }

    cart.length = 0;
    displayCart();
    showResult("All items have been removed from the cart.");
}

function totalAmount() {
    if (cart.length === 0) {
        showResult("Your cart is empty.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    showResult(`Cart total: $${total.toFixed(2)}`);
}

function expensiveItems() {
    if (cart.length === 0) {
        showResult("Your cart is empty.");
        return;
    }

    const expensive = cart.filter(item => item.price >= 50);
    if (expensive.length === 0) {
        showResult("No items priced $50 or more.");
        return;
    }

    const names = expensive.map(item => item.name).join(", ");
    showResult(`Expensive items: ${names}`);
}

function listNames() {
    if (cart.length === 0) {
        showResult("Your cart is empty.");
        return;
    }

    const names = cart.map(item => item.name).join(", ");
    showResult(`Items in cart: ${names}`);
}

function showResult(message) {
    document.getElementById("result").textContent = message;
}
