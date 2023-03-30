/**
 * Tipo datos.
 */
export type datos = {
  beneficios: number[];
  pesos: number[];
}

/**
 * Clase abstracta Leer
 */
export abstract class Leer {

  /**
   * elemento datos
   */
  protected leer_datos: datos;

  /**
   * Constructor por defecto
   */
  constructor() {
    this.leer_datos = {
      beneficios: [],
      pesos: []
    };
  }

  /**
   * método plantilla run
   */
  public run(): datos {
    this.hook1();
    console.log(this.procesar());
    this.hook2();
    return this.leer_datos;
  }

  /**
   * método abstracto procesar
   * @returns elemento de tipo datos.
   */
  protected abstract procesar(): datos;

  /**
   * Método hook1
   */
  protected hook1(): void {
    console.log("El resultado es el siguiente: ");
  }

  /**
   * método hook 2
   */
  protected hook2(): void {
    console.log("Número total de elementos: " + this.leer_datos.beneficios.length);
  }


}