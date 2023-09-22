const btn = document
.querySelectorAll('.btn');

const slide = document.querySelector('.slide .container');

const btnAvancar = btn[1]
const btnVoltar = btn[0]

let i = 0

var valorDeTranslate = 0

btnAvancar.addEventListener('click', ()=>{
    if (i<3){
        i++
        valorDeTranslate = -25 * i;
        slide.style.transform="translateX("+valorDeTranslate+"%)";
        btnVoltar.classList.remove('desativado')
    
    }else{
        btnAvancar.classList.add('desativado')
    }
})

btnVoltar.addEventListener('click', ()=>{
    if (i>0){
        valorDeTranslate+=25
        slide.style.transform="translateX("+valorDeTranslate+"%)";
        i--;
        btnAvancar.classList.remove('desativado')
    }else{
        btnVoltar.classList.add('desativado')
    }
})
