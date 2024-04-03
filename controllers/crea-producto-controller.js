import { productosServices } from "../services/producto-servicios.js";

const form = document.querySelector('[data-form');

form.addEventListener("submit", evento => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const nombre = document.querySelector('[data-nombre]').value
    const precio = document.querySelector('[data-precio]').value

    console.log(url, nombre, precio);

    productosServices
    .creaProductos(nombre, url, precio)
    .then(respuesta => {
        window.location.href = '../index.html'
        console.log(respuesta);
    })
    .catch(error => {
        console.log(error);
    });
})