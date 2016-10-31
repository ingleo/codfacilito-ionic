interface ISujeto{
    _id : number;
    _sexo : string;

    darNombreLeet(nombre : string) : string;
}

class Persona {

    static numPersonas: number = 0;

    constructor(private _nombre: string, private _apellido: string, private _edad: number) {

        Persona.numPersonas++;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    darNombreCompleto(): string {
        return this.nombre + " " + this.apellido;
    }

    static contarPersonas(): number {
        return Persona.numPersonas;
    }
}

class Ingeniero extends Persona implements ISujeto{


    constructor(_nombre: string, _apellido: string, _edad: number, private _cargo: string, public _id : number, public _sexo : string) {
        super(_nombre, _apellido, _edad);
    }

    get cargo(): string {
        return this._cargo;
    }

    set cargo(cargo: string) {
        this._cargo = cargo;
    }

    darNombreCompleto(): string {
        return this.nombre + " " + this.apellido + " " + this.cargo;
    }

    darNombreLeet(nombre : string) : string{
        var aux;

        aux = nombre.split("e").join("3");
        aux = aux.split("i").join("1");

        return aux; 
    }
}

var ingeniero = new Persona("leonardo", "gonzalez", 27);

ingeniero.nombre = "Carlos";

console.log("Nombre: " + ingeniero.nombre + "\n" +
    "Apellido: " + ingeniero.apellido + "\n" +
    "Edad: " + ingeniero.edad );

console.log("Conteo de personas es: " + Persona.numPersonas + "\n");

var panadero = new Persona("Juan", "Perez", 25);

console.log("Nombre: " + panadero.nombre + "\n" +
    "Apellido: " + panadero.apellido + "\n" +
    "Edad: " + panadero.edad + "\n");

console.log( panadero.darNombreCompleto() + "\n");

console.log("Conteo de personas es: " + Persona.numPersonas + "\n");

var ingeniero2 = new Ingeniero("Dennis", "Ritchie", 60, "Desarrollador" + "\n", 1,"m");

console.log("Nombre: " + ingeniero2.nombre + "\n" +
    "Apellido: " + ingeniero2.apellido + "\n" +
    "Edad: " + ingeniero2.edad + "\n" +
    "Cargo: " + ingeniero2.cargo + "\n");

console.log(ingeniero2.darNombreCompleto());

console.log(ingeniero2.darNombreLeet("dennis"));

console.log("Conteo de personas es: " + Persona.numPersonas);