import fs from 'fs';
import path from 'path';

/**
 * Şablon dosyalarını belirtilen dizine kopyalar.
 * @param templateType - Şablon türü (örn. 'js-base').
 * @param destDir - Hedef dizin.
 */
export function copyTemplate(templateType: string, destDir: string) {
  const templateDir = path.join(__dirname, '../templates', `${templateType}-template`);

  // Şablon dizini mevcutsa
  if (fs.existsSync(templateDir)) {
    fs.mkdirSync(destDir, { recursive: true }); // Hedef dizini oluştur
    
    // Şablon dizinindeki tüm öğeleri listele
    fs.readdirSync(templateDir).forEach(item => {
      const srcItem = path.join(templateDir, item);
      const destItem = path.join(destDir, item);

      // Dosyanın veya dizinin durumunu kontrol et
      const stat = fs.statSync(srcItem);

      if (stat.isDirectory()) {
        fs.mkdirSync(destItem, { recursive: true }); // Dizini oluştur
        copyTemplate(path.join(templateType, item), destItem); // Rekurzif olarak devam et
      } else if (stat.isFile()) {
        // Eğer bir dosyaysa kopyala
        fs.copyFileSync(srcItem, destItem);
      }
    });

    console.log(`Created project structure from template: ${templateType}`);
  } else {
    console.error(`Template ${templateDir} not found.`);
  }
}
