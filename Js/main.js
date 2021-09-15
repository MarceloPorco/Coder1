var pizzagrande = 0.25;
var pizzachica = 0.9;

const pizzas = [
  { nombre: "Muzzarella", valor: 2.5 },
  { nombre: "Fugazzeta", valor: 2.7 },
  { nombre: "Margueritta", valor: 2.7 },
  { nombre: "Napolitana", valor: 3.1 },
  { nombre: "NapolitanaEspecial", valor: 3.3 },
  { nombre: "Anana", valor: 3.2 },
  { nombre: "PancetaYHuevoFrito", valor: 3.5 },
  { nombre: "Decancha", valor: 2.6 },
];

for (pizza of pizzas) {
  var preciogde = (pizza.valor + pizzagrande) * 200;
  var precioCca = pizzaCca(preciogde, pizzachica);
  pizzaCca(preciogde, pizzachica);
  function pizzaCca(muzza, chica) {
    total = muzza * chica;
    return total;
  }

  let idhtml = document.getElementById(`${pizza.nombre}`);
  let preciohtml = document.createElement("p");
  preciohtml.innerHTML = ` 
    <p class="card-text h4"> Pizza Grande: <b>$${preciogde}</b> </p> <br>
    <p class="card-text h4"> Pizza Chica: <b> $${precioCca}</b> </p>`;
  idhtml.appendChild(preciohtml);
}

// let btnEnviar = document.getElementById ("enviar");
// // let nombreUser = document.getElementById ("nombreUser").value;  
// // let  mailUser = document.getElementById ("mailUser").value;
// btnEnviar.addEventListener (`click`,() => {
//   var nombreUser = document.getElementById ("nombreUser").value;  
//   var mailUser = document.getElementById ("mailUser").value;
//  alert (`Buen dia ${nombreUser}, el comentario que usted escribio se contestara en las proximas 48hs al siguiente mail: "${mailUser}"`)
// })
let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener(`click`,()=>{ 
  var nombreUser = document.getElementById("nombreUser").value;
  var mailUser = document.getElementById("mailUser").value ;
  alert (`Buen dia ${nombreUser}, el comentario que usted escribio se contestara en las proximas 48hs al siguiente mail: "${mailUser}"`)
})

