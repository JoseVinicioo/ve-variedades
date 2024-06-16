function toggleMode() {
    var body = document.querySelector('body')
    var img = document.querySelector('#btnMode')

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        img.setAttribute("src", "src/imgs-geral/Sun.svg")
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        img.setAttribute("src", "src/imgs-geral/Sun.svg")
    }
}

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

function acessarProdutos(namePasta, namePastaProduto, nameArquiv, nameProduto) {
    let dynamicTitle = `${nameProduto}`;
    let PastaDinamica = `${namePasta}`;
    let PastaProduto = `${namePastaProduto}`
    let NameArquivo = `${nameArquiv}`;

    window.location.href = `produto.html?title=${encodeURIComponent(dynamicTitle)}&pasta=${encodeURIComponent(PastaDinamica)}&arquivo=${encodeURIComponent(NameArquivo)}&pastaProduto=${encodeURIComponent(PastaProduto)}`;


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
        container.addEventListener('click', function () {
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


let boxPijama = document.querySelector('.pijama')
let imgPijam = document.querySelector('.Imgpijama')
imgPijam.onclick = function () {
    tirarTodasMenosComClass('pjama')
    let boxSelecao = document.createElement('div')
    boxSelecao.classList.add('selecao')
    boxSelecao.classList.add('pjama')
    boxSelecao.innerHTML = 'Adulto/Feminino'
    boxSelecao.classList.add('fem')
    boxPijama.appendChild(boxSelecao)
    imgPijam.onclick = function () {
        tirarTodasMenosComClass('pjama')
    }
    boxSelecao.onclick = function () {
        acessarProdutos('roupas', 'Pijamas', 'Pijamas', 'Pijamas')
    }
}


let pecasIntBox = document.querySelector('.pecasInt')
let imgInt = document.querySelector('.ImgpecasInt')
imgInt.onclick = function () {
    tirarTodasMenosComClass('intm')
    CriarMascul(pecasIntBox, 'intm')
    CriarFem(pecasIntBox, 'intm')
    imgInt.onclick = function () {
        tirarTodasMenosComClass('intm')
    }
    let itm = document.querySelectorAll('.intm')
    itm.forEach(pecas => {
        if (pecas.classList.contains('masc')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'peças-intimas', 'peças-intimas-masc', 'Peças Intimas Masculinas')
            }
        } if (pecas.classList.contains('fem')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'peças-intimas', 'peças-intimas-fem', 'Peças Intimas Femininas')
            }
        }
    })
}

let moleton = document.querySelector('.moleton')
let imgMolet = document.querySelector('.Imgmoleton')
imgMolet.onclick = function () {
    tirarTodasMenosComClass('mlt')
    CriarMascul(moleton, 'mlt', 'Infantil/')
    CriarFem(moleton, 'mlt', 'Infantil/')
    imgMolet.onclick = function () {
        tirarTodasMenosComClass('mlt')
    }
    let molet = document.querySelectorAll('.mlt')
    molet.forEach(pecas => {
        if (pecas.classList.contains('masc')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'Moletom', 'moletom-masc', 'Moletom Masculino e Infantil')
            }
        } if (pecas.classList.contains('fem')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'Moletom', 'moletom-fem', 'Moletom Feminino e Infantil')
            }
        }
    })
}

let blusas = document.querySelector('.blusas')
let imgBlus = document.querySelector('.Imgblusas')
imgBlus.onclick = function () {
    tirarTodasMenosComClass('bls')
    CriarMascul(blusas, 'bls', 'Adulto/')
    CriarFem(blusas, 'bls', 'Adulto/')
    imgBlus.onclick = function () {
        tirarTodasMenosComClass('bls')
    }
    let blus = document.querySelectorAll('.bls')
    blus.forEach(pecas => {
        if (pecas.classList.contains('masc')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'Blusas', 'blusas-masc', 'Blusas Masculinas')
            }
        } if (pecas.classList.contains('fem')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'Blusas', 'blusas-fem', 'Blusas Femininas')
            }
        }
    })
}

let shorts = document.querySelector('.shorts')
let imgShts = document.querySelector('.Imgshorts')
imgShts.onclick = function () {
    tirarTodasMenosComClass('shrt')
    let boxSelecao = document.createElement('div')
    boxSelecao.classList.add('selecao')
    boxSelecao.classList.add('shrt')
    boxSelecao.innerHTML = 'Adulto/Masculino'
    boxSelecao.classList.add('masc')
    shorts.appendChild(boxSelecao)
    imgShts.onclick = function () {
        tirarTodasMenosComClass('shrt')
    }
    boxSelecao.onclick = function () {
        acessarProdutos('roupas', 'Shorts', 'shorts-masc', 'Shorts Masculino')
    }
}

let conjunto = document.querySelector('.conjunto')
let imgConjt = document.querySelector('.Imgconjunto')
imgConjt.onclick = function () {
    tirarTodasMenosComClass('cnjt')
    CriarMascul(conjunto, 'cnjt', 'Infantil/')
    CriarFem(conjunto, 'cnjt', 'Infantil/')
    imgConjt.onclick = function () {
        tirarTodasMenosComClass('cnjt')
    }
    let conjunt = document.querySelectorAll('.cnjt')
    conjunt.forEach(pecas => {
        if (pecas.classList.contains('masc')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'Conjunto', 'conjunto-masc', 'Conjunto Masculino')
            }
        } if (pecas.classList.contains('fem')) {
            pecas.onclick = function () {
                acessarProdutos('roupas', 'Conjunto', 'conjunto-fem', 'Conjunto Feminino')
            }
        }
    })
}



let imgMesaBanho = document.querySelector('.cama')
focusTodosMenos(imgMesaBanho)
let itensCama = document.querySelector('.Cama')
function cliqueCama() {
    todasMenos(itensCama, imgMesaBanho)
}

let toalhas = document.querySelector('.Imgtoalhas')
let imgToalh = document.querySelector('.Imgtoalhas')
imgToalh.onclick = function () {
    acessarProdutos('cama-mesa-banho', 'toalhas', 'toalhas', 'Toalhas')
}

let lençois = document.querySelector('.Imglencois')
let imgLenc = document.querySelector('.Imglencois')
imgLenc.onclick = function () {
    acessarProdutos('cama-mesa-banho', 'lençois', 'lençois', 'Lençois')
}

let colchaDeCama = document.querySelector('.ImgColchaDeCama')
let imgColch = document.querySelector('.ImgColchaDeCama')
imgColch.onclick = function () {
    acessarProdutos('cama-mesa-banho', 'colcha-de-cama', 'colcha-de-cama', 'Colcha de Cama')
}

let panoDePrato = document.querySelector('.ImgPanoDePrato')
let imgPanoMesa = document.querySelector('.ImgPanoDePrato')
panoDePrato.onclick = function () {
    acessarProdutos('cama-mesa-banho', 'pano-de-prato', 'pano-de-prato', 'Pano de Prato')
}


let imgBijuteria = document.querySelector('.bijuteria')
focusTodosMenos(imgBijuteria)
let itensBiju = document.querySelector('.Biju')
function cliqueBiju() {
    todasMenos(itensBiju, imgBijuteria)
}

let açosFolheados = document.querySelector('.Imgacosefolheados')
let imgAços = document.querySelector('.Imgacosefolheados')
imgAços.onclick = function () {
    acessarProdutos('bijuterias', 'acos-e-folheados', 'acos-e-folheados', 'Aços e Folheados')
}