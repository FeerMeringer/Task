const tarjeta = document.getElementById("cards"); //contenedor
let dataEventos = data.events; // informacion con la que vamos a trabajar
for( let evento of dataEventos) { // recorre cada objeto 
    if (evento.date < data.currentDate) { // compara fecha actual con fecha pasada
        tarjeta.innerHTML += `<div class="card" style="width: 18rem;"> 
        <img src="${evento.image}" class="card-img-top p-2" alt="...">
        <div class="card-body">
        <h5> ${evento.name} </h5>
        <p class="card-text" id="textoParrafo"> ${evento.description} </p>
        <div id="boton1">
    <p> Price: $ ${evento.price} </p>
    <a href="./details.html" class="btn btn-primary" id="move">Details</a>
    </div>

    </div>` 
}
}
// inner imprimo la cards, += porque sino se va a sobrescribir, con esto le decimos q a lo q ya esta se sume 1.