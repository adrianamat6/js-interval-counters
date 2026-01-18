'use-strict'


nodoNumerico = document.querySelectorAll('.fila-1'); 

nodoUno = nodoNumerico[0]; 
nodoDos = nodoNumerico[1]; 
nodoTres = nodoNumerico[2]; 

numeroUnoInicial = 0; 
numeroUnoFinal = 70; 

numeroDos = 0; 
numeroTres = 0; 


let valor = 0; // Se declara fuera

const ref_interval = setInterval(function() {
    nodoUno.innerHTML = `${valor}K+`;
    console.log("Actualizado a:", valor);
    
    // Si llegamos a 100, detenemos el intervalo
    if (valor >= numeroUnoFinal) {
        clearInterval(ref_interval);
        console.log("¡Intervalo detenido!");
    }

    valor = valor + 1; 
}, 20);



