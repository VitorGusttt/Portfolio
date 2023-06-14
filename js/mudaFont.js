//pegar os elementos
const h1 = document.querySelector('#h1Font');
const span = document.querySelector('#spanFont');
const textoSpan = span.innerHTML.split("");

//fazer trocar letra por letra
function soletra(callback){
    span.innerHTML = '';
    textoSpan.forEach((letra, i) => {
        setTimeout(() =>{
            span.innerHTML += letra;
        },300*i);
    });
    
    callback()
}

//preeciso trocar a fonte do span
function mudaFonte(){
    setInterval(() =>{
        
        if (span.classList.contains('semFonte')){
            setTimeout(() => {
                span.classList.remove('semFonte');
                span.classList.add('pixo-reto');
            }, 1000)
        };

        if (span.classList.contains('pixo-reto')){
            setTimeout(() => {
                span.classList.remove('pixo-reto');
                span.classList.add('street-soul');

            }, 1000)
        };

        if (span.classList.contains('street-soul')){
            setTimeout(() => {
                span.classList.remove('street-soul');
                span.classList.add('street-fire');
                
            }, 1000)
        };

        if (span.classList.contains('street-fire')){
            setTimeout(() => {
                span.classList.remove('street-fire');
                span.classList.add('semFonte');
            }, 1000)
        };
    },1500)
        
};
//na font pixo reto tem q mudar o tamanho
soletra(mudaFonte);