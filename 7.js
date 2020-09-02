
//  7 some si alguno de los elementos cumple con el if y every si todos cumplen con el if

function hayAlgunoNegativo([numeros]){
    var array=[numeros];
    return array.some(i => i<0);
 };
 console.log(hayAlgunoNegativo([2,-3,9]));
 