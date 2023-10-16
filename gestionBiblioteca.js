"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var usuarios_1 = require("./usuarios");
var articulosBiblioteca_1 = require("./articulosBiblioteca");
var articulosBiblioteca_2 = require("./articulosBiblioteca");
var prestamos_1 = require("./prestamos");
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.usuario = [];
        this.prestamo = [];
        this.articulos = [];
        this.usuario = [];
        this.articulos = [];
        this.prestamo = [];
    }
    Biblioteca.prototype.agregarArticulo = function (articulo) {
        this.articulos.push(articulo);
        this.registrosArticulos();
    };
    Biblioteca.prototype.registrosArticulos = function () {
        try {
            var articulosJs = JSON.stringify(this.articulos, null, 2);
            console.log("Se lee bien");
            fs.writeFileSync("articulos.json", articulosJs, "utf-8");
        }
        catch (error) {
            console.log("el articulo no se encuentra", error);
        }
    };
    Biblioteca.prototype.agregarUsuario = function (usuario) {
        this.usuario.push(usuario);
        this.registrosUsuarios();
    };
    Biblioteca.prototype.registrosUsuarios = function () {
        try {
            var usuarioJs = JSON.stringify(this.usuario, null, 2);
            console.log("Se lee bien");
            fs.writeFileSync("usuarios.json", usuarioJs, "utf-8");
        }
        catch (error) {
            console.log("el usuario no se encuentra", error);
        }
    };
    Biblioteca.prototype.usuarioEsValido = function (usuario) {
        return this.usuario.includes(usuario);
    };
    Biblioteca.prototype.prestamoDeArticulo = function (usuario, articulo) {
        if (!this.usuarioEsValido(usuario)) {
            console.log("El usuario no esta registrado");
            return;
        }
        var existeElArticulo = this.encontrarArticulo(articulo);
        if (!existeElArticulo || !existeElArticulo.esdisponible()) {
            console.log("El articulo no está disponible.");
            return;
        }
        existeElArticulo.esdisponible();
        var prestamo = new prestamos_1.Prestamo(usuario, existeElArticulo);
        this.prestamo.push(prestamo);
        console.log("".concat(usuario.getNombre(), " retira \"").concat(articulo.getTitulo(), "\" con fecha de devoluci\u00F3n ").concat(prestamo
            .getFechaDeDevolucion()
            .toLocaleDateString()));
    };
    Biblioteca.prototype.encontrarArticulo = function (articulo) {
        return this.articulos.find(function (i) { return i === articulo; });
    };
    Biblioteca.prototype.devolverArticulo = function (articulo, usuario, FechaDevolucion) {
        var prestamo = this.encontarPrestamo(articulo, usuario);
        if (!prestamo) {
            throw new Error("Préstamo no registrado. Revise Título y Usuario");
        }
        var existeElArticulo = this.encontrarArticulo(articulo);
        if (existeElArticulo) {
            existeElArticulo.cambioADisponible();
        }
        var fechaDevolucion = prestamo.getFechaDeDevolucion();
        console.log(fechaDevolucion);
        if (FechaDevolucion >= fechaDevolucion) {
            var diasTarde = Math.ceil((FechaDevolucion.getTime() - fechaDevolucion.getTime()) / (1000 * 3600 * 24));
            switch (true) {
                case diasTarde === 1:
                    usuario.sumaPuntos(2);
                    break;
                case diasTarde >= 2 && diasTarde <= 4:
                    usuario.sumaPuntos(3);
                    break;
                case diasTarde >= 5 && diasTarde <= 10:
                    usuario.sumaPuntos(6);
                    break;
                default:
                    diasTarde > 10;
                    usuario.getPenalizado();
            }
            usuario.getPuntos();
            console.log("".concat(usuario.getNombre(), " devolvio ").concat(articulo.getTitulo(), " tarde , recibe penalizacion de:  ").concat(usuario.getPuntos()));
        }
        else {
            console.log("".concat(usuario.getNombre(), " devolvio a tiempo ").concat(articulo.getTitulo()));
        }
        this.prestamo = this.prestamo.filter(function (resLoan) { return resLoan !== prestamo; });
        console.log("".concat(usuario.getNombre(), " devolvi\u00F3 \"").concat(articulo.getTitulo(), "\" "));
    };
    Biblioteca.prototype.encontarPrestamo = function (articulo, usuario) {
        return this.prestamo.find(function (prestamo) { return prestamo.getArticulo() === articulo && prestamo.getUsuario() === usuario; });
    };
    return Biblioteca;
}());
var Biblioteca1 = new Biblioteca();
var Libro1 = new articulosBiblioteca_1.Libro("enanitos", "Truman Capotte");
var revista1 = new articulosBiblioteca_2.Revista("care", "Luis p");
var user = new usuarios_1.Usuario("Yessica", "2525638", {
    calle: "Sarg Cabral", numero: 485, numeroCasa: 45
});
Biblioteca1.agregarUsuario(user);
Biblioteca1.agregarArticulo(Libro1);
Biblioteca1.prestamoDeArticulo(user, Libro1);
var returnDate = new Date(); // Set the return date here.
returnDate.setDate(returnDate.getDate() + 7); // Returning 7 days late.
Biblioteca1.devolverArticulo(Libro1, user, returnDate);
console.log(Biblioteca1);
console.log(user);
var nuevoUsuario = new usuarios_1.Usuario("lila", "56565", {
    calle: "25", numero: 46, numeroCasa: 7
});
Biblioteca1.agregarUsuario(nuevoUsuario);
