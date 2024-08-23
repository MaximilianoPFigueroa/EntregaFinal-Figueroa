let mostrarCarrito = document.getElementById("carritoCompra") //Variable para mostrar el carrito al clickear al carrito
let ventanaDelCarrito = document.getElementById("ventanaContenedora") //Variable para seleccionar el div de la ventana modal
let carritoCompra = JSON.parse(localStorage.getItem("carritoCompra")) || [];

let informacionProductos = async () => { 
    let info = await fetch("informacion.json");
    let cargaDeInfo = await info.json();

const galeria = document.getElementById('galeria');
cargaDeInfo.forEach((producto) => {
    let productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    productoDiv.innerHTML = `
    <div class="card-deck">
        <div class="card">
            <img class="imagen-card" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-body">
                <h2 class="card-title">${producto.nombre}</h2>
                <h4> ${producto.descripcion} </h4>
                <p class="card-text">Este producto, hecho con materiales 100% reciclados, representa solo una de nuestras soluciones para acabar con los residuos plásticos.</p>
                <h3> Precio: $${producto.precio} </h3>
            </div>
        </div>
    </div>`;
    galeria.append(productoDiv);
    let compra = document.createElement("button")
    compra.className = "compra"
    compra.innerHTML = 'COMPRA';
    productoDiv.append(compra);
    compra.addEventListener('click', () => {
        let productoRepetido = carritoCompra.some((repetido) => repetido.id === producto.id)
        if (productoRepetido) {
            carritoCompra.map((e) => {
                if (e.id === producto.id) {
                    console.log(carritoCompra);
                }
            });
        } else {
            carritoCompra.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: producto.cantidad,
                talle: producto.talle,
            });
            console.log(carritoCompra);
            memoria();
        }
    });
});
    console.log(cargaDeInfo);
}
informacionProductos();

let memoria = () => {
    localStorage.setItem("carritoCompra", JSON.stringify(carritoCompra));
};