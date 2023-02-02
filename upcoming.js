const tarjeta = document.getElementById("cards");
let dataEventos = data.events;
for( let evento of dataEventos) {
    if (evento.date > data.currentDate) {
        tarjeta.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top p-2" alt="...">
        <div class="card-body">
        <h5> ${evento.name} </h5>
        <p class="card-text"> ${evento.description} </p>
        <a href="./details.html" class="btn btn-primary" id="move">Details</a>
        </div>
    </div>`
    }
}