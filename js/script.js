// ATIVAR LINKS DO MENU 
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// ATIVAR ITEMS DO ORÇAMENTO

const parametros = new URLSearchParams (location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTES 

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPerguntas(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPerguntas);
}

perguntas.forEach(eventosPerguntas);

// GALERIA DE BICICLETA

const galeria = document.querySelectorAll(".bicicletas-imagens img");
const galeriaContainer = document.querySelector(".bicicletas-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    const media =  matchMedia("(min-width: 1000px)").matches;
    if(media) {
    galeriaContainer.prepend(img);
   }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// ANIMAÇÃO 

if (window.SimpleAnime) {
    new SimpleAnime();
}

