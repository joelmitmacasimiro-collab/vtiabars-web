import {cp,mkdir,rm,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
// Fixed destination: never accept an arbitrary deletion target.
if(path.dirname(output)!==root||path.basename(output)!=='dist')throw new Error('Destino de producción inválido.');
const check=spawnSync(process.execPath,[path.join(root,'scripts/check.mjs')],{stdio:'inherit'});
if(check.status!==0)process.exit(check.status??1);
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await cp(path.join(root,'src'),output,{recursive:true});
await cp(path.join(root,'licenses'),path.join(output,'licenses'),{recursive:true});
await writeFile(path.join(output,'.nojekyll'),'');
console.log('Producción lista en dist/. Publica el contenido completo de esa carpeta.');
