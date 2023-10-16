"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestamo = void 0;
var node_crypto_1 = require("node:crypto");
var Prestamo = /** @class */ (function () {
    function Prestamo(usuario, articulo) {
        this.id = (0, node_crypto_1.randomUUID)();
        this.usuario = usuario;
        this.articulo = articulo;
        this.id;
        this.Fecha = new Date();
        this.FechaDevolucion = new Date();
        this.FechaDevolucion.setDate(this.Fecha.getDate() + 7);
    }
    Prestamo.prototype.getUsuario = function () {
        return this.usuario;
    };
    Prestamo.prototype.getArticulo = function () {
        return this.articulo;
    };
    Prestamo.prototype.getId = function () {
        return this.id;
    };
    Prestamo.prototype.getFecha = function () {
        return this.Fecha;
    };
    Prestamo.prototype.getFechaDeDevolucion = function () {
        return this.FechaDevolucion;
    };
    return Prestamo;
}());
exports.Prestamo = Prestamo;
