let binary = document.querySelector('input.binary')
let result = document.querySelector('div.result')
const btnConverter = document.querySelector('button.converter')
let decimal = 0

btnConverter.addEventListener('click', converterBinarios)

function converterBinarios() {
    const regexBinario = /^[01]+$/

    if (!regexBinario.test(Number(binary.value))) {
        result.innerHTML = "DIGITE APENAS 0 e 1"
        result.style.backgroundColor = "#8B0000"
        result.style.color = "#FFFFFF"
    } else {
        decimal = 0
        for(let i = 0, c = Number(binary.value.length) - 1; c >= 0; i++ ,c--){
            decimal += Number(binary.value[c]) * Math.pow(2,i)
            result.style.backgroundColor = "#006188"
            result.style.boxShadow = "1px 10px 20px #1F1F20"
            result.innerHTML = `${decimal}`
        }
    }
}
