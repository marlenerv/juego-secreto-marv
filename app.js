let intentos = 0;
let numeroSecreto = 0;
let listaNumSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTxtElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTxtElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTxtElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTxtElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //querySelector por id
    //Opcion 1 : let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    //Opcion 2
    document.querySelector('#valorUsuario'). value = '';
}

function generarNumSecreto(){
    let NumeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(NumeroGenerado);
    console.log(listaNumSorteados);
    //Si ya sorteamos todos los números
    if(listaNumSorteados.length == numeroMaximo){
        asignarTxtElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumSorteados.includes(NumeroGenerado)) {
            return generarNumSecreto();
        } else {
            listaNumSorteados.push(NumeroGenerado)
            return NumeroGenerado;
        }
    }

    
}

function condicionesIniciales(){
    asignarTxtElemento('h1', 'Bienvenido al juego del número secreto');
    asignarTxtElemento('p', `Escribe un número ${numeroMaximo}`);
    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Mensaje de intervalo de números
    //Generar número aleatorio nuevamente
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


