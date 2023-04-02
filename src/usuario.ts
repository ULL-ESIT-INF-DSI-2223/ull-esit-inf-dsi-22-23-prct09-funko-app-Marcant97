// Cada usuario tendrá su propia lista de Funko Pops, con la que podrá llevar a cabo las siguientes operaciones:
// Añadir un Funko a la lista. Antes de añadir un Funko a la lista se debe comprobar si ya existe un Funko con el mismo ID. En caso de que así fuera, deberá mostrarse un mensaje de error por la consola. En caso contrario, se añadirá el nuevo Funko a la lista y se mostrará un mensaje informativo por la consola.
// Modificar un Funko de la lista. Antes de modificar un Funko, previamente se debe comprobar si ya existe un Funko con el ID del Funko a modificar en la lista. Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.
// Eliminar un Funko de la lista. Antes de eliminar un Funko, previamente se debe comprobar si existe un Funko con el ID del Funko a eliminar en la lista. Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.
// Listar los Funkos existentes en una lista. En este caso, deberá mostrarse la información asociada a cada Funko existente en la lista por la consola. Además, deberá utilizar el paquete chalk para ello. Primero, deberá establecer rangos de valor de mercado. Luego, el valor de mercado de cada Funko deberá mostrarse con colores diferentes. Por ejemplo, para aquellos Funko con un valor de mercado elevado, dicho valor deberá mostrarse en color verde, mientras que para los de menor valor de mercado, dicho valor se mostrará con color rojo. Establezca, al menos, cuatro rangos de valor de mercado diferentes.
// Mostrar la información de un Funko concreto existente en la lista. Antes de mostrar la información del Funko, se debe comprobar que en la lista existe un Funko cuyo ID sea el del Funko a mostrar. Si existe, se mostrará toda su información, incluyendo el color de su valor de mercado. Para ello, use el paquete chalk. En caso contrario, se mostrará un mensaje de error por la consola.
// Todos los mensajes informativos se mostrarán con color verde, mientras que los mensajes de error se mostrarán con color rojo. Use el paquete chalk para ello.
// Hacer persistente la lista de Funko de cada usuario. Aquí es donde entra en juego el uso de la API síncrona de Node.js para trabajar con el sistema de ficheros:
// Guardar cada Funko de la lista en un fichero independiente con formato JSON. Los ficheros JSON correspondientes a los Funko de un usuario concreto deberán almacenarse en un directorio con el nombre de dicho usuario.
// Cargar los Funko desde los diferentes ficheros con formato JSON almacenados en el directorio del usuario correspondiente.0


// import {readFileSync} from 'fs';
// import { Funko }  from './funko.js';

// class Usuario {
//   private nombre: string;
//   private listaFunko: Funko[];

//   constructor(nombre_: string) {
//     this.nombre = nombre_;
//     this.listaFunko = [];
//     this.leerListaFunkos();
//   }

//   get getNombre(): string {
//     return this.nombre;
//   }

//   get getListaFunko(): Funko[] {
//     return this.listaFunko;
//   }

//   set setListaFunko(listaFunko_: Funko[]) {
//     this.listaFunko = listaFunko_;
//   }


//   public leerListaFunkos(): void {
//     // los funkos se guardan en un fichero con el nombre del usuario en database/
//     // usar readsync para leer los funkos de los ficheros
//     // usar JSON.parse para convertir el string en un objeto
//     // usar push para añadir el funko a la lista
    
//   }



//   // public addFunko(funko: Funko): void {
//   //   let existe: boolean = false;
//   //   for (let i = 0; i < this.listaFunko.length; i++) {
//   //     if (this.listaFunko[i].getID === funko.getID) {
//   //       existe = true;
//   //       break;
//   //     }
//   //   }
//   //   if (existe) {
//   //     console.log('El Funko ya existe');
//   //   } else {
//   //     this.listaFunko.push(funko);
//   //     console.log('Funko añadido');
//   //   }
//   // }

//   // public modificarFunko(funko: Funko): void {
//   //   let existe: boolean = false;
//   //   for (let i = 0; i < this.listaFunko.length; i++) {
//   //     if (this.listaFunko[i].getID === funko.getID) {
//   //       existe = true;
//   //       this.listaFunko[i] = funko;
//   //       break;
//   //     }
//   //   }
//   //   if (existe) {
//   //     console.log('Funko modificado');
//   //   } else {
//   //     console.log('El Funko no existe');
//   //   }
//   // }

//   // public eliminarFunko(id: number): void {
//   //   let existe: boolean = false;
//   //   for (let i = 0; i < this.listaFunko.length; i++) {
//   //     if (this.listaFunko[i].getID === id) {
//   //       existe = true;
//   //       this.listaFunko.splice(i, 1);
//   //       break;
//   //     }
//   //   }
//   //   if (existe) {
//   //     console.log('Funko eliminado');
//   //   } else {
//   //     console.log('El Funko no existe');
//   //   }
//   // }

//   // public listarFunko(): void {
//   //   for (let i = 0; i < this.listaFunko.length; i++) {
//   //     console.log(this.listaFunko[i
// }

