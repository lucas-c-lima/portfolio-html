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

/* Título muda a cada 5 segundos */
const titles = [
    "Desenvolvedor Full-Stack",
    "Analista de Dados",
    "Desenvolvedor de API"
];

let currentIndex = 0;
  
function changeTitle() {
    const titleElement = document.getElementById('title-changer');
    titleElement.style.animation = "none";
    titleElement.offsetHeight;
    titleElement.style.animation = "";

    titleElement.textContent = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}
    changeTitle()
    setInterval(changeTitle, 4000);