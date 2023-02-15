import { creandoCards, crearCheck, filtroCheck, filtradoDeBuscador, mensaje } from './module/funciones.js'

const tarjeta = document.getElementById ("cards");
const check = document.getElementById("myCheck");
const buscador = document.getElementById("lookFor");

let date;
let events;
fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then( data => data.json())
.then ( response  => {
    events = response.events;
    date = response.currentDate;
    creandoCards(events, date, tarjeta);
    const category=  [ ... new Set (events.filter(dato => dato.date > response.currentDate))]
    const filtrarCategorias = [ ... new Set ( category.map( categoria => categoria.category)) ];
    crearCheck(filtrarCategorias, check);
    filtroCheck(events);
    filtradoDeBuscador(events);
    mensaje(creandoCards, tarjeta)
    
});



check.addEventListener( "change" ,  () => {
    let aux = filtroCheck(events)
    creandoCards(aux,date, tarjeta );
});
    
buscador.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let buscar = buscador[0].value.toLowerCase();
    let funcionFiltrado = filtradoDeBuscador(events, buscar);
    console.log(funcionFiltrado)
    let checkCardFiltro = filtroCheck(funcionFiltrado);
    creandoCards(checkCardFiltro, date, tarjeta);
    mensaje(checkCardFiltro, tarjeta);
    
    });
    


