"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplate = copyTemplate;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Şablon dosyalarını belirtilen dizine kopyalar.
 * @param templateType - Şablon türü (örn. 'js-base').
 * @param destDir - Hedef dizin.
 */
function copyTemplate(templateType, destDir) {
    const templateDir = path_1.default.join(__dirname, '../templates', `${templateType}-template`);
    // Şablon dizini mevcutsa
    if (fs_1.default.existsSync(templateDir)) {
        fs_1.default.mkdirSync(destDir, { recursive: true }); // Hedef dizini oluştur
        // Şablon dizinindeki tüm öğeleri listele
        fs_1.default.readdirSync(templateDir).forEach(item => {
            const srcItem = path_1.default.join(templateDir, item);
            const destItem = path_1.default.join(destDir, item);
            // Dosyanın veya dizinin durumunu kontrol et
            const stat = fs_1.default.statSync(srcItem);
            if (stat.isDirectory()) {
                fs_1.default.mkdirSync(destItem, { recursive: true }); // Dizini oluştur
                copyTemplate(path_1.default.join(templateType, item), destItem); // Rekurzif olarak devam et
            }
            else if (stat.isFile()) {
                // Eğer bir dosyaysa kopyala
                fs_1.default.copyFileSync(srcItem, destItem);
            }
        });
        console.log(`Created project structure from template: ${templateType}`);
    }
    else {
        console.error(`Template ${templateDir} not found.`);
    }
}
