import { installDependencies } from "./initDependencies";
import { createConfigFiles } from "./initConfigFiles";
import { initExpress } from "./initExpress";

export function installInit(type: string, baseDir: string) {
    installDependencies(type, baseDir)
    createConfigFiles(baseDir);
    console.log(type);

    if (type === 'ts-base' || type === 'js-base') {
        initExpress(type, baseDir)
    }
}