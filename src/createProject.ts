import path from 'path';
import fs from 'fs';
import { copyTemplate } from './templateManager';
import { execSync } from 'child_process';

/**
 * Proje yapısını oluşturur.
 * @param type - Oluşturulacak proje türü.
 */
export function createProjectStructure(type: string,name:string) {
  const baseDir = path.join(process.cwd(), name); // Proje dizini
  const templateDir = path.join(__dirname, '../templates', `${type}-template`); // Şablon dizini

  
  // Hedef dizin, şablon dizininin altına düşüyor mu kontrol et
  if (baseDir.includes(templateDir)) {
    console.error("Project cannot be created inside the template directory.");
    return;
  }
  
  if (!fs.existsSync(baseDir)) {
    if (fs.existsSync(templateDir)) {
      copyTemplate(type, baseDir); // Şablonu kopyala
      
      // Şablon kopyalandıktan sonra npm init -y komutunu çalıştır
      console.log('Initializing npm project in the new directory...');
      execSync('npm init -y', { cwd: baseDir, stdio: 'inherit' }); // Yeni dizinde npm init -y çalıştır

      console.log(`Project structure created successfully at ${baseDir}`);
    } else {
      console.error(`Template directory ${templateDir} not found.`);
    }
  } else {
    console.log(`Directory ${baseDir} already exists.`);
  }
}
