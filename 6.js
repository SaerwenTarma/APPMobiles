function aprobo(notas) {
    return notas.every(i => i >= 4);
}

function quienesAprobaron(numeros) {
    return numeros.filter(i => aprobo(i));
}

console.log(quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]));
