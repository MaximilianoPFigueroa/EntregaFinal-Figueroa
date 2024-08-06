//Ingreso de tipos de camisetas
//Boton Sesion


let buttonSesion = document.createElement('button');
buttonSesion.type='button';
buttonSesion.innerHTML='Inicio de Sesión';
document.body.appendChild(buttonSesion)

//Boton de Registro
let buttonRegistro = document.createElement('button');
buttonRegistro.type='button';
buttonRegistro.innerHTML='Registro';
document.body.appendChild(buttonRegistro)

//H1



buttonSesion.addEventListener('click',() => {

    location.href = './pages/sesion.html'
})
document.addEventListener('click', () => {
    const formulario = document.getElementById('miFormulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Esto para que evitar la accion que hace submit por defecto

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        if (nombre === '' || email === '') {
            mensaje.textContent = 'Por favor, rellena todos los campos.';
        } else {
            mensaje.textContent = `Agradecemos tu logeo, te esperamos en la próxima visita, ${nombre}!`;
        }
    });
});
const productos = [
    {
        id: 1,
        nombre: ' Barcelona',
        precio: 94.99,
        descripcion: 'Camiseta Titular 24/25!',
        imagen: 'https://acdn.mitiendanube.com/stores/002/292/348/products/c2cadbdb1-ffd56ed1b8d6729bfa16868555846885-480-0.jpg'
    },
    {
        id: 2,
        nombre: 'Real Madrid',
        precio: 94.99,
        descripcion: 'Camiseta Titular 24/25!',
        imagen: 'https://acdn.mitiendanube.com/stores/004/615/161/products/3179c1e6-f624616f187c28128e17171953608769-1024-1024.jpg'
    },
    {
        id: 3,
        nombre: 'Manchester City',
        precio: 94.99,
        descripcion: 'Camiseta Titular 24/25!',
        imagen: 'https://acdn.mitiendanube.com/stores/002/292/348/products/185bd5ff-5d32-4a7e-8026-0c6125f770801-183782ae82ccd6835b16845540125047-640-0.jpeg'
    }
];
const galeria = document.getElementById('galeria');
        productos.forEach((producto) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <button> Comprar </button>
                <button> Ver Producto </button>
            `;
            galeria.appendChild(productoDiv);
        });
