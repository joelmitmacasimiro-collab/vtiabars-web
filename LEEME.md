# Vitabars optimizada — versión 2

## Validación del enlace publicado

Se revisó https://joelmitmacasimiro-collab.github.io/vtiabars-web/ y los archivos del logo, la barra y la fuente principal. Respondieron con HTTP 200. En una carga nueva se mostraron las imágenes y la tipografía.

El servidor anuncia `Cache-Control: max-age=600`: las respuestas pueden conservarse en caché durante diez minutos. Esto es compatible con haber visto antes recursos de una entrega anterior. No se observó una limitación de capacidad de GitHub Pages. Una petición al HTML respondió en aproximadamente 0,67 segundos desde el entorno de prueba; ese dato no representa el tiempo de carga total ni garantiza el mismo resultado en cada conexión.

## Optimización realizada

| Recurso | Antes | Ahora |
| --- | ---: | ---: |
| Archivo HTML completo | 2,195,259 bytes | 1,295,159 bytes |
| Logo transparente | 568.907 bytes | 22.060 bytes |
| Tres fuentes | 184.036 bytes | 55.812 bytes |

El archivo completo se redujo un **41.0 %** frente al archivo único anterior. El logo se exportó a WebP sin pérdida, ajustado a 256 × 256 px, suficiente para su tamaño visible y pantallas de alta densidad. Se mantienen sus proporciones y transparencia. Las fuentes se comprimieron a WOFF2 y conservan español, caracteres latinos y puntuación usados por la web.

Las siete fotografías —productos, mano y fundadoras— se conservaron exactamente, verificando sus huellas digitales. No se redujo la calidad de los empaques ni de la mano.

## Qué subir

1. Descomprime el ZIP.
2. Sube **únicamente el nuevo `index.html`** a la raíz de `vtiabars-web`, reemplazando el anterior.
3. Confirma los cambios y espera a que finalice el despliegue de GitHub Pages.
4. Abre https://joelmitmacasimiro-collab.github.io/vtiabars-web/?v=optimizada-20261029-v2
5. Si sigue apareciendo una versión antigua, usa Ctrl+F5 o una ventana privada.

No subas el ZIP ni una carpeta contenedora. No necesitas borrar los demás archivos: todo está incluido en este HTML y los archivos antiguos no se solicitan.

## Comprobaciones

- Sintaxis de los bloques JavaScript correcta.
- Logo, barra, mano y fuentes cargados; sin errores de consola.
- Botón de pedido comprobado al terminar la animación y apertura del catálogo.
- Carrito: Superfoods + dos Menta & Chocolate = S/ 39.50.
- Revisión móvil de 390 px y controles del catálogo.
- Licencias de las fuentes conservadas dentro del HTML.
- Sin scripts, estilos ni imágenes externas necesarios para la presentación.

Se mantienen diseño, precios, filtros, carrusel, historia y WhatsApp. No hay pagos ni envío automático de pedidos. Las mejoras reducen el peso transferido; el tiempo real de carga depende también de la conexión y el dispositivo.

Puedes probar `index.html` abriéndolo en tu navegador. No necesita npm ni compilación.
