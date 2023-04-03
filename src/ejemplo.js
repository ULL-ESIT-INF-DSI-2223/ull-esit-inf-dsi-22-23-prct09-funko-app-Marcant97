"use strict";
exports.__esModule = true;
var yargs_1 = require("yargs");
var helpers_1 = require("yargs/helpers");
(0, yargs_1["default"])((0, helpers_1.hideBin)(process.argv)).command('add', 'Adds a funko', {
    id: {
        description: 'Funko ID',
        type: 'number',
        demandOption: true
    }
}, function (argv) {
    console.log(argv.id);
}).help().argv;
