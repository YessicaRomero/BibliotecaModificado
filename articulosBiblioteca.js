"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = exports.Revista = exports.Articulos = void 0;
var node_crypto_1 = require("node:crypto");
var Articulos = /** @class */ (function () {
    function Articulos(titulo) {
        this.id = (0, node_crypto_1.randomUUID)();
        this.disponibilidad = true;
        this.titulo = titulo;
        this.id = this.id;
    }
    Articulos.prototype.getTitulo = function () {
        return this.titulo;
    };
    Articulos.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Articulos.prototype.getId = function () {
        return this.id;
    };
    Articulos.prototype.esdisponible = function () {
        return this.disponibilidad;
    };
    Articulos.prototype.cambioaNoDisp = function () {
        this.disponibilidad = false;
    };
    Articulos.prototype.cambioADisponible = function () {
        this.disponibilidad = true;
    };
    return Articulos;
}());
exports.Articulos = Articulos;
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(titulo, editor) {
        var _this = _super.call(this, titulo) || this;
        _this.editor = editor;
        return _this;
    }
    Revista.prototype.getEditor = function () {
        return this.editor;
    };
    Revista.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    return Revista;
}(Articulos));
exports.Revista = Revista;
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(titulo, autor) {
        var _this = _super.call(this, titulo) || this;
        _this.autor = autor;
        return _this;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    return Libro;
}(Articulos));
exports.Libro = Libro;
