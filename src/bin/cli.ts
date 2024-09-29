#!/usr/bin/env node

import { Command } from 'commander';
import { createProjectStructure } from '../createProject';
import { supportedTemplates } from '../constans/templates';

const program = new Command();

program
  .name('node-structer')
  .description('Create a project structure based on selected architecture')
  .version('1.0.0');


program.addHelpText('after', `
    Supported templates:
      ${supportedTemplates.join(', ')}
    
    Example:
      $ node-structer create js-base myProject
    `);

program
  .command('create <type> <name>') // Project tpye and name
  .description('Create a new project structure')
  .action((type, name) => {

    if (!supportedTemplates.includes(type)) {
      console.error(`Error: Unsupported template type "${type}".`);
      console.log(`Supported templates are: ${supportedTemplates.join(', ')}`);
      process.exit(1);
    }

    console.log(`Creating project structure for type: ${type} with name: ${name}`);

    createProjectStructure(type, name);
  });

program.parse(process.argv);
