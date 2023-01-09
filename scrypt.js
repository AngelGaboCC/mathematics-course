function calcularPromedio (lista) {
   
    let acumulador = 0

    for (let i = 0; i < lista.length; i++) {
        {
            acumulador = acumulador + lista[i];
        }       
    }
    return acumulador/lista.length;
}

function calcularMediana (listaDesordenada) {

    const lista = ordenarLista(listaDesordenada);
    if (lista.length % 2 == 0)
    {
        const medianaParIndex1 = Math.floor(lista.length/ 2);
        const medianaImparIndex2 =  Math.floor((lista.length/ 2) - 1);
        return (lista[medianaParIndex1] + lista[medianaImparIndex2]) / 2;
    }
    else {
        const medianaImparIndex = Math.floor(lista.length / 2);
        return lista[medianaImparIndex];
    }
}

function ordenarLista(listaDesordenada) {

    function ordenarListaSort(valorAcumulado, nuevoValor) {
       return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}

function calcularModa () {
    
}