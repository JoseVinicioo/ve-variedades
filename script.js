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
    semFoco.onmouseover = function () {
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
function todasMenos(excesao, imageSelec) {
    excesao.classList.toggle('oculta')
    todas.forEach(item => {
        if (item !== excesao) {
            item.classList.add('oculta')
        }
    })
    img.forEach(imagem => {
        if (imagem !== imageSelec) {
            imagem.classList.remove('imgEscondida')
        }
        else {
            imageSelec.classList.toggle('imgEscondida')
        }
    })
}

let imgRoupas = document.querySelector('.roupas')
focusTodosMenos(imgRoupas)
let itensRoupa = document.querySelector('.Roupa')
function cliqueRoupa() {
    todasMenos(itensRoupa, imgRoupas)
}

let boxPijama = document.querySelector('.pijama')
boxPijama.onclick = function () {
    tirarTodasMenosComClass('pjama')
    let boxSelecao = document.createElement('div')
    boxSelecao.classList.add('selecao')
    boxSelecao.classList.add('pjama')
    boxSelecao.innerHTML = 'Adulto/Feminino'
    boxSelecao.classList.add('fem')
    boxPijama.appendChild(boxSelecao)
    boxPijama.onclick = function(){
        tirarTodasMenosComClass('pjama')
    }

}
function CriarMascul(nameBox, identf) {
    let boxMasc = document.createElement('div')
    boxMasc.classList.add('selecao')
    boxMasc.classList.add(`${identf}`)
    boxMasc.classList.add('masc')
    boxMasc.innerHTML = 'Masculino'
    nameBox.appendChild(boxMasc)
}
function CriarFem(nameBox, identf) {
    let boxFem = document.createElement('div')
    boxFem.classList.add('selecao')
    boxFem.classList.add(`${identf}`)
    boxFem.classList.add('fem')
    boxFem.innerHTML = 'Feminino'
    nameBox.appendChild(boxFem)
}
function tirarTodasMenosComClass(excesao) {
        let boxes = document.querySelectorAll('.selecao')
        boxes.forEach(function (box) {
            if (box.classList.contains(excesao)) {
                box.classList.toggle('oculta')
            }
            else {
                box.classList.add('oculta')
            }
        })
}


let pecasIntBox = document.querySelector('.pecasInt')
pecasIntBox.onclick = function () {
    tirarTodasMenosComClass('intm')
    CriarMascul(pecasIntBox, 'intm')
    CriarFem(pecasIntBox, 'intm')
    pecasIntBox.onclick = function(){
        tirarTodasMenosComClass('intm')
    }
}



let imgMesaBanho = document.querySelector('.cama')
focusTodosMenos(imgMesaBanho)
let itensCama = document.querySelector('.Cama')
function cliqueCama() {
    todasMenos(itensCama, imgMesaBanho)
}

let imgBijuteria = document.querySelector('.bijuteria')
focusTodosMenos(imgBijuteria)
let itensBiju = document.querySelector('.Biju')
function cliqueBiju() {
    todasMenos(itensBiju, imgBijuteria)
}