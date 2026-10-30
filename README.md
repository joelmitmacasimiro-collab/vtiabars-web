# Vitabars — archivos en un solo nivel

Esta versión contiene todos los archivos sueltos, sin carpetas que debas subir. Incluye HTML, JavaScript, CSS, fotografías, logo transparente, fuentes, licencias y documentación. El diseño y las funciones son los mismos de la entrega final; únicamente se ajustaron las rutas para funcionar en una sola carpeta.

## Subir a GitHub

1. Descomprime el ZIP en tu computadora.
2. Abre la carpeta descomprimida hasta ver `index.html`, `app.js` y los demás archivos.
3. En la pantalla de carga de tu repositorio, selecciona **todos esos archivos juntos**. No selecciones la carpeta contenedora ni subas el ZIP.
4. Confirma la carga. Todos los archivos deben quedar en la raíz del repositorio.

Si el selector no muestra `.gitignore`, puedes agregar ese archivo después. No es necesario para que la web se vea, pero evita subir archivos locales o privados en futuras actualizaciones.

La guía ampliada está en [GUIA-GITHUB.md](GUIA-GITHUB.md). Subir archivos al repositorio no publica automáticamente una web.

## Ejecutar en tu computadora

Requisitos: Node.js 20 o superior con npm y un navegador moderno. No requiere instalar dependencias ni configurar claves.

Abre una terminal **dentro de esta carpeta** y ejecuta:

```sh
npm run dev
```

Abre `http://127.0.0.1:4173`. Detén el servidor con Ctrl+C. Recarga el navegador después de editar.

## Comprobar y generar producción

```sh
npm run check
npm run build
npm run preview
```

El build comprueba los archivos y genera `dist/` en tu computadora. Esa carpeta es un resultado de producción: **no necesitas subirla al repositorio**, y tampoco viene dentro de este ZIP. Para publicar en un alojamiento estático, entrega todo su contenido. Detén el servidor de desarrollo antes de usar preview con el mismo puerto.

Si necesitas otro puerto, en PowerShell ejecuta `$env:PORT='4180'` antes del comando. En macOS/Linux usa `PORT=4180 npm run dev`.

## Editar

- `index.html`: estructura, historia, lema, redes y WhatsApp.
- `app.js`: catálogo y precios en el arreglo `PRODUCTS`; carrito y navegación.
- Los cuatro archivos CSS: diseño, adaptación móvil, recortes de productos y ajustes del logo.
- Fotografías `.webp`, logo `.png` y fuentes `.ttf`: deben conservarse junto a `index.html`.
- `serve.mjs`, `check.mjs` y `build.mjs`: comandos de ejecución y producción.

No se deben separar las fotografías o fuentes en carpetas: esta versión ya usa rutas directas a cada archivo.

## Estado de la tienda

Carrito persistente en el mismo navegador, catálogo adaptable y acceso a WhatsApp +51 947 227 596. El resumen no cobra ni envía pedidos. Mini mantiene precio referencial y el gramaje de Cacao & Cashew está por confirmar. La imagen de la mano es un montaje provisional.

Se conservan las licencias de Barlow Condensed y DM Sans en los archivos `Barlow-Condensed-OFL.txt` y `DM-Sans-OFL.txt`. La procedencia de imágenes está en [RECURSOS.md](RECURSOS.md).

El paquete excluye historial Git, credenciales, configuración privada y archivos temporales.
