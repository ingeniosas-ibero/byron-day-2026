# Byron Day 2026 — Ingeniosas

Sitio web estático para GitHub Pages con la invitación oficial como portada y registro mediante Google Apps Script y Google Sheets.

## Publicar
1. Crea un repositorio público llamado `byron-day-2026` en la cuenta `ingeniosas-ibero`.
2. Sube `index.html` y `invitacion-byron-day.png` a la raíz del repositorio. Mantén ambos archivos juntos.
3. En Settings → Pages, selecciona Deploy from a branch, `main`, carpeta `/ (root)` y guarda.
4. Abre Google Sheets, crea una hoja con pestaña `Registros` y encabezados: `Fecha`, `Nombre`, `Correo`, `Carrera`.
5. En Extensiones → Apps Script, pega `Code.gs` y guarda.
6. En Implementar → Nueva implementación → Aplicación web, ejecuta como tu cuenta y elige acceso `Cualquier persona` (si está disponible). Autoriza y copia la URL terminada en `/exec`.
7. En `index.html`, sustituye `PEGA_AQUI_TU_URL_DE_APPS_SCRIPT` por esa URL, haz commit y espera la publicación.
8. Haz un registro de prueba y comprueba **directamente en la hoja** que se haya guardado.

**Importante:** el formulario envía los datos a un iframe porque Apps Script no expone CORS a GitHub Pages. Por ello la página **no puede verificar que el registro se guardó**; muestra un aviso de envío pendiente. Para confirmaciones verificadas se requiere un backend que soporte CORS y respuestas comprobables. No publiques correos ni datos de asistentes en el repositorio. Elige con cuidado el nivel de acceso de Apps Script, ya que su endpoint será público.

Si se recopilan datos personales, publica un aviso de privacidad aprobado por la institución y define quién tendrá acceso a la hoja y cuándo se eliminarán los datos. Revisa también las carreras ofrecidas antes de publicarlo.
