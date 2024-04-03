import { productosServices } from "../services/producto-servicios.js";

const nuevoProducto = (imageUrl, name, price, id) => {
    const card = document.createElement('div');
    
    const contenido = `
    <div class="productos__caja">
        <img src="${imageUrl}" alt="image1-1">
        <p class="starWars__nombre">${name}</p>
        <p class="starWars__precio">$ ${price}</p>
        <a class="starWars__link" id="${id}" href="#">Ver producto</a>
    </div>
    `

    card.innerHTML = contenido;

    return card;
}

const productos = document.querySelector("[data-product]")

const render = async ()=> {
    try {
        const listaProducto = await productosServices.listaProductos()

        listaProducto.forEach(elemento => {
            productos.appendChild(
                nuevoProducto(
                    elemento.imageUrl,
                    elemento.name,
                    elemento.price,
                    elemento.id
                )
                )
        });
    } catch (error) {
        console.log(error);
    }
}

render();