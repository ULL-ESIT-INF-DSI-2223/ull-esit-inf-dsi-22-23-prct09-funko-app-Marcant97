import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addFunko, eliminarFunko, listaFunkos, mostrarFunko, modificarFunko } from './funciones.js';
import { Genero, Tipo } from './types.js';

/**
 * add
 * --user 
 * --id
 * --nombre
 * --descripcion
 * --tipo
 * --genero
 * --franquicia
 * --numero
 * --exclusivo
 * --caracteristicasEspeciales
 * --valorMercado
 */
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
  addFunko(argv.id, argv.user, argv.nombre, argv.descripcion, argv.tipo as Tipo, argv.genero as Genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicasEspeciales, argv.valorMercado);
}).help().argv;


/**
 * remove
 * --user
 * --id
 */
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
  eliminarFunko(argv.user, argv.id);

}).help().argv;


/**
 * update
 * --user 
 * --id
 * --nombre
 * --descripcion
 * --tipo
 * --genero
 * --franquicia
 * --numero
 * --exclusivo
 * --caracteristicasEspeciales
 * --valorMercado
 */
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
  modificarFunko(argv.id, argv.user, argv.nombre, argv.descripcion, argv.tipo as Tipo, argv.genero as Genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicasEspeciales, argv.valorMercado);
}).help().argv;


/**
 * list
 * --user
 */
yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
  user: {
    description: 'User name',
    type: 'string',
    demandOption: true
  }
}, (argv) => {
  listaFunkos(argv.user);
}).help().argv;


/**
 * read
 * --user
 * --id
 */
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