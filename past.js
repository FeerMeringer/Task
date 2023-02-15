import { crearCards, crearCheck, filtroCheck, filtradoDeBuscador } from './module/funciones.js'

const tarjeta = document.getElementById ("cards");
const check = document.getElementById("myCheck");
const buscador = document.getElementById("lookFor");

let date;
let events;
fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then( data => data.json())
.then ( response  => {
    const events = response.events.filter( eventos => eventos.date < response.currentDate); 
    crearCards(events, tarjeta)
    const filtrarCategorias = [ ... new Set ( events.map( categoria => categoria.category)) ];
    crearCheck(filtrarCategorias, check);
    check.addEventListener( "change" ,  () => {
        tarjeta.innerHTML = "";
        let buscar = buscador[0].value.toLowerCase();
        let checkCardFiltro = filtradoDeBuscador(events, buscar)
        let aux = filtroCheck(checkCardFiltro);
        console.log(aux)
        crearCards(aux, tarjeta);
    } );
    
    buscador.addEventListener('keyup', (e)=>{
        tarjeta.innerHTML = "";
        let buscar = buscador[0].value.toLowerCase();
        let checkCardFiltro = filtradoDeBuscador(events, buscar);
        let aux = filtroCheck(checkCardFiltro);
        console.log(aux);
        crearCards(aux, tarjeta);
        
    
    });
    })
    
    .catch ( err => console.log("Este es el error"), err);

