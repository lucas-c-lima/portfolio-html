const translations = {
    pt_br: {
        navbar1_6: "Inicio",
        navbar2_7: "Sobre",
        navbar3_8: "Tecnologias",
        navbar4_9: "Projetos",
        navbar5_10: "Contato",
        btn_language: "Change Language", 
        h2_greetings: "Olá, eu sou",
        title_about: "Sobre Mim",
        about_text: `Sou um <strong>Desenvolvedor de Softwares</strong> apaixonado por criar soluções eficientes. Com experiência em diversas linguagens de programação e tecnologias, foco no <strong>desenvolvimento de aplicativos</strong> e <strong>APIs</strong> que aprimoram a experiência do usuário e otimizam processos.
                        <br>Possuo graduação em Sistemas de Informação pela Pontifícia Universidade Católica do Paraná. Atuo como desenvolvedor desde 2022 com ferramentas como <strong>React</strong>, <strong>Java</strong>, <strong>Python</strong> entre outras tecnologias.
                        <br>Minhas principais habilidades são:`,
        card1: '2+ Anos de Experiência',
        card2: 'UI/UX',
        card3: 'Versionamento de Código',
        card4: 'Metodologias Ágeis',
        title_tec: 'Tecnologias e Ferramentas',
        tec_adv: "Avançado",
        tec_med: "Intermediário",
        tec_bas: "Básico",
        title_portfolio: 'Portfolio',
        port1: 'Site para adoção de gatos',
        port2: 'Pokedex Mobile',
        port3: 'Web Scraping em Python',
        btn_code: 'Código',
        title_contact: 'Contato',
        contact_text: 'Gostou do que viu? Entre em contato!'
    },
    en_us: {
        navbar1_6: "Home",
        navbar2_7: "About",
        navbar3_8: "Technologies",
        navbar4_9: "Projects",
        navbar5_10: "Contact",
        btn_language: "Trocar Linguagem",
        h2_greetings: "Hello, I am",
        title_about: "About Me",
        about_text: `I am a <strong>Software Developer</strong> passionate about creating efficient solutions. With experience in various programming languages and technologies, I focus on <strong>app development</strong> and <strong>APIs</strong> that enhance user experience and optimize processes.
                        <br>I have a degree in Information Systems from the Pontifical Catholic University of Paraná. I have been working as a developer since 2022 with tools such as <strong>React</strong>, <strong>Java</strong>, <strong>Python</strong>, among other technologies.
                        <br>My main skills are:`,
        card1: '2+ Years of Experience',
        card2: 'UI/UX',
        card3: 'Version Control',
        card4: 'Agile Methodologies',
        title_tec: 'Technologies and Tools',
        tec_adv: "Advanced",
        tec_med: "Intermediate",
        tec_bas: "Basic",
        title_portfolio: 'Portfolio',
        port1: 'Cat Adoption Website',
        port2: 'Mobile Pokedex',
        port3: 'Web Scraping in Python',
        btn_code: 'Code',
        title_contact: 'Contact',
        contact_text: 'Liked what you saw? Get in touch!'
    }
}


function loadLanguage(){
    const savedLanguage = localStorage.getItem('language');

    return savedLanguage ? savedLanguage : 'pt_br'
}

let selected = loadLanguage();

function changeLanguage(){
    selected = selected == 'pt_br' ? 'en_us' : 'pt_br';

    localStorage.setItem('language', selected);

    updatePage()
}

function updatePage(){
    document.getElementById("navbar1").innerText = translations[selected].navbar1_6;
    document.getElementById("navbar6").innerText = translations[selected].navbar1_6;
    document.getElementById("navbar2").innerText = translations[selected].navbar2_7;
    document.getElementById("navbar7").innerText = translations[selected].navbar2_7;
    document.getElementById("navbar3").innerText = translations[selected].navbar3_8;
    document.getElementById("navbar8").innerText = translations[selected].navbar3_8;
    document.getElementById("navbar4").innerText = translations[selected].navbar4_9;
    document.getElementById("navbar9").innerText = translations[selected].navbar4_9;
    document.getElementById("navbar5").innerText = translations[selected].navbar5_10;
    document.getElementById("navbar10").innerText = translations[selected].navbar5_10;
    document.getElementById("btn-language").innerHTML = translations[selected].btn_language;
    document.getElementById("h2-greetings").innerHTML = translations[selected].h2_greetings;
    document.getElementById("title-about").innerHTML = translations[selected].title_about;
    document.getElementById("about-text").innerHTML = translations[selected].about_text;
    document.getElementById("card1").innerHTML = translations[selected].card1;
    document.getElementById("card2").innerHTML = translations[selected].card2;
    document.getElementById("card3").innerHTML = translations[selected].card3;
    document.getElementById("card4").innerHTML = translations[selected].card4;
    document.getElementById("title-tec").innerHTML = translations[selected].title_tec;
    let tec_desc_adv = document.querySelectorAll('.tec-adv');
    tec_desc_adv.forEach((desc) => {
        desc.innerHTML = translations[selected].tec_adv;
    });
    let tec_desc_med = document.querySelectorAll('.tec-med');
    tec_desc_med.forEach((desc) => {
        desc.innerHTML = translations[selected].tec_med;
    });
    let tec_desc_bas = document.querySelectorAll('.tec-bas');
    tec_desc_bas.forEach((desc) => {
        desc.innerHTML = translations[selected].tec_bas;
    });
    document.getElementById("title-portfolio").innerHTML = translations[selected].title_portfolio;
    document.getElementById("port1").innerHTML = translations[selected].port1;
    document.getElementById("port2").innerHTML = translations[selected].port2;
    document.getElementById("port3").innerHTML = translations[selected].port3;
    let btns_code = document.querySelectorAll('.btn-code');
    btns_code.forEach((text) => {
        text.innerHTML = translations[selected].btn_code;
    })
    document.getElementById("title-contact").innerHTML = translations[selected].title_contact;
    document.getElementById("contact-text").innerHTML = translations[selected].contact_text;

}

document.addEventListener("DOMContentLoaded", function() {
    updatePage();
});