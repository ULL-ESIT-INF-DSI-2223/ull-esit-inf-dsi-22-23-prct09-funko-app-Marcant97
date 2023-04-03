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
import {readFileSync, readdirSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import chalk from "chalk";

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// import {spawn} from 'child_process';
// import { string } from 'yargs';


export enum Tipo {
  Pop = "Pop!",
  PopRides = "Pop! Rides",
  VynilSoda = "Vynil Soda",
  VynilGold = "Vynil Gold",
  VynilPlatinum = "Vynil Platinum",
}

export enum Genero {
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


// function leerFunkos(): Funko[] {
function leerFunkos(usuario: string): string[] {
  const nombre_usuario = usuario; 
  const filenames = readdirSync("./database/" + nombre_usuario);
  const lista_nombres: string[] = [];

  filenames.forEach((file) => {
    const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
    const json = JSON.parse(contenido);

    lista_nombres.push(json.nombre);
  });
  
  return lista_nombres;
}


function addFunko(id:number, usuario:string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean {
  // 1. comprobar que el usuario existe
  const nombre_usuario = usuario;
  const path = "./database/" + nombre_usuario;
  if (existsSync(path) === false) {
    console.log(`User ${usuario} does not exist`);
    return false;
  }
  const filenames = readdirSync("./database/" + nombre_usuario);
  let bandera = true;
  filenames.forEach((file) => {
    const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
    const json = JSON.parse(contenido);
    if (json.ID === id) {
      // el funko ya existe
      bandera = false;
    }
  });

  if (bandera === true) {
    //! TENGO QUE REVISAR AQUÍ LO DE LOS ENUMS, TIRAR UN MENSAJE O ERROR CUANDO NO SE INTRODUZCA UN ENUM CORRECTO.
    const funco_aux = new Funko(nombre, descripcion, tipo, genero, franquicia, numero, exclusivo, caracteristicasEspeciales, valorMercado, id);
    writeFileSync("./database/" + usuario + "/" + nombre + ".json", JSON.stringify(funco_aux));
  }
  return bandera;
}


function eliminarFunko(usuario:string, ID_: number): boolean {
  // 1. comprobar que el usuario existe
  const nombre_usuario = usuario;
  const path = "./database/" + nombre_usuario;
  if (existsSync(path) === false) {
    console.log(`User ${usuario} does not exist`);
    return false;
  }
  const filenames = readdirSync("./database/" + nombre_usuario);

  // comprobar que el funko existe
  let bandera = false;
  let nombre_aux = 0;
  filenames.forEach((file) => {
    const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
    const json = JSON.parse(contenido);
    if (json.ID === ID_) {
      // el funko ya existe
      bandera = true;
      nombre_aux = json.nombre;
    }
  });

  if (bandera === false) {
    return false;
  }
  else {
    // eliminar el fichero correspondiente al funko
    unlinkSync("./database/" + usuario + "/" + nombre_aux + ".json");
    return true;
  }
}


function modificarFunko(id:number, usuario:string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean {
  // 1. comprobar que el usuario existe
  const nombre_usuario = usuario;
  const path = "./database/" + nombre_usuario;
  if (existsSync(path) === false) {
    console.log(`User ${usuario} does not exist`);
    return false;
  }
  const filenames = readdirSync("./database/" + nombre_usuario);

  // comprobar que el funko existe
  let bandera = false;
  let nombre_aux = 0;
  filenames.forEach((file) => {
    const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
    const json = JSON.parse(contenido);
    if (json.ID == id) {
      // el funko ya existe
      bandera = true;
      nombre_aux = json.nombre;
    }
  });

  if (bandera === false) {
    return false;
  }
  else {
    // eliminar el fichero correspondiente al funko
    unlinkSync("./database/" + usuario + "/" + nombre_aux + ".json"); 
    // crear el nuevo funko
    const funco_aux = new Funko(nombre, descripcion, tipo, genero, franquicia, numero, exclusivo, caracteristicasEspeciales, valorMercado, id);
    writeFileSync("./database/" + usuario + "/" + nombre + ".json", JSON.stringify(funco_aux));
    return true;
  }
}

function listaFunkos(usuario: string): boolean {
  // leer todos los funkos de un usuario
  const nombre_usuario = usuario;
  const path = "./database/" + nombre_usuario;
  if (existsSync(path) === false) {
    console.log(`User ${usuario} does not exist`);
    return false;
  }
  console.log(`${usuario} Funko Pop collection:`);
  console.log(leerFunkos(usuario));
  return true;

}

function mostrarFunko(usuario: string, id: number): boolean {
  let mi_funko: Funko;
  // 1. comporbar que el usuario existe
  const nombre_usuario = usuario;
  const path = "./database/" + nombre_usuario;
  if (existsSync(path) === false) {
    console.log(`User ${usuario} does not exist`);
    return false;
  }
  // 2. comprobar que el fichero existe
  const filenames = readdirSync("./database/" + nombre_usuario);
  let bandera = false;
  filenames.forEach((file) => {
    const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
    const json = JSON.parse(contenido);
    if ((json.ID === id) && (bandera === false)) {
      // el funko ya existe
      bandera = true;
      mi_funko = new Funko(json.nombre, json.descripcion, json.tipo, json.genero, json.franquicia, json.numero, json.exclusivo, json.caracteristicasEspeciales, json.valorMercado, json.ID);
      console.log(mi_funko);
      
    }
  }
  );
  if (bandera === false) {
    console.log(`Funko with ID ${id} does not exist`)
    return false;
  }
  else {
    return true;
  }
}


//add
yargs(hideBin(process.argv)).command('add', 'Adds a funko', {
  user: {
    description: 'User name',
    type: 'string',
    demandOption: true
  },
  id: {
    description: 'Funko ID',
    type: 'number',
    demandOption: true
  },
  nombre: {
    description: 'Funko name',
    type: 'string',
    demandOption: true
  },
  descripcion: {
    description: 'Funko description',
    type: 'string',
    demandOption: true
  },
  tipo: {
    description: 'Funko type',
    type: 'string',
    demandOption: true
  },
  genero: {
    description: 'Funko genre',
    type: 'string',
    demandOption: true
  },
  franquicia: {
    description: 'Funko franchise',
    type: 'string',
    demandOption: true
  },
  numero: {
    description: 'Funko number',
    type: 'number',
    demandOption: true
  },
  exclusivo: {
    description: 'Funko exclusive',
    type: 'boolean',
    demandOption: true
  },
  caracteristicasEspeciales: {
    description: 'Funko special features',
    type: 'string',
    demandOption: true
  },
  valorMercado: {
    description: 'Funko market value',
    type: 'number',
    demandOption: true
  }
}, (argv) => {
  const bandera = addFunko(argv.id, argv.user, argv.nombre, argv.descripcion, argv.tipo as Tipo, argv.genero as Genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicasEspeciales, argv.valorMercado);
  if (bandera === false) {
    console.log(`Funko already exists at ${argv.user} collection!`);
  }
  else {
    console.log(`Funko added to ${argv.user} collection!`);
  }
}).help().argv;


// si lo recibido es remove, eliminar funko
yargs(hideBin(process.argv)).command('remove', 'Removeses a funko', {
  user: {
    description: 'User name',
    type: 'string',
    demandOption: true
  },
  id: {
    description: 'Funko ID',
    type: 'number',
    demandOption: true
  }
}, (argv) => {
  //! MANEJAR SEGÚN RESULTADO
  const bandera = eliminarFunko(argv.user, argv.id);
  if (bandera === true) {
    console.log(`Funko removed from ${argv.user} collection!`);
  }
  else {
    console.log(`Funko not found at ${argv.user} collection!`);
  }
}).help().argv;


// si lo recibido es update, modificar funko
yargs(hideBin(process.argv)).command('update', 'Modifies a funko', {
  user: {
    description: 'User name',
    type: 'string',
    demandOption: true
  },
  id: {
    description: 'Funko ID',
    type: 'number',
    demandOption: true
  },
  nombre: {
    description: 'Funko name',
    type: 'string',
    demandOption: true
  },
  descripcion: {
    description: 'Funko description',
    type: 'string',
    demandOption: true
  },
  tipo: {
    description: 'Funko type',
    type: 'string',
    demandOption: true
  },
  genero: {
    description: 'Funko genre',
    type: 'string',
    demandOption: true
  },
  franquicia: {
    description: 'Funko franchise',
    type: 'string',
    demandOption: true
  },
  numero: {
    description: 'Funko number',
    type: 'number',
    demandOption: true
  },
  exclusivo: {
    description: 'Funko exclusive',
    type: 'boolean',
    demandOption: true
  },
  caracteristicasEspeciales: {
    description: 'Funko special features',
    type: 'string',
    demandOption: true
  },
  valorMercado: {
    description: 'Funko market value',
    type: 'number',
    demandOption: true
  }
}, (argv) => {
  const bandera = modificarFunko(argv.id, argv.user, argv.nombre, argv.descripcion, argv.tipo as Tipo, argv.genero as Genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicasEspeciales, argv.valorMercado);
  if (bandera === true) {
    console.log(`Funko modified at ${argv.user} collection!`);
  }
  else {
    console.log(`Funko not found at ${argv.user} collection!`);
  }
}).help().argv;


// si lo recibido es list, listar funko
yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
  user: {
    description: 'User name',
    type: 'string',
    demandOption: true
  }
}, (argv) => {
  listaFunkos(argv.user);
}).help().argv;


// si lo recibido es read, leer funko
yargs(hideBin(process.argv)).command('read', 'Reads a funko', {
  user: {
    description: 'User name',
    type: 'string',
    demandOption: true
  },
  id: {
    description: 'Funko ID',
    type: 'number',
    demandOption: true
  }
}, (argv) => {
  mostrarFunko(argv.user, argv.id);
}).help().argv;

// addFunko('marco', 'Funko 1', 'Funko de prueba', Tipo.Pop, Genero.Animacion, 'Prueba', 1, false, 'Ninguna', 10);
// eliminarFunko('marco', 1);
// addFunko('alberto', 'Funko 2', 'Funko de prueba', Tipo.Pop, Genero.Animacion, 'Prueba', 1, false, 'Ninguna', 10);