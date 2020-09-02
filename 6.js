
var notas=[[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];


var quienesAprobaron = notas.filter(i => i.every(i => i>=4));

console.log(quienesAprobaron);
