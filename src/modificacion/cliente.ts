// import { LeerCSV } from "./";
// import { LeerJSON } from "./leerJSON";
import { Leer, datos } from "./leer.js";
import { LeerCSV } from "./leerCSV.js";
import { LeerJSON } from "./leerJSON.js";


/**
 * Función cliente
 * @param abstractClass elemento leer
 */
export function clientCode(abstractClass: Leer): datos {
  // ...
  return (abstractClass.run());
  // ...
}

clientCode(new LeerCSV());
clientCode(new LeerJSON());