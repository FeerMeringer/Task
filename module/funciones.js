export function crearCards(dataEventos) {
    const tarjeta = document.getElementById ("cards");
    let card = "";
    for (let evento of dataEventos) {
    card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
    <h5> ${evento.name} </h5>
    <p class="card-text" id="textoParrafo"> ${evento.description} </p>
    <div id="boton1">
    <p> Price: $ ${evento.price} </p>
    <a href="./details.html?id=${evento._id}&name=${evento.name}" class="btn btn-primary" id="move">Details</a>
    </div>
    </div>
</div>`
    }
    tarjeta.innerHTML = card ;
}


export function crearCheck ( filtrarCategorias , elemento) { 
    let aux = "";
    filtrarCategorias.forEach(element =>  {
        aux += ` <div class="d-flex  gap-3">
        <div class="form-check-inline">
        <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
        <label class="form-check-label" for="${element}">
        ${element}
        </label>
        </div> `
    });
    elemento.innerHTML = aux; 
}

export function filtroCheck (evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked")].map((check) => check.value);  
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
    } 

export function filtradoDeBuscador(eventos, buscar){
    let buscadorFiltrado = eventos.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar));
    return buscadorFiltrado;
}

export function mensaje(dataEventos, cards) {
    if(dataEventos.length === 0) {
        cards.innerHTML = `<p class="not"> NOT FOUND </p>`
    } else {
        return crearCards(dataEventos, cards);
    }
}

export function creandoCards( evento, date, tarjeta ) { 
    let card = "";
    for (let eventos of evento)
    if (date < eventos.date) {
        card += `<div class="card" style="width: 18rem;">
    <img src="${eventos.image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
    <h5> ${eventos.name} </h5>
    <p class="card-text" id="textoParrafo"> ${eventos.description} </p>
    <div id="boton1">
    <p> Price: $ ${eventos.price} </p>
    <a href="./details.html?id=${eventos._id}&name=${eventos.name}" class="btn btn-primary" id="move">Details</a>
    </div>
    </div>
</div>`
    }
    tarjeta.innerHTML = card;
}
export function pastCards( evento, date, tarjeta ) { 
    let card = "";
    for (let eventos of evento)
    if (date > eventos.date) {
        card += `<div class="card" style="width: 18rem;">
    <img src="${eventos.image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
    <h5> ${eventos.name} </h5>
    <p class="card-text" id="textoParrafo"> ${eventos.description} </p>
    <div id="boton1">
    <p> Price: $ ${eventos.price} </p>
    <a href="./details.html?id=${eventos._id}&name=${eventos.name}" class="btn btn-primary" id="move">Details</a>
    </div>
    </div>
</div>`
    }
    tarjeta.innerHTML = card;
}

export function creatDetails(tarjeta, eventos) {

    tarjeta.innerHTML = `<div class="card" style="width: 40rem;">
<img src="${eventos.image}" class="card-img-top p-2" alt="...">
<div class="card-body">
<h5> ${eventos.name} </h5>
<p> Date: ${eventos.date} </p>
<p class="card-text" id="textoParrafo"> Description: ${eventos.description} </p>
<p> Category: ${eventos.category} </p>
<p> Place: ${eventos.place} </p>
<p> Capacity: ${eventos.capacity} </p>
<div id="boton1">
<p> Price: $ ${eventos.price} </p>` 

}
