import { execSync } from "child_process";

export function execNpm(type: string, baseDir: string) {
    console.log('Initializing npm project in the new directory...');
    execSync('npm init -y', { cwd: baseDir, stdio: 'inherit' });

    if (type.startsWith('ts') || type.startsWith('typescript')) {
        execSync('npm install typescript @types/node --save-dev', { cwd: baseDir, stdio: 'inherit' })
        execSync('npx tsc --init', { cwd: baseDir, stdio: 'inherit' })
    }
}