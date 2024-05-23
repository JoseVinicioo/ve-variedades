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
        img.forEach(produto => {
            if (produto !== semFoco) {
                produto.classList.toggle('focus')
            }
        })
    }
    semFoco.onmouseout = function () {
        img.forEach(produto => {
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

let imgRoupas = document.querySelector('.roupas')
focusTodosMenos(imgRoupas)
let itensRoupa = document.querySelector('.Roupa')
function cliqueRoupa(){
    todasMenos(itensRoupa, imgRoupas)
    console.log('ta')
}

function cliquePijama(){
    let boxPijama = document.querySelector('.pijama')
    let boxSelecao = document.createElement('div')
    boxSelecao.classList.add('selecao')
    boxSelecao.innerHTML = 'Aulto/Feminino'
    boxSelecao.classList.add('fem')
    boxPijama.appendChild(boxSelecao)
    boxPijama.onclick = function(){
        boxSelecao.classList.toggle('oculta')
    }
}
function cliquePecasInt(){
    let boxPecasInt = document.querySelector('.pecasInt')
    let boxSelecao = document.createElement('div')
    boxSelecao.classList.add('selecao')
    boxSelecao.innerHTML = 'Aulto/Feminino'
    boxPecasInt.appendChild(boxSelecao)
    boxPecasInt.onclick = function(){
        boxSelecao.classList.toggle('oculta')
    }
}



let imgMesaBanho = document.querySelector('.cama')
focusTodosMenos(imgMesaBanho)
let itensCama = document.querySelector('.Cama')
function cliqueCama(){
    todasMenos(itensCama, imgMesaBanho)
}

let imgBijuteria = document.querySelector('.bijuteria')
focusTodosMenos(imgBijuteria)
let itensBiju = document.querySelector('.Biju')
function cliqueBiju(){
    todasMenos(itensBiju, imgBijuteria)
}