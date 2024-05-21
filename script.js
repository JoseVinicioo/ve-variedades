function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}
let nav = document.querySelector('.nav');

function mostrarMenu() {
    nav.classList.toggle('mostrar');
}

let sections = document.getElementsByTagName('section');

function ocultarMenu() {
    for (let i = 0; i < sections.length; i++) {
        sections[i].onclick = function () {
            nav.classList.remove('mostrar');
        }
    }
}
ocultarMenu();


let tdsProdutos = document.querySelectorAll('.produto')


function focusTodosMenos(semFoco) {
    semFoco.onmouseover  = function () {
        tdsProdutos.forEach(produto => {
            if (produto !== semFoco) {
                produto.classList.toggle('focus')
            }
        })
    }
    semFoco.onmouseout = function () {
        tdsProdutos.forEach(produto => {
            produto.classList.remove('focus')
        })
    }
}

let todas = document.querySelectorAll('.as')
function todasMenos(excesao){
    excesao.classList.toggle('oculta')
    todas.forEach(item =>{
        if (item !== excesao){
            item.classList.add('oculta')
        }
    })
}

let roupas = document.querySelector('.primeiro')
focusTodosMenos(roupas)
let itensRoupa = document.querySelector('.Roupa')
function cliqueRoupa(){
    todasMenos(itensRoupa)
}

let camaMesaBanho = document.querySelector('.segundo')
focusTodosMenos(camaMesaBanho)
let itensCama = document.querySelector('.Cama')
function cliqueCama(){
    todasMenos(itensCama)
}

let bijuteria = document.querySelector('.terceiro')
focusTodosMenos(bijuteria)
let itensBiju = document.querySelector('.Biju')
function cliqueBiju(){
    todasMenos(itensBiju)
}