function cuantosCumplen (cuantoFiltro, notas)  {
    return notas.filter(i => cuantoFiltro(i));
};

function even (a){
return a % 2 != 0;

};

console.log(cuantosCumplen(even,[7,9,87,42]));
