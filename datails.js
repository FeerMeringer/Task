import { creatDetails } from "./module/funciones.js";

const tarjeta = document.getElementById("detalles");
let eventos;
let params;
let id;
let events;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((res) => {
    eventos = res.events;
    params = new URLSearchParams(location.search);
    id = params.get("id");
    events = eventos.find((event) => event._id == id);
    creatDetails(tarjeta, events);
    })
    .catch((err) => console.log(err));
