# Cargar Vitabars en tu repositorio

Esta entrega prepara los archivos; no crea un repositorio ni publica cambios en tu cuenta.

## Opción sencilla: interfaz web

1. Descomprime `vitabars-github.zip`.
2. En GitHub, crea un repositorio vacío o abre tu repositorio de destino. Elige su visibilidad según prefieras.
3. Si creas uno vacío para usar la terminal, deja sin marcar la creación automática de README, licencia y gitignore: estos archivos ya están en el paquete.
4. En la interfaz del repositorio, usa **Add file → Upload files**. Carga `src/`, `scripts/`, `docs/`, `licenses/`, `package.json`, `README.md` y `.gitignore`. Sube el contenido del paquete, no el ZIP ni una carpeta contenedora extra.
5. Si el selector oculta `.gitignore`, créalo mediante **Add file → Create new file** y copia su contenido.
6. Revisa la lista de archivos y confirma el commit.

Si el repositorio ya tiene una web, revisa antes qué archivos sustituirás. Conserva cualquier configuración o trabajo propio que no pertenezca a esta entrega.

## Opción con Git: repositorio nuevo y vacío

Instala Git si no lo tienes. Abre una terminal en la carpeta descomprimida. Sustituye `TU_USUARIO` y `TU_REPOSITORIO` en la URL por los datos reales:

```sh
git init
git branch -M main
git add .
git status
git diff --cached --stat
git commit -m "Añadir web de Vitabars"
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

GitHub puede pedirte iniciar sesión. Usa el mecanismo de autenticación de Git de tu equipo. No pongas contraseñas ni tokens en la URL o dentro del proyecto.

Si Git solicita nombre/correo de autor, configúralos según tu cuenta y vuelve a ejecutar el commit. Puedes usar el correo privado que ofrece GitHub.

## Si tu repositorio ya tiene archivos

Clónalo primero en una carpeta nueva:

```sh
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

Copia dentro los archivos de esta entrega, conservando la carpeta `.git` existente. Revisa las diferencias antes del commit:

```sh
git status
git diff
git add src scripts docs licenses package.json README.md .gitignore
git diff --cached --stat
git commit -m "Actualizar web de Vitabars"
git push
```

No uses `git init` sobre una carpeta que quieras mantener vinculada a otro proyecto ni fuerces el push si Git indica que hay cambios remotos. Actualiza y reconcilia los cambios primero.

## Actualizaciones posteriores

Edita `src/`, comprueba y construye:

```sh
npm run check
npm run build
```

Revisa la web con `npm run preview`. Luego realiza un commit y push de los archivos fuente que hayas cambiado. `dist/` no se sube por defecto: contiene la versión lista para tu alojamiento y puede volver a generarse.

## Publicar la web

GitHub conserva el código. Para publicar, usa el proveedor de alojamiento que elijas y entrega el contenido de `dist/` o configura allí el comando `npm run build` y la carpeta de salida `dist`. Este paquete no configura automáticamente GitHub Pages, dominio, pagos ni métodos de envío.
