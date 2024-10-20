// Simple Cart System
let cart = [];
let cartCount = 0;

// Function to add item to cart
function addToCart(productId) {
    cart.push(productId);
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productId = product.getAttribute('data-id');
        addToCart(productId);
        alert(`Product ${productId} added to cart!`);
    });
});
