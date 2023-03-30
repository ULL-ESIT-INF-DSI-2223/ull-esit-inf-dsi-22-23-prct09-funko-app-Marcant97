import {readFileSync} from 'fs';
import {Leer, datos} from './leer.js';


/**
 * Clase leerJSON que extiende la clase Leer
 */
export class LeerJSON extends Leer {
  constructor() {
    super();
  }

  /**
   * Implementación del método procesar
   */
  protected procesar(): datos {
    const contenido = readFileSync('src/modificacion/datos1.json', 'utf8');
    const json = JSON.parse(contenido);
    const elementos = json.elementos;
    for (const elemento of elementos) {
      this.leer_datos.beneficios.push(elemento.beneficio);
      this.leer_datos.pesos.push(elemento.peso);
    }   
    return this.leer_datos; 
  }
}

