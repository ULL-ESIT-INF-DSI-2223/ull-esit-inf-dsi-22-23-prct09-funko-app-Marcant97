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

import { Tipo, Genero } from './types.js';


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