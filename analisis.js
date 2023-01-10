console.log(salarios)

function EncontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona (personaNombre) {
    const trabajos = EncontrarPersona(personaNombre).trabajos;

    const salario = trabajos.map(function (elemento) {
        return elemento.salario;
    })

    const medianaSalarios = CalculoMath.calcularMediana(salario);
    return medianaSalarios;
}