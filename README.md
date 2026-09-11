#  FOX — Tablero académico

Tablero personal de progreso académico de **Luis Mario Medrano Páez**, estudiante de Ingeniería de Sistemas en la Universidad Católica Luis Amigó, sede Apartadó.

Construido 100% a la medida: sin plantillas, sin librerías de terceros, sin código copiado de ningún lado.



## Qué incluye

- **Progreso y circuito de avance** — gauge, línea de tiempo, créditos aprobados/en curso/pendientes
- **Logros** — 8 insignias que se desbloquean solas según progreso real
- **Analítica** — tendencia de promedio, fortalezas por área, distribución de notas, proyección de graduación (promedio final estimado + periodo aproximado de grado) con 3 escenarios
- **Simulador de notas** — qué pasaría con el promedio si saco tal nota
- **Centro de recursos** — enlaces gratuitos curados por materia
- **Tarjeta de perfil** (🪪 en el header) — resumen exportable con pasaporte de habilidades técnicas, detectado automáticamente de materias aprobadas
- **Modo claro/oscuro** — botón ☀️/🌙 en el header
- **Instalable como app (PWA)** — funciona offline una vez cargada una vez
- **Imprimir / guardar como PDF** — tanto la página completa como la tarjeta de perfil por separado
- **Panel de edición (⚙️ en el header)** — sin tocar código:
  - Elegir qué materias estás viendo este periodo
  - Cerrar el periodo con las notas finales — con **vista previa antes de confirmar** (qué apruebo, qué reprobaria) y un botón **"Deshacer"** en el aviso de confirmación
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

