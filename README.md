# 🛒 SuperMercado – Gestión de Inventario

🌐 **Sitio publicado:** https://vasifontesduoc.github.io/supermercado-valeria-sifontes-pfy2202/

## Funcionalidades

- **Inicio:** resumen del inventario, buscador por producto, marca o categoría (sin importar tildes ni mayúsculas) y estado de stock (Disponible / Stock bajo / Agotado). Usa el mismo inventario global que el resto del sitio.
- **Listado de artículos:** tabla con todos los artículos y **filtro por categoría**. El filtro calcula una lista nueva sin modificar el inventario original.
- **Detalle de artículo:** al hacer clic en un artículo se abre `/articulos/:id`, donde se puede **agregar al carrito**. Cada unidad agregada **resta stock** del inventario.
- **Carrito de compras:** lista los artículos agregados, permite **aumentar, disminuir o quitar** unidades y vaciar el carrito. El inventario se actualiza en cada cambio.
- **Agregar artículo:** formulario con validación (nombre, marca, tipo, precio y stock).
- **Quiénes somos** y **Contáctanos** (con formulario).
- **Menú superior** (artículos y carrito con contador) y **menú inferior** (páginas generales).

## Tecnologías

- React + **Vite**
- **React Router**: rutas centralizadas en `AppRoutes`, layout con `Outlet`, rutas anidadas (`/articulos`, `/articulos/nuevo`, `/articulos/:id`), parámetros dinámicos con `useParams`, redirección con `useNavigate` y **lazy loading** con `React.lazy` + `Suspense`.
- **Gestión de estado**: estado global con **Context API + useReducer** (inventario y carrito), estado local con `useState` (filtro, formulario, avisos), `useEffect` para guardar en `localStorage` y para limpiar temporizadores.
- **Tailwind CSS**: tema propio en `tailwind.config.js` (colores, tipografía y sombras), clases reutilizables con `@apply` en `index.css` (`.btn`, `.panel`, `.campo`, `.etiqueta`) y componente `Boton` con variantes.
- **GitHub Pages** con `gh-pages`.

## Estructura

```
src/
├── components/   → MenuSuperior, MenuInferior, Boton, EtiquetaStock, FiltroCategorias,
│                   ItemCarrito, TarjetaResumen, FilaProducto
├── context/      → InventarioContext (Provider + hook) e inventarioReducer (acciones)
├── data/         → articulosIniciales y categorias
├── layouts/      → Layout (header, menús y Outlet)
├── pages/        → Home, QuienesSomos, Contactanos, ListadoArticulos, AgregarArticulo,
│                   DetalleArticulo, Carrito, NoEncontrado
├── routes/       → AppRoutes (todas las rutas del sitio)
└── utils/        → normalizar, stock, formato
```

## Estado global (inventarioReducer)

| Acción | Qué hace |
|---|---|
| `AGREGAR_ARTICULO` | Agrega un artículo nuevo al inventario |
| `ELIMINAR_ARTICULO` | Elimina el artículo del inventario y del carrito |
| `AGREGAR_AL_CARRITO` | Suma 1 al carrito y **resta 1 del stock** (solo si hay stock) |
| `DISMINUIR_DEL_CARRITO` | Resta 1 del carrito y **devuelve 1 al stock** |
| `QUITAR_DEL_CARRITO` | Quita el artículo del carrito y devuelve todas sus unidades |
| `VACIAR_CARRITO` | Devuelve todo el carrito al inventario |

## Rutas

| Ruta               | Página                                    |
|--------------------|-------------------------------------------|
| `/`                | Inicio (resumen del inventario)           |
| `/quienes-somos`   | Quiénes somos                             |
| `/contactanos`     | Contáctanos                               |
| `/articulos`       | Listado de artículos con filtro           |
| `/articulos/nuevo` | Formulario para agregar artículos         |
| `/articulos/:id`   | Detalle del artículo (ruta dinámica)      |
| `/carrito`         | Carrito de compras                        |
| `*`                | Página no encontrada                      |

## Revisión de recorridos

| Recorrido | Resultado esperado |
|---|---|
| Clic en cada opción de los menús | Cambia la página sin recargar y se resalta la opción activa |
| Filtrar el listado por "Lácteos" y luego por "Todas" | Se muestran solo los lácteos y después vuelven todos; el inventario no se pierde |
| Clic en un artículo del listado | Abre `/articulos/:id` con sus datos y stock |
| "Agregar al carrito" en el detalle | Aparece "✓ Agregado al carrito", el stock baja en 1 y el contador del menú sube |
| Agregar hasta agotar el stock | El botón queda deshabilitado con "Sin stock disponible" |
| En el carrito, botón **+** | Sube la cantidad y baja el stock del inventario |
| En el carrito, botón **−** | Baja la cantidad y devuelve stock; en 0 el artículo sale del carrito |
| "Quitar" o "Vaciar carrito" | Las unidades vuelven al inventario |
| Abrir `/articulos/999` | Muestra "Artículo no encontrado" |
| Abrir una dirección inexistente (ej. `/hola`) | Muestra "Página no encontrada" |
| Buscar `lacteos` o `LIQUIDO` en Inicio | Encuentra los artículos aunque tengan tilde o distinta mayúscula |
| Agregar un artículo con campos vacíos o precio inválido | Muestra un mensaje de error y no guarda |
| Recargar la página | Inventario y carrito se mantienen |

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000

## Cómo publicarlo en GitHub Pages

```bash
npm run deploy
```

Construye el sitio y lo sube a la rama `gh-pages`. El sitio queda en
https://vasifontesduoc.github.io/supermercado-valeria-sifontes-pfy2202/
