import { randomUUID as uid} from "node:crypto";

export class Articulos {
   
    private titulo: string;
    private id: string = uid();
    private disponibilidad : boolean = true;
    constructor(titulo:string){
        this.titulo = titulo;
        this.id = this.id;
    }
    getTitulo(){
        return this.titulo;
    }
    setTitulo(titulo:string){
        this.titulo = titulo;
    }
    getId(){
        return this.id;
    }
    public esdisponible(): boolean{
        return this.disponibilidad;
    }
    public cambioaNoDisp(){
        this.disponibilidad = false;
    }
    public cambioADisponible(){
        this.disponibilidad = true;
    }

}
export class Revista extends Articulos{
    private editor : string;

    constructor(titulo:string, editor:string){
        super(titulo);
            this.editor = editor;
        }
    public getEditor(){
        return this.editor;
    }
    public setEditor(editor:string){
        this.editor = editor;
    }

}
export class Libro extends Articulos{
    private autor:string;
    constructor(titulo:string, autor:string){
        super(titulo);
        this.autor = autor;
    }
    public getAutor(){
        return this.autor
    }
    public setAutor(autor:string){
        this.autor = autor;
    }
}