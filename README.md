# 🛒 SuperMercado – Gestión de Inventario

## Funcionalidades

- **Inicio:** inventario con tarjetas de resumen, buscador por producto o categoría (sin importar tildes ni mayúsculas) y estado de stock (Disponible / Stock bajo / Agotado).
- **Detalle de producto:** ruta dinámica `/producto/:id`.
- **Quiénes somos** y **Contáctanos** (con formulario).
- **Listado de artículos:** tabla con todos los artículos del inventario (nombre, marca y tipo), con opción de eliminar.
- **Agregar artículo:** formulario con validación que guarda en el estado global.
- **Menú superior** (artículos) y **menú inferior** (páginas generales).

## Tecnologías

- React + **Vite**
- React Router (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useParams`, `useNavigate`)
- Estado global con **Context API + useReducer** (persistido en `localStorage` con `useEffect`)
- **Tailwind CSS** (colores y tipografía personalizados en `tailwind.config.js`)

## Estructura

```
src/
├── components/   → MenuSuperior, MenuInferior, TarjetaResumen, FilaProducto
├── context/      → InventarioContext (estado global de artículos)
├── data/         → productos y estadoStock
├── pages/        → Home, QuienesSomos, Contactanos, DetalleProducto, ListadoArticulos, AgregarArticulo
└── utils/        → normalizar (búsqueda sin tildes)
```

## Rutas

| Ruta               | Página                               |
|--------------------|--------------------------------------|
| `/`                | Inicio (inventario)                  |
| `/quienes-somos`   | Quiénes somos                        |
| `/contactanos`     | Contáctanos                          |
| `/producto/:id`    | Detalle de producto (ruta dinámica)  |
| `/articulos`       | Listado de artículos (estado global) |
| `/articulos/nuevo` | Formulario para agregar artículos    |
| `*`                | Página 404                           |

## Revisión de recorridos

| Recorrido | Resultado esperado |
|---|---|
| Clic en cada opción del menú inferior | Cambia la página sin recargar y se resalta la opción activa |
| Clic en cada opción del menú superior | Abre Listado o Agregar artículo, con la opción activa resaltada |
| Clic en un producto de la tabla de Inicio | Abre `/producto/:id` con sus datos |
| Botón "Volver al inventario" en el detalle | Redirige a Inicio |
| Abrir `/producto/99` | Muestra "Producto no encontrado" |
| Abrir una dirección inexistente (ej. `/hola`) | Muestra la página 404 |
| Buscar `lacteos`, `panaderia` o `LIQUIDO` | Encuentra los productos aunque tengan tilde o distinta mayúscula |
| Agregar un artículo con todos los campos | Redirige al listado y el artículo aparece al final |
| Agregar un artículo con campos vacíos | Muestra un mensaje de error y no guarda |
| Recargar la página después de agregar | El artículo sigue en el listado |
| Eliminar un artículo | Desaparece del listado y se actualiza el total |

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000
