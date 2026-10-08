// Vincula este proyecto de Apps Script a la hoja de cálculo de registros.
const SHEET_NAME = 'Registros';
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = e.parameter || {};
    const nombre = String(p.nombre || '').trim().slice(0,120);
    const correo = String(p.correo || '').trim().slice(0,150);
    const carrera = String(p.carrera || '').trim().slice(0,120);
    if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || !carrera) throw new Error('Datos incompletos');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('No existe la hoja Registros');
    // Evita que una entrada que comience con =, +, - o @ se interprete como fórmula.
    const safe = value => /^[=+\-@]/.test(value) ? "'" + value : value;
    sheet.appendRow([new Date(), safe(nombre), safe(correo), safe(carrera)]);
    return ContentService.createTextOutput('OK');
  } catch (err) {
    return ContentService.createTextOutput('ERROR');
  } finally {lock.releaseLock();}
}
