function cuantosCumplen (filtro, notas)  {
    return notas.some( i => i===8);
};



console.log(   cuantosCumplen(8,[7,8,9])   )  ;
