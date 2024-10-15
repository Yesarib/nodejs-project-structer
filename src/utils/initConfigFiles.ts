import fs from "fs"
import path from "path";

export function createConfigFiles(projectDir: string) {
    const gitignoreContent = `
  node_modules/
  dist/
  .env
  `;

    fs.writeFileSync(path.join(projectDir, '.gitignore'), gitignoreContent);
    fs.writeFileSync(path.join(projectDir, '.env'), gitignoreContent);


}
