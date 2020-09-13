class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    presentarse(){
        return "hola mi nombre es "+ this.nombre+" tengo "+ this.edad+" años";
    }

}

    
    class Estudiante extends Persona{
    
        constructor(nombre,edad){
            super(nombre,edad);
        }
    
        estudiando(){
            return "Estudiando con el profesor "+ this.profesor;
        }
    
        setProfesor(nameProfesor){
            this.profesor=nameProfesor;
        }
    
    }
    
    

    class Profesor extends Persona{
 
        constructor(nombre,edad,estudiante){
            super(nombre,edad);
            this.estudiantes=estudiante;
        }
    
        enseniando(){
            this.estudiantes.forEach(i => console.log("Enseñando a "+i.nombre ));
        }
    
        addEstudiante(estudiante){
            estudiante.setProfesor(this.nombre);
            this.estudiantes.push(estudiante);
        }
    
    }

    



    alumnos=[
        new Estudiante("Yesica",35),
        new Estudiante("Vanesa",40),
    
    ];



 
profe = new Profesor("Christian Dario Nievas",25, alumnos);

profe.addEstudiante(new Estudiante("Pilar",41));

profe.enseniando();






    