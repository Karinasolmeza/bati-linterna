let sonidoBatman = document.querySelector(".bati_encendido")
let sonidoBoton = document.querySelector(".bati_click")

let batman = document.querySelector(".batman")
let batmanboton = document.querySelector(".bati_boton")


let estadoLinterna = "apagado"

//Evento
batman.addEventListener("click",controlarLinterna)

//functions
function controlarLinterna() {
    if (estadoLinterna == "apagado") {
        estadoLinterna = "encendido";
        /*efecto de sonido*/
        sonidoLinterna()
        batman.classList.add("batman-activo")
    }
    else {
        estadoLinterna = "apagado"
        /*efecto de sonido*/
        sonidoLinterna()
        batman.classList.remove("batman-activo")
    }
}

function sonidoLinterna(){
    if (sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
    }
    else {
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }
}