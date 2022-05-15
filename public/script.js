if(localStorage.tema === "escuro") {
    const tematxt = document.getElementById('tematxt')
    tematxt.innerHTML = 'Tema Escuro'
    trocarTema(
        ['#0b0b0c', "#1f1f1f"],
        ['#fff', '#fff', '#9f9f9f'],
        'img/menu-branco.svg',
        'img/logo-n1-branca.svg',
        'img/lua.svg',
        '-branco',
        'escuro'
    )
} else {
    const tematxt = document.getElementById('tematxt')
    tematxt.innerHTML = 'Tema Claro'
    trocarTema(
        ['#fff', "#f7f7f7"],
        ['#000', '#3e3049', '#665e77'],
        'img/menu.svg',
        'img/logo-n1.svg',
        'img/sol.svg',
        '',
        'claro'
    )
}
const menu = document.querySelector('.menu')
const fundo = document.querySelector('.fundo')

menu.addEventListener('click', () => {
    toggleMenu('initial', '1')
})

fundo.addEventListener('click', () => {
    toggleMenu('-1000px', '0')
})

function toggleMenu(left, opacity) {
    const conteudomenu = document.querySelector('.conteudomenu')
    conteudomenu.style.left = left
    conteudomenu.style.opacity = opacity
    fundo.style.left = left
    fundo.style.opacity = opacity
}

//toggleMenu
// ==============================================================================================================================================
//trocarTema

const tema = document.getElementById('tema')

tema.addEventListener('click', () => {
    const tematxt = document.getElementById('tematxt')

    if (tematxt.innerHTML === 'Tema Claro') {
        tematxt.innerHTML = 'Tema Escuro'

        trocarTema(
            ['#0b0b0c', "#1f1f1f"],
            ['#fff', '#fff', '#9f9f9f'],
            'img/menu-branco.svg',
            'img/logo-n1-branca.svg',
            'img/lua.svg',
            '-branco',
            'escuro'
        )
    } else if (tematxt.innerHTML === 'Tema Escuro') {
        tematxt.innerHTML = 'Tema Claro'

        trocarTema(
            ['#fff', "#f7f7f7"],
            ['#000', '#3e3049', '#665e77'],
            'img/menu.svg',
            'img/logo-n1.svg',
            'img/sol.svg',
            '',
            'claro'
        )
    }
})

function trocarTema(fundo, fonte, menu, logo, tema, cor, escuroclaro) {
    localStorage.clear()
    localStorage.setItem('tema', escuroclaro)
    document.getElementById('temaimg').src = tema
    document.getElementById('logo').src = logo
    document.getElementById('body').style.backgroundColor = fundo[0]
    document.getElementById("fundomenu").style.backgroundColor = fundo[1]
    document.getElementById("corpo").style.backgroundColor = fundo[1]
    document.getElementById('menuimg').src = menu
    document.getElementById('titulo').style.color = fonte[1]
    document.getElementById('conteudomenu').style.backgroundColor = fundo[1]

    for (i = 0; i < 6; i++) {
        document.getElementsByClassName('button')[i].style.background = fundo[0]
        document.getElementsByClassName('button')[i].style.color = fonte[0]
    }
    for (i = 0; i < 2; i++) {
        document.getElementsByClassName('mensagem')[i].style.background = fundo[0]
        document.getElementsByClassName('nome')[i].style.color = fonte[0]
        document.getElementsByClassName('content')[i].style.color = fonte[2]
    }
    for (i = 0; i < 7; i++) {
        document.getElementsByClassName('itemlista')[i].style.color = fonte[0]
    }
    for (i = 0; i < 2; i++) {
        if (document.getElementsByClassName('icone')[i].src.length > 59) {
            document.getElementsByClassName('icone')[i].src = document.getElementsByClassName('icone')[i].src.slice(0, document.getElementsByClassName('icone')[i].src.length - 11) + '.svg'
        } else {
            document.getElementsByClassName('icone')[i].src = document.getElementsByClassName('icone')[i].src.slice(0, document.getElementsByClassName('icone')[i].src.length - 4) + cor + '.svg'
        }
    }
}
//.