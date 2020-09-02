var articulos = [
    {nombre:"bici", costo:3000},
    {nombre: "Tv", costo:4000},
    {nombre:"libro", costo: 600},
    {nombre:"Celular", costo:9000},
    {nombre:"teclado", costo:300},
    {nombre:"Audifonos", costo:10000},
    {nombre:"disco rigido", costo:100}
];
// filtra objetos de un array
var filtros= articulos.filter(function(i){  // filtra por la condicion que le ponga
 return i.costo <= 500
 });
 var mapeo= articulos.map(function(i){    //recorre todos los nombres de los articulos
     return i.nombre;  
 });

var encuentraArticulo =  articulos.find(function(i){
    return i.nombre === "teclado";
});

articulos.forEach(function(i){   // me regresa todos los nombres de los articulos
 console.log(i.nombre);
});

var articulosBaratos = articulos.some(function(i){ // si tengo articulos que salgan 600
       return i.costo <= 700;
});




console.log(filtros);
console.log(mapeo);
console.log(encuentraArticulo);

//recorre objetos de un array
for(let i of articulos){
    console.log(i);
}





// if(per1.edad >per2.edad){
 // si devuele  return 1;  //per1 es mas chica de edad que  per2


 // function multiplicar (num1,...args){

 //};