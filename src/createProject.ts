import path from 'path';
import fs from 'fs';
import { copyTemplate } from './templateManager';
import { execNpm } from './utils/init';

/**
 * Creates the project structure.
 * @param type - Type of project to be created.
 * @param name - Project name to be created.
 */
export function createProjectStructure(type: string,name:string) {
  const baseDir = path.join(process.cwd(), name); // Project folder
  const templateDir = path.join(__dirname, '../templates', `${type}-template`); // Templates folders

  if (baseDir.includes(templateDir)) {
    console.error("Project cannot be created inside the template directory.");
    return;
  }
  
  if (!fs.existsSync(baseDir)) {
    if (fs.existsSync(templateDir)) {
      copyTemplate(type, baseDir);
      
      console.log('Initializing npm project in the new directory...');
      execNpm(type,baseDir)

      console.log(`Project structure created successfully at ${baseDir}`);
    } else {
      console.error(`Template directory ${templateDir} not found.`);
    }
  } else {
    console.log(`Directory ${baseDir} already exists.`);
  }
}
