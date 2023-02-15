import { pastCards, crearCheck, filtroCheck, filtradoDeBuscador, mensaje } from './module/funciones.js'

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
    pastCards(events, date, tarjeta);
    const filtrarCategorias = [ ... new Set ( events.map( categoria => categoria.category)) ];
    crearCheck(filtrarCategorias, check);
    filtroCheck(events);
    filtradoDeBuscador(events, buscar);
    mensaje(events)
    
});




check.addEventListener( "change" ,  () => {
    let aux = filtroCheck(events)
    pastCards(aux,date,tarjeta );
});
    
buscador.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let buscar = buscador[0].value.toLowerCase();
    let funcionFiltrado = filtradoDeBuscador(date, buscar);
    let checkCardFiltro = filtroCheck(funcionFiltrado);
    pastCards(checkCardFiltro, date, tarjeta);
    mensaje(checkCardFiltro, tarjeta, cards);
    
    });
    