const SPREADSHEET_ID = '177PCcDP638NfZCodr79eETVR5QcmsHbDDsWu0qEyM8s';
const ADMIN_CREDENTIALS = ['MUSAFA-ADMIN', 'ADMIN-MUSAFA', 'SUFYAN-ADMIN'];
const SECURITY_PINS = ['FT', '1234', '2026', '9999'];
const TTE_SPECIMEN_URL = 'https://lh3.googleusercontent.com/d/1mDzoyRWgLuyOutFn81FJd2XQ_JcAQtCo';

const SHEETS = {
  NOTULENSI: 'Notulensi',
  AGENDA: 'Agenda',
  PELAJARAN: 'Pelajaran',
  UJIAN: 'Ujian',
  TUGAS: 'Tugas'
};

const DEFAULT_PELAJARAN_SEED = [
  { ID: 'PEL-SEN-01', NamaMapel: 'UPACARA BENDERA', NamaGuru: '-', Hari: 'Senin', WaktuMulai: '07:00', WaktuSelesai: '08:00' },
  { ID: 'PEL-SEN-02', NamaMapel: 'PAI (PA)', NamaGuru: 'Khotimah S.Pd', Hari: 'Senin', WaktuMulai: '08:00', WaktuSelesai: '09:45' },
  { ID: 'PEL-SEN-03', NamaMapel: 'Sosiologi (SOS)', NamaGuru: 'Retno, S.Sos., M.Sos', Hari: 'Senin', WaktuMulai: '10:00', WaktuSelesai: '11:45' },
  { ID: 'PEL-SEN-04', NamaMapel: 'Ekonomi (EKO)', NamaGuru: 'Istri Yuliati, S.E., M.Pd', Hari: 'Senin', WaktuMulai: '12:35', WaktuSelesai: '13:55' },
  { ID: 'PEL-SEN-05', NamaMapel: 'Matematika (MAT)', NamaGuru: 'Tiwi Yulistyarini, S.Pd.', Hari: 'Senin', WaktuMulai: '13:55', WaktuSelesai: '15:15' },

  { ID: 'PEL-SEL-01', NamaMapel: 'Bahasa Indonesia (IND)', NamaGuru: 'Niken Nunggar Winawastuti, S.Pd., M.Pd', Hari: 'Selasa', WaktuMulai: '07:00', WaktuSelesai: '08:30' },
  { ID: 'PEL-SEL-02', NamaMapel: 'Seni Budaya / Tari (SBK)', NamaGuru: 'Raden Bekel Riki Kristianta, S.Sn., M.Sn', Hari: 'Selasa', WaktuMulai: '08:30', WaktuSelesai: '10:00' },
  { ID: 'PEL-SEL-03', NamaMapel: 'Bahasa Jerman (JER)', NamaGuru: 'Dr.Eng.Humam Kholis, S.Pd., M.Pd', Hari: 'Selasa', WaktuMulai: '10:20', WaktuSelesai: '11:50' },
  { ID: 'PEL-SEL-04', NamaMapel: 'Bahasa Inggris Lanjut (INGL)', NamaGuru: 'Yustinus Anton Kristianta, S.Pd', Hari: 'Selasa', WaktuMulai: '12:35', WaktuSelesai: '13:55' },
  { ID: 'PEL-SEL-05', NamaMapel: 'PPKN (PP)', NamaGuru: 'Siwi Hidayah, S.H.,M.H', Hari: 'Selasa', WaktuMulai: '13:55', WaktuSelesai: '15:15' },

  { ID: 'PEL-RAB-01', NamaMapel: 'Sosiologi (SOS)', NamaGuru: 'Retno, S.Sos., M.Sos', Hari: 'Rabu', WaktuMulai: '07:00', WaktuSelesai: '08:30' },
  { ID: 'PEL-RAB-02', NamaMapel: 'PJOK', NamaGuru: 'Ridwan Fauzi, S.Pd.Jas', Hari: 'Rabu', WaktuMulai: '08:30', WaktuSelesai: '10:00' },
  { ID: 'PEL-RAB-03', NamaMapel: 'PJOK (Lanjutan)', NamaGuru: 'Ridwan Fauzi, S.Pd.Jas', Hari: 'Rabu', WaktuMulai: '10:20', WaktuSelesai: '11:05' },
  { ID: 'PEL-RAB-04', NamaMapel: 'Ekonomi (EKO)', NamaGuru: 'Istri Yuliati, S.E., M.Pd', Hari: 'Rabu', WaktuMulai: '11:05', WaktuSelesai: '11:50' },
  { ID: 'PEL-RAB-05', NamaMapel: 'Ekonomi (EKO)', NamaGuru: 'Istri Yuliati, S.E., M.Pd', Hari: 'Rabu', WaktuMulai: '12:35', WaktuSelesai: '13:55' },
  { ID: 'PEL-RAB-06', NamaMapel: 'Matematika (MAT)', NamaGuru: 'Tiwi Yulistyarini, S.Pd.', Hari: 'Rabu', WaktuMulai: '13:55', WaktuSelesai: '15:15' },

  { ID: 'PEL-KAM-01', NamaMapel: 'Bahasa Jerman (JER)', NamaGuru: 'Dr.Eng.Humam Kholis, S.Pd., M.Pd', Hari: 'Kamis', WaktuMulai: '07:00', WaktuSelesai: '08:30' },
  { ID: 'PEL-KAM-02', NamaMapel: 'Sejarah (SEJ)', NamaGuru: 'Maharjono, S.Pd., M.Pd', Hari: 'Kamis', WaktuMulai: '08:30', WaktuSelesai: '10:00' },
  { ID: 'PEL-KAM-03', NamaMapel: 'Bahasa Inggris Lanjut (INGL)', NamaGuru: 'Yustinus Anton Kristianta, S.Pd', Hari: 'Kamis', WaktuMulai: '10:20', WaktuSelesai: '11:50' },
  { ID: 'PEL-KAM-04', NamaMapel: 'Bahasa Inggris Lanjut (INGL)', NamaGuru: 'Yustinus Anton Kristianta, S.Pd', Hari: 'Kamis', WaktuMulai: '12:35', WaktuSelesai: '13:15' },
  { ID: 'PEL-KAM-05', NamaMapel: 'Bahasa Inggris (ING)', NamaGuru: 'Hoeriyah, S.Pd., M.Pd', Hari: 'Kamis', WaktuMulai: '13:15', WaktuSelesai: '15:15' },

  { ID: 'PEL-JUM-01', NamaMapel: 'SENAM PAGI', NamaGuru: '-', Hari: 'Jumat', WaktuMulai: '07:00', WaktuSelesai: '07:45' },
  { ID: 'PEL-JUM-02', NamaMapel: 'Bahasa Jawa (JAW)', NamaGuru: 'Raden Bekel Suprahwana Wahyu Diharja, S.S', Hari: 'Jumat', WaktuMulai: '07:45', WaktuSelesai: '08:55' },
  { ID: 'PEL-JUM-03', NamaMapel: 'Bahasa Indonesia (IND)', NamaGuru: 'Niken Nunggar Winawastuti, S.Pd.,M.Pd', Hari: 'Jumat', WaktuMulai: '08:55', WaktuSelesai: '10:05' },
  { ID: 'PEL-JUM-04', NamaMapel: 'Bahasa Jerman (JER)', NamaGuru: 'Dr.Eng.Humam Kholis, S.Pd., M.Pd', Hari: 'Jumat', WaktuMulai: '10:20', WaktuSelesai: '10:55' }
];

