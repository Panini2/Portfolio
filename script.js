document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    burgerMenu.addEventListener('click', function() {
        console.log("Burger menu clicked");
        navMenu.classList.toggle('active');
    });
document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
