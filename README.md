# Vitabars

Web estática de Vitabars con presentación animada, catálogo independiente, filtros, fichas de producto, carrusel adaptable y carrito persistente en el navegador.

## Requisitos

- Node.js 20 o superior con npm para los comandos incluidos.
- Un navegador moderno.
- Git y una cuenta de GitHub solo si subirás el proyecto mediante la terminal.

No requiere instalar paquetes, base de datos, variables de entorno ni claves. Las fuentes y las imágenes se sirven desde el propio proyecto.

## Ejecutar

Descomprime el paquete y abre una terminal en la carpeta que contiene este README y `package.json`:

```sh
npm run dev
```

Abre `http://127.0.0.1:4173`. Recarga el navegador después de editar. Para detener el servidor, pulsa Ctrl+C.

Si el puerto está ocupado, cambia `PORT` antes de ejecutar. En PowerShell:

```powershell
$env:PORT = '4180'
npm run dev
```

En macOS/Linux: `PORT=4180 npm run dev`.

## Comprobar y generar producción

```sh
npm run check
npm run build
npm run preview
```

`check` verifica la sintaxis de JavaScript y los recursos locales. `build` ejecuta esa comprobación y genera una copia de producción en `dist/`, con imágenes, fuentes y sus licencias. No hay compilación ni dependencias de framework: HTML, CSS y JavaScript son los archivos finales. El comando reemplaza únicamente la carpeta generada `dist/`.

`preview` sirve `dist/` en `http://127.0.0.1:4173`. Detén el servidor de desarrollo antes de usar el mismo puerto.

Para publicar en un alojamiento estático, carga **todo el contenido de `dist/`**, conservando su estructura. Las rutas son relativas; funciona también bajo una subcarpeta. El dominio y el HTTPS se configuran en el alojamiento. Subir el código a GitHub no publica la web automáticamente.

## Estructura

```text
src/
  index.html              Estructura y textos
  app.js                  Catálogo, carrito, vistas y animación
  styles.css              Estilos base
  refinements.css         Composición y tipografía
  product-polish.css      Recortes de productos y carrusel
  final-details.css       Logos y firma de marca
  assets/                 Fotografías, logo transparente y fuentes
scripts/
  serve.mjs               Servidor local
  check.mjs               Comprobaciones
  build.mjs               Generación de dist/
docs/
  GITHUB.md               Guía para cargar el repositorio
  ASSETS.md               Procedencia de recursos
  VERIFICACION.md          Revisión de esta entrega
licenses/                 Licencias de las fuentes
```

## Cambiar productos, precios y contacto

- `src/app.js`: arreglo `PRODUCTS`. Edita `name`, `line`, `presentation`, `price` e `image`. Los precios están en soles y se muestran con `S/`. `reference: true` identifica el precio de Mini como referencial.
- `src/index.html`: textos de marca, historia, redes y enlace de WhatsApp. Número configurado: **+51 947 227 596**. Para cambiar el mensaje, modifica el parámetro `text` del enlace `wa.me` usando codificación URL.
- `src/assets/logo-transparent.png`: logo floral sin fondo. Su tamaño y corrección de color se ajustan en `final-details.css`.
- `product-polish.css`: contornos del empaque sobre las fotografías originales. Si reemplazas una foto, revisa también su recorte.

No edites `dist/` como fuente: el siguiente build lo reemplaza. Después de cambiar `src/`, vuelve a ejecutar `npm run build`.

## Comportamiento y límites actuales

- `#catalogo` abre una vista independiente; las demás anclas muestran la presentación.
- “Haz tu pedido ya” aparece al final de la secuencia con la mano. La preferencia de movimiento reducido muestra el estado final directamente.
- El carrito se conserva en `localStorage` del mismo navegador y dominio. No se sincroniza entre dispositivos.
- El acceso a WhatsApp abre un mensaje preparado; el visitante decide enviarlo.
- El resumen de carrito no envía pedidos ni cobra. Los pagos y el delivery requieren una integración posterior.
- Mini mantiene precio referencial y el gramaje de Cacao & Cashew está por confirmar. La mano es un montaje provisional.
- La nota general “Precios en soles…” fue retirada; los importes y sus monedas permanecen.

## Subir a GitHub

Sigue [la guía paso a paso](docs/GITHUB.md). El paquete no incluye historial Git, configuración del alojamiento privado, contraseñas, tokens ni archivos temporales. La carpeta `dist/` se genera localmente y está ignorada por Git; lo que se versiona es `src/`, los scripts y la documentación.

## Recursos y licencias

Consulta [ASSETS.md](docs/ASSETS.md). Barlow Condensed y DM Sans se distribuyen con sus licencias SIL Open Font License en `licenses/`. La marca y las fotografías pertenecen a sus respectivos titulares. Esta entrega no agrega una licencia pública al código: puedes decidirla antes de hacer público el repositorio.
