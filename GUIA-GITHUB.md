# Guía de carga sin carpetas

## Desde la pantalla de carga

Descomprime el ZIP. Entra hasta ver los archivos sueltos, selecciona todos y cárgalos juntos en la raíz de tu repositorio. Conserva los nombres originales.

Debes ver, entre otros, `index.html`, `app.js`, `styles.css`, `logo-transparent.png`, las fotografías `.webp`, las fuentes `.ttf`, `package.json` y este README. No debe existir una carpeta `src` o `assets` para que funcione esta versión.

Si ya cargaste algunos archivos de la entrega anterior, permite reemplazar los archivos de la raíz por los de este paquete. El `package.json` nuevo utiliza los scripts sueltos `serve.mjs`, `check.mjs` y `build.mjs`.

## Con Git, si prefieres usar la terminal

Para un repositorio nuevo y vacío, desde la carpeta descomprimida:

```sh
git init
git branch -M main
git add .
git status
git commit -m "Añadir web de Vitabars"
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

Sustituye usuario y repositorio por tus datos. Para un repositorio existente, clónalo primero y copia dentro estos archivos antes de hacer commit. No fuerces el push si aparecen cambios remotos.

## Producción

`npm run build` genera `dist/`. Para publicar, entrega el contenido de esa carpeta a tu alojamiento. El repositorio conserva los archivos fuente sueltos de la raíz. La generación de producción no necesita contraseñas ni claves.
