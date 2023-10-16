"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var node_crypto_1 = require("node:crypto");
var Usuario = /** @class */ (function () {
    function Usuario(nombre, numCel, direccion) {
        this.id = (0, node_crypto_1.randomUUID)();
        this.puntos = 0;
        this.penalizado = false;
        this.nombre = nombre;
        this.numCel = numCel;
        this.direccion = direccion;
    }
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Usuario.prototype.getDireccion = function () {
        return this.direccion;
    };
    Usuario.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Usuario.prototype.getnumCel = function () {
        return this.numCel;
    };
    Usuario.prototype.setNumCel = function (numCelu) {
        this.numCel = numCelu;
    };
    Usuario.prototype.getiD = function () {
        return this.id;
    };
    Usuario.prototype.getPuntos = function () {
        return this.puntos;
    };
    Usuario.prototype.sumaPuntos = function (puntos) {
        this.puntos += puntos;
        console.log(this.getPuntos);
    };
    Usuario.prototype.getPenalizado = function () {
        return this.penalizado;
    };
    Usuario.prototype.setPenalizado = function () {
        this.penalizado = true;
    };
    Usuario.prototype.UsuarioCancelado = function () {
        this.nombre;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
