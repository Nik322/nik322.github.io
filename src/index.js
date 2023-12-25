function toggleNav() {
    var nav = document.querySelector('.main-nav');
    nav.classList.toggle('show');
    var burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
    var logo = document.querySelector('div.logo');
    logo.classList.toggle('hidden');
    console.log(logo)
}