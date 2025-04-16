document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const cartCount = document.getElementById('cart-count');
    let cartItems = 0;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    document.querySelectorAll('.product-card').forEach(product => {
        const addToCartBtn = product.querySelector('.add-to-cart');
        const removeFromCartBtn = product.querySelector('.remove-from-cart');
        const ratingStars = product.querySelector('p');
        
        removeFromCartBtn.style.display = 'none';

        addToCartBtn.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            removeFromCartBtn.style.display = 'inline-block';
        });

        removeFromCartBtn.addEventListener('click', function() {
            if (cartItems > 0) {
                cartItems--;
                cartCount.textContent = cartItems;
                if (cartItems === 0) {
                    removeFromCartBtn.style.display = 'none';
                }
            }
        });

        if (ratingStars) {
            ratingStars.innerHTML = ratingStars.innerHTML.replace(/★/g, '<span style="color: gold;font-size: 24px;">★</span>');
            ratingStars.innerHTML = ratingStars.innerHTML.replace(/☆/g, '<span style="color: gold;font-size: 24px;">☆</span>');
        }
    });
});
