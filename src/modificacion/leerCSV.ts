import {readFileSync} from 'fs';
import {Leer, datos} from './leer.js';

/**
 * Clase LeerCSV que implementa la clase Leer.
 */
export class LeerCSV extends Leer {
  /**
   * Constructor por defecto
   */
  constructor() { 
    super();
  }
  
  /**
   * implementacion del método procesar
   * @returns elemento de tipo datos
   */
  protected procesar(): datos {
    const contenido = readFileSync('src/modificacion/datos2.csv', 'utf8');
    const lineas: string[] = contenido.split('\n');
    for (let i = 2; i < lineas.length; i++) {
      const aux: string[] = lineas[i].split(' ');
      this.leer_datos.pesos.push(Number(aux[0]));
      this.leer_datos.beneficios.push(Number(aux[1]));
    }
    return (this.leer_datos);
  }
}