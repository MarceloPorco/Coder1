// CARDS
const Json ="product.json";
const menu = document.getElementById(`menu`)

fetch(Json)
    .then(req =>req.json())
    .then(res=> { cards(res.data)
    })
    .catch(error => console.log(error));

function cards(productos) {
  for (let producto of productos){ 
    var cartas = document.createElement("div"); 
    cartas.innerHTML = ''   
    let idhtml = document.getElementById(`${producto.tipo}`);    
  if (producto.tipo =="pizzas"){   
      cartas.innerHTML = ` 
      <div class="col">
        <div class="card h-100 shadow-sm"> <img src="../Images/${producto.tipo}/img-${producto.id.grande}.jpg">
          <div class="card-body" id="${producto.id.grande}">
            <h5 class="card-title text-center" id= "${producto.id.chica}">${producto.nombre}</h5>
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-dark">Pizza grande:</span> <span class="float-end badge rounded-pill bg-dark precio">$${producto.valor.grande}</span> </div>
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-secondary">Pizza chica:</span>  <span class="float-end badge rounded-pill bg-secondary precioV">$${producto.valor.chica}</span></div>
            <div class="text-center my-4"> <button class="btn btn-success" >Comprar grande</button> </div>
            <div class="text-center my-4"> <button class="btn btn-danger" >Comprar chica</button> </div>
          </div>
        </div>
      </div> `
     idhtml.appendChild(cartas);}
  else if (producto.tipo =="fainas"){
    cartas.innerHTML = ` 
    <div class="col">
      <div class="card h-100 shadow-sm"> <img src="../Images/${producto.tipo}/img-${producto.id.entera}.jpg">
        <div class="card-body" id="${producto.id.entera}">
          <h5 class="card-title text-center"id= "${producto.id.porcion}>${producto.nombre}</h5>
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-dark">Entera:</span> <span class="float-end badge rounded-pill bg-dark precio">$${producto.valor.entera}</span> </div>
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-secondary">Por porcion:</span>  <span class="float-end badge rounded-pill bg-secondary precioV">$${producto.valor.porcion}</span></div>
            <div class="text-center my-4"> <button class="btn btn-success" >Comprar entera</button> </div>
            <div class="text-center my-4"> <button class="btn btn-danger" >Comprar porcion</button> </div>
        </div>
      </div>
    </div>`
    idhtml.appendChild(cartas);}
  else {
    cartas.innerHTML = ` 
      <div class="col">
        <div class="card h-100 shadow-sm"> <img src="../Images/${producto.tipo}/img-${producto.id}.jpg">
           <div class="card-body" id="${producto.id}">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-dark">Precio:</span>  <span class="float-end badge rounded-pill bg-dark precio">$${producto.valor}</span></div>
            <div class="text-center my-4"> <button class="btn btn-success">Comprar</button> </div>
           </div>
        </div>
      </div>`
      idhtml.appendChild(cartas); }
            }
}
 







