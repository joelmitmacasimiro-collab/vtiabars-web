import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const folder=process.argv[2]||'src';
if(!['src','dist'].includes(folder))throw new Error('Usa src o dist.');
const root=path.join(project,folder);
try{await stat(root)}catch{console.error('La carpeta no existe. Ejecuta npm run build para generar dist/.');process.exit(1)}
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8'};
const server=createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return}
  const url=new URL(req.url,'http://localhost');
  const relative=decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g,'')||'index.html';
  if(relative.includes('\0')){res.writeHead(400);res.end();return}
  const file=path.resolve(root,relative);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
  const content=await readFile(file);
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
  res.end(req.method==='HEAD'?undefined:content);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('No encontrado')}
});
server.on('error',error=>{console.error(error.message);process.exitCode=1});
server.listen(port,'127.0.0.1',()=>console.log(`Vitabars: http://127.0.0.1:${port} (${folder})`));
