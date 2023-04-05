[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/fmDo8ROl)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-Marcant97&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-Marcant97)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Marcant97/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Marcant97?branch=main)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Marcant97/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Marcant97/actions/workflows/node.js.yml)


# Práctica 9 - Aplicación de registro de Funko Pops

## Índice
[1. Introducción](#introducción)
[2. Ejercicios propuestos](#ejercicios-propuestos)
[3. Ejercicio PE-103](#ejercicio-pe-103)
[4. Conclusión](#conclusión)


### Introducción

En esta práctica, tendrá que implementar una aplicación que permita almacenar información de los Funko Pops pertenecientes a la colección de un usuario. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a un Funko. La información de cada Funko se almacenará como un JSON en el sistema de ficheros de la máquina donde se ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos (no existirá un menú interactivo).

### Ejercicios propuestos

Para el ejercicio propuesto, he diseñado una clase, 2 enums y una serie de funciones repartidas en 4 ficheros. Se cuenta con un fichero *types.ts* que contiene el enum para los tipos y géneros.

```ts
  /**
   * Enum para los tipos de funkos.
   */
  export enum Tipo {
    Pop = "Pop!",
    PopRides = "Pop! Rides",
    VynilSoda = "Vynil Soda",
    VynilGold = "Vynil Gold",
    VynilPlatinum = "Vynil Platinum",
  }

  /**
   * Enum para los géneros de funkos.
   */
  export enum Genero {
    Animacion = "Animacion",
    PeliculasYTV = "Peliculas y TV",
    Videojuegos = "Videojuegos",
    Deportes = "Deportes",
    Musica = "Música",
    Anime = "Anime",
  }
```

A continuación se encuentra el fichero *funko.ts*, que contiene la clase Funko con todos los getters y setters necesrios, además de todos los atributos que debe contener un funko, previamente especificados en el guion de esta práctica.

```ts
  import { Tipo, Genero } from './types.js';

  /**
   * Clase FUnko
   */
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

    /**
     * Constructor de la clase Funko
     * @param nombre_ nombre del funko
     * @param descripcion_ descripcion del funko
     * @param tipo_ tipo del funko
     * @param genero_ genero del funko
     * @param franquicia_ franquicia del funko
     * @param numero_ numero del funko
     * @param exclusivo_ es exlusivo o no
     * @param caracteristicasEspeciales_ caracteristicas especiales del funko
     * @param valorMercado_ valor de mercado del funko
     * @param ID_ identificador del funko
     */
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
    }

    /**
     * getter id
     */
    get getID(): number {
      return this.ID;
    }

    /**
     * setter id
     */
    set setID(ID_: number) {
      this.ID = ID_;
    }

    /**
     * getter nombre
     */
    get getNombre(): string {
      return this.nombre;
    }

    /**
     * setter nombre
     */
    set setNombre(nombre_: string) {
      this.nombre = nombre_;
    }

    /**
     * getter descripcion
     */
    get getDescripcion(): string {
      return this.descripcion;
    }

    /**
     * setter descripcion
     */
    set setDescripcion(descripcion_: string) {
      this.descripcion = descripcion_;
    }

    /**
     * getter tipo
     */
    get getTipo(): Tipo {
      return this.tipo;
    }

    /**
     * setter tipo
     */
    set setTipo(tipo_: Tipo) {
      this.tipo = tipo_;
    }

    /**
     * getter genero
     */
    get getGenero(): Genero {
      return this.genero;
    }

    /**
     * setter genero
     */
    set setGenero(genero_: Genero) {
      this.genero = genero_;
    }

    /**
     * getter franquicia
     */
    get getFranquicia(): string {
      return this.franquicia;
    }

    /**
     * setter franquicia
     */
    set setFranquicia(franquicia_: string) {
      this.franquicia = franquicia_;
    }

    /**
     * getter numero
     */
    get getNumero(): number {
      return this.numero;
    }

    /**
     * setter numero
     */
    set setNumero(numero_: number) {
      this.numero = numero_;
    }

    /**
     * getter exclusivo
     */
    get getExclusivo(): boolean {
      return this.exclusivo;
    }

    /**
     * setter exclusivo
     */
    set setExclusivo(exclusivo_: boolean) {
      this.exclusivo = exclusivo_;
    }

    /**
     * getter caracteristicas especiales
     */
    get getCaracteristicasEspeciales(): string {
      return this.caracteristicasEspeciales;
    }

    /**
     * setter caracteristicas especiales
     */
    set setCaracteristicasEspeciales(caracteristicasEspeciales_: string) {
      this.caracteristicasEspeciales = caracteristicasEspeciales_;
    }

    /**
     * getter valor mercado
     */
    get getValorMercado(): number {
      return this.valorMercado;
    }

    /**
     * setter valor mercado
     */
    set setValorMercado(valorMercado_: number) {
      this.valorMercado = valorMercado_;
    }

  }
```

Para continuar, se encuentra el fichero *funciones.ts*, donde están todas las funciones encargadas de:
[1. Leer funkos](#leerfunkos)
[2. Añadir un funko](#addfunko)
[3. Modificar un funko](#modificarfunko)
[4. Eliminar un funko](#eliminarfunko)
[5. Mostrar la lista de funkos de un usuario](#listafunkos)
[6. Mostrar la información de un funko en concreto](#mostrarfunko)

#### leerFunkos()
Esta función lo que hace es leer todos los funkos de un usuario, para ello, se le pasa el nombre del usuario y se leen todos los ficheros que hay en la carpeta del usuario, y se crea un array de funkos con todos los funkos que hay en la carpeta del usuario.
```ts
  /**
   * función que lee todos los funkos de un usuario
   * @param usuario usuario del que se quieren leer los funkos
   * @returns array de funkos del usuario
   */
  export function leerFunkos(usuario: string): Funko[] {
    const nombre_usuario = usuario; 
    const filenames = readdirSync("./database/" + nombre_usuario);
    const lista_funkos: Funko[] = [];

    filenames.forEach((file) => {
      const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
      const json = JSON.parse(contenido);
      lista_funkos.push(new Funko(json.nombre, json.descripcion, json.tipo, json.genero, json.franquicia, json.numero, json.exclusivo, json.caracteristicasEspeciales, json.valorMercado, json.ID));
    });
    
    return lista_funkos;
  }
```
#### addFunko()
Esta función se encarga de añadir un funko a nuevo a la colección de un usuarios, para ello tengo en cuenta si el usuario existe o no, en este último caso le creo una carpeta nueva. Además también compruebo si el funko que se quiere añadir ya existe o no, en este último caso no se añade. Tambiñen compruebo siel tipo y el género es correcto. Con el uso de *writeFileSync* se crea un nuevo fichero con el funko que se quiere añadir.

```ts
  /**
   * Método que añade un funko nuevo a la colección de un usuario
   * @param id id del funko
   * @param usuario usuario al que deseamos añadir el funko
   * @param nombre nombre del funko
   * @param descripcion descripción del funko
   * @param tipo tipo del funko
   * @param genero género del funko
   * @param franquicia franquicia del funko
   * @param numero número del funko
   * @param exclusivo es exclusivo o no
   * @param caracteristicasEspeciales características especiales del funko
   * @param valorMercado valor de mercado del funko
   * @returns true si se ha añadido correctamente, false si no.
   */
  export function addFunko(id:number, usuario:string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean {
    // 1. comprobar que el usuario existe
    const nombre_usuario = usuario;
    const path = "./database/" + nombre_usuario;
    if (existsSync(path) === false) {
      // si no existe la carpeta del usuario, la creo
      mkdirSync("./database/" + nombre_usuario);
    }
    const filenames = readdirSync("./database/" + nombre_usuario);
    let bandera = true;
    filenames.forEach((file) => {
      const contenido = readFileSync("./database/" + nombre_usuario + "/" + file, 'utf8');
      const json = JSON.parse(contenido);
      if (json.ID === id) {
        // el funko ya existe
        bandera = false;
        console.log(chalk.red(`Funko already exists at ${json.user} collection!`));
      }
    });
    if (bandera === true) {

      const array_tipos = Object.values(Tipo);
      let bandera_tipo = false;
      array_tipos.forEach((tipo_aux) => {
        if (tipo_aux === tipo) {
          bandera_tipo = true;
        }
      });
      if (bandera_tipo === false) {
        console.log(chalk.red(`Tipo ${tipo} does not exist`));
        return false;
      }

      const array_generos = Object.values(Genero);
      let bandera_genero = false;
      array_generos.forEach((genero_aux) => {
        if (genero_aux === genero) {
          bandera_genero = true;
        }
      });
      if (bandera_genero === false) {
        console.log(chalk.red(`Genero ${genero} does not exist`));
        return false;
      }

      const funco_aux = new Funko(nombre, descripcion, tipo, genero, franquicia, numero, exclusivo, caracteristicasEspeciales, valorMercado, id);
      writeFileSync("./database/" + usuario + "/" + nombre + ".json", JSON.stringify(funco_aux));
      console.log(chalk.green(`Funko added to ${usuario} collection!`));
    }
    return bandera;
  }
```
#### eliminarFunko()
Esta función se encarga de eliminar un funko de la colección de un usuario, para ello compruebo si el usuario existe o no, en caso de que no exista, no se puede eliminar el funko. Además compruebo si el funko que se quiere eliminar existe o no, en caso de que no exista, tampoco se puede eliminar el funko. Con el uso de *unlinkSync* elimino el fichero del funko que se quiere eliminar.
```ts
  /**
  * función que elimina un funko de la colección de un usuario
  * @param usuario usuario del que se quiere eliminar el funko
  * @param ID_ id del funko a eliminar
  * @returns true si se ha eliminado correctamente, false si no.
  */
  export function eliminarFunko(usuario:string, ID_: number): boolean {
    // 1. comprobar que el usuario existe
    const nombre_usuario = usuario;
    const path = "./database/" + nombre_usuario;
    if (existsSync(path) === false) {
      console.log(chalk.red(`User ${usuario} does not exist`));
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
      console.log(chalk.red(`Funko not found at ${usuario} collection!`));
      return false;
    }
    else {
      // eliminar el fichero correspondiente al funko
      unlinkSync("./database/" + usuario + "/" + nombre_aux + ".json");
      console.log(chalk.green(`Funko removed from ${usuario} collection!`));
      return true;
    }

  }
```

#### modificarFunko()
Para modificar un funko, se le pasan todos los parámetros y se comprueba que el usuario exista y que el funko también exista. Para simplificar los pasos, se elimina el fichero y se crea uno nuevo con los nuevos datos del funko. Al igual que en el método para añadir un funko, también se comprueba que el tipo y el género sean válidos.

```ts
  /**
   * Función que modifica un funko de la colección de un usuario
   * @param id id del funko
   * @param usuario nombre del usuario
   * @param nombre nombre del funko
   * @param descripcion descripción del funko
   * @param tipo tipo del funko
   * @param genero género del funko
   * @param franquicia franquicia del funko
   * @param numero numero del funko
   * @param exclusivo exclusivo o no
   * @param caracteristicasEspeciales características especiales del funko
   * @param valorMercado valor de mercado del funko
   * @returns true si se ha modificado correctamente, false si no.
   */
  export function modificarFunko(id:number, usuario:string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean {
    // 1. comprobar que el usuario existe
    const nombre_usuario = usuario;
    const path = "./database/" + nombre_usuario;
    if (existsSync(path) === false) {
      console.log(chalk.red(`User ${usuario} does not exist`));
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
      console.log(chalk.red(`Funko not found at ${usuario} collection!`));
      return false;
    }
    else {
      const array_tipos = Object.values(Tipo);
      let bandera_tipo = false;
      array_tipos.forEach((tipo_aux) => {
        if (tipo_aux === tipo) {
          bandera_tipo = true;
        }
      });
      if (bandera_tipo === false) {
        console.log(chalk.red(`Tipo ${tipo} does not exist`));
        return false;
      }

      const array_generos = Object.values(Genero);
      let bandera_genero = false;
      array_generos.forEach((genero_aux) => {
        if (genero_aux === genero) {
          bandera_genero = true;
        }
      });
      if (bandera_genero === false) {
        console.log(chalk.red(`Genero ${genero} does not exist`));
        return false;
      }
      // eliminar el fichero correspondiente al funko
      unlinkSync("./database/" + usuario + "/" + nombre_aux + ".json"); 
      // crear el nuevo funko
      const funco_aux = new Funko(nombre, descripcion, tipo, genero, franquicia, numero, exclusivo, caracteristicasEspeciales, valorMercado, id);
      writeFileSync("./database/" + usuario + "/" + nombre + ".json", JSON.stringify(funco_aux));
      console.log(chalk.green(`Funko modified at ${usuario} collection!`));
      return true;
    }

  }
```

#### listaFunkos()
Esta función se encarga de lista todos los funkos de un usuario. Para ello, se comprueba que el usuario exista y además, que su colección no esté vacía. Si todo es correcto, se listan todos los funkos de la colección del usuario.
```ts
  /**
   * Función que lista los funkos de un usuario
   * @param usuario nombre del usuario
   * @returns true si se ha listado correctamente, false si no.
   */
  export function listaFunkos(usuario: string): boolean {
    // leer todos los funkos de un usuario
    const nombre_usuario = usuario;
    const path = "./database/" + nombre_usuario;
    if (existsSync(path) === false) {
      console.log(chalk.red(`User ${usuario} does not exist`));
      return false;
    }
    const lista_funkos = leerFunkos(usuario);
    if (lista_funkos.length === 0) {
      console.log(chalk.red("No funkos in the collection"));
      return false;
    }
    console.log(chalk.white(`${usuario} Funko Pop collection:`));
    lista_funkos.forEach((funko) => {
      console.log(chalk.white("-----------------------------------"));
      console.log(chalk.white(`ID: ${funko.getID}`));
      console.log(chalk.white(`Nombre: ${funko.getNombre}`));
      console.log(chalk.white(`Descripcion: ${funko.getDescripcion}`));
      console.log(chalk.white(`Tipo: ${funko.getTipo}`));
      console.log(chalk.white(`Genero: ${funko.getGenero}`));
      console.log(chalk.white(`Franquicia: ${funko.getFranquicia}`));
      console.log(chalk.white(`Numero: ${funko.getNumero}`));
      console.log(chalk.white(`Exclusivo: ${funko.getExclusivo}`));
      console.log(chalk.white(`Caracteristicas Especiales: ${funko.getCaracteristicasEspeciales}`));
      if (funko.getValorMercado <= 50) {
        console.log(chalk.green(`Valor de mercado: ${funko.getValorMercado}`));
      }
      else if (funko.getValorMercado > 50 && funko.getValorMercado <= 100) {
        console.log(chalk.yellow(`Valor de mercado: ${funko.getValorMercado}`));
      }
      else if (funko.getValorMercado > 100 && funko.getValorMercado <= 200) {
        console.log(chalk.red(`Valor de mercado: ${funko.getValorMercado}`));
      }    
      else {
        console.log(chalk.blue(`Valor de mercado: ${funko.getValorMercado}`));
      }
      console.log();
    });
    return true;

  }
```

#### mostrarFunko()
Por último, esta función se encarga de mostrar un funko de un usuario. Para ello, se comprueba que el usuario exista y además, que el funko exista. Si todo es correcto, se muestra toda la información del funko.
```ts
  /**
   * Función que muestra un funko
   * @param usuario nombre del usuario
   * @param id identificador del funko
   * @returns true si se ha mostrado correctamente, false si no.
   */
  export function mostrarFunko(usuario: string, id: number): boolean {
    let mi_funko: Funko;
    // 1. comporbar que el usuario existe
    const nombre_usuario = usuario;
    const path = "./database/" + nombre_usuario;
    if (existsSync(path) === false) {
      console.log(chalk.red(`User ${usuario} does not exist`));
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
        console.log(chalk.white("-----------------------------------"));
        console.log(chalk.white(`ID: ${mi_funko.getID}`));
        console.log(chalk.white(`Nombre: ${mi_funko.getNombre}`));
        console.log(chalk.white(`Descripcion: ${mi_funko.getDescripcion}`));
        console.log(chalk.white(`Tipo: ${mi_funko.getTipo}`));
        console.log(chalk.white(`Genero: ${mi_funko.getGenero}`));
        console.log(chalk.white(`Franquicia: ${mi_funko.getFranquicia}`));
        console.log(chalk.white(`Numero: ${mi_funko.getNumero}`));
        console.log(chalk.white(`Exclusivo: ${mi_funko.getExclusivo}`));
        console.log(chalk.white(`Caracteristicas Especiales: ${mi_funko.getCaracteristicasEspeciales}`));
        if (mi_funko.getValorMercado <= 50) {
          console.log(chalk.green(`Valor de mercado: ${mi_funko.getValorMercado}`));
        }
        else if (mi_funko.getValorMercado > 50 && mi_funko.getValorMercado <= 100) {
          console.log(chalk.yellow(`Valor de mercado: ${mi_funko.getValorMercado}`));
        }
        else if (mi_funko.getValorMercado > 100 && mi_funko.getValorMercado <= 200) {
          console.log(chalk.red(`Valor de mercado: ${mi_funko.getValorMercado}`));
        }    
        else {
          console.log(chalk.blue(`Valor de mercado: ${mi_funko.getValorMercado}`));
        }
        console.log();
        
      }
    }
    );
    if (bandera === false) {
      console.log(chalk.red(`Funko with ID ${id} does not exist`))
      return false;
    }
    else {
      return true;
    }
  }
```


Para terminar con el ejercicio propuesto, tenemos el fichero *cliente.ts*, éste es el fichero que el usuario deberá ejecutar. Aquí se encuentra todo lo relacionado con **yargs**, contemplando los diferentes parámetros como add, remove, update, list o read. Todos tienen sus correspondientes parámetros como --id, --user o --nombre entre otros.

### Ejercicio PE-103

En la clase de prácticas se solicitó leer contenido de ficheros con extension *.json* y *.csv*, además de implementar el patrón de diseño *template method*. Para ello tengo en primer lugar un fichero `leer.ts`, donde se encuentra la clase abstracta con el método run y 2 métodos hook, además del tipo datos, que tienes un array de beneficios y un array para los pesos. 

```ts
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
```

Por otro lado, se encuentra el fichero `cliente.js` que tan sólo contiene una fiunción que se encarga de llamar al método run de la clase abstracta.

```ts
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
```

Finalmente tenemos los ficheros `leerJSON.ts` y `leerCSV.ts`, donde cada uno contiene una clase hija que hereda de la clase abstracta y que implementa un método procesar que se encarga de leer el fichero y de obtener los beneficios y los pesos.

```ts
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
``` 

```ts
  /**
   * Clase leerJSON que extiende la clase Leer
   */
  export class LeerJSON extends Leer {
    
    /**
     * constructor por defecto.
     */
    constructor() {
      super();
    }

    /**
     * Implementación del método procesar
     * @returns elemento de tipo datos
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
```

### Conclusión

En esta práctica por un lado me ha servido para empezar a trabajar con los módulos, he aprendido a usar **yarg** y **chalk**, además de repasar contenidos previamente aprendidos en esta asignatura como los enums o el uso de clases y funciones. También he aprendido a usar ficheros con la api síncrona de node, para escribir y leer, además de crear y borrar directorios.
Por otro lado, en la clase de práctica como comenté previamente, se solicitó leer de ficheros CSV y JSON además de implementar el patrón de diseño *template method*, lo que me sirvió para practicar la lectura de ficheros, además de repasar el patrón de diseño *template method*.