# Recursos

- Fotografías de barras y logo floral: facilitados por Vitabars. Historia, fotografía de fundadoras y redes recuperadas de https://vitabars.pe/ con autorización del usuario.
- `logo-transparent.png`: extracción del fondo del símbolo floral con la herramienta integrada Image Generation. El color de presentación se refuerza moderadamente con CSS; no se agregó una marca distinta.
- `hand.webp`: montaje provisional de mano con barra preparado con Image Generation en la primera versión; se conserva sin cambios.
- Imágenes WebP y fuentes locales: la web no necesita consultar servicios externos para mostrarlas.
- Tipografías: Barlow Condensed y DM Sans. Licencias oficiales incluidas en `licenses/`, obtenidas de https://github.com/google/fonts/tree/main/ofl/barlowcondensed y https://github.com/google/fonts/tree/main/ofl/dmsans.

Prompt del logo transparente: “Remove ONLY the rust orange background and all the background inside the six hollow petal loops. Preserve the exact existing golden yellow six-petal flower shape, its asymmetrical curving pointed tips, line thickness, orientation and proportions. Do not redraw, reinterpret, add or remove any logo detail. No text. Output the exact isolated logo with real transparent alpha in the negative spaces and outside. Crop canvas close to the flower with a small even margin, retain square proportions. Flat clean edges, brand-quality transparent PNG.”

Los recortes de producto se implementan en CSS sobre las fotos originales. No se reconstruyen textos del empaque. Para mejorar la nitidez de esas fotos, sustituirlas por archivos frontales originales de mayor resolución y revisar el recorte correspondiente.

Prompt de limpieza adicional del logo: “Preserve the exact six-petal curved outline and proportions shown. Remove ALL isolated colored specks, noise and residue in the transparent areas. Every hollow petal interior and every exterior pixel outside the smooth flower silhouette must be truly alpha=0, perfectly clean. Make the flower itself a single smooth flat solid golden yellow #FFC328 with antialiased edges only; no grain, no texture, no gradients, no outlines, no background, no shadows, no letters. Do not change the logo shape or orientation. Brand asset extraction, not a redesign. Transparent PNG.”
