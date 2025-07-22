export function burgerMenu() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const body = document.body;
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    document.querySelectorAll('.list__items a').forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
}