function getSpreadsheet() {
  try {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  } catch (e) {
    return SpreadsheetApp.getActiveSpreadsheet();
  }
}

function getOrCreateSheet(name, headers) {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  if (headers && headers.length > 0 && sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
  return sheet;
}

function seedPelajaranIfEmpty(sheet) {
  if (!sheet || sheet.getLastRow() > 1) return;
  const headers = ['ID', 'NamaMapel', 'NamaGuru', 'Hari', 'WaktuMulai', 'WaktuSelesai'];
  const rows = DEFAULT_PELAJARAN_SEED.map((item) => headers.map((h) => item[h] || ''));
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
}

function ensureAllSheets() {
  getOrCreateSheet(SHEETS.NOTULENSI, ['ID', 'AgendaID', 'Judul', 'Isi', 'TokenTTE', 'Penandatangan', 'Jabatan', 'Tanggal']);
  getOrCreateSheet(SHEETS.AGENDA, ['ID', 'Judul', 'Lokasi', 'JatuhTempo', 'Durasi', 'Prioritas', 'Status', 'DisposisiKepada', 'TamuKhusus', 'Notulensi', 'CreatedAt']);
  const pelSheet = getOrCreateSheet(SHEETS.PELAJARAN, ['ID', 'NamaMapel', 'NamaGuru', 'Hari', 'WaktuMulai', 'WaktuSelesai']);
  seedPelajaranIfEmpty(pelSheet);
  getOrCreateSheet(SHEETS.UJIAN, ['ID', 'Hari', 'Jam', 'NamaMapel', 'StatusAktif']);
  getOrCreateSheet(SHEETS.TUGAS, ['ID', 'Deadline', 'NamaMapel', 'NamaGuru', 'DetailTugas', 'Selesai']);
}

function formatCellValue(v) {
  if (v instanceof Date) {
    return Utilities.formatDate(v, Session.getScriptTimeZone() || 'Asia/Jakarta', 'yyyy-MM-dd HH:mm');
  }
  return v === null || v === undefined ? '' : String(v);
}

function sheetToObjects(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map((h) => String(h).trim());
  const rows = [];

  for (let r = 1; r < values.length; r++) {
    const row = values[r];
    const hasData = row.some((cell) => cell !== '' && cell !== null && cell !== undefined);
    if (!hasData) continue;

    const obj = {};
    for (let c = 0; c < headers.length; c++) {
      if (!headers[c]) continue;
      obj[headers[c]] = formatCellValue(row[c]);
    }
    rows.push(obj);
  }
  return rows;
}

function verifyPin(pin) {
  const input = String(pin || '').trim().toUpperCase();
  return SECURITY_PINS.some((p) => p.toUpperCase() === input);
}

function verifyLogin(credential) {
  const val = String(credential || '').trim();
  if (!val) return { success: false, message: 'Kredensial tidak boleh kosong.' };
  const isValid = ADMIN_CREDENTIALS.some((item) => item.toLowerCase() === val.toLowerCase());
  if (isValid) {
    return { success: true, message: 'Login admin berhasil.' };
  }
  return { success: false, message: 'Kredensial akses tidak valid.' };
}

function computeServerToken(minuteOffset) {
  const offset = Number(minuteOffset || 0);
  const slot = Math.floor(Date.now() / 60000) + offset;
  const raw = 'MUSAFA-TTE-FT-' + slot;
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw, Utilities.Charset.UTF_8);
  const hex = digest.map((b) => {
    const v = (b < 0 ? b + 256 : b).toString(16);
    return v.length === 1 ? '0' + v : v;
  }).join('').toUpperCase();
  return hex.slice(-6);
}

