import { execSync } from "child_process";

export function installDependencies(type: string, baseDir: string) {
    execSync('npm init -y', { cwd: baseDir, stdio: 'inherit' });

    if (type.startsWith('ts') || type.startsWith('typescript')) {
        execSync('npm install typescript @types/node --save-dev', { cwd: baseDir, stdio: 'inherit' })
        execSync('npx tsc --init', { cwd: baseDir, stdio: 'inherit' })
    }

    console.log("Install dotenv...");
    
    execSync('npm install dotenv --registry=https://registry.npmjs.org/', { cwd: baseDir, stdio: 'inherit' })


}