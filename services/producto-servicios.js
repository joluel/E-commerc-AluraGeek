//GET: seria el read en el metodo crud
const listaProductos = () => {
    return fetch("http://localhost:3000/producto")
            .then(respuesta => respuesta.json())
            .catch(error => console.log(error))
}

//POST
const creaProductos = (name, imageUrl, price)=> {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price,
        })
    })
    .then(respuesta=> {
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error("No se pudo crear el producto");
    });
};

export const productosServices = {
    listaProductos,
    creaProductos,
}