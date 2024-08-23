let h1 = document.getElementById("titulo")
h1.innerHTML = 'Planeta Kazak  '

let contenedor = document.getElementById("contenedor")
contenedor.innerHTML = `
    <p>
        Bienvenido al mejor sitio Web en ventas de camisetas de futbol. Disponemos de los mejores modelos de clubes y países de Europa y América.
    </p>
    <h2>Aquí puede encontrar las mejores y recientes salidas del mercado a nivel mundial de camisetas futbol </h2> 
`;
document.addEventListener('DOMContentLoaded', () => {
    // Crear el contenido del footer como una cadena de HTML
    const footerContent = `
        <footer>
            <p>&copy;  Las camisetas de Kazak, las mejores. Todos los derechos reservados.2024</p>
            <nav>
                <ul >
                    <a href="/about">Kasak es tu lugar!</a>
                    <a href="/contact">Charlemos</a>
                    <a href="/privacy">Cómo comprar</a>
                    <a href="/privacy">Política de Cambio</a>
                    <a href="/privacy">Política de privacidad</a>
                </ul>
            </nav>
        </footer>
    `;
    const footerDiv = document.createElement('div');
    footerDiv.innerHTML = footerContent;
    document.body.appendChild(footerDiv);
});
