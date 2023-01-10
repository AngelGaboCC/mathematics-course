const CalculoMath = {}


CalculoMath.calcularPromedio = function calcularPromedio (lista) {
   
    let acumulador = 0

    for (let i = 0; i < lista.length; i++) {
        {
            acumulador = acumulador + lista[i];
        }       
    }
    return acumulador/lista.length;
}

CalculoMath.calcularMediana = function calcularMediana (listaDesordenada) {

    const lista = CalculoMath.ordenarLista(listaDesordenada);
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

CalculoMath.ordenarLista = function ordenarLista(listaDesordenada) {

    function ordenarListaSort(valorAcumulado, nuevoValor) {
       return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}

CalculoMath.calcularModa = function calcularModa (lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    

    const listaArray = Object.entries(listaCount);
    const listaBiOrdenada = listaArray.sort( (a,b) => a[1]-b[1] );

    const modaEnArray = listaBiOrdenada[listaArray.length-1];
    const moda= modaEnArray[0];
    return moda;
}