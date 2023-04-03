// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';
// import {Tipo, Genero} from './funko.js';
// //add
// yargs(hideBin(process.argv)).command('add', 'Adds a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   },
//   nombre: {
//     description: 'Funko name',
//     type: 'string',
//     demandOption: true
//   },
//   tipo: {
//     description: 'Funko type',
//     type: 'string',
//     demandOption: true
//   },
//   genero: {
//     description: 'Funko genre',
//     type: 'string',
//     demandOption: true
//   },
//   franquicia: {
//     description: 'Funko franchise',
//     type: 'string',
//     demandOption: true
//   },
//   numero: {
//     description: 'Funko number',
//     type: 'number',
//     demandOption: true
//   },
//   exclusivo: {
//     description: 'Funko exclusive',
//     type: 'boolean',
//     demandOption: true
//   },
//   caracteristicasEspeciales: {
//     description: 'Funko special features',
//     type: 'string',
//     demandOption: true
//   },
//   valorMercado: {
//     description: 'Funko market value',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   console.log(argv.user);
//   console.log(argv.id);
//   console.log(argv.nombre);
//   console.log(argv.tipo);
//   console.log(argv.genero);
//   console.log(argv.franquicia);
//   console.log(argv.numero);
//   console.log(argv.exclusivo);

//   console.log(argv.caracteristicasEspeciales);
//   console.log(argv.valorMercado);
// }).help().argv;


// // si lo recibido es delete, eliminar funko
// yargs(hideBin(process.argv)).command('delete', 'Deletes a funko', {
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   console.log(argv.id);
// }).help().argv;

// // si lo recibido es modify, modificar funko
// yargs(hideBin(process.argv)).command('modify', 'Modifies a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   },
//   nombre: {
//     description: 'Funko name',
//     type: 'string',
//     demandOption: true
//   },
//   tipo: {
//     description: 'Funko type',
//     type: 'string',
//     demandOption: true
//   },
//   genero: {
//     description: 'Funko genre',
//     type: 'string',
//     demandOption: true
//   },
//   franquicia: {
//     description: 'Funko franchise',
//     type: 'string',
//     demandOption: true
//   },
//   numero: {
//     description: 'Funko number',
//     type: 'number',
//     demandOption: true
//   },
//   exclusivo: {
//     description: 'Funko exclusive',
//     type: 'boolean',
//     demandOption: true
//   },
//   caracteristicasEspeciales: {
//     description: 'Funko special features',
//     type: 'string',
//     demandOption: true
//   },
//   valorMercado: {
//     description: 'Funko market value',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   console.log(argv.user);
//   console.log(argv.id);
//   console.log(argv.nombre);
//   console.log(argv.tipo);
//   console.log(argv.genero);
//   console.log(argv.franquicia);
//   console.log(argv.numero);
//   console.log(argv.exclusivo);

//   console.log(argv.caracteristicasEspeciales);
//   console.log(argv.valorMercado);
// }).help().argv;


// // si lo recibido es list, listar funko
// yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   }
// }, (argv) => {
//   console.log(argv.user);
// }).help().argv;


// // si lo recibido es read, leer funko
// yargs(hideBin(process.argv)).command('read', 'Reads a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   console.log(argv.id);
// }).help().argv;


