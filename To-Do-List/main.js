console.log("hola prueba");

//const cuadro = document.querySelector('ol');
const items = document.getElementById("listaTarea");

const itemAgregado = document.createElement('li');
itemAgregado.textContent = 'Nuevo item';

items.appendChild(itemAgregado);