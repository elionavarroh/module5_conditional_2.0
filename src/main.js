"use strict";

// Variable que almacena la puntuación que lleve el usuario.
let puntuacion = 0;

//Función para mostrar la puntuación.
function muestraPuntuacion() {
  const elementoParrafo = document.getElementById("puntos");

  if (elementoParrafo !== null && elementoParrafo !== undefined) {
    elementoParrafo.innerText = puntuacion;
  };
};

//Usamos un const para almacenar las url de las cartas, otro para devolver estas imágenes y luego una función para mostrar la carta.
const cartasImagenes = {
  1: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg',
  2: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg',
  3: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg',
  4: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg',
  5: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg',
  6: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg',
  7: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg',
  10: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg',
  11: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg',
  12: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg',
 };
  
 const dameUrlCarta = (carta) => {
  return cartasImagenes[carta];
 }

 function mostrarCarta (urlCarta) {
  const elementoImagen = document.getElementById("carta");

  if (elementoImagen !== null && elementoImagen !== undefined) {
    elementoImagen.src = urlCarta;
  };
 };

 //Usamos un const para mostrar el mensaje.
 const mostrarMensaje = (mensaje) => {
  const parrafoResultado = document.getElementById("resultado");

  if (parrafoResultado !== null && parrafoResultado !== undefined) {
    parrafoResultado.innerText = mensaje;
 };
};

//Usamos un const para generar un número aleatorio.
const dameNumeroAleatorio = () => {
  return Math.ceil(Math.random() * 10);
};

//Usamos un const para dar el valor de la carta.
const dameValorCarta = (numeroAleatorio) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  } else {
    return numeroAleatorio;
  };
};

//Usamos un const para la puntuación de la carta.
const damePuntoDeLaCarta = (carta) => {
  if (carta > 7) {
    return 0.5;
  } else {
    carta;
  };
};

//Usamos un const para sumar los puntos.
const sumarPuntos = (puntosParaSumar) => {
  return puntuacion + puntosParaSumar;
};

//Usamos un const para gestionar la puntuación.
const setPuntuacion = (nuevoPunto) => {
  puntuacion = nuevoPunto;
};

//Usamos un const seguido de una condición para gestionar la partida y ver si ha ganado o perdido.
const gestionarPartida = () => {
  if (puntuacion === 7.5) {
    ganarPartida();
  }
  if (puntuacion > 7.5) {
    perderPartida();
  }
};

//Creamos una función que agrupa y llama a todas las funciones que se necesitan para pedir la carta. Esta es la función de pedir carta.
function pideCarta() {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = dameValorCarta(numeroAleatorio);
  const puntoCarta = damePuntoDeLaCarta(carta);
  const puntosSumados = sumarPuntos(puntoCarta);
  setPuntuacion(puntosSumados);
  const urlCarta = dameUrlCarta(carta);
  mostrarCarta(urlCarta);
  muestraPuntuacion();
  gestionarPartida();
};

//Usamos un const para mostrar un mensaje en el caso de que la condición de ganar partida se haya cumplido.
const ganarPartida = () => {
  mostrarMensaje("¡Enhorabuena, has ganado!");
};

//Usamos un const para mostrar un mensaje en el caso de que la condición de perder la partida se haya cumplido.
const perderPartida = () => {
  mostrarMensaje("Game over ¡Prueba otra vez!");
  document.getElementById("pideCarta").disabled = true;
  document.getElementById("mePlanto").disabled = true;
};

//Usamos una función para plantarnos y deshabilitamos los botones de pedir carta y plantarse.
function mePlanto() {
  document.getElementById("pideCarta").disabled = true;
  document.getElementById("mePlanto").disabled = true;
};

//Usamos una función para iniciar una nueva partida.
function nuevaPartida() {
  let puntuacion = 0;
  muestraPuntuacion();
  document.getElementById("carta").src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  document.getElementById("pideCarta").disabled = false;
  document.getElementById("mePlanto").disabled = false;
};

//Eventos de los botones.
document.getElementById("pideCarta").addEventListener("click", pideCarta);
document.getElementById("mePlanto").addEventListener("click", mePlanto);
document.getElementById("nuevaPartida").addEventListener("click", nuevaPartida);




//ANTIGUO CÓDIGO
// let puntuacion = 0;

// // Muestra de la puntuación.
// function muestraPuntuacion() {
//   document.getElementById('puntos').innerText = puntuacion;
// }

// document.addEventListener('DOMContentLoaded', function () {
//   muestraPuntuacion();
// });

// // Array con los valores posibles de las cartas. Los valores 8 y 9 no se incluyen, ya que no se usan en este juego,
// // y el 10, 11 y 12 se representan con sota, caballo y rey, respectivamente (cada uno con valor 0.5).
// const valoresPosibles = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// function dameCarta() {
//   return valoresPosibles[Math.floor(Math.random() * valoresPosibles.length)];
// }

// // Diccionario que asocia cada valor de carta con su imagen correspondiente.
// const cartasImagenes = {
//   1: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg',
//   2: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg',
//   3: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg',
//   4: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg',
//   5: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg',
//   6: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg',
//   7: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg',
//   10: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg',
//   11: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg',
//   12: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg',
// };

// function mostrarCarta(valor) {
//   const src = cartasImagenes[valor];
//   document.getElementById('carta').src = src;
// }

// function pideCarta() {
//   const carta = dameCarta();
//   mostrarCarta(carta);
  
//   // Si la carta elegida es sota, caballo o rey (10, 11 o 12, respectivamente), 
//   // sumamos 0.5 en lugar de su valor nominal.
//   if (carta === 10 || carta === 11 || carta === 12) {
//     puntuacion += 0.5;
//   } else {
//     puntuacion += carta;
//   }
//   muestraPuntuacion();

//   // Si la puntuación supera 7.5, el juego termina.
//   if (puntuacion > 7.5) {
//     alert("Game over ¡Prueba otra vez!");
//     document.getElementById('pideCarta').disabled = true;
//     document.getElementById('mePlanto').disabled = true;
//   }
// }

// document.getElementById('pideCarta').addEventListener('click', pideCarta);

// function mePlanto() {
//   // Deshabilitamos los botones de pedir carta y plantarse.
//   document.getElementById('pideCarta').disabled = true;
//   document.getElementById('mePlanto').disabled = true;
  
//   // A continuación, mostramos un mensaje en función de la puntuación.
//   switch (puntuacion) {
//     case 7.5:
//       alert("¡Puntuación perfecta! ¡Has ganado!");
//       break;
//     case 6:
//     case 7:
//       alert("¡Nada mal! Te has quedado cerca");
//       break;
//     case 5:
//       alert("¿Solo un 5?")
//     default:
//       alert("F, has sido muy conservador");
//   }
// }

// document.getElementById('mePlanto').addEventListener('click', mePlanto);

// function nuevaPartida() {
//   // Reiniciamos la puntuación y mostramos la carta boca abajo.
//   puntuacion = 0;
//   muestraPuntuacion();
//   document.getElementById('carta').src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
//   document.getElementById('pideCarta').disabled = false;
//   document.getElementById('mePlanto').disabled = false;
// }

// document.getElementById('nuevaPartida').addEventListener('click', nuevaPartida);