//get html/css
const html = document.querySelector("html");

//get checkbox
const checkbox = document.querySelector("input[name=theme");


//pego as cores iniciais e as do black theme
const initialColors = {
    bg: window.getComputedStyle(html).getPropertyValue('--bg-color'),
    preto: window.getComputedStyle(html).getPropertyValue('--preto'),
    roxo: window.getComputedStyle(html).getPropertyValue('--roxo'),
    rosa: window.getComputedStyle(html).getPropertyValue('--rosa')
} 

const darkMode = {
    bg: "#333333",
    preto: "#fff",
    roxo: "#9a31eb",
    rosa: "#B34FFF"
} 


const transformKey = (key) => "--" + key


//funcao para mudar de cores
const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

//basicamente, sempre q ouver um evento no checkbox ele ira realizar essa funcao. ? = if ternario, taret = alvo
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

