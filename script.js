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
let img = document.querySelectorAll('.img')
function todasMenos(excesao, imageSelec){
    excesao.classList.toggle('oculta')
    todas.forEach(item =>{
        if (item !== excesao){
            item.classList.add('oculta')  
        }
    })
    img.forEach(imagem =>{
        if(imagem !== imageSelec){
            imagem.classList.remove('imgEscondida')
        }
        else{
            imageSelec.classList.toggle('imgEscondida')
        }
    })
}

let roupas = document.querySelector('.primeiro')
let imgRoupas = document.querySelector('.roupas')
focusTodosMenos(roupas)
let itensRoupa = document.querySelector('.Roupa')
function cliqueRoupa(){
    todasMenos(itensRoupa, imgRoupas)
}

let camaMesaBanho = document.querySelector('.segundo')
let imgMesaBanho = document.querySelector('.cama')
focusTodosMenos(camaMesaBanho)
let itensCama = document.querySelector('.Cama')
function cliqueCama(){
    todasMenos(itensCama, imgMesaBanho)
}

let bijuteria = document.querySelector('.terceiro')
let imgBijuteria = document.querySelector('.bijuteria')
focusTodosMenos(bijuteria)
let itensBiju = document.querySelector('.Biju')
function cliqueBiju(){
    todasMenos(itensBiju, imgBijuteria)
}