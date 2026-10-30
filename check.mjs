import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=path.dirname(fileURLToPath(import.meta.url));
const src=root;
const errors=[];
const html=await readFile(path.join(src,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 const ref=match[1];if(/^(?:https?:|data:|mailto:|tel:)/.test(ref))continue;
 try{await stat(path.join(src,ref.split(/[?#]/)[0]))}catch{errors.push(`Falta recurso: ${ref}`)}
}
for(const f of await readdir(src)){
 if(!f.endsWith('.css'))continue;
 const css=await readFile(path.join(src,f),'utf8');
 for(const match of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)){
  const ref=match[1];if(/^(?:https?:|data:|#|%23)/.test(ref))continue;
  try{await stat(path.join(src,ref))}catch{errors.push(`Falta recurso CSS: ${ref}`)}
 }
}
const app=await readFile(path.join(src,'app.js'),'utf8');
for(const match of app.matchAll(/image:'([^']+)'/g)){
 try{await stat(path.join(src,match[1]))}catch{errors.push(`Falta foto: ${match[1]}`)}
}
const syntax=spawnSync(process.execPath,['--check',path.join(src,'app.js')],{encoding:'utf8'});
if(syntax.status!==0)errors.push(syntax.stderr.trim());
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log('Correcto: sintaxis y recursos locales.');
