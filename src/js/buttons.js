function SwiperRead() {
    let elem = document.querySelector('#swiperWrapper');
    let img = document.querySelector('#swiperImg');
    let p = document.querySelector('#swiperP');
    elem.classList.toggle('mod__wraperopen');
    img.classList.toggle('rotate')
    if (p.innerHTML === 'Показать все') {
        p.innerHTML = 'Скрыть';
        img.style.marginLeft = "-51px";
        p.style.paddingLeft = "0px";
    } else {
        p.innerHTML = 'Показать все';
        img.style.marginLeft = "-76px";
        p.style.paddingLeft = "0px";
    }
}

function SwiperTRead() {
    let elem = document.querySelector('#swiperTWrapper');
    let img = document.querySelector('#swiperTImg');
    let p = document.querySelector('#swiperTP');
    elem.classList.toggle('mod__wraperopen');
    img.classList.toggle('rotate')
    if (p.innerHTML === 'Показать все') {
        p.innerHTML = 'Скрыть';
        img.style.marginLeft = "-51px";
        p.style.paddingLeft = "0px";
    } else {
        p.innerHTML = 'Показать все';
        img.style.marginLeft = "-76px";
        p.style.paddingLeft = "0px";
    }
}

function ButtonRead() {
    let elem = document.querySelector('#info-text__container');
    let img = document.querySelector('#contentImg');
    let p = document.querySelector('#contentP');
    elem.classList.toggle('mod__text-open');
    img.classList.toggle('rotate')
    if (p.innerHTML === 'Читать далее') {
        p.innerHTML = 'Свернуть';
        img.style.marginLeft = "-61px";
        p.style.paddingLeft = "0px";
    } else {
        p.innerHTML = 'Читать далее';
        img.style.marginLeft = "-76px";
        p.style.paddingLeft = "0px";
    }
}

function MenuOn() {
    let elem = document.querySelector('#menuID');
    elem.classList.toggle('menu');
    elem.classList.toggle('open-menu')
}
function CallOn() {
    let elem = document.querySelector('#call-sheet');
    elem.classList.toggle('call-sheet__status');
}
function CommunicationOn() {
    let elem = document.querySelector('#сommunication-sheet');
    elem.classList.toggle('сommunication-sheet__status');
}



