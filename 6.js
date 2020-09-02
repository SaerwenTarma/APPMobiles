
function quienesAprobaron([[lista1],[lista2],[lista3],[lista4]]){
    var notas=[[lista1],[lista2],[lista3],[lista4]];
    return notas.filter(i => i.every(i => i>=4));
}

console.log (quienesAprobaron ([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]));


function quienesAprobaron([[lista1],[lista2],[lista3],[lista4]]){
    var notas=[[lista1],[lista2],[lista3],[lista4]];
    notas.filter(function(i){
           i.every(i=> i>=4);
    });

    


}