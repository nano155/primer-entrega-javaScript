alert(`**********Bienvenidos a gift makers*************`);
const mostrar = () => {
  dato = parseInt(prompt(`selecciona la opcion que quieras usar \n
         1. Para ver la opcion de tortas \n
         2. Para ver la opcion de postres \n
         3. Para ver la opcion de caketopper \n
         4. para salir y ver el total de tu pedido`));

  return dato;
};
let opcion = mostrar();
let pasteles = [20000, 25000, 30000];
let pastelesNombres =['torta de chocolate', 'torta de vainilla', 'torta de durazno']
let postres = [15000, 18000];
let postresNombre = ['postre de 3 leches', 'postre de gelatina']
let arreglos = 23000;
let arreglo = 'arreglo'

const carritoCompras = [];
const carritoItems =[];

let validacion;

const comprobante = (dato) => {
  return isNaN(dato) ? (validacion = false) : (validacion = true);
};
comprobante(opcion);
while (opcion !== 4) {
  if (validacion == true) {
    switch (opcion) {
      case 1:
       dato = parseInt(prompt(`Elegiste la opcion tortas, digite el pastel que quiere agregar a su carro de compras \n
                                        1. torta de chocolate $20.000 \n
                                        2. torta de vainilla $25.000 \n
                                        3. torta de durazno $30.000`));
        comprobante(dato);
        if (validacion == true) {
          switch (dato) {
            case 1:
              carritoCompras.push(pasteles[0]);
              carritoCompras.push(pastelesNombres[0]);
              break;
            case 2:
              carritoCompras.push(pasteles[1]);
              carritoItems.push(pastelesNombres[1]);
              break;
            case 3:
              carritoCompras.push(pasteles[2]);
              carritoItems.push(pastelesNombres[2]);
              break;

            default:
              break;
          }
        }
        break;
      case 2:
        dato = parseInt(prompt(`Elegiste la opcion postres, digite el postre que quiere agregar a su carro de compras \n
          1. postre de 3 leches $15.000 \n
          2. postre de gelatina $18.000`));
        comprobante(dato);
        if (validacion == true) {
          switch (dato) {
            case 1:
              carritoCompras.push(postres[0]);
              carritoItems.push(postresNombre[0])
              break;
            case 2:
              carritoCompras.push(postres[1]);
              carritoItems.push(postresNombre[1])
              break;
            default:
              break;
          }
        }
        break;
      case 3:
        dato = parseInt(prompt(`Elegiste la opcion arreglos, digite a continuacion si desea nuestros servicios \n
        1. nuestro servicio de arreglos tiene un valor de $23.000`));
        console.log(dato);
        comprobante(dato);
        if (validacion == true) {
          switch (dato) {
            case 1:
              carritoCompras.push(arreglos);
              carritoItems.push(arreglo)
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
  opcion = mostrar();
  comprobante(opcion);
}

if (carritoCompras.length > 0){
  const total = carritoCompras.reduce((a , b)=>{
  
    return a+b;
  });
  
  let items=[];
  
  for (let index = 0; index < carritoCompras.length; index++) {
    const element = carritoCompras[index].toString();
    const element2 = carritoItems[index].toString();
    
  
  items =items + (` Item ${element2} : ${element}\n`)
  }
  alert(`Usted compro : \n${items}\nEl total de su compra fue de $${total}`);
}else{
  alert('El total de su compra es 0');
}