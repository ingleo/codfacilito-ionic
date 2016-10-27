var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persona = (function () {
    function Persona(_nombre, _apellido, _edad) {
        this._nombre = _nombre;
        this._apellido = _apellido;
        this._edad = _edad;
        Persona.numPersonas++;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (apellido) {
            this._apellido = apellido;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.darNombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
    Persona.contarPersonas = function () {
        return Persona.numPersonas;
    };
    Persona.numPersonas = 0;
    return Persona;
}());
var Ingeniero = (function (_super) {
    __extends(Ingeniero, _super);
    function Ingeniero(_nombre, _apellido, _edad, _cargo, _id, _sexo) {
        _super.call(this, _nombre, _apellido, _edad);
        this._cargo = _cargo;
        this._id = _id;
        this._sexo = _sexo;
    }
    Object.defineProperty(Ingeniero.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        set: function (cargo) {
            this._cargo = cargo;
        },
        enumerable: true,
        configurable: true
    });
    Ingeniero.prototype.darNombreCompleto = function () {
        return this.nombre + " " + this.apellido + " " + this.cargo;
    };
    Ingeniero.prototype.darNombreLeet = function (nombre) {
        var aux;
        aux = nombre.split("e").join("3");
        aux = aux.split("i").join("1");
        return aux;
    };
    return Ingeniero;
}(Persona));
var ingeniero = new Persona("leonardo", "gonzalez", 27);
ingeniero.nombre = "Carlos";
console.log("Nombre: " + ingeniero.nombre + "\n" +
    "Apellido: " + ingeniero.apellido + "\n" +
    "Edad: " + ingeniero.edad);
console.log("Conteo de personas es: " + Persona.numPersonas + "\n");
var panadero = new Persona("Juan", "Perez", 25);
console.log("Nombre: " + panadero.nombre + "\n" +
    "Apellido: " + panadero.apellido + "\n" +
    "Edad: " + panadero.edad + "\n");
console.log(panadero.darNombreCompleto() + "\n");
console.log("Conteo de personas es: " + Persona.numPersonas + "\n");
var ingeniero2 = new Ingeniero("Dennis", "Ritchie", 60, "Desarrollador" + "\n", 1, "m");
console.log("Nombre: " + ingeniero2.nombre + "\n" +
    "Apellido: " + ingeniero2.apellido + "\n" +
    "Edad: " + ingeniero2.edad + "\n" +
    "Cargo: " + ingeniero2.cargo + "\n");
console.log(ingeniero2.darNombreCompleto());
console.log(ingeniero2.darNombreLeet("dennis"));
console.log("Conteo de personas es: " + Persona.numPersonas);
