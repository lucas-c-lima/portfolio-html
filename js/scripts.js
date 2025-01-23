const sideMenuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Setando botões para fechar menu lateral
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Fechar o menu ao clicar fora
document.addEventListener('click', (event) => {
    if (
        sideMenu.classList.contains('open') &&
        !sideMenu.contains(event.target) &&
        !sideMenuToggle.contains(event.target)
    ) {
        toggleMenu();
    }
});


// Troca de título a cada 5s
const titles = [
    "Desenvolvedor Full-Stack",
    "Analista de Dados",
    "Desenvolvedor de API"
];
const titlesEn = [
    "Full-Stack Developer",
    "Data Analyst",
    "API Developer"
];

let currentIndex = 0;

function changeTitle() {
    let currentLanguage = localStorage.getItem('language')
    const titleElement = document.getElementById('title-changer');
    titleElement.style.animation = "none";
    titleElement.offsetHeight;
    titleElement.style.animation = "";

    if (currentLanguage == 'en_us'){
        titleElement.textContent = titlesEn[currentIndex];
        currentIndex = (currentIndex + 1) % titlesEn.length;
    } else {
        titleElement.textContent = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }
}
    changeTitle()
    setInterval(changeTitle, 4000);