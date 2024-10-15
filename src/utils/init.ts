import { installDependencies } from "./initDependencies";
import { createConfigFiles } from "./initConfigFiles";
import { initExpress } from "./initExpress";

export function installInit(type: string, baseDir: string) {
    installDependencies(type,baseDir)
    createConfigFiles(baseDir);
    initExpress(type,baseDir)
}