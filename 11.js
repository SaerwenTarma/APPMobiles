class persona{
constructor(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
};

saludar(){

console.log('Hola mi nombre es ' + this.nombre + ' Mi edad es ' + this.edad);
};




};

var Sergio=new persona('Sergio', 41);
var pilar=new persona('Pilar', 40)


console.log(Sergio.saludar());

console.log(pilar.saludar());
