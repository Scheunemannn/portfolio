let ptbr = document.getElementById('pt-br')
let titulo = document.getElementById('titulo')
let lenguage = 0
let theme = document.getElementById('theme')
let themeCounter = 0
let global = document.getElementById('globall')


const themeChange = () => {
    themeCounter++
    const verificaTheme = () => {
        if (themeCounter >= 2) {
            themeCounter = 0;
            global.style.backgroundColor='white'
            global.style.color='black'
            global.style.transition='1s'
        } 
        else  {
            global.style.backgroundColor='black'
            global.style.color='white'
            global.style.transition='1s'
            
        }
       
    
    }
    console.log(themeCounter)
    verificaTheme()
}





const incremento = () => {
    lenguage++
    const verificadora = () => {
        if (lenguage >= 2) {
            lenguage =0;
            ptbr.innerHTML= 'pt'
            titulo.innerHTML='GAY'
        } 
        else {
            ptbr.innerHTML= 'en'
            titulo.innerHTML='PUTO'
        }
    }
    verificadora()
}









