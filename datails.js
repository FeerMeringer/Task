const tarjeta = document.getElementById ("detalles");
const dataEventos = data.events;
const params = new URLSearchParams(location.search);
const id = params.get( "id" );

const eventos = dataEventos.find( event => event._id == id);

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
    