import * as fs from 'fs'; 

import { Usuario } from "./usuarios";
import { Articulos } from "./articulosBiblioteca";
import { Libro } from "./articulosBiblioteca";
import { Revista } from "./articulosBiblioteca";
import { Prestamo } from "./prestamos";

class Biblioteca{
    private usuario: Usuario[] = [] ;
    private prestamo: Prestamo[] = [];
    private articulos : Articulos[] = [];

    constructor(){
        this.usuario = [];
        this.articulos = [];
        this.prestamo = [];


    }
      
 public agregarArticulo(articulo: Articulos):void{
        this.articulos.push(articulo);
        this.registrosArticulos();
    }
    registrosArticulos(){
      try {
        const articulosJs = JSON.stringify(this.articulos, null, 2);
        console.log("Se lee bien");
        fs.writeFileSync(`articulos.json`, articulosJs, `utf-8`);
      } catch (error) {
        console.log("el articulo no se encuentra", error)
      }
    }

    public agregarUsuario(usuario : Usuario){
        this.usuario.push(usuario);
        this.registrosUsuarios()

    }
    registrosUsuarios(){
      try {
        const usuarioJs = JSON.stringify(this.usuario, null, 2);
        console.log("Se lee bien");
        fs.writeFileSync(`usuarios.json`, usuarioJs, `utf-8`);
      } catch (error) {
        console.log("el usuario no se encuentra", error)
      }
    }
    private usuarioEsValido(usuario: Usuario): boolean {
        return this.usuario.includes(usuario);
      }
  


    prestamoDeArticulo(usuario: Usuario ,articulo : Articulos ){
        if(!this.usuarioEsValido(usuario)){
            console.log("El usuario no esta registrado")
            return;
        }
        const existeElArticulo : Articulos | undefined = this.encontrarArticulo(articulo);
        if (!existeElArticulo || !existeElArticulo.esdisponible()) {
            console.log("El articulo no está disponible.");
            return;
          }
        

      existeElArticulo.esdisponible();
      const prestamo  = new Prestamo( usuario, existeElArticulo);
      this.prestamo.push(prestamo);
      console.log(
        `${usuario.getNombre()} retira "${articulo.getTitulo()}" con fecha de devolución ${prestamo
          .getFechaDeDevolucion()
          .toLocaleDateString()}`
      );
    }
    
    private encontrarArticulo(articulo : Articulos): Articulos | undefined {
        return this.articulos.find((i) => i === articulo);
      }
        devolverArticulo(articulo: Articulos, usuario : Usuario, FechaDevolucion : Date ): void{
            const prestamo = this.encontarPrestamo(articulo, usuario);
            if(!prestamo){
                throw new Error("Préstamo no registrado. Revise Título y Usuario")
            }
            const existeElArticulo = this.encontrarArticulo(articulo);
            if (existeElArticulo) {
              existeElArticulo.cambioADisponible();
            }
                const fechaDevolucion = prestamo.getFechaDeDevolucion();
                console.log(fechaDevolucion);
                if(FechaDevolucion >= fechaDevolucion){
                        const diasTarde = Math.ceil((FechaDevolucion.getTime() - fechaDevolucion.getTime()) / (1000 * 3600 * 24));
                        
                        switch(true){
                        case diasTarde === 1:
                                    usuario.sumaPuntos(2)
                           break;
                           case diasTarde >=2 && diasTarde <=4:
                            usuario.sumaPuntos(3);
                            break;
                            case diasTarde >= 5 && diasTarde <=10:
                              usuario.sumaPuntos(6);
                              break;
                              default: diasTarde > 10
                              usuario.getPenalizado();


                  }  
                  usuario.getPuntos()
                  console.log(`${usuario.getNombre()} devolvio ${articulo.getTitulo()} tarde , recibe penalizacion de:  ${usuario.getPuntos()}`)
                } else {
                  console.log(`${usuario.getNombre()} devolvio a tiempo ${articulo.getTitulo()}`)
                }
                this.prestamo = this.prestamo.filter((resLoan) => resLoan !== prestamo);
                console.log(`${usuario.getNombre()} devolvió "${articulo.getTitulo()}" `);
              }


private encontarPrestamo(articulo: Articulos, usuario : Usuario): Prestamo | undefined {
    return this.prestamo.find(
      (prestamo) => prestamo.getArticulo() === articulo && prestamo.getUsuario() === usuario
    );
  }
}



const Biblioteca1 = new Biblioteca()
const Libro1 = new Libro("enanitos", "Truman Capotte");
const revista1 = new Revista("care", "Luis p");
const user = new Usuario("Yessica","2525638", {
  calle:"Sarg Cabral",numero:485, numeroCasa:45
})

Biblioteca1.agregarUsuario(user);
Biblioteca1.agregarArticulo(Libro1)
Biblioteca1.prestamoDeArticulo(user , Libro1 )
const returnDate = new Date(); // Set the return date here.
returnDate.setDate(returnDate.getDate() + 7); // Returning 7 days late.
Biblioteca1.devolverArticulo(Libro1, user, returnDate)
console.log(Biblioteca1);
console.log(user);
const nuevoUsuario = new Usuario("lila","56565",{
  calle:"25", numero: 46 , numeroCasa:7
})
Biblioteca1.agregarUsuario(nuevoUsuario);




