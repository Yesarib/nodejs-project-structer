"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execNpm = execNpm;
const child_process_1 = require("child_process");
function execNpm(type, baseDir) {
    // Şablon kopyalandıktan sonra npm init -y komutunu çalıştır
    console.log('Initializing npm project in the new directory...');
    (0, child_process_1.execSync)('npm init -y', { cwd: baseDir, stdio: 'inherit' }); // Yeni dizinde npm init -y çalıştır
    if (type.startsWith('ts') || type.startsWith('typescript')) {
        (0, child_process_1.execSync)('npm install typescript @types/node --save-dev');
        (0, child_process_1.execSync)('npx tsc --init');
    }
}
