#!/usr/bin/env node

import { Command } from 'commander';
import { createProjectStructure } from '../src/createProject';

const program = new Command();

program
  .name('structe-create')
  .description('Create a project structure based on selected architecture')
  .version('1.0.0');

program
  .command('create <type> <name>') // Proje türü ve adı
  .description('Create a new project structure')
  .action((type, name) => {
    console.log(`Creating project structure for type: ${type} with name: ${name}`);

    createProjectStructure(type, name);
  });

program.parse(process.argv);
