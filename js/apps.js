//aqui eu pego meu icon que eh onde vai ser feito os ventos de click
const html = document.querySelector("html")
const btnTheme = document.querySelector("#theme")

//vou pegar o estilos do html
const initialColors = {
    bg: window.getComputedStyle(html).getPropertyValue('--bg'),
    preto: window.getComputedStyle(html).getPropertyValue('--preto'),
    roxo: window.getComputedStyle(html).getPropertyValue('--roxo'),
    rosa: window.getComputedStyle(html).getPropertyValue('--rosa')
} 
//faco as cores dark
const darkMode = {
    bg: "#333333",
    preto: "#fff",
    roxo: "#9a31eb",
    rosa: "#B34FFF"
} 

//aqui eu trasformo de bg para --bg
const transformKey = (key) => "--" + key

//aqui eu troco as cores
const changeColors = (colors) => {
    //pega as keys do obj colors e mapeio ela no css, trocando as cores
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

//pega o click
btnTheme.addEventListener('click', () => {
    //se tiver o simbolo da lua quer dizer q esta no tema light, entao eu troco as cores
    if(btnTheme.classList.contains('fa-moon')){
        btnTheme.classList.remove('fa-moon');
        btnTheme.classList.add('fa-sun');
        changeColors(darkMode)
    }
    //senao quer dizer q esta no tema dark, entao eu troco as cores

    else{
        btnTheme.classList.remove('fa-sun')
        btnTheme.classList.add('fa-moon')
        changeColors(initialColors)

    };
})
