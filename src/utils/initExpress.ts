import { execSync } from "child_process";
import fs from 'fs'
import path from "path";

export function initExpress(type: string, baseDir: string) {
    console.log('Initializing express');
    let indexContent = `
require('dotenv').config();
const app = require('./app')

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
    console.log(Server running on ${'3000'});
})
`
    let fileContent = `
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
`;

    execSync('npm install express', { cwd: baseDir, stdio: 'inherit' });

    if (type.startsWith('ts') || type.startsWith('typescript')) {
        execSync('npm install --save-dev @types/express', { cwd: baseDir, stdio: 'inherit' })
        fileContent = `
    import express from 'express'
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    export default app;
    `;

        indexContent = `
    import dotenv from 'dotenv'
    dotenv.config();
    import app from './app'

    const PORT = process.env.PORT || "3000";

    app.listen(PORT, () => {
        console.log(Server running on ${'3000'});
    })
    `
    }

    const appFile = path.join(baseDir, type === 'ts' || type.startsWith('typescript') ? 'app.ts' : 'app.js');
    const indexFile = path.join(baseDir, type === 'ts' || type.startsWith('typescript') ? 'index.ts' : 'index.js');

    fs.writeFileSync(appFile, fileContent, { flag: 'w' });
    console.log(`App file created/overwritten: ${appFile}`);

    fs.writeFileSync(indexFile, indexContent, { flag: 'w' });
    console.log(`Index file created/overwritten: ${indexFile}`);

}