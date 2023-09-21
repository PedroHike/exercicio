const btn = document
.querySelectorAll('.btn');

const slide = document.querySelector('.slide .container');

const btnAvancar = btn[1]
const btnVoltar = btn[0]

let i = 0

btnAvancar.addEventListener('click', ()=>{
    if (i<4){
        i++
    console.log(i);
    }else{
        console.log('o valor de '+i+' chegou no limite');
    }
})

btnVoltar.addEventListener('click', ()=>{
    console.log('voce clicou em Voltar');
})