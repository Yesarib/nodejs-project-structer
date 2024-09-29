import fs from 'fs';
import path from 'path';

/**
 * Copies template files to the specified directory.
 * @param templateType - Template type (e.g. 'js-base').
 * @param destDir - Target directory.
 */
export function copyTemplate(templateType: string, destDir: string) {
  const templateDir = path.join(__dirname, '../templates', `${templateType}-template`);

  // If template directory is available
  if (fs.existsSync(templateDir)) {
    fs.mkdirSync(destDir, { recursive: true }); // Create destination directory

    const items = fs.readdirSync(templateDir);

    if (items.length === 0) {
      console.log(`Template ${templateType} is empty, nothing to copy.`);
      return;
    }

    items.forEach(item => {
      const srcItem = path.join(templateDir, item);
      const destItem = path.join(destDir, item);

      // Check the status of the file or directory
      const stat = fs.statSync(srcItem);

      if (stat.isDirectory()) {
        fs.cpSync(srcItem, destItem, { recursive: true }); // Create Folder
        copyTemplate(path.join(templateType, item), destItem); // Continue recursively
      } else if (stat.isFile()) {
        // Copy if it is a file
        fs.cpSync(srcItem, destItem, { recursive: true });
      }
    });

    console.log(`Created project structure from template: ${templateType}`);
  } else {
    console.error(`Template ${templateDir} not found.`);
  }
}