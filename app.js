/* El hoisting en JavaScript es como si las funciones se "levantaran/elevaran/subieran" al principio del código, aunque las declares más abajo.

Imagina que tienes una caja de herramientas. Cuando necesitas una herramienta, la buscas en la caja. En JavaScript, las funciones son como herramientas. Cuando llamas a una función, JavaScript la busca en la "caja de herramientas".

El hoisting hace que las funciones estén disponibles en la "caja de herramientas" desde el principio, incluso si las declaras más abajo en el código.

Por ejemplo, si declaras una función llamada saludar al final del código, pero la llamas al principio, JavaScript la encontrará porque ya está en la "caja de herramientas" gracias al hoisting.

Es como si la función saludar se "levantara" al principio del código, aunque la hayas declarado más abajo.
*/

//console.log(numeroSecreto);
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0

function asignarTaxtoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    /*console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroUsuario === numeroSecreto);*/
    if (numeroUsuario === numeroSecreto) {
        asignarTaxtoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        //document.getElementById('reiniciar').classList.remove('disabled');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTaxtoElemento('p','El número secreto es menor');
        } else {
            asignarTaxtoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    // ¿Ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        return asignarTaxtoElemento('p', 'ya se sortearon todos los números');
    } else {
        // Si el número geberado está incluído en la lista (condicional)
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTaxtoElemento('h1', 'Juego del número secreto');
    asignarTaxtoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
