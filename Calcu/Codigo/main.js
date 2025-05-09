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
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error";
            }

            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});