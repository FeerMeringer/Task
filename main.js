import { crearCards, crearCheck, filtroCheck, filtradoDeBuscador, mensaje } from './module/funciones.js'
const tarjeta = document.getElementById ("cards");
const check = document.getElementById("myCheck");
const buscador = document.getElementById("lookFor");
let events;
fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then( data => data.json())
    .then( response => {     
    events = response.events;
    crearCards(events, tarjeta)
    const filtrarCategorias = [ ... new Set ( events.map( categoria => categoria.category)) ];
    crearCheck(filtrarCategorias, check);
    filtroCheck(events);
    filtradoDeBuscador(events)
    })
    
    .catch ( err => console.log(err))

check.addEventListener( "change" ,  () => {
    let aux = filtroCheck(events);
    crearCards(aux);
} );

buscador.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let buscar = buscador[0].value.toLowerCase();
    let funcionFiltrado = filtradoDeBuscador(events, buscar);
    let checkCardFiltro = filtroCheck(funcionFiltrado);
    crearCards(checkCardFiltro);
    mensaje(checkCardFiltro, cards);

});