function getAdminTteToken(username) {
  const cred = String(username || '').trim();
  const ok = ADMIN_CREDENTIALS.some((item) => item.toLowerCase() === cred.toLowerCase());
  if (!ok) return { success: false, message: 'Akses token hanya untuk Admin.' };
  return { success: true, token: computeServerToken(0) };
}

function verifyTteToken(token) {
  const input = String(token || '').trim().toUpperCase();
  if (!input) return { success: false, message: 'Token kosong.' };

  const currentTok = computeServerToken(0);
  const prevTok = computeServerToken(-1);
  if (input === currentTok || input === prevTok) {
    return { success: true, ttdUrl: TTE_SPECIMEN_URL, message: 'Token TTE valid.' };
  }

  ensureAllSheets();
  const notulList = sheetToObjects(getSpreadsheet().getSheetByName(SHEETS.NOTULENSI));
  const found = notulList.some((n) => String(n.TokenTTE || '').trim().toUpperCase() === input);
  if (found) {
    return { success: true, ttdUrl: TTE_SPECIMEN_URL, message: 'Token arsip notulensi valid.' };
  }

  return { success: false, message: 'Token TTE tidak valid atau sudah kedaluwarsa.' };
}

function getAllData() {
  try {
    ensureAllSheets();
    const ss = getSpreadsheet();
    return {
      success: true,
      agenda: sheetToObjects(ss.getSheetByName(SHEETS.AGENDA)),
      pelajaran: sheetToObjects(ss.getSheetByName(SHEETS.PELAJARAN)),
      ujian: sheetToObjects(ss.getSheetByName(SHEETS.UJIAN)),
      tugas: sheetToObjects(ss.getSheetByName(SHEETS.TUGAS)),
      notulensi: sheetToObjects(ss.getSheetByName(SHEETS.NOTULENSI))
    };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  }
}

