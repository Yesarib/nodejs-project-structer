"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectStructure = createProjectStructure;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const templateManager_1 = require("./templateManager");
const child_process_1 = require("child_process");
/**
 * Proje yapısını oluşturur.
 * @param type - Oluşturulacak proje türü.
 */
function createProjectStructure(type, name) {
    const baseDir = path_1.default.join(process.cwd(), name); // Proje dizini
    const templateDir = path_1.default.join(__dirname, '../templates', `${type}-template`); // Şablon dizini
    console.log("Template dir", templateDir);
    // Hedef dizin, şablon dizininin altına düşüyor mu kontrol et
    if (baseDir.startsWith(templateDir)) {
        console.error("Project cannot be created inside the template directory.");
        return;
    }
    if (!fs_1.default.existsSync(baseDir)) {
        if (fs_1.default.existsSync(templateDir)) {
            (0, templateManager_1.copyTemplate)(type, baseDir); // Şablonu kopyala
            // Şablon kopyalandıktan sonra npm init -y komutunu çalıştır
            console.log('Initializing npm project in the new directory...');
            (0, child_process_1.execSync)('npm init -y', { cwd: baseDir, stdio: 'inherit' }); // Yeni dizinde npm init -y çalıştır
            console.log(`Project structure created successfully at ${baseDir}`);
        }
        else {
            console.error(`Template directory ${templateDir} not found.`);
        }
    }
    else {
        console.log(`Directory ${baseDir} already exists.`);
    }
}
