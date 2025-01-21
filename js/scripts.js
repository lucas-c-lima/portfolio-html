const sideMenuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Rolar até a section quando clicar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        if(window.getComputedStyle(document.querySelector('.on-mobile')).display == 'block'){
            toggleMenu();
        }
    });
});

// Abrir e fechar o menu lateral
sideMenuToggle.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    sideMenu.classList.toggle('open');
    sideMenuToggle.classList.toggle('open');
}