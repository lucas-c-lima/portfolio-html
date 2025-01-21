// Rolar até a section quando clicar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sideMenuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

sideMenuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    sideMenuToggle.classList.toggle('open');
});