import { execSync } from "child_process";

export function execNpm(type: string, baseDir: string) {
    // Şablon kopyalandıktan sonra npm init -y komutunu çalıştır
    console.log('Initializing npm project in the new directory...');
    execSync('npm init -y', { cwd: baseDir, stdio: 'inherit' }); // Yeni dizinde npm init -y çalıştır

    if (type.startsWith('ts') || type.startsWith('typescript')){
        execSync('npm install typescript @types/node --save-dev')
        execSync('npx tsc --init')
    }
}