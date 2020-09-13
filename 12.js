class persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    };
    
         
    
    };

    class estudiante extends persona{
        constructor(nombre, edad){
            super(nombre, edad);
            

        }

        estudiando(){
            
            console.log('Mi nombre es ' + this.nombre +  ' mi edad es ' + this.edad + ' y estoy estudiando con ' + this.profesor);
        }
        setProfesor(prof){
              this.profesor=prof;

        }


    }

    var pilar=new estudiante('Pilar',41);

    
    pilar.setProfesor('Christian');
    pilar.estudiando();

    


    