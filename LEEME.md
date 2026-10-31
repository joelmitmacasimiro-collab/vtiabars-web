# Vitabars — experiencia completa (31 de octubre de 2026)

## Actualizar GitHub Pages

1. Descomprime este ZIP.
2. En el repositorio vtiabars-web, elige Add file → Upload files.
3. Sube **index.html** a la raíz, con ese nombre exacto, reemplazando el anterior.
4. Pulsa Commit changes y espera a que termine el despliegue.
5. Abre https://joelmitmacasimiro-collab.github.io/vtiabars-web/?v=experiencia-20261031-v7

No subas el ZIP ni una carpeta contenedora. Los otros archivos antiguos pueden quedarse; el nuevo HTML no los solicita. Esta entrega no se ha subido automáticamente a tu GitHub.

## Cambios

- La mano utiliza una imagen transparente que contiene únicamente piel, dedos y muñeca. Se descartó la máscara anterior, que podía incluir fragmentos del empaque. El archivo original con mano y barra ya no forma parte de los recursos solicitados por la web.
- La barra animada conserva una sola imagen durante toda la secuencia. La mano sube por separado, sin crecer ni cambiar de opacidad; el movimiento se invierte al subir por la página.
- Etapa 01: presentación de Superfoods, maca/lúcuma/cacao y una porción de 63.4 g.
- Etapa 02: ingredientes legibles en la imagen proporcionada, distribuidos en una lista breve.
- Etapa 03: 10 g de proteína, 5 g de fibra dietética y 282 kcal por barra de 63.4 g, según la ficha del propietario. No son datos aplicados a los demás sabores.
- El símbolo decorativo se reemplazó por la silueta del logo floral oficial, con tono marrón suave y opacidad .12.
- WhatsApp se quitó del encabezado. El botón flotante inferior derecho mantiene el número +51 947 227 596 y el mensaje inicial. Se reservó espacio junto a los botones de portada/pedido, y se oculta sobre los diálogos del carrito, productos y resumen.
- Cacao & Cashew conserva la fotografía original: contorno revisado, giro del conjunto y escala uniforme, sin estirar el empaque ni regenerar sus textos. Se retiraron del recorte los granos ajenos al producto que aparecían en el borde superior.

El catálogo, los seis productos, precios, filtros, cantidades, carrito persistente, historia y navegación independiente se conservan. Las funciones comerciales son idénticas a la entrega anterior. Pagos y envío automático de pedidos siguen sin conectar.

## Ejecutar o editar

**index.html es la versión completa de producción**: contiene HTML, estilos, JavaScript, fotografías, logo y fuentes. No faltan carpetas src ni scripts para publicarlo. No requiere npm, compilación, claves ni dependencias.

Puedes abrirlo directamente en el navegador. Opcionalmente, con Python instalado, ejecuta `python -m http.server 4173` desde la carpeta y abre http://localhost:4173.

Los productos, precios, texto de las etapas y funciones están en el bloque vitabars-app. Los estilos están en bloques style. El bloque vitabars-assets contiene imágenes codificadas: no cortes esas cadenas. Las licencias de las fuentes siguen incluidas. El HTML pesa aproximadamente 1.84 MB.

## Verificación

Revisión visual en escritorio a 1280 × 800 y en celular a 390 × 844 y 320 × 740. Se revisaron las etapas de presentación, ingredientes y nutrición, los giros del catálogo y la secuencia de la mano en ambos sentidos.

El botón de pedido abre el catálogo; agregar Cacao & Cashew al carrito produce S/ 13.50. Se comprobó que WhatsApp se oculta con el carrito abierto y que su enlace conserva el número correcto. En móvil, WhatsApp y los botones principales tienen áreas separadas. Sin desplazamiento horizontal del documento ni errores de consola durante las pruebas. Sintaxis y recursos locales comprobados.

## Pendientes anteriores

Precio definitivo de Mini, gramaje confirmado de Cacao & Cashew y documentos legales aprobados. La ficha recibida corresponde a Superfoods; no se añadieron cifras de otros sabores. Para mejorar aún más el detalle fotográfico de Cacao, conviene una toma frontal de alta resolución sin granos ni otros ingredientes sobre los sellos del empaque. No se inventaron zonas tapadas ni textos pequeños del producto.

Los archivos fuente no incluyen contraseñas, claves ni archivos temporales. DATOS-Y-RECURSOS.md registra la procedencia del contenido y el trabajo de imágenes.
