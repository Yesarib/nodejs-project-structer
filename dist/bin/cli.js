#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const createProject_1 = require("../src/createProject");
const program = new commander_1.Command();
program
    .name('structe-create')
    .description('Create a project structure based on selected architecture')
    .version('1.0.0');
program
    .command('create <type> <name>') // Proje türü ve adı
    .description('Create a new project structure')
    .action((type, name) => {
    console.log(`Creating project structure for type: ${type} with name: ${name}`);
    (0, createProject_1.createProjectStructure)(type, name);
});
program.parse(process.argv);
