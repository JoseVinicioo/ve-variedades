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
    boxPijama.onclick = function () {
        tirarTodasMenosComClass('pjama')
    }

}
function CriarMascul(nameBox, identf, opc = '') {
    let boxMasc = document.createElement('div')
    boxMasc.classList.add('selecao')
    boxMasc.classList.add(`${identf}`)
    boxMasc.classList.add('masc')
    boxMasc.innerHTML = `${opc}Masculino`
    nameBox.appendChild(boxMasc)
}
function CriarFem(nameBox, identf, opc = '') {
    let boxFem = document.createElement('div')
    boxFem.classList.add('selecao')
    boxFem.classList.add(`${identf}`)
    boxFem.classList.add('fem')
    boxFem.innerHTML = `${opc}Feminino`
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

document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todas as divs com a classe 'rp'
    const imageContainers = document.querySelectorAll('.rp');

    // Adiciona um listener de clique a cada contêiner
    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            // Remove a classe 'active' de todas as divs 'rp'
            imageContainers.forEach(item => {
                item.classList.remove('active');
                item.classList.remove('redondo')
            });

            // Adiciona a classe 'active' apenas ao contêiner clicado
            container.classList.toggle('active');
            container.classList.toggle('redondo');
        });
    });
});


let pecasIntBox = document.querySelector('.pecasInt')
let imgInt = document.querySelector('.ImgpecasInt')
pecasIntBox.onclick = function () {
    tirarTodasMenosComClass('intm')
    CriarMascul(pecasIntBox, 'intm')
    CriarFem(pecasIntBox, 'intm')
    pecasIntBox.onclick = function () {
        tirarTodasMenosComClass('intm')
    }
}

let moleton = document.querySelector('.moleton')
moleton.onclick = function () {
    tirarTodasMenosComClass('mlt')
    CriarMascul(moleton, 'mlt', 'Infantil/')
    CriarFem(moleton, 'mlt', 'Infantil/')
    moleton.onclick = function () {
        tirarTodasMenosComClass('mlt')
    }
}

let blusas = document.querySelector('.blusas')
blusas.onclick = function () {
    tirarTodasMenosComClass('bls')
    CriarMascul(blusas, 'bls', 'Adulto/')
    CriarFem(blusas, 'bls', 'Adulto/')
    blusas.onclick = function () {
        tirarTodasMenosComClass('bls')
    }
}

let shorts = document.querySelector('.shorts')
shorts.onclick = function () {
    tirarTodasMenosComClass('shrt')
    let boxSelecao = document.createElement('div')
    boxSelecao.classList.add('selecao')
    boxSelecao.classList.add('shrt')
    boxSelecao.innerHTML = 'Adulto/Masculino'
    boxSelecao.classList.add('masc')
    shorts.appendChild(boxSelecao)
    shorts.onclick = function () {
        tirarTodasMenosComClass('shrt')
    }
}

let conjunto = document.querySelector('.conjunto')
conjunto.onclick = function () {
    tirarTodasMenosComClass('cnjt')
    CriarMascul(conjunto, 'cnjt', 'Infantil/')
    CriarFem(conjunto, 'cnjt', 'Infantil/')
    conjunto.onclick = function () {
        tirarTodasMenosComClass('cnjt')
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