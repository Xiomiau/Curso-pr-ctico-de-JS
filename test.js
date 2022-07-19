const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form')


form.addEventListener('submit', escuchandoclick);



function escuchandoclick(event) {
    const sumaI =  Number(input1.value) + Number(input2.value)
    event.preventDefault()
    pResult.innerHTML = "El resultado es: " + sumaI
}


