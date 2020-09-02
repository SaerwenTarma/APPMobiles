
// Ejemplo de Filtrados

var arr=[1,2,3,4,5];
var filtrados=[];

// Primera manera
for(let i of arr){
    if(i >=3){
        filtrados.push(i);
    }
};


//segunda manera
arr.filter(function(i){
    return i>=3;
});

// tercer manera

filtrados = arr.filter(elem => elem>=3);

 


//  7 some si alguno de los elementos cumple con el if y every si todos cumplen con el if

function hayAlgunoNegativo(a,b,c){
   var array=[a,b,c];
   return array.some(i >= i<0);
};
hayAlgunoNegativo(2,-3,9);

// 9  no me sale

//10  No entendi


// No me salieron 6 , 8 , 9 , 10 
// No se como pasarle argumentos tipo arrays 





var personas = [
    {nombre: "pilar", dni:895895823},
  {nombre:"pepe", dni:808905843}
  ]
  [
  {nombre:"Braulio", dni: 4950295},
  {nombre:"tita", dni:7548745983}
  ];





