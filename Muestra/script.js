const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});



/**/

// Obtener la ventana emergente y los elementos span
var modal = document.querySelector(".modal");
var span1 = document.getElementById("servicio1");
var span2 = document.getElementById("servicio2");
var span3 = document.getElementById("servicio3");
var span4 = document.getElementById("servicio4");
var span5 = document.getElementById("servicio5");
const closeBtn = document.querySelector('.close');
// Cuando se hace clic en el span 1, mostrar las imágenes correspondientes
span1.onclick = function() {
modal.style.display = "block";
modal.querySelector("img:nth-child(1)").src = "img/tazasublimada/servicio1-1.jpg";
modal.querySelector("img:nth-child(2)").src = "img/tazasublimada/servicio1-2.jpg";
modal.querySelector("img:nth-child(3)").src = "img/tazasublimada/servicio1-3.jpg";
}

// Agrega un evento de click al botón close
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el elemento modal
});
// Cuando se hace clic en el span 2, mostrar las imágenes correspondientes
span2.onclick = function() {
modal.style.display = "block";
modal.querySelector("img:nth-child(1)").src = "img/infopedidos/servicio2-1.jpg";
modal.querySelector("img:nth-child(2)").src = "img/infopedidos/servicio2-2.jpg";
modal.querySelector("img:nth-child(3)").src = "img/infopedidos/servicio2-3.jpg";
}

// Agrega un evento de click al botón close
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el elemento modal
});
// Cuando se hace clic en el span 3, mostrar las imágenes correspondientes
span3.onclick = function() {
modal.style.display = "block";
modal.querySelector("img:nth-child(1)").src = "img/gorras/servicio3-1.jpg";
modal.querySelector("img:nth-child(2)").src = "img/gorras/servicio3-2.jpg";
modal.querySelector("img:nth-child(3)").src = "img/gorras/servicio3-3.jpg";
}

// Agrega un evento de click al botón close
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el elemento modal
});
span4.onclick = function() {
    modal.style.display = "block";
    modal.querySelector("img:nth-child(1)").src = "img/diseño/servicio3-1.jpg";
    modal.querySelector("img:nth-child(2)").src = "img/diseño/servicio3-2.jpg";
    modal.querySelector("img:nth-child(3)").src = "img/diseño/servicio3-3.jpg";
    }
    
// Agrega un evento de click al botón close
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el elemento modal
});

span5.onclick = function() {
    modal.style.display = "block";
    modal.querySelector("img:nth-child(1)").src = "img/catalogo/servicio3-1.jpg";
    modal.querySelector("img:nth-child(2)").src = "img/catalogo/servicio3-2.jpg";
    modal.querySelector("img:nth-child(3)").src = "img/catalogo/servicio3-3.jpg";
    modal.querySelector("img:nth-child(4)").src = "img/catalogo/servicio3-4.jpg";
    modal.querySelector("img:nth-child(5)").src = "img/catalogo/servicio3-5.jpg";
    modal.querySelector("img:nth-child(6)").src = "img/catalogo/servicio3-6.jpg";
    modal.querySelector("img:nth-child(7)").src = "img/catalogo/servicio3-7.jpg";
    modal.querySelector("img:nth-child(8)").src = "img/catalogo/servicio3-8.jpg";
    modal.querySelector("img:nth-child(9)").src = "img/catalogo/servicio3-9.jpg";
    modal.querySelector("img:nth-child(10)").src = "img/catalogo/servicio3-10.jpg";
}

// Selecciona el botón close


// Agrega un evento de click al botón close
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Oculta el elemento modal
});




















// Cuando se

/*
// Obtener todos los elementos "card" y "span"
const cards = document.querySelectorAll(".card");
const spans = document.querySelectorAll("#servicios .card span");

// Obtener el contenedor de las imágenes
const imagenContainer = document.querySelector("#imagen-container");

// Definir los conjuntos de imágenes para cada span
const imagenesTaza = ["img/taza1.png", "img/taza2.png", "img/taza3.png"];
const imagenesPedidos = ["img/pedidos1.png", "img/pedidos2.png", "img/pedidos3.png"];
const imagenesGorras = ["img/gorra1.png", "img/gorra2.png", "img/gorra3.png"];
const imagenesDisenos = ["img/diseño1.png", "img/diseño2.png", "img/diseño3.png"];
const imagenesCatalogo = ["img/catalogo1.png", "img/catalogo2.png", "img/catalogo3.png"];

// Función para cambiar las imágenes
function cambiarImagenes(imagenes) {
  // Limpiar el contenedor de imágenes
imagenContainer.innerHTML = "";
  // Agregar las nuevas imágenes al contenedor
imagenes.forEach(imagen => {
    const img = document.createElement("img");
    img.src = imagen;
    imagenContainer.appendChild(img);
});
}

// Agregar un event listener a cada span
spans.forEach((span, index) => {
span.addEventListener("click", () => {
    // Obtener el conjunto de imágenes correspondiente al span
    let imagenes;
    switch (index) {
    case 0:
        imagenes = imagenesTaza;
        break;
    case 1:
        imagenes = imagenesPedidos;
        break;
    case 2:
        imagenes = imagenesGorras;
        break;
    case 3:
        imagenes = imagenesDisenos;
        break;
    case 4:
        imagenes = imagenesCatalogo;
        break;
    default:
        imagenes = [];
    }
    // Cambiar las imágenes en el contenedor
    cambiarImagenes(imagenes);
    });*/
