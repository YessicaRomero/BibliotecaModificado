import { randomUUID as uid} from "node:crypto";
interface direccion{
    calle: string;
    numero : number;
    numeroCasa : number;
}

export class Usuario {
    private id : string = uid();
    private nombre : string;
    private  direccion: direccion;
    private numCel : string;
    private puntos = 0;
    private penalizado : boolean = false;
    constructor ( nombre : string, numCel : string, direccion: direccion){
        this.nombre = nombre;
        this.numCel = numCel;
        this.direccion = direccion;
    }
    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre:string){
        this.nombre = nombre;
    }
    public getDireccion(){
        return this.direccion;
    }
    public setDireccion(direccion: direccion){
        this.direccion = direccion;
    }
    public getnumCel(){
        return this.numCel;
    }
    public setNumCel(numCelu: string){
        this.numCel = numCelu;
    }
    public getiD(){
        return this.id;
    }
    public getPuntos(){
        return this.puntos;
    }
    public sumaPuntos(puntos: number){
       this.puntos  += puntos;
       console.log(this.getPuntos)
    }
    public getPenalizado(){
        return this.penalizado;
    }
    public setPenalizado(){
        this.penalizado = true;
    }
    public UsuarioCancelado(){
        this.nombre 
    }
}