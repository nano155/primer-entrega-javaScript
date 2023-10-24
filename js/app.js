const carrito = document.querySelector("#carrito");
const listaProductos = document.querySelector("#productos-pasteles");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let arregloLista = [];

function cargarListener() {
  listaProductos.addEventListener("click", agregarProducto);
  carrito.addEventListener("click", borrarProducto);
  document.addEventListener("DOMContentLoaded", ()=>{
    arregloLista = JSON.parse(localStorage.getItem('carrito'))|| [];
    carritoHTML();
  })

  vaciarCarritoBtn.addEventListener("click", ()=>{
    arregloLista = [];
    limpiarHTML();
  })
}

const agregarProducto = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("boton")) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        
        leerDatos(productoSeleccionado);
    }
};

const borrarProducto =(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("borrar-boton")){
        const productoId = e.target.getAttribute('data-id');

        arregloLista = arregloLista.filter(producto => producto.id !== productoId)
        
        carritoHTML();
    };
}

const leerDatos = (producto) => {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector("h3").textContent,
    precio: producto.querySelector("p").textContent,
    id: producto.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  const existe = arregloLista.some(producto =>producto.id === infoProducto.id)
  if(existe){
    const productos = arregloLista.map(producto =>{
        if(producto.id === infoProducto.id){
           producto.cantidad ++;
           return producto;
        }else{
            return producto;
        }
    })
    arregloLista=[...productos]
  }else{
      arregloLista = [...arregloLista, infoProducto];
  }

  carritoHTML();
};

const carritoHTML = () => {
  limpiarHTML();

  arregloLista.forEach((producto) => {
    const {imagen, nombre, precio, cantidad, id} = producto;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${imagen}" width = "100">
        </td>
        <td>
            ${nombre}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
        <a href='#' class="borrar-boton" data-id="${id}"> X</a>
        </td>
        `;

    contenedorCarrito.appendChild(row);
  });

  sincronizarStorage();

};

const sincronizarStorage =()=>{
    localStorage.setItem('carrito', JSON.stringify(arregloLista))
}

const limpiarHTML = () => {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
};
cargarListener();
