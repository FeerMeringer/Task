const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')
const table3 = document.getElementById('table3')

//API
async function jsonEvents(){
    try{
    var events = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    events = await events.json()
    }catch(error){
    console.log(error)
    }


    let todosLosEventos = events.events
    let eventosPasados = events.events.filter(event => event.assistance)
    let eventosFuturos = events.events.filter(event => event.estimate)


    todosLosEventos.map(event => {
        event.porcentajeAsistencia = 100 * event.assistance / event.capacity
        event.ingresos = event.price * event.assistance
    })
    eventosPasados.map(event => {
        event.porcentajeAsistencia = 100 * event.assistance / event.capacity
        event.ingresos = parseInt(event.price) * parseInt (event.assistance)
    })

    eventosFuturos.map(event => {
        event.porcentajeAsistencia = 100 * event.estimate / event.capacity
        event.ingresos = parseInt(event.price) * parseInt (event.estimate)
    })


    let capacidadEvents = [...todosLosEventos].sort((a,b) => a.capacity - b.capacity)
    let maxCapEvent = capacidadEvents[capacidadEvents.length-1]


    let percAssisEvent = [...eventosPasados].sort((a,b) => a.porcentajeAsistencia - b.porcentajeAsistencia)
    let minPercAssi = percAssisEvent[0]
    let maxPercAssi = percAssisEvent[percAssisEvent.length-1]

    let filterCat = new Set(eventosPasados.map(event => event.category))
    filterCat = [...filterCat]

    
    let dataCat = [...new Set (todosLosEventos.map(event => event.category))]
    let upcomingCategory = [...new Set (eventosFuturos.map(event => event.category))]

    dataCat.forEach(element => {
        let capacity = 0
        let assistance = 0
        let revenues = 0
        eventosPasados.forEach(event => {
            if(event.category === element){
                capacity += event.capacity
                assistance += event.assistance
                revenues +=event.ingresos
            }
        })
        table3.innerHTML += `<tr>
                                <td>${element}</td>
                                <td>${revenues}</td>
                                <td>${Math.round(assistance * 100 / capacity)}%</td>
                            </tr>`
    });


    upcomingCategory.forEach(element => {
        let capacity = 0
        let estimate = 0
        let revenues = 0
        eventosFuturos.forEach(event => {
            if(event.category === element){
                capacity += event.capacity
                estimate += event.estimate
                revenues +=event.ingresos
            }
        })
        table2.innerHTML += `<tr>
                                <td>${element}</td>
                                <td>${revenues}</td>
                                <td>${Math.round(estimate * 100 / capacity)}%</td>
                            </tr>`
                        });
                        
        table1.innerHTML += `<tr>
                                <td>${maxPercAssi.name}: ${maxPercAssi.porcentajeAsistencia}%</td>
                                <td>${minPercAssi.name}: ${minPercAssi.porcentajeAsistencia}%</td>
                                <td>${maxCapEvent.name}: ${parseInt(maxCapEvent.capacity)}</td>
                            </tr>`
}

jsonEvents()
