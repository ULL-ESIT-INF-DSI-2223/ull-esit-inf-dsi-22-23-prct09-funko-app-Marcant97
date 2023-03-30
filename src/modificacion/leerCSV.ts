import {readFileSync} from 'fs';
import {Leer, datos} from './leer.js';

export class LeerCSV extends Leer {
  constructor() { 
    super();
  }
  
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