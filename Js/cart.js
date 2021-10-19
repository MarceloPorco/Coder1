// $(() => { 
//     $("#btn-cart" ).click(()=>{
//       $("#cart-style").toggle(500)   })


//       $("#btn-up").click(()=>{
//         $("#cart-style").css({height:"40%"});    })

//     $("#btn-down").click(()=>{  
//       $("#cart-style").css({height:"20%"});    })  
//    })  
    
    let cart = document.getElementById(`cart`);
    let cartProduct= document.getElementById(`cartProduct`)
    let btnCart = document.getElementById(`btn-cart`)
    let btnClose = document.getElementById(`btn-close`);
    let btnUp = document.getElementById(`btn-up`)
    let cartTotal = document.getElementById(`total`)
    let carrito = {}

    // EventDelegation para tomar los btn de  compra del dom
menu.addEventListener(`click`, e =>{
  añadirCarrito(e)
})
const añadirCarrito = e => {
  if (e.target.classList.contains(`btn-success`)){
    agregarCarrito(e.target.closest(`.card-body`))
  // agregarCarrito(e.target.parentElement.parentElement)
  }
  else if (e.target.classList.contains(`btn-danger`)){
    agregarCarritoVariable(e.target.closest(`.card-body`));
  }
  e.stopPropagation()
}
// crear el array con los productos del btn verde
const agregarCarrito = producto =>{
  const objectCart={
    nombre : producto.querySelector('h5').textContent,
    precio : Number(producto.querySelector(`.precio`).textContent.replace(`$`, ``)),
    id: producto.id,
    cantidad: 1
}
  if (carrito.hasOwnProperty(objectCart.id)){
    objectCart.cantidad = carrito[objectCart.id].cantidad + 1;
}
  carrito[objectCart.id]= {...objectCart}
  sendDatos(objectCart)
}
// crear el array con los productos del btn rojo
const  agregarCarritoVariable = producto =>{
  const objetoCartV={
    nombre : producto.querySelector('h5').textContent,
    precio :  Number(producto.querySelector(`.precioV`).textContent.replace(`$`, ``)),
    id: producto.querySelector('h5').id,
    cantidad: 1
  }
  if (carrito.hasOwnProperty(objetoCartV.id)){
    objetoCartV.cantidad = carrito[objetoCartV.id].cantidad + 1;
  }
  carrito[objetoCartV.id]= {...objetoCartV}
  sendDatos(objetoCartV)
 }
// sube los resultados al carrito
const sendDatos = () => {
  Object.values(carrito).forEach( producto => {
    var tablas = document.createElement(`tr`);
    tablas.innerHTML = `
     <tr>
       <th scope="row">${producto.nombre}</th>
       <td>${producto.cantidad}</td>
       <td><button class="btn btn-success">Vaciar</button></td>
       <td> ${producto.precio * producto.cantidad} </td>
     </tr>`
cartProduct.appendChild(tablas)
})
const quantity = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
let total = Object.values(carrito).reduce((acc, {cantidad , precio}) => acc + cantidad * precio, 0)
cartTotal.textContent= total
};

// function totalPrice (total){
//   cartTotal.textContent(total)
// }


 
// funciones del carrito
// Agrega clases: evento, ubicacion , clase
function addClass(e,domElement, clase) {
  domElement.classList.add(clase);
  e.stopPropagation}
// funcion que si hay una clase la borra pero si no esta la agrega: evento, ubicacion,clase
function toggle (e,domElement,clase){ 
  if ( domElement.classList.contains(clase)){
    domElement.classList.remove(clase);
} else{
  addClass (e,domElement,clase)
  e.stopPropagation
} }
// Funcion que remplaza clases: Evento, lugar de cambio, clase que esta, clase que pones
function replace(e,domElement, clase1, clase2){
  if (domElement.classList.contains(clase1) && (e))
  {
    domElement.classList.remove(clase1);
    domElement.classList.add(clase2);   } 
  else if(domElement.classList.contains(clase2) && (e)){ 
    domElement.classList.remove(clase2);
    domElement.classList.add(clase1);
   } 
}
// btn dentro del carrito
btnClose.addEventListener(`click`, e =>{
  addClass(e,cart,"d-none")
})
btnCart.addEventListener(`click`, e=>{
  toggle(e,cart,"d-none")
})
btnUp.addEventListener(`click`, e =>{
  replace (e,btnUp ,"fa-sort-up","fa-sort-down" )
  toggle (e, cart, "cart35")
})
