# TRESMES · demo de arquitectura

Demo estática creada con React y Vite, lista para desplegar en Vercel. No tiene backend ni almacena datos. Incluye página de inicio, listado filtrable, fichas de proyecto con galería, estudio con mapa de Ontinyent y contacto. La interfaz se puede alternar entre castellano y valenciano.

## Ejecutar en local

Necesitas Node.js instalado:

```bash
npm install
npm run dev
```

Para revisar la compilación de producción:

```bash
npm run build
npm run preview
```

## Editar contenido

- **Proyectos:** edita `src/data/projects.js`. Cada elemento controla texto bilingüe, categoría, ubicación, créditos e imágenes de su ficha.
- **Fotografías:** guarda imágenes en `public/images/` y añade las rutas a `image` y `gallery[].image`, por ejemplo `image: "/images/rs-trainers-portada.jpg"`. Si una ruta está vacía, se muestra un hueco editorial.
- **Textos de la interfaz:** edita las traducciones `es` y `va` al principio de `src/App.jsx`. Los textos de cada proyecto se guardan también en ambos idiomas en `src/data/projects.js`.
- **Contacto y mapa:** actualiza el email de muestra en `src/App.jsx`. El mapa señala el municipio de Ontinyent, no una dirección exacta del estudio.
- **Colores y tipografía:** modifica las variables de `src/styles.css`. La propuesta parte de la identidad mostrada: blanco, negro, sans serif y composición tipográfica editorial.

RS Trainers y La Bassa de Dalt están basados en la información facilitada para la demo. Las fotografías no se han incluido: añade las imágenes definitivas en `public/images/` y asigna sus rutas antes de publicar.

## Publicar en Vercel

Importa esta carpeta como proyecto en Vercel. El framework es **Vite**, el comando de compilación `npm run build` y la carpeta de salida `dist`. `vercel.json` configura el enrutado de las páginas de la demo.
