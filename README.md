# 🦊 FOX — Tablero académico

Tablero personal de progreso académico para **Luis Mario Medrano Páez**, estudiante de Ingeniería de Sistemas en la Universidad Católica Luis Amigó, sede Apartadó.

Construido 100% a la medida: sin plantillas, sin librerías de terceros, sin código copiado de ningún lado.

## ¿De quién son los derechos?

**Tuyos, sin restricciones.** Licencia MIT (ver `LICENSE.txt`): úsalo, modifícalo, publícalo, ponle tu nombre — sin pedir permiso. Los únicos elementos externos son fuentes gratuitas de Google Fonts.

## Qué incluye

- **Progreso y circuito de avance** — gauge, línea de tiempo, créditos aprobados/en curso/pendientes
- **Logros** — 8 insignias que se desbloquean solas según tu progreso real
- **Analítica** — tendencia de promedio, fortalezas por área, distribución de notas, proyección de graduación (promedio final estimado + periodo aproximado de grado) con 3 escenarios
- **Simulador de notas** — qué pasaría con tu promedio si sacas tal nota
- **Centro de recursos** — enlaces gratuitos curados por materia
- **Tarjeta de perfil** (🪪 en el header) — resumen exportable con tu pasaporte de habilidades técnicas, detectado automáticamente de tus materias aprobadas
- **Modo claro/oscuro** — botón ☀️/🌙 en el header
- **Instalable como app (PWA)** — funciona offline una vez cargada una vez
- **Imprimir / guardar como PDF** — tanto la página completa como la tarjeta de perfil por separado
- **Panel de edición (⚙️ en el header)** — sin tocar código:
  - Elegir qué materias estás viendo este periodo
  - Cerrar el periodo con las notas finales — con **vista previa antes de confirmar** (qué apruebas, qué reprobarías) y un botón **"Deshacer"** en el aviso de confirmación
  - Si una materia queda con nota menor a 3.0, se marca automáticamente como reprobada y vuelve a la lista de pendientes para repetirla — no se pierde el intento
  - Corregir una nota directa desde el Historial (haz clic sobre el número)
  - Descargar/restaurar copia de seguridad en JSON
  - Restaurar los datos originales del certificado en cualquier momento
  - **PIN de acceso opcional** — si vas a compartir el link, protégelo desde Copia de seguridad → Configurar PIN. Ojo: es una traba de privacidad casual, no seguridad fuerte (todo corre en tu navegador).

## Seguridad y accesibilidad

- Todo el texto que viene de datos importados o editados se **escapa antes de mostrarse**, así que un archivo de respaldo alterado no puede ejecutar código en tu navegador.
- El panel de edición y la tarjeta de perfil atrapan el foco de teclado mientras están abiertos y se cierran con `Esc`, como cualquier modal accesible.
- Cerrar un periodo pide confirmación explícita con un resumen de lo que va a pasar, y se puede deshacer justo después desde el aviso que aparece.

## Archivos

```
index.html          → estructura de la página
style.css            → todo el diseño visual (incluye tema claro/oscuro e impresión)
script.js            → datos + lógica completa
manifest.json        → configuración de la app instalable
sw.js                → service worker (funcionamiento offline)
icons/               → íconos de la app (192px, 512px, apple-touch-icon)
favicon.png          → ícono de pestaña del navegador
```

Todos deben mantenerse juntos, en la misma carpeta, con esas rutas relativas intactas.

## Cómo verlo localmente

Como usa `localStorage` y un *service worker*, ábrelo siempre por un servidor local (no con doble clic):

```bash
python3 -m http.server 8000
```

y entra a `http://localhost:8000`.

## Cómo publicarlo gratis en internet (GitHub Pages)

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, por ejemplo `fox-tracker`.
3. Sube **todos** los archivos y la carpeta `icons/` completa (arrastra todo junto en "Add file → Upload files", manteniendo la estructura de carpetas).
4. Ve a **Settings → Pages**, selecciona la rama `main` y la carpeta `/root`, y da clic en **Save**.
5. En 1-2 minutos tu sitio estará en `https://tu-usuario.github.io/fox-tracker/`.
6. Desde el celular, ábrelo en Chrome/Safari y usa "Agregar a pantalla de inicio" — con el `manifest.json` que ya trae, se va a instalar como una app real con su propio ícono.

Tus notas, logros y datos editados viven solo en el `localStorage` de cada navegador — no se suben a ningún servidor. Si lo abres desde otro dispositivo, empieza desde el certificado original hasta que vuelvas a personalizarlo ahí (por eso existe la copia de seguridad).

## Actualizar tus datos cada semestre (sin tocar código)

1. Abre el panel  en la esquina superior derecha.
2. En **"Materias actuales"**, marca las materias que vas a ver este periodo → Guardar selección.
3. Cuando termine el semestre, ve a **"Cerrar periodo"**, pon la nota final de cada una y el nombre del periodo (ya viene sugerido) → **Revisar y cerrar periodo**.
4. Revisa el resumen que aparece (qué apruebas, qué reprobarías) → **Confirmar cierre**.
5. Si algo salió mal, usa el botón **"Deshacer"** que aparece en el aviso, en los siguientes segundos.
6. Todo se recalcula solo: promedio, acumulado, logros, gráficas, circuito de progreso. Las materias reprobadas (nota < 3.0) vuelven automáticamente a pendientes para que las repitas.
7. De vez en cuando, entra a **"Copia de seguridad"** y descarga el JSON — es tu respaldo si cambias de computador o borras el navegador.

Si alguna vez algo queda mal, usa **"Restaurar datos originales del certificado"** en esa misma pestaña para volver exactamente a los datos oficiales con los que empezamos.
