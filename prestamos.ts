import { Usuario } from "./usuarios";
import { Articulos } from "./articulosBiblioteca";
import { randomUUID as uid} from "node:crypto";

export class Prestamo {
    private id = uid();
    private usuario: Usuario;
    private articulo: Articulos;
    private Fecha : Date;
    private FechaDevolucion : Date;
    constructor(usuario: Usuario, articulo: Articulos,){
        this.usuario = usuario;
        this.articulo = articulo;
        this.id;
        this.Fecha = new Date();
        this.FechaDevolucion = new Date()
        this.FechaDevolucion.setDate(this.Fecha.getDate() + 7)

    }
    public getUsuario(){
        return this.usuario;
    }
    public getArticulo(){
        return this.articulo;
    
    }
    public getId(){
        return this.id
    }
    public getFecha(){
        return this.Fecha
    }
    public getFechaDeDevolucion(){
        return this.FechaDevolucion;
    }



}
