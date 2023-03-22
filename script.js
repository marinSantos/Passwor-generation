let passInput = document.getElementById('passInput')
let caracterN = document.getElementById('caracterN')
let quantity = document.getElementById('quantity')
let caracterRange = document.getElementById('caracterRange')
let copy = document.getElementById('copy')
let gerar = document.getElementById('gerar')

let uper = document.getElementById('uper')
let lower = document.getElementById('lower')
let number = document.getElementById('number')
let simbol = document.getElementById('simbol')


const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbolsArr = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaractersArr = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaractersArr = LowercaseCaractersArr.map((item) => item.toUpperCase());


copy.addEventListener('click', () => {

    navigator.clipboard.writeText(passInput.value)
})

caracterN.innerHTML = caracterRange.value

caracterRange.addEventListener('change', function () {
    caracterN.innerHTML = caracterRange.value
    let nvl1 = document.getElementById('nvl1')
    let nvl2 = document.getElementById('nvl2')
    let nvl3 = document.getElementById('nvl3')
    let nvl4 = document.getElementById('nvl4')


    if (caracterRange.value == 0) {
        nvl1.style.backgroundColor = '#a5ffaf00'
        nvl2.style.backgroundColor = '#a5ffaf00'
        nvl3.style.backgroundColor = '#a5ffaf00'
        nvl4.style.backgroundColor = '#a5ffaf00'
    }
    else if (caracterRange.value >= 1 && caracterRange.value <= 5) {
        nvl1.style.backgroundColor = '#A5FFAF'
        nvl2.style.backgroundColor = '#a5ffaf00'
        nvl3.style.backgroundColor = '#a5ffaf00'
        nvl4.style.backgroundColor = '#a5ffaf00'
    } else if (caracterRange.value >= 6 && caracterRange.value <= 10) {
        nvl1.style.backgroundColor = '#A5FFAF'
        nvl2.style.backgroundColor = '#A5FFAF'
        nvl3.style.backgroundColor = '#a5ffaf00'
        nvl4.style.backgroundColor = '#a5ffaf00'
    } else if (caracterRange.value >= 11 && caracterRange.value <= 15) {
        nvl1.style.backgroundColor = '#A5FFAF'
        nvl2.style.backgroundColor = '#A5FFAF'
        nvl3.style.backgroundColor = '#A5FFAF'
        nvl4.style.backgroundColor = '#a5ffaf00'
    } else if(caracterRange.value >= 16 && caracterRange.value == 20 ){
        nvl1.style.backgroundColor = '#A5FFAF'
        nvl2.style.backgroundColor = '#A5FFAF'
        nvl3.style.backgroundColor = '#A5FFAF'
        nvl4.style.backgroundColor = '#A5FFAF'
    }

   
})


 

gerar.addEventListener('click', () => {
    gerarSenha(number.checked, simbol.checked, uper.checked, lower.checked, caracterRange.value)
})

function gerarSenha(numbers, symbols, upers, lowers, lenght) {

    const newArr = [
        ...(numbers ? numbersArr : []),
        ...(symbols ? symbolsArr : []),
        ...(upers ? UppercaseCaractersArr : []),
        ...(lowers ? LowercaseCaractersArr : [])
    ]

    if (newArr.length === 0) return;

    let password = ""

    for (let i = 0; i < lenght; i++) {
        const random = Math.floor(Math.random() * newArr.length)
        password += newArr[random]
    }
    passInput.value = password

    console.log(newArr)
}