function saveRecord(sheetName, payload, pin) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!verifyPin(pin)) {
      return { success: false, message: 'PIN keamanan salah!' };
    }
    ensureAllSheets();
    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      return { success: false, message: 'Sheet ' + sheetName + ' tidak ditemukan.' };
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map((h) => String(h).trim());
    const data = sheet.getDataRange().getValues();
    const rec = Object.assign({}, payload || {});
    if (!rec.ID) {
      const prefix = sheetName.slice(0, 3).toUpperCase();
      rec.ID = prefix + '-' + Date.now();
    }
    if (sheetName === SHEETS.AGENDA && !rec.CreatedAt) {
      rec.CreatedAt = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Asia/Jakarta', 'yyyy-MM-dd HH:mm:ss');
    }
    if (sheetName === SHEETS.TUGAS && rec.Selesai === undefined) {
      rec.Selesai = 'FALSE';
    }

    const rowValues = headers.map((h) => (rec[h] !== undefined && rec[h] !== null ? rec[h] : ''));
    const idColIdx = headers.indexOf('ID');

    if (idColIdx >= 0) {
      for (let r = 1; r < data.length; r++) {
        if (String(data[r][idColIdx]).trim() === String(rec.ID).trim()) {
          sheet.getRange(r + 1, 1, 1, headers.length).setValues([rowValues]);
          return { success: true, message: 'Data ' + sheetName + ' berhasil diperbarui.' };
        }
      }
    }

    sheet.appendRow(rowValues);
    return { success: true, message: 'Data ' + sheetName + ' berhasil disimpan.' };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  } finally {
    lock.releaseLock();
  }
}

function deleteRecord(sheetName, id, pin) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!verifyPin(pin)) {
      return { success: false, message: 'PIN keamanan salah!' };
    }
    ensureAllSheets();
    const sheet = getSpreadsheet().getSheetByName(sheetName);
    if (!sheet || sheet.getLastRow() < 2) {
      return { success: false, message: 'Data tidak ditemukan.' };
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map((h) => String(h).trim());
    const idColIdx = headers.indexOf('ID');
    const data = sheet.getDataRange().getValues();

    for (let r = data.length - 1; r >= 1; r--) {
      if (String(data[r][idColIdx >= 0 ? idColIdx : 0]).trim() === String(id).trim()) {
        sheet.deleteRow(r + 1);
        return { success: true, message: 'Data ' + sheetName + ' berhasil dihapus.' };
      }
    }
    return { success: false, message: 'ID tidak ditemukan.' };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  } finally {
    lock.releaseLock();
  }
}

function toggleUjianStatus(id, nextStatus, pin) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!verifyPin(pin)) {
      return { success: false, message: 'PIN keamanan salah!' };
    }
    ensureAllSheets();
    const sheet = getSpreadsheet().getSheetByName(SHEETS.UJIAN);
    if (!sheet || sheet.getLastRow() < 2) {
      return { success: false, message: 'Jadwal ujian kosong.' };
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map((h) => String(h).trim());
    const idCol = headers.indexOf('ID');
    const stCol = headers.indexOf('StatusAktif');
    const data = sheet.getDataRange().getValues();

    for (let r = 1; r < data.length; r++) {
      if (String(data[r][idCol >= 0 ? idCol : 0]).trim() === String(id).trim()) {
        sheet.getRange(r + 1, (stCol >= 0 ? stCol : 4) + 1).setValue(nextStatus);
        return { success: true, message: 'Status ujian diubah menjadi ' + nextStatus };
      }
    }
    return { success: false, message: 'Jadwal ujian tidak ditemukan.' };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  } finally {
    lock.releaseLock();
  }
}

function saveNotulensi(agendaId, isi) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    ensureAllSheets();
    const sheet = getSpreadsheet().getSheetByName(SHEETS.AGENDA);
    if (!sheet || sheet.getLastRow() < 2) return { success: false, message: 'Agenda tidak ditemukan.' };

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map((h) => String(h).trim());
    const idCol = headers.indexOf('ID');
    const notulCol = headers.indexOf('Notulensi');
    const data = sheet.getDataRange().getValues();

    for (let r = 1; r < data.length; r++) {
      if (String(data[r][idCol >= 0 ? idCol : 0]).trim() === String(agendaId).trim()) {
        sheet.getRange(r + 1, (notulCol >= 0 ? notulCol : 9) + 1).setValue(isi || '');
        return { success: true, message: 'Notulensi agenda tersimpan.' };
      }
    }
    return { success: false, message: 'Agenda tidak ditemukan.' };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  } finally {
    lock.releaseLock();
  }
}

