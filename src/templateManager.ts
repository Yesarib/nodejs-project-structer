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
    const items = fs.readdirSync(templateDir);

    // Eğer dizin boşsa, bir şey yok demek
    if (items.length === 0) {
      console.log(`Template ${templateType} is empty, nothing to copy.`);
      return;
    }

    items.forEach(item => {
      const srcItem = path.join(templateDir, item);
      const destItem = path.join(destDir, item);

      // Dosyanın veya dizinin durumunu kontrol et
      const stat = fs.statSync(srcItem);

      if (stat.isDirectory()) {
        fs.cpSync(srcItem, destItem, { recursive: true }); // Dizini oluştur
        copyTemplate(path.join(templateType, item), destItem); // Rekurzif olarak devam et
      } else if (stat.isFile()) {
        // Eğer bir dosyaysa kopyala
        fs.cpSync(srcItem, destItem, { recursive: true });
      }
    });

    console.log(`Created project structure from template: ${templateType}`);
  } else {
    console.error(`Template ${templateDir} not found.`);
  }
}