var pizzagrande = 0.25;
var pizzachica = 0.9;
const pizzas = [
  { nombre: "Muzzarella", valor: 2.5, id:1, tipo:"pizzas" },
  { nombre: "Fugazzeta", valor: 2.7, id:2, tipo:"pizzas" },
  { nombre: "Margueritta", valor: 2.7, id:3, tipo:"pizzas" },
  { nombre: "Napolitana", valor: 3.1, id:4, tipo:"pizzas" },
  { nombre: "Napolitana especial", valor: 3.3, id:5, tipo:"pizzas" },
  { nombre: "Anana", valor: 3.2, id:6, tipo:"pizzas" },
  { nombre: "Panceta Y Huevo Frito", valor: 3.5, id:7, tipo:"pizzas" },
  { nombre: "Decancha", valor: 2.6, id:8, tipo:"pizzas" }
];
const fainas =[
  {  nombre: "Faina", valor: 270, id:40, tipo:"fainas" },
  {  nombre: "Faina con albahaca", valor: 330, id:41, tipo:"fainas" },
  {  nombre: "Faina especial", valor: 420, id:42, tipo:"fainas" },
  {  nombre: "Faina al verdeo", valor: 330, id:43, tipo:"fainas" },
  {  nombre: "Faina rellena", valor: 510, id:44, tipo:"fainas" }
];
const pastas =[
  {  nombre: "Pastas con cherrys y albahaca", valor: 270, id:55, tipo:"pastas"},
  {  nombre: "Pasta 4 quesos", valor: 330, id:56, tipo:"pastas"},
  {  nombre: "Pasta al pesto", valor: 420, id:57, tipo:"pastas"},
  {  nombre: "Pasta con salsa bolognesa", valor: 330, id:58, tipo:"pastas"},
  {  nombre: "Pasta con salsa blanca y bacon", valor: 510, id:59, tipo:"pastas"},
  {  nombre: "Tallarines con camarones", valor: 570, id:60, tipo:"pastas"},
  {  nombre: "Tallarines con salteado de verduras", valor: 430, id:61, tipo:"pastas"}
];
const pastasrell =[
  {  nombre: "Canelones con ricota", valor: 410, id:80, tipo:"pastasrell" },
  {  nombre: "Canelones de verdura", valor: 410, id:81, tipo:"pastasrell" },
  {  nombre: "Lasagna de carne", valor: 510, id:82, tipo:"pastasrell" },
  {  nombre: "Lasagna veggie", valor: 520, id:83, tipo:"pastasrell" },
  {  nombre: "Ravioles con estofado", valor: 460, id:84, tipo:"pastasrell" },
  {  nombre: "Ravioles salsa rosada", valor: 450, id:85, tipo:"pastasrell" }
];
const hamburguesas =[
  {  nombre: "Hamburguesa completa", valor: 450, id:95, tipo:"hamburguesas" },
  {  nombre: "Hamburguesa especial", valor: 460, id:96, tipo:"hamburguesas" },
  {  nombre: "Hamburguesa con huevo frito", valor: 480, id:97, tipo:"hamburguesas" },
  {  nombre: "Hamburguesa con lechuga y tomate", valor: 410, id:98, tipo:"hamburguesas" },
  {  nombre: "Hamburguesa con panceta", valor: 460, id:99, tipo:"hamburguesas" },
  {  nombre: "Hamburguesa doble de panceta", valor: 550, id:100, tipo:"hamburguesas" },
  {  nombre: "Hamburguesa doble especial", valor: 530, id:101, tipo:"hamburguesas" }
];
const postres =[
  {  nombre: "Cheesecake", valor: 320, id:130, tipo:"postres" },
  {  nombre: "Copa helada", valor: 250, id:131, tipo:"postres" },
  {  nombre: "Panqueque de manzana", valor: 260, id:132, tipo:"postres" },
  {  nombre: "Panqueque con dulce de leche", valor: 260, id:133, tipo:"postres" },
  {  nombre: "Selva negra", valor: 350, id:134, tipo:"postres" },
  {  nombre: "Tiramisu", valor: 380, id:135, tipo:"postres" }
];
let Cards = pizzas.concat(fainas).concat(pastas).concat(pastasrell).concat(hamburguesas).concat(postres);
for (card of Cards){
  var idhtml = document.getElementById(`${card.tipo}`);
  var cartas = document.createElement("div");

  if (card.tipo =="pizzas"){      
    let preciogde = (card.valor + pizzagrande) * 200;
    cartas.innerHTML = ` 
      <div class="col" id="${card.id}" >
        <div class="card">
          <img src="../Images/${card.tipo}/img-${card.id}.jpg" class="card-img-top" alt="${card.nombre}">
          <div class="card-body card__body--bg" >
            <h5 class="card-title text-center h2 ">${card.nombre}</h5>
            <p class="card-text h4"> Pizza Grande: <b>$${preciogde}</b> </p> <br>
            <p class="card-text h4"> Pizza Chica: <b> $${preciogde * pizzachica}</b> </p>
            <button class= "btn btn-success" id="id:${card.id}">Comprar</button>
          </div>
        </div>
      </div> `
   idhtml.appendChild(cartas);
 }
  else if (card.tipo =="fainas"){
    cartas.innerHTML = ` 
      <div class="col" id="${card.id}" >
        <div class="card">
          <img src="../Images/${card.tipo}/img-${card.id}.jpg" class="card-img-top" alt="${card.nombre}">
          <div class="card-body card__body--bg" >
            <h5 class="card-title text-center h2 ">${card.nombre}</h5>
            <p class="card-text h4"> Entera: <b>$${card.valor}</b> </p> <br>
            <p class="card-text h4"> Porcion: <b> $${card.valor * 0.15}</b> </p>
          </div>
        </div>
      </div> `
  idhtml.appendChild(cartas);
  }
  else {
    cartas.innerHTML = ` 
      <div class="col" id="${card.id}" >
        <div class="card">
          <img src="../Images/${card.tipo}/img-${card.id}.jpg" class="card-img-top" alt="${card.nombre}">
          <div class="card-body card__body--bg" >
            <h5 class="card-title text-center h2 ">${card.nombre}</h5>
            <p class="card-text h4"> Precio: <b>$${card.valor}</b> </p> <br>
          </div>
        </div>
      </div> `
  idhtml.appendChild(cartas);
  }
    }























// for (pizza of pizzas) {
//   var preciogde = (pizza.valor + pizzagrande) * 200;
//   var precioCca = pizzaCca(preciogde, pizzachica);
//   pizzaCca(preciogde, pizzachica);
//   function pizzaCca(muzza, chica) {
//     total = muzza * chica;
//     return total;
//   }

//   let idhtml = document.getElementById("pizzas");
//   let cardpizzas = document.createElement("div");
//   cardpizzas.innerHTML = ` 
//   <div class="col" id="${pizza.id}" >
//   <div class="card">
//     <img src="../Images/img-${pizza.id}.jpg" class="card-img-top" alt="${pizza.nombre}">
//     <div class="card-body card__body--bg" >
//       <h5 class="card-title text-center h2 ">${pizza.nombre}</h5>
//       <p class="card-text h4"> Pizza Grande: <b>$${preciogde}</b> </p> <br>
//       <p class="card-text h4"> Pizza Chica: <b> $${precioCca}</b> </p>
//     </div>
//   </div>
// </div> `
//   idhtml.appendChild(cardpizzas);
// }















