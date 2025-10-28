# CampusLink — Bolsa de trabajo para estudiantes

Página estática de ejemplo similar a LinkedIn pero enfocada en estudiantes. Contiene HTML, CSS y JS (sin backend).

Cómo probar localmente:

1. Abrir `integradora.html` en el navegador (doble clic).
2. O servirlo con un servidor local (recomendado para algunas APIs/servicios). En PowerShell puedes usar:

```powershell
cd C:\Users\bymaz\Downloads\integradora
python -m http.server 8000
# y luego abrir http://localhost:8000/integradora.html
```

Qué incluye:
- `integradora.html` — Estructura principal (cabecera, búsqueda, lista de ofertas, modal).
- `css/styles.css` — Estilos con paleta moderna y responsiva.
- `js/app.js` — Lógica de renderizado de ofertas y búsqueda.

Siguientes pasos sugeridos:
- Conectar con un backend para crear/editar ofertas.
- Añadir autenticación y perfiles reales.
- Mejorar accesibilidad y tests.
