// Escriba una clase con un método de plantilla que consista en un único paso "procesar", que lleve a cabo la lectura 
// de un fichero CSV o un fichero JSON con los formatos anteriormente especificados y que devuelva dos arrays: 
// uno con los beneficios de los elementos de la mochila y otro con los pesos de los elementos de la mochila. 
// El método de plantilla también deberá hacer uso de dos métodos de enganche o hooks.

export type datos = {
  beneficios: number[];
  pesos: number[];
}


export abstract class Leer {

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
   * método plantilla
   */
  public run(): datos {
    this.hook1();
    console.log(this.procesar());
    this.hook2();
    return this.leer_datos;
  }

  /**
   * método procesar
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