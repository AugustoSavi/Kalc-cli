#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const package = require('./package.json');

program.version(package.version);

program
    .command('-c ["expressão"]',{ isDefault: true })
    .description('Calcula a expressão informada entre as aspas')
    .action((todo) => {
        console.log(chalk.blue(eval(todo)));
    });

program.parse(process.argv);