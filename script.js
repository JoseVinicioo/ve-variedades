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

let roupas = document.querySelector('.primeiro')
focusTodosMenos(roupas)

let camaMesaBanho = document.querySelector('.segundo')
focusTodosMenos(camaMesaBanho)

let bijuteria = document.querySelector('.terceiro')
focusTodosMenos(bijuteria)