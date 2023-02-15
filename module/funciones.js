export function crearCards(dataEventos, tarjeta) {
    if(dataEventos.length === 0) {
        return  tarjeta.innerHTML = `<p class="not"> NOT FOUND </p>`
    } 
    for (let evento of dataEventos) {
    tarjeta.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top p-2" alt="${evento.name}">
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
