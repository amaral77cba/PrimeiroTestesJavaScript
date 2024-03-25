//Eventos

function print(){
    console.log("chamou a funcao imprimir")
}

//eventos de teclado
const inputAux = document.querySelector('input')
inputAux.onkeydown = function(){    //ao pressionar qq tecla a funcao eh disparada
    console.log('rodei em funcao do teclado')
}

function print2(){
    console.log("chamou a funcao imprimir do mouse")
}

const h2 = document.querySelector('h2')
h2.addEventListener('mouseover', print2)    //quando passa o mouse em cima da TAG mapeada distara a funcao, mais pode ser qq evento

//Argumento event
const inputAux2 = document.getElementById('segundoinp')
inputAux2.onkeydown = function(event) {
    console.log(event.currentTarget.value)
    console.log(event.key)
}
