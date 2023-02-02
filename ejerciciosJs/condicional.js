// 1
// let a = 10;
// let b = 6;
// let esMayor = a > b ;
// console.log(esMayor);

// 2
// function esIgual (num1, num2) {
//     if (num1 === num2) {
//         return "son iguales";

//     } else {
//         return "son diferentes";
//     }
// }
// console.log(esIgual())

// 3 
// function esMasGrande (numA, numB) {
//     if (numA > numB) {
//         return "Es Mas grande";
//     } else if ( numA === numB) {
//         return "Son iguales";
//     }
//     }
// console.log(esMasGrande());

// // 4 
// function tresNumeros (num1, num2 , num3 ) {
//     if (num1  && num2 > num3) {
//         return "es mas chico"
//     } else {
//         return 10;
//     }
// }
// console.log(tresNumeros());

// 5 
const persona1 = {
    nombre: "Gise",
    edad: 35,
    altura: 1.63,
}
const persona2 = {
    nombre: "Nazareth",
    edad: 22,
    altura: 1.68,
}
// if (persona1.altura > persona2.altura) {
//     alert( `La persona con mayor altura es ${persona1.nombre}` );

// } else if (persona1.altura < persona2.altura) {
//     alert( `La persona con mayor altura es ${persona2.nombre}`);
// }
// if (persona1.edad > persona2.edad) {
//     alert(` La persona con mayor edad es ${persona1.nombre} `);
// } else if (persona1.edad < persona2.edad) {
//     alert( `La persona con mayor edad es ${persona2.nombre}`)
// }

// 6 
// let nombre = prompt(" ingrese su nombre");
// let edad = prompt( "ingrese su edad");
// let altura = prompt( "ingrese su altura");
// let vision= prompt( " ingrese su graduacion");

// let nombre = "feer";
// let edad = 31;
// let altura = 1.70;
// let vision = 9;


// if ( edad > 18 &&  altura > 1.50 && vision > 8) {
//     alert ("Es apto para conducir");
// }

// 7 
// let nombre = prompt( "ingrese su nombre");
// let pase = prompt( "ingrese su pase");
// let entrada = prompt( "ingrese si tiene entrada");
// let miNombre = "feer";

// if ((nombre === miNombre ) || ( pase === "vip")) {
//     alert("Bienvenido,ingreso libre")
// }  else if ( entrada === "si" ) {
//     let usoEntrada = prompt(" Quiere usar su entrada");
//     if ( usoEntrada === "si") {
//         alert("Bienvenido, ingreso libre");
//     } else if ((nombre !== miNombre) || (pase !== "vip") || ( entrada !=== "si")) {
//         alert(" Desea comprar Entrada") ; 
//         if (entrada === "si") {
//             let dineroDisponible = prompt( " dinero disponible");
//         } else if ( dineroDisponible > 1000) {
//             alert( " Le vendo la entrada");
//         } else {
//             alert("no puede pasar");
//         }

//     }
// }

// 8 
// let numeroIncognito = 6;

// for (let numeroIngresado = 1; numeroIngresado <=3; numeroIngresado++ ){
//     let numeroIngresado = parseInt(prompt('Ingrese un número del 1 al 10'))
//     if(numeroIngresado === numeroIncognito){
//         alert('Ganaste, haz adivinado el numero.')
//         break
//     }else if (numeroIngresado > numeroIncognito){
//         alert('el numero ingresado es mayor, vuelve a intentarlo')
//     }else{
//         alert('el numero ingresado es menor, vuelve a intentarlo')
//     }
// }
// 9 

// let edad = prompt("ingrese su edad");

// if (edad <= 12) {
//     alert(" Eres un infate");
// } else if ( edad <= 18) {
//     alert(" Eres adolescente");

// } else if ( edad <= 45 ) {
//     alert( "Eres mayor joven");
// } else if ( (edad > 45) && ( edad <= 100)) {
//     alert( " Eres un anciano");
// } else if ( edad > 100) { 
//     alert( " En realidad tienes esa edad?");

// }

// 10 

// let jugador1 = prompt("que elegis? piedra(1), papel(2) tijera(3)");
// let jugador2 = prompt("que elegis? piedra(1), papel(2) tijera(3)");
// let piedra = 1;
// let papel = 2;
// let tijera = 3;

// if ((jugador1 === 1 && jugador2 === 1)
//     (jugador1 === 2 && jugador2 === 2)
//     (jugador1 === 3 && jugador2 === 3)) {
//     console.log("empate");
// } else if ((jugador1 === 1 && jugador2 === 3)
//     (jugador1 === 2 && jugador2 === 1)
//     (jugador1 === 3 && jugador2 === 2)) {
//     console.log("gana" + jugador1);
// }  else if ((jugador2 === 1 && jugador1 === 3)
//     (jugador2 === 2 && jugador1 === 1)
//     (jugador2 === 3 && jugador1 === 2)) {
//     console.log("gana" + jugador2)
// } else {

//         alert("Uno de los jugadores ha hecho trampa")
//     }

// 11 

// let color = prompt(" ingrese un color");
// switch (color) {
//     case "blanco":
//         alert("Falta De Color")
//         break;
//     case "negro":
//         alert("Falta De color")
//         break;
//     case "verde":
//         alert("El color de la naturaleza")
//         break;
//     case "azul":
//         alert("El color del agua ")
//         break;
//     case "amarillo":
//         alert("El color del sol")
//         break;
//     case "rojo":
//         alert("El color del fuego")
//         break;
//     case "marron":
//         alert("El color de la tierra")
//         break;
//     default: alert(" Exelente eleccion, no lo teniamos pensado");


// }

// 12

// let numero1 = prompt( "ingrese un numero");
// let numero2 = prompt(" ingrese un numero ");
// let operacion= prompt ("elija su operacion +, -, *, /");
// switch(operacion) {
//     case suma:
//     if (operacion === "+") {
//         alert(numero1 + numero2);
//     }
//     break;
//     case resta:
//         if (operacion === "-") {
//             alert( numero1 - numero2);
//         }
//     break;
//     case multiplicacion:
//         if (operacion === "*") {
//             alert (numero1 * numero2);

//         }
//         break;
//     case division:
//         if (operacion === "/") {
//             alert(numero1 / (numero2 !=0));
//         }
//         break;
//         default:
//         alert("Error")

// }
// 13
// let nombreCompleto = prompt( "ingrese su nombre completo");
// let numDni = prompt ("ingrese el numero de su Dni");
// let fechaDeNacimiento = prompt( " ingrese la fecha de su nacimiento");

// let datosIngresados = prompt (`los datos ingresado son correctos? /n${nombreCompleto}
// /n${numDni} /n${fechaDeNacimiento} /nsi/no`);

// function documento (dato1, dato2, dato3, dato4) {
//     if (datosIngresados === "si") {
//         const dni = {
//             nombre: nombreCompleto,
//             numeroDni: numDni,
//             fechaDeNacimiento: fechaDeNacimiento
//         }
//         alert(" Registro Exitoso")
//         console.table( dni);

//     } else {
//         alert( "intente de nuevo en un mes");
//     }

// }
// documento(nombreCompleto, numDni, fechaDeNacimiento, datosIngresados);









