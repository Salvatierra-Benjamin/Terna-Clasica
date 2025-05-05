console.log("hola");
const pantalla = document.getElementById('pantalla');
const contenedor = document.getElementById('botones');
const botones = contenedor.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === "del") {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id === "borrar") {
            pantalla.textcontent = pantalla.textContent.slice(0, -1);
            return;
        }

        if (pantalla.textContent === '0') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += pantalla.textContent;
        }
    });
});