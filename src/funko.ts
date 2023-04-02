// ID. Debe ser un identificador único del Funko.
// Nombre. Debe ser una cadena de caracteres.
// Descripción. Debe ser una cadena de caracteres.
// Tipo. Debe ser un enumerado con valores como, por ejemplo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.
// Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.
// Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
// Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.
// Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.
// Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.
// Valor de mercado. Debe ser un valor numérico positivo.

import { Console } from 'console';
import {readFileSync, readdirSync, writeFileSync, unlinkSync } from 'fs';
import chalk from "chalk";
// import {spawn} from 'child_process';
// import { string } from 'yargs';


enum Tipo {
  Pop = "Pop!",
  PopRides = "Pop! Rides",
  VynilSoda = "Vynil Soda",
  VynilGold = "Vynil Gold",
  VynilPlatinum = "Vynil Platinum",
}

enum Genero {
  Animacion = "Animación",
  PeliculasYTV = "Películas y TV",
  Videojuegos = "Videojuegos",
  Deportes = "Deportes",
  Musica = "Música",
  Anime = "Anime",
}



export class Funko {

  private ID: number;
  private nombre: string;
  private descripcion: string;
  private tipo: Tipo;
  private genero: Genero;
  private franquicia: string;
  private numero: number;
  private exclusivo: boolean;
  private caracteristicasEspeciales: string;
  private valorMercado: number;

  constructor(nombre_: string, descripcion_: string, tipo_: Tipo, genero_: Genero, franquicia_: string, numero_: number, exclusivo_: boolean, caracteristicasEspeciales_: string, valorMercado_: number, ID_: number) {
    this.nombre = nombre_;
    this.descripcion = descripcion_;
    this.tipo = tipo_;
    this.genero = genero_;
    this.franquicia = franquicia_;
    this.numero = numero_;
    this.exclusivo = exclusivo_;
    this.caracteristicasEspeciales = caracteristicasEspeciales_;
    this.valorMercado = valorMercado_;
    this.ID = ID_;

    // mirar que hacer con el id.
  }

  get getID(): number {
    return this.ID;
  }

  set setID(ID_: number) {
    this.ID = ID_;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  get getDescripcion(): string {
    return this.descripcion;
  }

  set setDescripcion(descripcion_: string) {
    this.descripcion = descripcion_;
  }

  get getTipo(): Tipo {
    return this.tipo;
  }

  set setTipo(tipo_: Tipo) {
    this.tipo = tipo_;
  }

  get getGenero(): Genero {
    return this.genero;
  }

  set setGenero(genero_: Genero) {
    this.genero = genero_;
  }

  get getFranquicia(): string {
    return this.franquicia;
  }

  set setFranquicia(franquicia_: string) {
    this.franquicia = franquicia_;
  }

  get getNumero(): number {
    return this.numero;
  }

  set setNumero(numero_: number) {
    this.numero = numero_;
  }

  get getExclusivo(): boolean {
    return this.exclusivo;
  }

  set setExclusivo(exclusivo_: boolean) {
    this.exclusivo = exclusivo_;
  }

  get getCaracteristicasEspeciales(): string {
    return this.caracteristicasEspeciales;
  }

  set setCaracteristicasEspeciales(caracteristicasEspeciales_: string) {
    this.caracteristicasEspeciales = caracteristicasEspeciales_;
  }

  get getValorMercado(): number {
    return this.valorMercado;
  }

  set setValorMercado(valorMercado_: number) {
    this.valorMercado = valorMercado_;
  }

}


const lista_funkos: Funko[] = [];



// function leerFunkos(): Funko[] {
function leerFunkos(): void {
  const nombre_usuario = 'marco'; // carpeta /marco aquí estarán los ficheros con los funkos.
  // obtener los nombres de todos los ficheros de este directorio
  const filenames = readdirSync("./database/" + nombre_usuario);
  
  console.log("\nCurrent directory filenames:");
  // filenames.forEach((file) => {
  //   console.log(file);
  // });

  // leer el contenido de cada fichero
  filenames.forEach((file) => {
    const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
    const json = JSON.parse(contenido);

    lista_funkos.push(new Funko(json.nombre, json.descripcion, json.tipo, json.genero, json.franquicia, json.numero, json.exclusivo, json.caracteristicasEspeciales, json.valorMercado, json.id));
  });
  // console.log(lista_funkos);
  // imprimir error con chalk

}


//! faltan los parámetros
function addFunko(usuario:string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number) {
  // buscar el id más alto de la lista de funkos
  
  // * HAY QUE COMPROBAR QUE EL FUNKO EXISTE PRIMERO.

  let id = 0;
  const contenido = readFileSync("./database/lista_funkos.json", 'utf8');
  const json = JSON.parse(contenido);
  json.IDs.forEach((ID: number) => {
    if (ID > id) {
      id = ID;
    }
  });
  id += 1;
  console.log('Nuevo id: ' + id);

  // crear funko con los parámetros
  const funco_aux = new Funko(nombre, descripcion, tipo, genero, franquicia, numero, exclusivo, caracteristicasEspeciales, valorMercado, id);
  // crear fichero correspondiente al funko
  writeFileSync("./database/" + usuario + "/" + id + ".json", JSON.stringify(funco_aux));
  // añadir el id del funko a la lista de ids
  json.IDs.push(id); // ? NO ESTÁ FUNCIONANDO ESTA LÍNEA.
  // ! HAY QUE MIRAR QUE PASA EN CASO DE QUE LA CARPETA DEL USUARIO NO EXISTA, TENGO QUE CREARLA.
}


function eliminarFunko(usuario:string, ID_: number) {
  // eliminar el fichero correspondiente al funko
  unlinkSync("./database/" + usuario + "/" + ID_ + ".json");

  // eliminar el id del funko de la lista de ids
  const contenido = readFileSync("./database/lista_funkos.json", 'utf8'); 
  const json = JSON.parse(contenido);
  const index = json.IDs.indexOf(ID_);
  if (index > -1) {
    json.IDs.splice(index, 1);
  }
}


// function modificarFunko() {

// }

// function listaFunkos() {

// }

// function mostrarFunko() {

// }


addFunko('marco', 'Funko 1', 'Funko de prueba', Tipo.Pop, Genero.Animacion, 'Prueba', 1, false, 'Ninguna', 10);
eliminarFunko('marco', 1);
// addFunko('alberto', 'Funko 2', 'Funko de prueba', Tipo.Pop, Genero.Animacion, 'Prueba', 1, false, 'Ninguna', 10);