function saveNotulensiArchive(record) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    ensureAllSheets();
    const sheet = getSpreadsheet().getSheetByName(SHEETS.NOTULENSI);
    const rec = Object.assign({}, record || {});
    if (!rec.ID) {
      rec.ID = 'NOT-' + Date.now();
    }

    const rowValues = [
      rec.ID || '',
      rec.AgendaID || '',
      rec.Judul || '',
      rec.Isi || '',
      rec.TokenTTE || '',
      rec.Penandatangan || 'Muhammad Sufyan Fahriza',
      rec.Jabatan || '',
      rec.Tanggal || Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Asia/Jakarta', 'dd/MM/yyyy HH:mm:ss')
    ];

    const data = sheet.getDataRange().getValues();
    for (let r = 1; r < data.length; r++) {
      if (String(data[r][0]).trim() === String(rec.ID).trim()) {
        sheet.getRange(r + 1, 1, 1, rowValues.length).setValues([rowValues]);
        return { success: true, message: 'Arsip notulensi diperbarui.' };
      }
    }

    sheet.appendRow(rowValues);
    return { success: true, message: 'Arsip notulensi tersimpan di Spreadsheet.' };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  } finally {
    lock.releaseLock();
  }
}

function deleteNotulensiArchive(id, pin) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!verifyPin(pin)) {
      return { success: false, message: 'PIN keamanan salah!' };
    }
    ensureAllSheets();
    const sheet = getSpreadsheet().getSheetByName(SHEETS.NOTULENSI);
    if (!sheet || sheet.getLastRow() < 2) {
      return { success: false, message: 'Arsip notulensi kosong.' };
    }
    const data = sheet.getDataRange().getValues();
    for (let r = data.length - 1; r >= 1; r--) {
      if (String(data[r][0]).trim() === String(id).trim()) {
        sheet.deleteRow(r + 1);
        return { success: true, message: 'Arsip notulensi dihapus.' };
      }
    }
    return { success: false, message: 'ID notulensi tidak ditemukan.' };
  } catch (err) {
    return { success: false, message: err.message || String(err) };
  } finally {
    lock.releaseLock();
  }
}

function buildJsonpResponse(payload, callback) {
  const jsonStr = JSON.stringify(payload);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + jsonStr + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(jsonStr)
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const params = (e && e.parameter) || {};
  const action = String(params.action || '').trim();
  const callback = String(params.callback || '').trim();
  let args = [];

  if (params.args) {
    try {
      const parsed = JSON.parse(params.args);
      args = Array.isArray(parsed) ? parsed : [parsed];
    } catch (err) {
      args = [];
    }
  }

  let result;
  switch (action) {
    case 'verifyLogin':
      result = verifyLogin(args[0]);
      break;
    case 'getAllData':
      result = getAllData();
      break;
    case 'saveRecord':
      result = saveRecord(args[0], args[1], args[2]);
      break;
    case 'deleteRecord':
      result = deleteRecord(args[0], args[1], args[2]);
      break;
    case 'toggleUjianStatus':
      result = toggleUjianStatus(args[0], args[1], args[2]);
      break;
    case 'saveNotulensi':
      result = saveNotulensi(args[0], args[1]);
      break;
    case 'saveNotulensiArchive':
      result = saveNotulensiArchive(args[0]);
      break;
    case 'deleteNotulensiArchive':
      result = deleteNotulensiArchive(args[0], args[1]);
      break;
    case 'getAdminTteToken':
      result = getAdminTteToken(args[0]);
      break;
    case 'verifyTteToken':
      result = verifyTteToken(args[0]);
      break;
    default:
      result = getAllData();
      break;
  }

  return buildJsonpResponse(result, callback);
}

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    const action = String(body.action || '').trim();
    const args = Array.isArray(body.args) ? body.args : [];
    let result;

    switch (action) {
      case 'verifyLogin':
        result = verifyLogin(args[0]);
        break;
      case 'getAllData':
        result = getAllData();
        break;
      case 'saveRecord':
        result = saveRecord(args[0], args[1], args[2]);
        break;
      case 'deleteRecord':
        result = deleteRecord(args[0], args[1], args[2]);
        break;
      case 'toggleUjianStatus':
        result = toggleUjianStatus(args[0], args[1], args[2]);
        break;
      case 'saveNotulensi':
        result = saveNotulensi(args[0], args[1]);
        break;
      case 'saveNotulensiArchive':
        result = saveNotulensiArchive(args[0]);
        break;
      case 'deleteNotulensiArchive':
        result = deleteNotulensiArchive(args[0], args[1]);
        break;
      case 'getAdminTteToken':
        result = getAdminTteToken(args[0]);
        break;
      case 'verifyTteToken':
        result = verifyTteToken(args[0]);
        break;
      default:
        result = { success: false, message: 'Aksi tidak dikenal.' };
        break;
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: err.message || String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}