// Modulos built-in
import os from 'node:os';


let total = os.totalmem;

let free = os.freemem;

let mem = total - free / 1024 / 1024 / 1024;

console.log(mem + " GB")