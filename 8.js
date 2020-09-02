// 8    No me sale

function cuantosCumplen ([a,b,c,d]) {
    var numeros=([a,b,c,d]);
     return numeros.some (i=> i%2 ==0);
}
 
cuantosCumplen  ([7,9,25,42]);

