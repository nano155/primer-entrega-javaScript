const mostrar = () => {
  alert(`**********Bienvenidos a gift makers************* \n 
  selecciona la opcion que quieras usar \n
         1. Para ver la opcion de tortas \n
         2. Para ver la opcion de postres \n
         3. Para ver la opcion de caketopper \n
         4. para salir y ver el total de tu pedido`);
  dato = parseInt(prompt("Digite su opcion"));
  return dato;
};
let opcion = mostrar();
let pasteles = [20000, 25000, 30000];
let postres = [15000, 18000];
let arreglos = 23000;

const carritoCompras = [];

let validacion;

const comprobante = (dato) => {
  return isNaN(dato) ? (validacion = false) : (validacion = true);
};
comprobante(opcion);
console.log(opcion);
console.log(validacion);

while (opcion !== 4) {
  if (validacion == true) {
    switch (opcion) {
      case 1:
        alert(`Elegiste la opcion tortas, digite el pastel que quiere agregar a su carro de compras \n
                                        1. torta de chocolate $20.000 \n
                                        2. torta de vainilla $25.000 \n
                                        3. torta de durazno $30.000`);
        dato = parseInt(prompt());
        console.log(dato);
        comprobante(dato);
        if (validacion == true) {
          switch (dato) {
            case 1:
              console.log(pasteles[0]);
              carritoCompras.push(pasteles[0]);
              break;
            case 2:
              console.log(pasteles[1]);
              carritoCompras.push(pasteles[1]);
              break;
            case 3:
              console.log(pasteles[2]);
              carritoCompras.push(pasteles[2]);
              break;

            default:
              break;
          }
        }
        break;
      case 2:
        alert(`Elegiste la opcion postres, digite el postre que quiere agregar a su carro de compras \n
          1. postre de 3 leches $15.000 \n
          2. pastel de gelatina $18.000`);
        dato = parseInt(prompt());
        console.log(dato);
        comprobante(dato);
        if (validacion == true) {
          switch (dato) {
            case 1:
              carritoCompras.push(postres[0]);
              break;
            case 2:
              carritoCompras.push(postres[1]);
              break;
            default:
              break;
          }
        }

        break;
      case 3:
        alert(`Elegiste la opcion arreglos, digite a continuacion si desea nuestros servicios \n
        1. nuestro servicio de arreglos tiene un valor de $23.000`);
        dato = parseInt(prompt());
        console.log(dato);
        comprobante(dato);
        if (validacion == true) {
          switch (dato) {
            case 1:
              carritoCompras.push(arreglos);
              break;
            default:
              break;
          }
        }
        break;
      default:
        console.log("presionaste una opcion incorrecta");
        break;
    }
  } else {
    console.log("El dato ingresado es incorrecto");
  }
  console.log(carritoCompras);
  opcion = mostrar();
  comprobante(opcion);
}


const total = carritoCompras.reduce((a , b)=>{

  return a+b;
});

alert(`El total de su compra fue de ${total}`)