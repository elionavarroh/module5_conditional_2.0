"use strict";

// Variable que almacena la puntuación que lleve el usuario.
let puntuacion = 0;

//Bloqueo de botón 'y si no te hubieras plantado' para que salga bloqueado a inicio de partida.
document.getElementById("queHabriaPasado").disabled = true;

//Función para mostrar la puntuación.
function muestraPuntuacion() {
  const elementoParrafo = document.getElementById("puntos");
  console.log(puntuacion);
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
    return carta;
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
    return ganarPartida();
  }
  if (puntuacion > 7.5) {
    return perderPartida();
  };
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
  document.getElementById("queHabriaPasado").disabled = false;
};

//Usamos una función para iniciar una nueva partida.
function nuevaPartida() {
  puntuacion = 0;
  muestraPuntuacion();
  gestionarPartida;
  document.getElementById("carta").src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  document.getElementById("pideCarta").disabled = false;
  document.getElementById("mePlanto").disabled = false;
  document.getElementById("queHabriaPasado").disabled = true;
};

//Eventos de los botones.
const botonPideCarta = document.getElementById("pideCarta");

  if (botonPideCarta !== null && botonPideCarta !== undefined) {
     botonPideCarta.addEventListener("click", pideCarta);
};

const botonMePlanto = document.getElementById("mePlanto");

  if (botonMePlanto !== null && botonMePlanto !== undefined) {
    botonMePlanto.addEventListener("click", mePlanto);
};

const botonNuevaPartida = document.getElementById("nuevaPartida");

  if (botonNuevaPartida !== null && botonNuevaPartida !== undefined) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
};

//PARTE EXTRA -> de 'qué habría pasado'

//Mostramos la puntuación
function muestraPuntuacionNuevo() {
  const elementoParrafo = document.getElementById("puntos");
  console.log(puntuacion);
  if (elementoParrafo !== null && elementoParrafo !== undefined) {
    elementoParrafo.innerText = puntuacion;
  };
};

const dameUrlCartaNuevo = (cartaNuevo) => {
  return cartasImagenes[cartaNuevo];
 };

 function mostrarCartaNuevo (urlCarta) {
  const elementoImagen = document.getElementById("carta");

  if (elementoImagen !== null && elementoImagen !== undefined) {
    elementoImagen.src = urlCarta;
  };
 };

//Generamos un nuevo número aleatorio.
const dameNumeroAleatorioNuevo = () => {
  return Math.ceil(Math.random() * 10);
};

//Damos el valor de la carta de nuevo.
const dameValorCartaNuevo = (numeroAleatorioNuevo) => {
  if (numeroAleatorioNuevo > 7) {
    return numeroAleatorioNuevo + 2;
  } else {
    return numeroAleatorioNuevo;
  };
};

//Volvemos a darle puntuación a la carta.
const damePuntoDeLaCartaNuevo = (carta) => {
  if (carta > 7) {
    return 0.5;
  } else {
    return carta;
  };
};

//Sumar puntos de nuevo.
const sumarPuntosNuevo = (puntosParaSumar) => {
  return puntuacion + puntosParaSumar;
};

//Función que agrupa y llama a las funciones nuevas
function pideCartaNuevo() {
  const numeroAleatorioNuevo = dameNumeroAleatorioNuevo();
  const cartaNuevo = dameValorCartaNuevo(numeroAleatorioNuevo);
  const puntoCarta = damePuntoDeLaCartaNuevo(cartaNuevo);
  const puntosSumados = sumarPuntosNuevo(puntoCarta);
  setPuntuacion(puntosSumados);
  const urlCarta = dameUrlCarta(carta);
  mostrarCartaNuevo(urlCarta);
  muestraPuntuacionNuevo();
};

//Eventos del botón nuevo
const botonQueHabriaPasado = document.getElementById("queHabriaPasado");

  if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined) {
    botonQueHabriaPasado.addEventListener("click", pideCartaNuevo);
};