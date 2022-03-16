document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.menu');
    const mobileButton = document.querySelector('.mobile-menu');

        mobileButton.addEventListener('click', function() {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else{
            mobileMenu.classList.add('active');
        }
    })
});