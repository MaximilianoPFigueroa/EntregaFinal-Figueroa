let pintarCarrito = () => {
    ventanaDelCarrito.innerHTML = ``;
    ventanaDelCarrito.style.display = "flex";
    let ventanaCarrito = document.createElement("div");
    ventanaCarrito.className = "ventana-encabezado"
    ventanaCarrito.innerHTML = `
                        <h1 class="titulo-ventana-encabezado"> Compras hasta el momento.</h1>
                        `
    ventanaDelCarrito.append(ventanaCarrito);

    let ventanaSalida = document.createElement("button")
    ventanaSalida.innerText = "X"
    ventanaSalida.className = "ventanaSalida"
    ventanaSalida.addEventListener('click', () => {
        ventanaDelCarrito.style.display = "none"
    })
    ventanaCarrito.append(ventanaSalida)

    carritoCompra.forEach((element) => {
        let contenidoCarrito = document.createElement("div")
        contenidoCarrito.className = "modal-content" 
        contenidoCarrito.innerHTML = `
                        <img class="imagen-card" src="${element.imagen}">
                        <h3 class="tituloCarrito">${element.nombre}</h3>
                        <h3 class="tituloCarrito"> Precio ${element.precio} </h3>
                        <span class="restarProducto"> - </span>
                        <p class="tituloCarrito"> Cant: ${element.cantidad}</p>
                        <span class="sumarProducto"> + </span>
                        <span class="ventanaSalida"> X </span>
                        `;
        ventanaDelCarrito.append(contenidoCarrito);

        let resta = contenidoCarrito.querySelector(".restarProducto")
        resta.addEventListener('click', () => {
            if (element.cantidad !== 1) {
                element.cantidad--;
            }
            memoria();
            pintarCarrito();

        })
        let suma = contenidoCarrito.querySelector(".sumarProducto")
        suma.addEventListener('click', () => {
            element.cantidad++
            memoria();
            pintarCarrito();
        });
        let eliminarElemento = contenidoCarrito.querySelector(".ventanaSalida");

        eliminarElemento.addEventListener('click', () => {
            quitarProductoCarrito(element.id)

        })
    });

    let costoFinal = carritoCompra.reduce((acc, produ) => acc + produ.precio * produ.cantidad, 0);
    let costo = document.createElement("div");
    costo.className = "costo-generado"
    costo.innerHTML = `Precio final: $ ${costoFinal}`;
    ventanaDelCarrito.append(costo);
};
mostrarCarrito.addEventListener('click', pintarCarrito);
let quitarProductoCarrito = (id) => {
    let encontrarId = carritoCompra.find((e) => e.id === id);
    carritoCompra = carritoCompra.filter((idEncontradoCarrito) => {
        return idEncontradoCarrito !== encontrarId;
    });
    memoria();
    pintarCarrito();
};