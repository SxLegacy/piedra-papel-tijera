function aleatorio (min,max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🥌"
    } else if(jugada == 2) {
        resultado = "Papel 🧻"
    } else if(jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "Inválido"
    }
    return resultado
}
// 1 es piedra, 2 es papel, 3 es tijera
let Jugador = 0
let Pc = 0
let triunfos = 0
let derrotas = 0

while (triunfos < 3 && derrotas <3) {

    Pc = aleatorio(1,3)
    Jugador = prompt("Elige 1 es piedra, 2 es papel, 3 es tijera")
    //alert("Elegiste " + Jugador)
    
        alert("Tu elegiste: " + eleccion(Jugador) + "  Vs  Pc elige: " + eleccion(Pc))

            //COMBATE
    if (Pc == Jugador) {
        alert("Empate 😐")
    } else if((Jugador == 1 && Pc == 3) || (Jugador == 2 && Pc == 1) || (Jugador == 3 && Pc == 2)) {
        alert("Ganaste 🤩")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste 😛")
        derrotas = derrotas + 1
    } 

    alert("Ganaste " + triunfos + " 🏆veces. Perdiste " + derrotas + " 😥Veces.")
}