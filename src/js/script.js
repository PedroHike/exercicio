const btn = document
.querySelectorAll('.btn');

const slide = document.querySelector('.slide .container');
const numeroDeImagens = document.querySelectorAll('.tela').length;

const btnAvancar = btn[1]
const btnVoltar = btn[0]

const tamanhoTotalSlide=100

let imagemAtual = 0

var valorDeTranslate = 0



btnAvancar.addEventListener('click', ()=>{
    
    let naoChegouNaUltimaImagem = imagemAtual<numeroDeImagens-1

    if (naoChegouNaUltimaImagem){
        imagemAtual++
        moverImagemParaEsquerda()

        btnVoltar.classList.remove('desativado');

        
        let chegouNaUltimaImagem = imagemAtual==numeroDeImagens-1
        
        if(chegouNaUltimaImagem){
            btnAvancar.classList.add('desativado');
        }
    }
})

btnVoltar.addEventListener('click', ()=>{
    let naoEstaNaPrimeiraImagem = imagemAtual>0

    if (naoEstaNaPrimeiraImagem){
        imagemAtual--;
        moverImagemParaDireita()
        
        btnAvancar.classList.remove('desativado')
        
        
        let estahNaPrimeiraImagem = imagemAtual==0
        
        if (estahNaPrimeiraImagem) {
            btnVoltar.classList.add('desativado')
        }
    }
})

function moverImagemParaDireita(){
    valorDeTranslate+=(tamanhoTotalSlide/numeroDeImagens)
    slide.style.transform="translateX("+valorDeTranslate+"%)";
}

function moverImagemParaEsquerda(){
    valorDeTranslate = -(tamanhoTotalSlide/numeroDeImagens) * imagemAtual;
    slide.style.transform="translateX("+valorDeTranslate+"%)";
}