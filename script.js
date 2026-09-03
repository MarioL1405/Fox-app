

const STUDENT = {
  name: "Luis Mario Medrano Páez",
  id: "1037470188",
  program: "Ingeniería de Sistemas",
  university: "Universidad Católica Luis Amigó",
  city: "Apartadó, Antioquia",
  totalCredits: 170,
  nickname: "Fox",
};



const DEFAULT_COMPLETED_TERMS = [
  {
    term: "2023-02", level: 1, avg: 3.68, accAvg: 3.68, credits: 16, accCredits: 16,
    courses: [
      { code: "ALE26", name: "Inglés I (A1)", credits: 4, grade: 4.0 },
      { code: "ATI01", name: "Competencias Fundamentales en TIC", credits: 2, grade: 4.1 },
      { code: "ICB01", name: "Álgebra y Trigonometría", credits: 4, grade: 3.0 },
      { code: "IS040", name: "Algorítmica y Lógica de Programación", credits: 4, grade: 3.3 },
      { code: "IS041", name: "Introducción a la Ingeniería de Sistemas", credits: 2, grade: 4.0 },
    ],
  },
  {
    term: "2024-01", level: 2, avg: 3.92, accAvg: 3.80, credits: 16, accCredits: 32,
    courses: [
      { code: "ICB06", name: "Álgebra Lineal", credits: 4, grade: 3.1 },
      { code: "ALE27", name: "Inglés II (A2)", credits: 4, grade: 3.7 },
      { code: "ASH01", name: "Contexto Amigoniano y Humanismo", credits: 2, grade: 4.3 },
      { code: "IS043", name: "Lenguajes de Programación", credits: 4, grade: 4.0 },
      { code: "IS047", name: "Teoría General de Sistemas", credits: 2, grade: 4.5 },
    ],
  },
  {
    term: "2024-02", level: 3, avg: 3.72, accAvg: 3.77, credits: 18, accCredits: 50,
    courses: [
      { code: "ICB03", name: "Cálculo Diferencial", credits: 4, grade: 3.0 },
      { code: "ASH02", name: "Antropología y Cosmovisiones", credits: 2, grade: 4.9 },
      { code: "ALE28", name: "Inglés III (B1-1)", credits: 4, grade: 3.9 },
      { code: "IS008", name: "Estructuras de Datos", credits: 4, grade: 3.6 },
      { code: "IS042", name: "Matemáticas Discretas", credits: 4, grade: 3.2 },
    ],
  },
  {
    term: "2025-01", level: 4, avg: 4.14, accAvg: 3.86, credits: 18, accCredits: 68,
    courses: [
      { code: "IS044", name: "Electrónica Digital y Arquitectura de Hardware", credits: 4, grade: 4.5 },
      { code: "ICB05", name: "Cálculo Integral", credits: 4, grade: 4.1 },
      { code: "ICB07", name: "Física I", credits: 4, grade: 3.9 },
      { code: "AFI04", name: "Gener. del Proceso de Invest. y Construcc. de Objetos de Conocimiento", credits: 2, grade: 3.7 },
      { code: "ALE29", name: "Inglés IV (B1-2)", credits: 4, grade: 4.5 },
    ],
  },
  {
    term: "2025-02", level: 5, avg: 4.20, accAvg: 3.93, credits: 18, accCredits: 86,
    courses: [
      { code: "AFI05", name: "Genera. Metodológicas desde la Investigación Cuantitativa", credits: 2, grade: 3.8 },
      { code: "ALE30", name: "Inglés V (B2-1)", credits: 4, grade: 4.7 },
      { code: "IS046", name: "Redes y Telecomunicaciones", credits: 4, grade: 3.3 },
      { code: "ICB11", name: "Física II", credits: 4, grade: 4.6 },
      { code: "ICB10", name: "Ecuaciones Diferenciales", credits: 4, grade: 4.6 },
    ],
  },
  {
    term: "2026-01", level: 6, avg: 4.33, accAvg: 4.01, credits: 18, accCredits: 104,
    courses: [
      { code: "IS051", name: "Informática Jurídica", credits: 2, grade: 4.2 },
      { code: "ICB04", name: "Estadística I", credits: 3, grade: 3.7 },
      { code: "IS015", name: "Bases de Datos", credits: 4, grade: 4.3 },
      { code: "AFI06", name: "Genera. Metodológicas desde la Investigación Cualitativa", credits: 2, grade: 4.2 },
      { code: "IS014", name: "Sistemas Operativos", credits: 4, grade: 4.6 },
      { code: "ISSAE04", name: "Linux (Sem. Actualización I)", credits: 3, grade: 5.0 },
    ],
  },
];

const DEFAULT_IN_PROGRESS_CODES = ["IS045", "IS032", "IS049", "ASH04", "IS019", "IS024"];

const DEFAULT_PENDING_COURSES = [
  { code: "IS045", name: "Ingeniería de Software", credits: 4, level: 7, type: "REGULAR" },
  { code: "IS032", name: "Gerencia de Sistemas", credits: 2, level: 7, type: "REGULAR" },
  { code: "IS049", name: "Formulación Evaluación de Proyectos", credits: 4, level: 7, type: "REGULAR" },
  { code: "ISBE100", name: "Banco Electivos IS", credits: 12, level: 7, type: "REGULAR" },
  { code: "IS019", name: "Verificación y Validación de Software", credits: 3, level: 7, type: "REGULAR" },
  { code: "IS024", name: "Arquitectura de Sistemas", credits: 4, level: 8, type: "REGULAR" },
  { code: "ISTG01", name: "Trabajo de Grado I", credits: 2, level: 8, type: "TUTORÍA PROY. GRADO" },
  { code: "IS021", name: "Investigación de Operaciones", credits: 3, level: 8, type: "REGULAR" },
  { code: "ASH04", name: "Desarrollo Humano y Formación Sociopolítica", credits: 2, level: 8, type: "REGULAR" },
  { code: "ISLP01", name: "Línea de Profundización en Ingeniería I", credits: 3, level: 8, type: "REGULAR" },
  { code: "IS050", name: "Auditoría de Sistemas de Información", credits: 2, level: 8, type: "REGULAR" },
  { code: "ISSA02", name: "Seminario de Actualización en Ingeniería II", credits: 3, level: 9, type: "REGULAR" },
  { code: "ISTG02", name: "Trabajo de Grado II", credits: 2, level: 9, type: "TUTORÍA PROY. GRADO" },
  { code: "ISLP02", name: "Línea de Profundización en Ingeniería II", credits: 3, level: 9, type: "REGULAR" },
  { code: "IS048", name: "Modelación y Simulación de Sistemas", credits: 4, level: 9, type: "REGULAR" },
  { code: "ISPP01", name: "Práctica Profesional", credits: 8, level: 10, type: "PRÁCTICA" },
  { code: "ISLP03", name: "Línea de Profundización en Ingeniería III", credits: 3, level: 10, type: "REGULAR" },
  { code: "ASH03", name: "Ética y Axiología", credits: 2, level: 10, type: "REGULAR" },
].map((c) => ({ ...c, status: DEFAULT_IN_PROGRESS_CODES.includes(c.code) ? "in-progress" : "pending" }));

// Prerrequisitos inferidos por lógica de secuencia del pénsum (Trabajo de Grado y Líneas de Profundización)
const PREREQS = {
  ISTG02: ["ISTG01"],
  ISLP02: ["ISLP01"],
  ISLP03: ["ISLP02"],
};

// Bancos de electivas: el estudiante escribe el nombre real de cada electiva que ve,
// en vez de un bloque genérico. Créditos totales originales de cada banco:
// Bancos de electivas: el estudiante escribe el nombre real de cada electiva que ve,
// en vez de un bloque genérico. Créditos totales originales de cada banco:
const ELECTIVE_POOLS = { ISBE100: 12 };

// Reglamento Estudiantil UCLA — Art. 97, parágrafo 6: cursos que NO admiten
// Recuperación Final (prácticas, trabajos de grado, cursos dirigidos).
const NO_RECUPERACION_CODES = ["ISPP01", "ISTG01", "ISTG02"];

function isEligibleForRecuperacion(code) {
  return !NO_RECUPERACION_CODES.includes(code);
}

function isElectivePool(code) {
  return code in ELECTIVE_POOLS;
}

function addElectiveFromPool(poolCode, name, credits) {
  const pool = DATA.pendingCourses.find((c) => c.code === poolCode);
  if (!pool) return { ok: false, message: "No encontré ese banco de electivas." };
  const cleanName = name.trim();
  if (!cleanName) return { ok: false, message: "Ponle un nombre a la electiva." };
  if (isNaN(credits) || credits <= 0) return { ok: false, message: "Los créditos deben ser un número mayor a 0." };
  if (credits > pool.credits + 0.001) {
    return { ok: false, message: `Solo quedan ${pool.credits} créditos disponibles en ese banco.` };
  }

  const newCourse = {
    code: `${poolCode}-${Date.now()}`,
    name: cleanName,
    credits: Math.round(credits * 10) / 10,
    level: pool.level,
    type: "ELECTIVA",
    status: "pending",
    fromPool: poolCode,
  };
  DATA.pendingCourses.push(newCourse);
  pool.credits = Math.round((pool.credits - newCourse.credits) * 10) / 10;
  saveData();
  return { ok: true };
}

function removeCustomElective(code) {
  const idx = DATA.pendingCourses.findIndex((c) => c.code === code && c.fromPool);
  if (idx === -1) return;
  const [removed] = DATA.pendingCourses.splice(idx, 1);
  const pool = DATA.pendingCourses.find((c) => c.code === removed.fromPool);
  if (pool) pool.credits = Math.round((pool.credits + removed.credits) * 10) / 10;
  saveData();
}

// ---------- CAPA DE DATOS (mutable, persistida en localStorage) ----------

const DATA_KEY = "fox-data-v3";

function cloneDefaults() {
  return {
    completedTerms: JSON.parse(JSON.stringify(DEFAULT_COMPLETED_TERMS)),
    pendingCourses: JSON.parse(JSON.stringify(DEFAULT_PENDING_COURSES)),
  };
}

function loadData() {
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (!raw) return cloneDefaults();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.completedTerms) || !Array.isArray(parsed.pendingCourses)) return cloneDefaults();
    return parsed;
  } catch {
    return cloneDefaults();
  }
}

let DATA = loadData();

function saveData() {
  localStorage.setItem(DATA_KEY, JSON.stringify(DATA));
}

// Recalcula avg/accAvg/accCredits/level de forma consistente para todos los periodos.
// Método verificado contra el certificado oficial: avg de periodo = media simple de TODAS
// las notas matriculadas ese periodo (aprobadas o no); acumulado = media de los promedios
// de periodo; accCredits = suma de créditos de materias APROBADAS únicamente.
function recomputeChain() {
  let accSum = 0;
  let accCredits = 0;
  DATA.completedTerms.forEach((t, i) => {
    t.avg = t.courses.reduce((s, c) => s + c.grade, 0) / t.courses.length;
    t.credits = t.courses.reduce((s, c) => s + c.credits, 0);
    const approvedThisTerm = t.courses.filter((c) => c.passed !== false).reduce((s, c) => s + c.credits, 0);
    accSum += t.avg;
    accCredits += approvedThisTerm;
    t.accAvg = accSum / (i + 1);
    t.accCredits = accCredits;
    t.level = i + 1;
  });
}

function resetToDefaults() {
  localStorage.removeItem(DATA_KEY);
  DATA = loadData();
  saveData();
}

// ---------- CENTRO DE RECURSOS ----------

const RESOURCE_CATEGORIES = {
  software: { label: "Ingeniería de Software", icon: "", links: [
    { title: "Martin Fowler — patrones y buenas prácticas", url: "https://martinfowler.com/" },
    { title: "Refactoring Guru — patrones de diseño explicados", url: "https://refactoring.guru/" },
  ]},
  arquitectura: { label: "Arquitectura de Sistemas", icon: "", links: [
    { title: "The Twelve-Factor App", url: "https://12factor.net/" },
    { title: "Refactoring Guru — patrones arquitectónicos", url: "https://refactoring.guru/design-patterns" },
  ]},
  gerencia: { label: "Gerencia y Gestión de Proyectos", icon: "", links: [
    { title: "Project Management Institute", url: "https://www.pmi.org/" },
    { title: "Cursos gratuitos de gestión — Coursera", url: "https://www.coursera.org/browse/business/leadership-and-management" },
  ]},
  operaciones: { label: "Investigación de Operaciones y Estadística", icon: "", links: [
    { title: "Khan Academy — Estadística y probabilidad", url: "https://es.khanacademy.org/math/statistics-probability" },
    { title: "Khan Academy — Álgebra lineal", url: "https://es.khanacademy.org/math/linear-algebra" },
  ]},
  auditoria: { label: "Auditoría y Seguridad de la Información", icon: "", links: [
    { title: "OWASP — fundamentos de seguridad", url: "https://owasp.org/" },
  ]},
  testing: { label: "Verificación y Validación de Software", icon: "", links: [
    { title: "freeCodeCamp — testing y QA", url: "https://www.freecodecamp.org/" },
  ]},
  simulacion: { label: "Modelación y Simulación", icon: "", links: [
    { title: "Wolfram MathWorld", url: "https://mathworld.wolfram.com/" },
    { title: "Khan Academy — Cálculo", url: "https://es.khanacademy.org/math/calculus-1" },
  ]},
  humanas: { label: "Ética, Humanidades y Desarrollo", icon: "", links: [
    { title: "edX — cursos de ética y sociedad", url: "https://www.edx.org/" },
  ]},
  practica: { label: "Práctica Profesional y Portafolio", icon: "", links: [
    { title: "GitHub — arma tu portafolio de proyectos", url: "https://github.com/" },
    { title: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
  ]},
  general: { label: "Fundamentos y Programación", icon: "", links: [
    { title: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
    { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
  ]},
};

const COURSE_RESOURCE_MAP = {
  IS045: "software", IS032: "gerencia", IS049: "gerencia", ISBE100: "general",
  IS019: "testing", IS024: "arquitectura", ISTG01: "practica", IS021: "operaciones",
  ASH04: "humanas", ISLP01: "general", IS050: "auditoria", ISSA02: "general",
  ISTG02: "practica", ISLP02: "general", IS048: "simulacion", ISPP01: "practica",
  ISLP03: "general", ASH03: "humanas",
};

// ---------- SEGURIDAD: sanitización de texto dinámico ----------

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value === null || value === undefined ? "" : String(value);
  return div.innerHTML;
}

// ---------- UTILIDADES DE DATOS ----------

function allCompletedCourses() {
  // Solo materias APROBADAS cuentan como "completadas" (una reprobada vuelve a pendientes)
  return DATA.completedTerms.flatMap((t) =>
    t.courses.filter((c) => c.passed !== false).map((c) => ({ ...c, term: t.term, level: t.level }))
  );
}

function computeStats() {
  const completed = allCompletedCourses();
  const approvedCredits = completed.reduce((s, c) => s + c.credits, 0);
  const inProgressCourses = DATA.pendingCourses.filter((c) => c.status === "in-progress");
  const pendingCourses = DATA.pendingCourses.filter((c) => c.status === "pending");
  const inProgressCredits = inProgressCourses.reduce((s, c) => s + c.credits, 0);
  const pendingCredits = pendingCourses.reduce((s, c) => s + c.credits, 0);
  const total = STUDENT.totalCredits;
  const lastAcc = DATA.completedTerms.length ? DATA.completedTerms[DATA.completedTerms.length - 1].accAvg : 0;
  const pct = total ? (approvedCredits / total) * 100 : 0;

  const avgLoad = DATA.completedTerms.length
    ? DATA.completedTerms.reduce((s, t) => s + t.credits, 0) / DATA.completedTerms.length
    : 17;
  const estSemesters = Math.max(1, Math.ceil((pendingCredits + inProgressCredits) / avgLoad));

  return {
    approvedCredits, inProgressCredits, pendingCredits, total, pct, lastAcc, estSemesters,
    completedCoursesCount: completed.length,
    inProgressCount: inProgressCourses.length,
    pendingCount: pendingCourses.length,
  };
}

// Proyecta el periodo de grado (ej. "2028-01") siguiendo la convención de rótulos -01/-02
function projectGraduationLabel(stats) {
  if (DATA.completedTerms.length === 0) return null;
  let label = DATA.completedTerms[DATA.completedTerms.length - 1].term;
  for (let i = 0; i < stats.estSemesters; i++) {
    const [y, h] = label.split("-");
    label = h === "01" ? `${y}-02` : `${parseInt(y, 10) + 1}-01`;
  }
  return label;
}

function gradeClass(grade) {
  if (grade < 3.0) return "grade-fail";
  if (grade >= 4.5) return "grade-excellent";
  if (grade >= 4.0) return "grade-good";
  if (grade >= 3.5) return "grade-ok";
  return "grade-pass";
}

function resourceLinkHtml(code) {
  const cat = RESOURCE_CATEGORIES[COURSE_RESOURCE_MAP[code]];
  if (!cat || !cat.links[0]) return "";
  return `<a class="resource-quick-link" href="${escapeHtml(cat.links[0].url)}" target="_blank" rel="noopener">${cat.icon} Recurso sugerido ↗</a>`;
}

function isCourseUnlocked(code) {
  const reqs = PREREQS[code];
  if (!reqs) return true;
  const approvedCodes = new Set(allCompletedCourses().map((c) => c.code));
  return reqs.every((r) => approvedCodes.has(r));
}

// ---------- NOTAS (independientes del progreso académico) ----------

const NOTES_KEY = "fox-notes-v1";

function loadNotes() {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveNote(code, text) {
  const notes = loadNotes();
  if (text && text.trim()) notes[code] = text.trim();
  else delete notes[code];
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

// ---------- TOAST ----------

function showToast(message, actionLabel, actionFn) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = "";
  const span = document.createElement("span");
  span.textContent = message;
  toast.appendChild(span);
  if (actionLabel && actionFn) {
    const btn = document.createElement("button");
    btn.className = "toast-action";
    btn.textContent = actionLabel;
    btn.addEventListener("click", () => {
      actionFn();
      toast.classList.remove("show");
    });
    toast.appendChild(btn);
  }
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), actionLabel ? 6000 : 3600);
}

// ---------- TEMA CLARO / OSCURO ----------

const THEME_KEY = "fox-theme";

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || "dark";
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = theme === "light" ? "" : "";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(current === "light" ? "dark" : "light");
}

// ---------- SALUDO DINÁMICO ----------

function renderGreeting() {
  const el = document.getElementById("greeting-text");
  if (!el) return;
  const hour = new Date().getHours();
  let timeGreeting = "Buenas noches";
  if (hour >= 5 && hour < 12) timeGreeting = "Buenos días";
  else if (hour >= 12 && hour < 19) timeGreeting = "Buenas tardes";
  el.textContent = `${timeGreeting}, ${STUDENT.nickname}.`;
}

// ---------- LOGROS ----------

function buildAchievements(stats) {
  const completed = allCompletedCourses();
  const periodAvgs = DATA.completedTerms.map((t) => t.avg);

  let bestStreak = periodAvgs.length ? 1 : 0, curStreak = 1;
  for (let i = 1; i < periodAvgs.length; i++) {
    if (periodAvgs[i] > periodAvgs[i - 1]) {
      curStreak++;
      bestStreak = Math.max(bestStreak, curStreak);
    } else {
      curStreak = 1;
    }
  }

  const hasPerfectGrade = completed.some((c) => c.grade >= 5.0);
  const highestEnglish = completed.filter((c) => c.name.toLowerCase().startsWith("inglés")).length;
  const advancedLevel = DATA.pendingCourses.some((c) => c.level >= 8);
  const hasRetake = DATA.pendingCourses.some((c) => (c.attempts || 0) > 0);
  const neverFailed = !DATA.completedTerms.some((t) => t.courses.some((c) => c.passed === false));
  const honorEligible = stats.lastAcc >= 4.6 && neverFailed && DATA.completedTerms.length > 0;
  const saberProReady = stats.pct >= 75;

  return [
    { id: "primer-sello", icon: "", title: "Primer sello", desc: "Cerre mi primer semestre en la universidad.", unlocked: DATA.completedTerms.length >= 1 },
    { id: "nota-perfecta", icon: "", title: "Nota perfecta", desc: "Saque un 5.0 en al menos una materia.", unlocked: hasPerfectGrade },
    { id: "racha-ascendente", icon: "", title: "Racha ascendente", desc: `Llevo 4 ${bestStreak} periodos seguidos con el promedio en aumento.`, unlocked: bestStreak >= 3 },
    { id: "medio-camino", icon: "", title: "Medio camino", desc: "Supere el 50% de los créditos de la carrera.", unlocked: stats.pct >= 50 },
    { id: "poliglota", icon: "", title: "Políglota en construcción", desc: "Aprobe 5 niveles de inglés.", unlocked: highestEnglish >= 5 },
    { id: "multitarea", icon: "", title: "Modo multitarea", desc: "Llevo 6 materias activas al mismo tiempo.", unlocked: stats.inProgressCount >= 6 },
    { id: "recta-final", icon: "", title: "Recta final", desc: "Ya tengo materias de nivel 8 en el radar.", unlocked: advancedLevel },
    { id: "segunda-oportunidad", icon: "", title: "Segunda oportunidad", desc: "Te vas a levantar una materia repitiéndola. Así se hace.", unlocked: hasRetake },
    { id: "saber-pro", icon: "", title: "Listo para el Saber Pro", desc: "Superaste el 75% de créditos — ya puedes inscribirte (Art. 104).", unlocked: saberProReady },
    { id: "grado-honorifico", icon: "", title: "Camino al Grado Honorífico", desc: "Promedio ≥ 4.6 y cero materias reprobadas (Art. 83). Sigue así hasta el final.", unlocked: honorEligible },
  ];
}

function renderAchievements(stats) {
  const grid = document.getElementById("achievements-grid");
  if (!grid) return;
  const achievements = buildAchievements(stats);
  grid.innerHTML = achievements.map((a, i) => `
    <div class="badge ${a.unlocked ? "unlocked" : "locked"}" style="--delay:${i * 60}ms">
      <span class="badge-icon">${a.icon}</span>
      <div class="badge-text">
        <span class="badge-title">${a.title}</span>
        <span class="badge-desc">${a.desc}</span>
      </div>
    </div>`).join("");

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const counter = document.getElementById("achievements-count");
  if (counter) counter.textContent = `${unlockedCount} / ${achievements.length}`;
}



const SVG_NS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

let projectionScenario = "realista";

function renderAnalytics() {
  renderTrendChart();
  renderStrengthsChart();
  renderDistributionChart();
  renderProjection();
}

// --- Gráfica de tendencia (promedio por periodo + proyección punteada) ---
function renderTrendChart() {
  const container = document.getElementById("chart-trend");
  if (!container) return;
  container.innerHTML = "";

  const avgs = DATA.completedTerms.map((t) => t.avg);
  const labels = DATA.completedTerms.map((t) => t.term);

  if (avgs.length === 0) {
    container.innerHTML = `<p class="empty-msg">Cierra tu primer periodo para ver tu tendencia.</p>`;
    return;
  }

  const scenarioValue = getScenarioValue();
  const remaining = Math.min(computeStats().estSemesters, 6);
  const projPoints = Array.from({ length: remaining }, () => scenarioValue);

  const allValues = [...avgs, ...projPoints];
  const W = 560, H = 220, PAD = 34;
  const minY = 2.5, maxY = 5.0;
  const n = allValues.length;
  const stepX = n > 1 ? (W - PAD * 2) / (n - 1) : 0;

  const xAt = (i) => PAD + i * stepX;
  const yAt = (v) => H - PAD - ((v - minY) / (maxY - minY)) * (H - PAD * 2);

  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, class: "chart-svg", role: "img", "aria-label": "Tendencia de promedio por periodo" });

  // Líneas guía horizontales
  [3.0, 3.5, 4.0, 4.5, 5.0].forEach((v) => {
    const y = yAt(v);
    svg.appendChild(svgEl("line", { x1: PAD, x2: W - PAD, y1: y, y2: y, class: "chart-gridline" }));
    const t = svgEl("text", { x: 4, y: y + 3, class: "chart-axis-label" });
    t.textContent = v.toFixed(1);
    svg.appendChild(t);
  });

  // Línea real (sólida)
  const realPts = avgs.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ");
  svg.appendChild(svgEl("polyline", { points: realPts, class: "chart-line-real" }));

  // Línea proyectada (punteada), conectando desde el último punto real
  if (projPoints.length) {
    const projPts = [`${xAt(avgs.length - 1)},${yAt(avgs[avgs.length - 1])}`, ...projPoints.map((v, i) => `${xAt(avgs.length + i)},${yAt(v)}`)].join(" ");
    svg.appendChild(svgEl("polyline", { points: projPts, class: "chart-line-projected" }));
  }

  // Puntos reales
  avgs.forEach((v, i) => {
    const c = svgEl("circle", { cx: xAt(i), cy: yAt(v), r: 4, class: "chart-dot-real" });
    const title = svgEl("title", {});
    title.textContent = `${labels[i]}: ${v.toFixed(2)}`;
    c.appendChild(title);
    svg.appendChild(c);

    const t = svgEl("text", { x: xAt(i), y: H - 8, class: "chart-x-label", "text-anchor": "middle" });
    t.textContent = labels[i].slice(2);
    svg.appendChild(t);
  });

  // Puntos proyectados
  projPoints.forEach((v, i) => {
    const c = svgEl("circle", { cx: xAt(avgs.length + i), cy: yAt(v), r: 3.5, class: "chart-dot-projected" });
    const title = svgEl("title", {});
    title.textContent = `Proyectado: ${v.toFixed(2)}`;
    c.appendChild(title);
    svg.appendChild(c);
  });

  container.appendChild(svg);
}

// --- Fortalezas por área (barras horizontales) ---
function categoryForCode(code) {
  if (code.startsWith("ICB")) return "Matemáticas";
  if (code.startsWith("ALE")) return "Inglés";
  if (code.startsWith("ASH") || code.startsWith("AFI")) return "Humanidades";
  if (code.startsWith("IS") || code.startsWith("ATI")) return "Sistemas";
  return "Otras";
}

function renderStrengthsChart() {
  const container = document.getElementById("chart-strengths");
  if (!container) return;
  container.innerHTML = "";

  const completed = allCompletedCourses();
  if (completed.length === 0) {
    container.innerHTML = `<p class="empty-msg">Aún no hay notas para analizar.</p>`;
    return;
  }

  const groups = {};
  completed.forEach((c) => {
    const cat = categoryForCode(c.code);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(c.grade);
  });

  const entries = Object.entries(groups)
    .map(([cat, grades]) => ({ cat, avg: grades.reduce((a, b) => a + b, 0) / grades.length, count: grades.length }))
    .sort((a, b) => b.avg - a.avg);

  const W = 560, rowH = 34, PAD = 110;
  const H = entries.length * rowH + 20;
  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, class: "chart-svg", role: "img", "aria-label": "Fortalezas por área" });
  const maxBarW = W - PAD - 50;

  entries.forEach((e, i) => {
    const y = i * rowH + 12;
    const barW = (e.avg / 5) * maxBarW;

    const label = svgEl("text", { x: PAD - 10, y: y + 5, class: "chart-row-label", "text-anchor": "end" });
    label.textContent = e.cat;
    svg.appendChild(label);

    svg.appendChild(svgEl("rect", { x: PAD, y: y - 8, width: maxBarW, height: 16, rx: 8, class: "chart-bar-bg" }));
    svg.appendChild(svgEl("rect", { x: PAD, y: y - 8, width: Math.max(barW, 4), height: 16, rx: 8, class: `chart-bar-fg strength-${i % 5}` }));

    const val = svgEl("text", { x: PAD + maxBarW + 10, y: y + 5, class: "chart-row-value" });
    val.textContent = e.avg.toFixed(2);
    svg.appendChild(val);
  });

  container.appendChild(svg);
}

// --- Distribución de notas (histograma) ---
function renderDistributionChart() {
  const container = document.getElementById("chart-distribution");
  if (!container) return;
  container.innerHTML = "";

  const completed = allCompletedCourses();
  if (completed.length === 0) {
    container.innerHTML = `<p class="empty-msg">Aún no hay notas para analizar.</p>`;
    return;
  }

  const buckets = [
    { label: "3.0–3.4", min: 3.0, max: 3.5, count: 0 },
    { label: "3.5–3.9", min: 3.5, max: 4.0, count: 0 },
    { label: "4.0–4.4", min: 4.0, max: 4.5, count: 0 },
    { label: "4.5–5.0", min: 4.5, max: 5.01, count: 0 },
  ];
  completed.forEach((c) => {
    const b = buckets.find((b) => c.grade >= b.min && c.grade < b.max);
    if (b) b.count++;
  });

  const W = 560, H = 200, PAD = 34;
  const maxCount = Math.max(...buckets.map((b) => b.count), 1);
  const barW = (W - PAD * 2) / buckets.length - 16;

  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, class: "chart-svg", role: "img", "aria-label": "Distribución de notas" });

  buckets.forEach((b, i) => {
    const x = PAD + i * ((W - PAD * 2) / buckets.length) + 8;
    const barH = (b.count / maxCount) * (H - PAD * 2);
    const y = H - PAD - barH;

    svg.appendChild(svgEl("rect", { x, y, width: barW, height: barH, rx: 6, class: `chart-hist-bar bucket-${i}` }));

    const countLabel = svgEl("text", { x: x + barW / 2, y: y - 6, class: "chart-row-value", "text-anchor": "middle" });
    countLabel.textContent = b.count;
    svg.appendChild(countLabel);

    const xLabel = svgEl("text", { x: x + barW / 2, y: H - 10, class: "chart-x-label", "text-anchor": "middle" });
    xLabel.textContent = b.label;
    svg.appendChild(xLabel);
  });

  container.appendChild(svg);
}

// --- Proyección de graduación ---
function getScenarioValue() {
  const avgs = DATA.completedTerms.map((t) => t.avg);
  if (avgs.length === 0) return 4.0;
  const mean = avgs.reduce((a, b) => a + b, 0) / avgs.length;
  const min = Math.min(...avgs);
  if (projectionScenario === "conservador") return min;
  if (projectionScenario === "optimista") return Math.min(5, mean + 0.2);
  return mean;
}

function renderProjection() {
  const el = document.getElementById("projection-value");
  if (!el) return;
  const avgs = DATA.completedTerms.map((t) => t.avg);
  const stats = computeStats();

  if (avgs.length === 0) {
    el.textContent = "—";
    document.getElementById("projection-caption").textContent = "Cierra al menos un periodo para proyectar.";
    return;
  }

  const scenarioValue = getScenarioValue();
  const remaining = stats.estSemesters;
  const futureAvgs = Array.from({ length: remaining }, () => scenarioValue);
  const finalAvg = [...avgs, ...futureAvgs].reduce((a, b) => a + b, 0) / (avgs.length + futureAvgs.length);
  const gradLabel = projectGraduationLabel(stats);

  el.textContent = finalAvg.toFixed(2);
  document.getElementById("projection-caption").textContent =
    `Estimado si mantienes un promedio de ${scenarioValue.toFixed(2)} en los ${remaining} periodos que faltan.`;
  const gradEl = document.getElementById("projection-grad");
  if (gradEl) gradEl.textContent = gradLabel ? ` Periodo estimado de grado: ${gradLabel}` : "";
}

function setScenario(scenario) {
  projectionScenario = scenario;
  document.querySelectorAll(".scenario-btn").forEach((b) => b.classList.toggle("active", b.dataset.scenario === scenario));
  renderTrendChart();
  renderProjection();
}



function renderSimulator() {
  const container = document.getElementById("simulator-inputs");
  const emptyMsg = document.getElementById("simulator-empty");
  if (!container) return;
  const inProgress = DATA.pendingCourses.filter((c) => c.status === "in-progress");

  if (inProgress.length === 0) {
    container.innerHTML = "";
    if (emptyMsg) emptyMsg.hidden = false;
    document.getElementById("simulator-results")?.setAttribute("hidden", "");
    document.getElementById("simulator-target")?.setAttribute("hidden", "");
    return;
  }
  if (emptyMsg) emptyMsg.hidden = true;
  document.getElementById("simulator-results")?.removeAttribute("hidden");
  document.getElementById("simulator-target")?.removeAttribute("hidden");

  container.innerHTML = inProgress.map((c) => `
    <div class="sim-row">
      <div class="sim-row-label">
        <span class="mono">${c.code}</span>
        <span>${c.name}</span>
      </div>
      <div class="sim-row-control">
        <input type="range" min="0" max="5" step="0.1" value="4.0" class="sim-slider" data-code="${c.code}" />
        <span class="sim-value mono" id="sim-value-${c.code}">4.0</span>
      </div>
    </div>`).join("");

  container.querySelectorAll(".sim-slider").forEach((slider) => {
    slider.addEventListener("input", () => {
      document.getElementById(`sim-value-${slider.dataset.code}`).textContent = parseFloat(slider.value).toFixed(1);
      updateSimulatorResults();
    });
  });

  updateSimulatorResults();
  const targetInput = document.getElementById("sim-target-input");
  targetInput.addEventListener("input", updateSimulatorResults);
}

function updateSimulatorResults() {
  const sliders = document.querySelectorAll(".sim-slider");
  if (sliders.length === 0) return;
  const grades = Array.from(sliders).map((s) => parseFloat(s.value));
  const prevAvgs = DATA.completedTerms.map((t) => t.avg);

  const projectedPeriodAvg = grades.reduce((a, b) => a + b, 0) / grades.length;
  const projectedAccAvg = [...prevAvgs, projectedPeriodAvg].reduce((a, b) => a + b, 0) / (prevAvgs.length + 1);

  document.getElementById("sim-period-avg").textContent = projectedPeriodAvg.toFixed(2);
  document.getElementById("sim-acc-avg").textContent = projectedAccAvg.toFixed(2);

  const lastAcc = prevAvgs.length ? DATA.completedTerms[DATA.completedTerms.length - 1].accAvg : 0;
  const diff = projectedAccAvg - lastAcc;
  const diffEl = document.getElementById("sim-diff");
  diffEl.textContent = `${diff >= 0 ? "+" : ""}${diff.toFixed(2)}`;
  diffEl.className = diff >= 0 ? "sim-diff positive" : "sim-diff negative";

  const targetInput = document.getElementById("sim-target-input");
  const targetResult = document.getElementById("sim-target-result");
  const target = parseFloat(targetInput.value);
  if (!isNaN(target) && target > 0) {
    const sumPrev = prevAvgs.reduce((a, b) => a + b, 0);
    const needed = target * (prevAvgs.length + 1) - sumPrev;
    if (needed > 5) {
      targetResult.textContent = `Imposible este periodo (necesitarías ${needed.toFixed(2)}, el máximo es 5.0).`;
      targetResult.className = "sim-target-result negative";
    } else if (needed < 0) {
      targetResult.textContent = `Ya lo tienes asegurado incluso con 0.0 de promedio este periodo.`;
      targetResult.className = "sim-target-result positive";
    } else {
      targetResult.textContent = `Necesitas un promedio de periodo de ${needed.toFixed(2)} este semestre.`;
      targetResult.className = "sim-target-result";
    }
  } else {
    targetResult.textContent = "";
  }
}



function renderHero(stats) {
  document.getElementById("stat-approved").textContent = stats.approvedCredits;
  document.getElementById("stat-total").textContent = stats.total;
  document.getElementById("stat-pct").textContent = `${stats.pct.toFixed(1)}%`;
  document.getElementById("stat-avg").textContent = stats.lastAcc.toFixed(2);
  document.getElementById("stat-semesters").textContent = stats.estSemesters;
  document.getElementById("stat-inprogress-count").textContent = stats.inProgressCount;
  document.getElementById("stat-pending-count").textContent = stats.pendingCount;
  document.getElementById("hero-approved").textContent = stats.approvedCredits;
  document.getElementById("hero-remaining").textContent = stats.total - stats.approvedCredits;

  const ring = document.getElementById("progress-ring-fg");
  const circumference = 2 * Math.PI * 84;
  ring.style.strokeDasharray = `${circumference}`;
  requestAnimationFrame(() => {
    const offset = circumference - (stats.pct / 100) * circumference;
    ring.style.strokeDashoffset = `${offset}`;
  });
}

function renderCircuit() {
  const rail = document.getElementById("circuit-rail");
  rail.innerHTML = "";

  DATA.completedTerms.forEach((t) => {
    const node = document.createElement("button");
    node.className = "circuit-node approved";
    node.innerHTML = `<span class="node-dot"></span><span class="node-label">${escapeHtml(t.term)}</span><span class="node-sub">Niv. ${t.level}</span>`;
    node.addEventListener("click", () => {
      document.getElementById(`term-${t.term}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      flashCard(`term-${t.term}`);
    });
    rail.appendChild(node);
  });

  const hasCurrent = DATA.pendingCourses.some((c) => c.status === "in-progress");
  if (hasCurrent) {
    const currentNode = document.createElement("button");
    currentNode.className = "circuit-node current";
    currentNode.innerHTML = `<span class="node-dot"></span><span class="node-label">Actual</span><span class="node-sub">En curso</span>`;
    currentNode.addEventListener("click", () => {
      document.getElementById("section-inprogress")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    rail.appendChild(currentNode);
  }

  const remainingLevels = [...new Set(DATA.pendingCourses.filter((c) => c.status === "pending").map((c) => c.level))].sort((a, b) => a - b);
  remainingLevels.forEach((lvl) => {
    const node = document.createElement("button");
    node.className = "circuit-node future";
    node.innerHTML = `<span class="node-dot"></span><span class="node-label">Niv. ${lvl}</span><span class="node-sub">Pendiente</span>`;
    node.addEventListener("click", () => {
      document.getElementById(`level-${lvl}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      flashCard(`level-${lvl}`);
    });
    rail.appendChild(node);
  });
}

function flashCard(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 900);
}

function renderCompletedTerms(filter = "") {
  const container = document.getElementById("completed-terms");
  container.innerHTML = "";
  const q = filter.trim().toLowerCase();

  if (DATA.completedTerms.length === 0) {
    container.innerHTML = `<p class="empty-msg">Todavía no has cerrado ningún periodo. Cuando lo hagas desde el panel de edición, aparecerá aquí.</p>`;
    return;
  }

  DATA.completedTerms.forEach((t) => {
    const visibleCourses = t.courses.filter((c) => !q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q));
    if (q && visibleCourses.length === 0) return;

    const details = document.createElement("details");
    details.className = "term-card";
    details.id = `term-${t.term}`;
    details.open = q.length > 0;

    details.innerHTML = `
      <summary>
        <div class="term-summary-left">
          <span class="term-name">Periodo ${escapeHtml(t.term)}</span>
          <span class="term-level">Nivel ${t.level}</span>
        </div>
        <div class="term-summary-right">
          <span class="pill pill-avg">Prom. ${t.avg.toFixed(2)}</span>
          <span class="pill pill-credits">${t.credits} créd.</span>
        </div>
      </summary>
      <div class="term-body">
        <table class="course-table">
          <thead><tr><th>Código</th><th>Curso</th><th>Créd.</th><th>Nota</th></tr></thead>
          <tbody>
            ${visibleCourses.map((c) => `
              <tr class="${c.passed === false ? "row-failed" : ""}">
                <td class="mono">${escapeHtml(c.code)}</td>
                <td>${escapeHtml(c.name)} ${c.passed === false ? '<span class="fail-tag">Reprobada</span>' : ""}</td>
                <td class="mono center">${c.credits}</td>
                <td class="mono center">
                  <input type="number" class="grade-input ${gradeClass(c.grade)}" data-term="${escapeHtml(t.term)}" data-code="${escapeHtml(c.code)}" value="${c.grade.toFixed(1)}" min="0" max="5" step="0.1" />
                </td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
    container.appendChild(details);
  });

  container.querySelectorAll(".grade-input").forEach((input) => {
    input.addEventListener("change", onGradeEdited);
  });
}

function onGradeEdited(e) {
  const input = e.target;
  const termId = input.dataset.term;
  const code = input.dataset.code;
  let val = parseFloat(input.value);
  if (isNaN(val)) val = 0;
  val = Math.max(0, Math.min(5, val));
  input.value = val.toFixed(1);

  const term = DATA.completedTerms.find((t) => t.term === termId);
  const course = term?.courses.find((c) => c.code === code);
  if (!course) return;
  course.grade = val;
  course.passed = val >= 3.0;

  recomputeChain();
  saveData();
  showToast(
    val >= 3.0
      ? ` Nota de ${code} actualizada a ${val.toFixed(1)}`
      : ` Nota de ${code} actualizada a ${val.toFixed(1)} — queda marcada como reprobada`
  );
  fullRerender();
}

function renderInProgress(filter = "") {
  const container = document.getElementById("inprogress-grid");
  container.innerHTML = "";
  const q = filter.trim().toLowerCase();
  const notes = loadNotes();

  const courses = DATA.pendingCourses.filter((c) => c.status === "in-progress").filter(
    (c) => !q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
  );

  if (courses.length === 0) {
    container.innerHTML = `<p class="empty-msg">${q ? "Ninguna materia en curso coincide con tu búsqueda." : "No tienes materias activas. Ábrelas desde el panel de edición 🛠️."}</p>`;
    return;
  }

  courses.forEach((c) => {
    const card = document.createElement("div");
    card.className = "course-card in-progress";
    card.innerHTML = `
      <div class="course-card-top">
        <span class="mono code-tag">${escapeHtml(c.code)}</span>
        <span class="status-dot pulsing" title="En curso"></span>
      </div>
      <h4>${escapeHtml(c.name)}</h4>
      <div class="course-card-meta"><span>${c.credits} créditos</span><span>Nivel ${c.level}</span></div>
      ${resourceLinkHtml(c.code)}
      <textarea class="note-input" placeholder="Nota rápida (ej. próximo parcial, avance...)"></textarea>
    `;
    const textarea = card.querySelector(".note-input");
    textarea.value = notes[c.code] || "";
    textarea.addEventListener("input", () => saveNote(c.code, textarea.value));
    container.appendChild(card);
  });
}

function renderPendingRoadmap(filter = "") {
  const container = document.getElementById("pending-roadmap");
  container.innerHTML = "";
  const q = filter.trim().toLowerCase();

  const levels = [...new Set(
    DATA.pendingCourses.filter((c) => c.status === "pending" && c.credits > 0.001).map((c) => c.level)
  )].sort((a, b) => a - b);

  if (levels.length === 0) {
    container.innerHTML = `<p class="empty-msg"> ¡No te queda ninguna materia pendiente por iniciar!</p>`;
    return;
  }

  levels.forEach((lvl) => {
    const courses = DATA.pendingCourses.filter((c) => c.level === lvl && c.status === "pending" && c.credits > 0.001).filter(
      (c) => !q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
    if (q && courses.length === 0) return;

    const levelCredits = courses.reduce((s, c) => s + c.credits, 0);
    const block = document.createElement("div");
    block.className = "level-block";
    block.id = `level-${lvl}`;
    block.innerHTML = `
      <div class="level-header">
        <h3>Nivel ${lvl}</h3>
        <span class="pill pill-credits">${levelCredits} créd. pendientes</span>
      </div>
      <div class="level-courses">
        ${courses.length ? courses.map((c) => {
          const unlocked = isCourseUnlocked(c.code);
          const isRetake = (c.attempts || 0) > 0;
          const isPool = isElectivePool(c.code);
          return `
          <div class="course-card pending ${unlocked ? "" : "locked-course"} ${isPool ? "pool-card" : ""}">
            <div class="course-card-top">
              <span class="mono code-tag">${escapeHtml(c.code)}</span>
              <span class="status-dot" title="${unlocked ? "Pendiente" : "Bloqueada"}">${unlocked ? "" : ""}</span>
            </div>
            <h4>${escapeHtml(c.name)}</h4>
            <div class="course-card-meta"><span>${c.credits} créditos</span><span>${escapeHtml(c.type)}</span></div>
            ${!unlocked ? `<p class="lock-note"> Requiere: ${PREREQS[c.code].map(escapeHtml).join(", ")}</p>` : ""}
            ${isRetake ? `<p class="retake-note"> Repite — última nota: ${(c.lastGrade ?? 0).toFixed(1)}</p>` : ""}
            ${isPool ? `<p class="pool-hint"> Personalízala desde el panel  → Materias actuales</p>` : ""}
            ${resourceLinkHtml(c.code)}
          </div>`;
        }).join("") : `<p class="empty-msg">Ya viste todas las materias de este nivel.</p>`}
      </div>
    `;
    container.appendChild(block);
  });
}

function renderResources() {
  const grid = document.getElementById("resources-grid");
  if (!grid) return;
  const activeCourses = DATA.pendingCourses;
  const usedCategories = new Set(activeCourses.map((c) => COURSE_RESOURCE_MAP[c.code]).filter(Boolean));

  grid.innerHTML = Array.from(usedCategories).map((key) => {
    const cat = RESOURCE_CATEGORIES[key];
    if (!cat) return "";
    const relatedCourses = activeCourses.filter((c) => COURSE_RESOURCE_MAP[c.code] === key);
    return `
      <div class="resource-card">
        <div class="resource-card-head"><span class="resource-icon">${cat.icon}</span><h4>${escapeHtml(cat.label)}</h4></div>
        <p class="resource-related">Para: ${relatedCourses.map((c) => escapeHtml(c.name)).join(", ")}</p>
        <ul class="resource-links">${cat.links.map((l) => `<li><a href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.title)} ↗</a></li>`).join("")}</ul>
      </div>`;
  }).join("");
}

function renderAll(filter = "") {
  renderCompletedTerms(filter);
  renderInProgress(filter);
  renderPendingRoadmap(filter);
  document.getElementById("no-results").hidden = !isEverythingEmpty(filter);
}

function isEverythingEmpty(filter) {
  const q = filter.trim().toLowerCase();
  if (!q) return false;
  const inCompleted = DATA.completedTerms.some((t) => t.courses.some((c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)));
  const inPending = DATA.pendingCourses.some((c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q));
  return !inCompleted && !inPending;
}

function fullRerender() {
  const stats = computeStats();
  renderHero(stats);
  renderCircuit();
  renderAll(document.getElementById("search-input")?.value || "");
  renderAchievements(stats);
  renderSimulator();
  renderResources();
  renderAnalytics();
  renderLandscape();
  renderCareerRadar();
}



const PIN_KEY = "fox-pin-hash";
const PIN_SESSION_KEY = "fox-pin-unlocked";

async function hashPin(pin) {
  const enc = new TextEncoder().encode(pin);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function hasPinSet() {
  return !!localStorage.getItem(PIN_KEY);
}

function isPinUnlocked() {
  return !hasPinSet() || sessionStorage.getItem(PIN_SESSION_KEY) === "1";
}

async function requestPinUnlock() {
  if (isPinUnlocked()) return true;
  const entered = prompt(" Ingresa tu PIN para editar tus datos:");
  if (entered === null) return false;
  const hash = await hashPin(entered);
  if (hash === localStorage.getItem(PIN_KEY)) {
    sessionStorage.setItem(PIN_SESSION_KEY, "1");
    return true;
  }
  showToast(" PIN incorrecto.");
  return false;
}

async function setupPin() {
  const p1 = prompt("Crea un PIN (4 o más caracteres):");
  if (!p1 || p1.length < 4) {
    if (p1 !== null) showToast(" El PIN debe tener al menos 4 caracteres.");
    return;
  }
  const p2 = prompt("Confírmalo de nuevo:");
  if (p1 !== p2) {
    showToast(" No coinciden. Intenta de nuevo.");
    return;
  }
  localStorage.setItem(PIN_KEY, await hashPin(p1));
  sessionStorage.setItem(PIN_SESSION_KEY, "1");
  showToast(" PIN configurado. Se te pedirá cada vez que abras el panel en una sesión nueva.");
  renderPinSection();
}

async function changePin() {
  const ok = await requestPinUnlock();
  if (!ok) return;
  await setupPin();
}

async function removePin() {
  const ok = await requestPinUnlock();
  if (!ok) return;
  localStorage.removeItem(PIN_KEY);
  sessionStorage.removeItem(PIN_SESSION_KEY);
  showToast(" PIN eliminado. El panel queda libre.");
  renderPinSection();
}

function renderPinSection() {
  const container = document.getElementById("pin-section");
  if (!container) return;
  container.innerHTML = hasPinSet()
    ? `
      <p class="editor-tab-desc"> Tienes un PIN activo — protege que alguien con el link edite tus datos por error. No es seguridad fuerte, es solo una traba de privacidad.</p>
      <button class="secondary-btn" id="change-pin-btn"> Cambiar PIN</button>
      <button class="danger-btn" id="remove-pin-btn"> Quitar PIN</button>
    `
    : `
      <p class="editor-tab-desc">Sin PIN, cualquiera con tu link puede abrir este panel y editar tus datos. Si vas a compartir el link, te recomiendo poner uno.</p>
      <button class="secondary-btn" id="setup-pin-btn"> Configurar PIN de acceso</button>
    `;

  document.getElementById("setup-pin-btn")?.addEventListener("click", setupPin);
  document.getElementById("change-pin-btn")?.addEventListener("click", changePin);
  document.getElementById("remove-pin-btn")?.addEventListener("click", removePin);
}

async function openDrawer() {
  const unlocked = await requestPinUnlock();
  if (!unlocked) return;
  document.getElementById("editor-overlay").classList.add("open");
  document.getElementById("editor-drawer").classList.add("open");
  renderEditorTabCourses();
  renderEditorTabClose();
  renderPinSection();
  activateFocusTrap(document.getElementById("editor-drawer"), document.getElementById("open-editor-btn"));
}

function closeDrawer() {
  document.getElementById("editor-overlay").classList.remove("open");
  document.getElementById("editor-drawer").classList.remove("open");
  deactivateFocusTrap();
}

function switchEditorTab(tabId) {
  document.querySelectorAll(".editor-tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tabId));
  document.querySelectorAll(".editor-tab-panel").forEach((p) => p.classList.toggle("active", p.id === `tab-${tabId}`));
}

// --- Tab: elegir materias actuales ---
function renderEditorTabCourses() {
  const container = document.getElementById("editor-course-list");
  const poolsContainer = document.getElementById("editor-elective-pools");
  const available = DATA.pendingCourses.filter(
    (c) => (c.status === "pending" || c.status === "in-progress") && !isElectivePool(c.code)
  );

  if (available.length === 0) {
    container.innerHTML = `<p class="empty-msg"> No te quedan materias por cursar.</p>`;
  } else {
    container.innerHTML = available.map((c) => {
      const unlocked = isCourseUnlocked(c.code);
      const retakeTag = (c.attempts || 0) > 0 ? ` <span class="retake-inline"> repite</span>` : "";
      const removeBtn = c.fromPool && c.status === "pending"
        ? `<button type="button" class="elective-remove-btn" data-code="${escapeHtml(c.code)}" title="Quitar esta electiva"></button>`
        : "";
      return `
      <label class="editor-checkbox-row ${unlocked ? "" : "disabled-row"}">
        <input type="checkbox" value="${escapeHtml(c.code)}" ${c.status === "in-progress" ? "checked" : ""} ${unlocked ? "" : "disabled"} />
        <span class="mono">${escapeHtml(c.code.split("-")[0])}</span>
        <span>${escapeHtml(c.name)}${retakeTag}</span>
        <span class="editor-row-credits">${c.credits} créd.</span>
        ${removeBtn}
      </label>`;
    }).join("");

    container.querySelectorAll(".elective-remove-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        removeCustomElective(btn.dataset.code);
        showToast(" Electiva quitada, créditos devueltos al banco.");
        renderEditorTabCourses();
      });
    });
  }

  // Bancos de electivas con créditos por asignar todavía
  const pools = DATA.pendingCourses.filter((c) => isElectivePool(c.code) && c.credits > 0.001);
  if (!poolsContainer) return;
  if (pools.length === 0) {
    poolsContainer.innerHTML = "";
    return;
  }
  poolsContainer.innerHTML = pools.map((pool) => `
    <div class="elective-pool-card">
      <p class="elective-pool-title"> ${escapeHtml(pool.name)} — quedan <strong>${pool.credits} créd.</strong> por asignar</p>
      <p class="elective-pool-desc">Escribe el nombre real de la electiva que estás viendo (o vas a ver) y sus créditos.</p>
      <div class="elective-pool-form">
        <input type="text" class="editor-text-input elective-name-input" data-pool="${escapeHtml(pool.code)}" placeholder="ej. Desarrollo de Videojuegos" />
        <input type="number" class="editor-text-input elective-credits-input" data-pool="${escapeHtml(pool.code)}" placeholder="créd." min="0.5" max="${pool.credits}" step="0.5" />
        <button type="button" class="secondary-btn elective-add-btn" data-pool="${escapeHtml(pool.code)}">+ Agregar</button>
      </div>
    </div>
  `).join("");

  poolsContainer.querySelectorAll(".elective-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const poolCode = btn.dataset.pool;
      const nameInput = poolsContainer.querySelector(`.elective-name-input[data-pool="${poolCode}"]`);
      const creditsInput = poolsContainer.querySelector(`.elective-credits-input[data-pool="${poolCode}"]`);
      const result = addElectiveFromPool(poolCode, nameInput.value, parseFloat(creditsInput.value));
      if (!result.ok) {
        showToast(` ${result.message}`);
        return;
      }
      showToast(` "${nameInput.value.trim()}" agregada. Ya puedes marcarla como materia actual.`);
      renderEditorTabCourses();
    });
  });
}

function saveCurrentCourses() {
  const checked = new Set(Array.from(document.querySelectorAll("#editor-course-list input:checked")).map((i) => i.value));
  DATA.pendingCourses.forEach((c) => {
    if ((c.status === "pending" || c.status === "in-progress") && !isElectivePool(c.code)) {
      c.status = checked.has(c.code) ? "in-progress" : "pending";
    }
  });
  saveData();
  showToast(` Guardado — ${checked.size} materia(s) activa(s) este periodo.`);
  fullRerender();
  renderEditorTabClose();
}

// --- Tab: cerrar periodo ---
function suggestNextTermLabel() {
  if (DATA.completedTerms.length === 0) return "";
  const last = DATA.completedTerms[DATA.completedTerms.length - 1].term;
  const [year, half] = last.split("-");
  if (half === "01") return `${year}-02`;
  return `${parseInt(year, 10) + 1}-01`;
}

function renderEditorTabClose() {
  const container = document.getElementById("editor-close-list");
  const inProgress = DATA.pendingCourses.filter((c) => c.status === "in-progress");
  const labelInput = document.getElementById("close-term-label");
  const reviewBtn = document.getElementById("close-term-btn");

  document.getElementById("close-preview").hidden = true;
  container.hidden = false;
  labelInput.hidden = false;
  document.querySelector('label[for="close-term-label"]').hidden = false;
  reviewBtn.hidden = false;

  if (inProgress.length === 0) {
    container.innerHTML = `<p class="empty-msg">Primero elige tus materias activas en la pestaña anterior.</p>`;
    labelInput.disabled = true;
    reviewBtn.disabled = true;
    return;
  }

  labelInput.disabled = false;
  reviewBtn.disabled = false;
  if (!labelInput.value) labelInput.value = suggestNextTermLabel();

  container.innerHTML = inProgress.map((c) => `
    <div class="sim-row">
      <div class="sim-row-label"><span class="mono">${escapeHtml(c.code)}</span><span>${escapeHtml(c.name)}</span></div>
      <div class="sim-row-control-col">
        <input type="number" class="close-grade-input" id="close-grade-${escapeHtml(c.code)}" data-code="${escapeHtml(c.code)}" min="0" max="5" step="0.1" value="4.0" />
        <span class="close-grade-hint" id="close-hint-${escapeHtml(c.code)}"></span>
      </div>
    </div>`).join("");

  container.querySelectorAll(".close-grade-input").forEach((input) => {
    input.addEventListener("input", () => {
      const hint = document.getElementById(`close-hint-${input.dataset.code}`);
      const val = parseFloat(input.value);
      hint.textContent = !isNaN(val) && val < 3.0 ? " Reprobaría" : "";
    });
  });
}

// Fase 1: valida y arma un resumen; no toca DATA todavía
function reviewClosePeriod() {
  const inProgress = DATA.pendingCourses.filter((c) => c.status === "in-progress");
  if (inProgress.length === 0) return;

  const label = document.getElementById("close-term-label").value.trim();
  if (!label) {
    showToast(" Ponle un nombre al periodo, ej. 2026-02");
    return;
  }
  if (DATA.completedTerms.some((t) => t.term === label)) {
    showToast(" Ya existe un periodo con ese nombre.");
    return;
  }

  const results = [];
  for (const c of inProgress) {
    const input = document.getElementById(`close-grade-${c.code}`);
    let g = parseFloat(input.value);
    if (isNaN(g) || g < 0 || g > 5) {
      showToast(` Revisa la nota de ${c.code} (debe estar entre 0.0 y 5.0)`);
      return;
    }
    results.push({ code: c.code, name: c.name, credits: c.credits, grade: g, passed: g >= 3.0, level: c.level, type: c.type });
  }

  const avg = results.reduce((s, r) => s + r.grade, 0) / results.length;
  const passedList = results.filter((r) => r.passed);
  const failedList = results.filter((r) => !r.passed);
  const recuperableList = failedList.filter((r) => r.grade >= 2.5 && isEligibleForRecuperacion(r.code));
  const directFailList = failedList.filter((r) => !(r.grade >= 2.5 && isEligibleForRecuperacion(r.code)));

  pendingClose = { label, results };

  const summaryEl = document.getElementById("close-preview-summary");
  summaryEl.innerHTML = `
    <p><strong>Periodo ${escapeHtml(label)}</strong> — promedio de periodo: <strong>${avg.toFixed(2)}</strong></p>
    <p class="preview-line"> Aprobarías ${passedList.length} materia(s) (${passedList.reduce((s, r) => s + r.credits, 0)} créd.)</p>
    ${recuperableList.length ? `<p class="preview-line preview-recup"> Podrías pedir <strong>Recuperación Final</strong> en ${recuperableList.length} materia(s): ${recuperableList.map((r) => `${escapeHtml(r.name)} (${r.grade.toFixed(1)})`).join(", ")} — si asististe al 80% de clases y la solicitas dentro de los 3 días hábiles, la nota quedaría en 3.0 (Art. 97 del reglamento). Aquí se registra como pendiente; ajusta la nota a mano si la apruebas.</p>` : ""}
    ${directFailList.length ? `<p class="preview-line preview-warn"> Reprobarías directo ${directFailList.length} materia(s): ${directFailList.map((r) => escapeHtml(r.name)).join(", ")} — quedarán pendientes para repetir${directFailList.some((r) => !isEligibleForRecuperacion(r.code)) ? " (sin opción de recuperación por su tipo de curso)" : ""}.</p>` : ""}
    <p class="preview-line">Esto es definitivo salvo que lo deshagas justo después, o restaures el certificado original.</p>
  `;

  document.getElementById("editor-close-list").hidden = true;
  document.getElementById("close-term-label").hidden = true;
  document.querySelector('label[for="close-term-label"]').hidden = true;
  document.getElementById("close-term-btn").hidden = true;
  document.getElementById("close-preview").hidden = false;
}

function cancelClosePeriod() {
  pendingClose = null;
  renderEditorTabClose();
}

// Fase 2: aplica el cambio de verdad, con snapshot para poder deshacer
let pendingClose = null;
let lastSnapshot = null;

function confirmClosePeriod() {
  if (!pendingClose) return;
  const { label, results } = pendingClose;

  lastSnapshot = JSON.parse(JSON.stringify(DATA));

  DATA.completedTerms.push({ term: label, level: 0, avg: 0, accAvg: 0, credits: 0, accCredits: 0, courses: results });

  const closedCodes = new Set(results.map((r) => r.code));
  const failedResults = results.filter((r) => !r.passed);
  DATA.pendingCourses = DATA.pendingCourses.filter((c) => !closedCodes.has(c.code));
  failedResults.forEach((r) => {
    const original = pendingClose.results.find((x) => x.code === r.code);
    DATA.pendingCourses.push({
      code: r.code, name: r.name, credits: r.credits, level: original.level, type: original.type,
      status: "pending", attempts: 1, lastGrade: r.grade,
    });
  });

  recomputeChain();
  saveData();

  const newTerm = DATA.completedTerms[DATA.completedTerms.length - 1];
  const failMsg = failedResults.length ? ` (${failedResults.length} para repetir)` : "";
  showToast(` ¡Periodo ${label} cerrado! Promedio: ${newTerm.avg.toFixed(2)}${failMsg}`, "Deshacer", undoLastClose);

  pendingClose = null;
  fullRerender();
  renderEditorTabCourses();
  renderEditorTabClose();
  celebrateIfMilestone();
}

function undoLastClose() {
  if (!lastSnapshot) return;
  DATA = lastSnapshot;
  lastSnapshot = null;
  saveData();
  fullRerender();
  renderEditorTabCourses();
  renderEditorTabClose();
  showToast(" Cierre de periodo deshecho.");
}

function celebrateIfMilestone() {
  const stats = computeStats();
  if (stats.pct >= 100) showToast(" ¡100%! Ya completaste todos los créditos. ¡Felicidades!");
  else if (stats.pct >= 90) showToast(" ¡90%! La recta final está aquí.");
  else if (stats.pct >= 75) showToast(" ¡75% del camino recorrido!");
}

// --- Tab: copia de seguridad ---
function exportBackup() {
  const backup = { data: DATA, notes: loadNotes(), exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `fox-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast(" Copia de seguridad descargada.");
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = parsed.data || parsed;
      if (!Array.isArray(incoming.completedTerms) || !Array.isArray(incoming.pendingCourses)) {
        throw new Error("Formato inválido");
      }
      DATA = incoming;
      recomputeChain();
      saveData();
      if (parsed.notes) localStorage.setItem(NOTES_KEY, JSON.stringify(parsed.notes));
      showToast(" Copia de seguridad restaurada.");
      fullRerender();
      renderEditorTabCourses();
      renderEditorTabClose();
    } catch {
      showToast(" Ese archivo no parece una copia válida de FOX.");
    }
  };
  reader.readAsText(file);
}

function confirmResetData() {
  if (!confirm("¿Seguro que quieres restaurar los datos originales del certificado? Esto borra tus ediciones y periodos cerrados manualmente.")) return;
  resetToDefaults();
  showToast(" Datos restaurados al certificado original.");
  fullRerender();
  renderEditorTabCourses();
  renderEditorTabClose();
}

// ============================================================
// TARJETA DE PERFIL (pasaporte de habilidades + impresión)
// ============================================================

const SKILL_MAP = {
  IS040: "Lógica de programación", IS043: "Lenguajes de programación", IS008: "Estructuras de datos",
  IS042: "Matemáticas discretas", IS044: "Arquitectura de hardware", IS046: "Redes y telecomunicaciones",
  IS015: "SQL / Bases de datos", IS014: "Sistemas operativos", ISSAE04: "Linux / Shell",
  IS051: "Informática jurídica", ICB04: "Estadística", ATI01: "Ofimática / TIC",
  IS045: "Ingeniería de software", IS024: "Arquitectura de sistemas", IS019: "Testing / QA",
  IS032: "Gerencia de sistemas", IS049: "Gestión de proyectos",
};

function buildSkillsPassport() {
  const completed = allCompletedCourses();
  const skills = new Set();
  completed.forEach((c) => { if (SKILL_MAP[c.code]) skills.add(SKILL_MAP[c.code]); });
  const highestEnglish = completed.filter((c) => c.name.toLowerCase().startsWith("inglés")).length;
  if (highestEnglish > 0) skills.add(`Inglés — nivel ${Math.min(highestEnglish, 5)}/5`);
  return Array.from(skills);
}

function renderProfileCard() {
  const stats = computeStats();
  document.getElementById("profile-pct").textContent = `${stats.pct.toFixed(1)}%`;
  document.getElementById("profile-gpa").textContent = stats.lastAcc.toFixed(2);
  document.getElementById("profile-credits").textContent = `${stats.approvedCredits}/${stats.total}`;
  const gradLabel = projectGraduationLabel(stats);
  document.getElementById("profile-grad").textContent = gradLabel || "—";

  const skills = buildSkillsPassport();
  const chipsEl = document.getElementById("profile-skills");
  chipsEl.innerHTML = skills.length
    ? skills.map((s) => `<span class="skill-chip">${escapeHtml(s)}</span>`).join("")
    : `<p class="empty-msg">Todavía no hay materias aprobadas para mostrar aquí.</p>`;
}

// ============================================================
// RADAR DE CARRERA — basado en el Reglamento Estudiantil FUNLAM
// ============================================================

const ROLE_DEFINITIONS = [
  { role: "Desarrollador Backend Junior", needs: ["Lenguajes de programación", "Estructuras de datos", "SQL / Bases de datos"] },
  { role: "Analista de Datos Junior", needs: ["Estadística", "SQL / Bases de datos", "Lógica de programación"] },
  { role: "Soporte / Administrador de Sistemas Jr.", needs: ["Sistemas operativos", "Linux / Shell", "Redes y telecomunicaciones"] },
  { role: "QA / Tester de Software Junior", needs: ["Testing / QA", "Lógica de programación"] },
  { role: "Asistente de Arquitectura de Software", needs: ["Arquitectura de sistemas", "Ingeniería de software"] },
  { role: "Practicante en Gestión de Proyectos TI", needs: ["Gestión de proyectos", "Gerencia de sistemas"] },
];

const JOB_BOARDS = [
  { name: "Computrabajo", desc: "El más grande de Colombia, filtra por 'practicante sistemas'", url: "https://www.computrabajo.com.co/" },
  { name: "ElEmpleo", desc: "Fuerte en vacantes corporativas y junior", url: "https://www.elempleo.com/co/" },
  { name: "Magneto365", desc: "Muchas vacantes de práctica y primer empleo", url: "https://www.magneto365.com/" },
  { name: "Get on Board", desc: "Enfocado 100% en tech, LATAM y remoto", url: "https://www.getonbrd.com/" },
  { name: "LinkedIn Jobs", desc: "Activa 'alertas de empleo' con tus palabras clave", url: "https://www.linkedin.com/jobs/" },
];

const READINESS_CHECKLIST = [
  { id: "eps", label: "Afiliación a EPS vigente (obligatoria para matricular Práctica)" },
  { id: "cv", label: "Hoja de vida / CV actualizado" },
  { id: "linkedin", label: "Perfil de LinkedIn activo y completo" },
  { id: "github", label: "Portafolio de proyectos en GitHub" },
  { id: "saberpro-prep", label: "Repasé el módulo de competencias genéricas del Saber Pro" },
];

const CHECKLIST_KEY = "fox-readiness-checklist";

function loadChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(CHECKLIST_KEY)) || {};
  } catch {
    return {};
  }
}

function estimatePeriodsUntilLevel(targetLevel) {
  const avgLoad = DATA.completedTerms.length
    ? DATA.completedTerms.reduce((s, t) => s + t.credits, 0) / DATA.completedTerms.length
    : 17;
  const creditsBefore = DATA.pendingCourses
    .filter((c) => c.status === "pending" && c.level < targetLevel)
    .reduce((s, c) => s + c.credits, 0);
  const hasCurrent = DATA.pendingCourses.some((c) => c.status === "in-progress");
  return Math.max(0, Math.ceil(creditsBefore / avgLoad)) + (hasCurrent ? 1 : 0);
}

function renderSaberPro(stats) {
  const desc = document.getElementById("saberpro-desc");
  const fill = document.getElementById("saberpro-fill");
  if (!desc || !fill) return;
  fill.style.width = `${Math.min(100, (stats.pct / 75) * 100).toFixed(1)}%`;

  if (stats.pct >= 75) {
    desc.innerHTML = ` Ya superaste el <strong>75% de créditos</strong> — cumples el requisito del ICFES para inscribirte. Es obligatorio para graduarte (Art. 104c del reglamento). Revisa el próximo cronograma.`;
  } else {
    const remaining = Math.ceil(((stats.total * 0.75) - stats.approvedCredits) * 10) / 10;
    desc.innerHTML = `Te faltan <strong>${remaining} créditos</strong> para llegar al 75% que exige el ICFES para poder inscribirte. Es un requisito de grado obligatorio (Art. 104c).`;
  }
}

function renderPractica() {
  const desc = document.getElementById("practica-desc");
  if (!desc) return;
  const practica = DATA.pendingCourses.find((c) => c.code === "ISPP01");
  if (!practica) {
    desc.innerHTML = ` Ya cursaste o estás cursando tu Práctica Profesional.`;
    return;
  }
  const periods = estimatePeriodsUntilLevel(10);
  desc.innerHTML = periods <= 0
    ? `Ya estás en el tramo donde se habilita la Práctica Profesional (nivel 10 de tu pénsum, ${practica.credits} créd.).`
    : `Está en el <strong>nivel 10</strong> de tu pénsum (${practica.credits} créd.) — a tu ritmo actual, estimo que faltan <strong>~${periods} periodo(s)</strong> para llegar ahí.`;
}

function renderRoleSuggestions() {
  const container = document.getElementById("role-chips");
  if (!container) return;
  const skills = new Set(buildSkillsPassport());

  const scored = ROLE_DEFINITIONS.map((r) => ({
    ...r,
    matched: r.needs.filter((n) => skills.has(n)).length,
  })).filter((r) => r.matched > 0).sort((a, b) => b.matched - a.matched);

  if (scored.length === 0) {
    container.innerHTML = `<p class="empty-msg">Aprueba algunas materias técnicas y aquí verás roles sugeridos.</p>`;
    return;
  }

  container.innerHTML = scored.map((r) => {
    const ready = r.matched === r.needs.length;
    return `<span class="role-chip ${ready ? "role-ready" : ""}" title="${r.matched}/${r.needs.length} habilidades">${ready ? "" : ""} ${escapeHtml(r.role)}</span>`;
  }).join("");
}

function renderJobBoards() {
  const container = document.getElementById("board-links");
  if (!container) return;
  container.innerHTML = JOB_BOARDS.map((b) => `
    <a class="board-link" href="${escapeHtml(b.url)}" target="_blank" rel="noopener">
      <span class="board-link-name">${escapeHtml(b.name)} ↗</span>
      <span class="board-link-desc">${escapeHtml(b.desc)}</span>
    </a>
  `).join("");
}

function renderChecklist() {
  const container = document.getElementById("checklist-items");
  if (!container) return;
  const state = loadChecklistState();
  container.innerHTML = READINESS_CHECKLIST.map((item) => `
    <label class="checklist-row">
      <input type="checkbox" data-id="${item.id}" ${state[item.id] ? "checked" : ""} />
      <span>${escapeHtml(item.label)}</span>
    </label>
  `).join("");

  container.querySelectorAll("input[type=checkbox]").forEach((input) => {
    input.addEventListener("change", () => {
      const state2 = loadChecklistState();
      state2[input.dataset.id] = input.checked;
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state2));
    });
  });
}

function renderCareerRadar() {
  const stats = computeStats();
  renderSaberPro(stats);
  renderPractica();
  renderRoleSuggestions();
  renderJobBoards();
  renderChecklist();
}

function openProfileModal() {
  renderProfileCard();
  document.getElementById("profile-overlay").classList.add("open");
  document.getElementById("profile-modal").classList.add("open");
  activateFocusTrap(document.getElementById("profile-modal"), document.getElementById("open-profile-btn"));
}

function closeProfileModal() {
  document.getElementById("profile-overlay").classList.remove("open");
  document.getElementById("profile-modal").classList.remove("open");
  deactivateFocusTrap();
}



let focusTrapHandler = null;
let lastFocusedBeforeTrap = null;

function activateFocusTrap(container, triggerEl) {
  lastFocusedBeforeTrap = triggerEl || document.activeElement;
  const focusables = () =>
    Array.from(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter((el) => !el.disabled && el.offsetParent !== null);

  const list = focusables();
  if (list.length) list[0].focus();

  focusTrapHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      container.dispatchEvent(new CustomEvent("trap-escape"));
      return;
    }
    if (e.key !== "Tab") return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  document.addEventListener("keydown", focusTrapHandler);
}

function deactivateFocusTrap() {
  if (focusTrapHandler) document.removeEventListener("keydown", focusTrapHandler);
  focusTrapHandler = null;
  if (lastFocusedBeforeTrap) lastFocusedBeforeTrap.focus();
  lastFocusedBeforeTrap = null;
}

// ============================================================
// IMPRESIÓN
// ============================================================

function initPrintHandling() {
  window.addEventListener("beforeprint", () => {
    if (document.getElementById("profile-modal").classList.contains("open")) {
      document.body.classList.add("printing-profile");
    }
    document.querySelectorAll(".term-card").forEach((d) => (d.dataset.wasOpen = d.open ? "1" : "0"));
    document.querySelectorAll(".term-card").forEach((d) => (d.open = true));
  });
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-profile");
    document.querySelectorAll(".term-card").forEach((d) => (d.open = d.dataset.wasOpen === "1"));
  });
}

// ============================================================
// INIT
// ============================================================

// ============================================================
// FONDO: cielo estrellado
// ============================================================

function renderAmbientStars() {
  const group = document.getElementById("ambient-stars");
  if (!group) return;
  const count = 90;
  let html = "";
  for (let i = 0; i < count; i++) {
    const cx = (Math.random() * 1440).toFixed(1);
    const cy = (Math.random() * 900).toFixed(1);
    const r = (Math.random() * 1.3 + 0.4).toFixed(2);
    const baseOp = (Math.random() * 0.45 + 0.15).toFixed(2);
    const dur = (Math.random() * 3 + 2.5).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);
    html += `<circle class="ambient-star" cx="${cx}" cy="${cy}" r="${r}" style="--base-op:${baseOp};--dur:${dur}s;--delay:${delay}s" />`;
  }
  group.innerHTML = html;
}

// ---- Utilidades geométricas compartidas ----

function buildJaggedPath(points, baseline) {
  if (points.length === 0) return "";
  let d = `M${points[0].x},${baseline} L${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i], p2 = points[i + 1];
    const midX = (p1.x + p2.x) / 2;
    const jitter = i % 2 === 0 ? -16 : 14;
    const midY = (p1.y + p2.y) / 2 + jitter;
    d += ` L${midX},${midY} L${p2.x},${p2.y}`;
  }
  const last = points[points.length - 1];
  d += ` L${last.x},${baseline} Z`;
  return d;
}

function buildSmoothPath(points) {
  if (points.length < 2) return "";
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i], p2 = points[i + 1];
    const midX = (p1.x + p2.x) / 2, midY = (p1.y + p2.y) / 2;
    d += ` Q${p1.x},${p1.y} ${midX},${midY}`;
  }
  const last = points[points.length - 1];
  d += ` L${last.x},${last.y}`;
  return d;
}

// ---- Cordillera: tu trayectoria académica real, dibujada como montañas ----

function renderMountains() {
  const realEl = document.getElementById("mountain-front-real");
  const projEl = document.getElementById("mountain-front-projected");
  const ridgeEl = document.getElementById("mountain-ridge-line");
  if (!realEl || !projEl) return;

  const stats = computeStats();
  const avgs = DATA.completedTerms.map((t) => t.avg);
  const mean = avgs.length ? avgs.reduce((a, b) => a + b, 0) / avgs.length : 4.0;
  const realCount = avgs.length;
  const projCount = stats.pct >= 100 ? 0 : Math.min(stats.estSemesters, 4);

  const xStart = 80, xEnd = 1360, baseline = 900;
  const totalPoints = Math.max(realCount + projCount, 1);
  const spacing = totalPoints > 1 ? (xEnd - xStart) / (totalPoints - 1) : 0;
  const yFor = (g) => 830 - ((Math.min(Math.max(g, 3.0), 5.0) - 3.0) / 2.0) * 220;

  const allPoints = [];
  for (let i = 0; i < realCount; i++) allPoints.push({ x: xStart + spacing * i, y: yFor(avgs[i]) });
  for (let i = 0; i < projCount; i++) allPoints.push({ x: xStart + spacing * (realCount + i), y: yFor(mean) });
  if (allPoints.length === 0) allPoints.push({ x: xStart, y: yFor(mean) }, { x: xEnd, y: yFor(mean) });
  else if (allPoints.length === 1) allPoints.push({ x: allPoints[0].x + 200, y: allPoints[0].y });

  const realPts = allPoints.slice(0, realCount);
  const projPts = allPoints.slice(realCount);

  const realJagged = realPts.length >= 1
    ? (realPts.length === 1 ? [realPts[0], { x: realPts[0].x + 1, y: realPts[0].y }] : realPts)
    : [];
  realEl.setAttribute("d", realJagged.length ? buildJaggedPath(realJagged, baseline) : "");

  let projJagged = [];
  if (projPts.length >= 1) {
    const seam = realPts.length ? realPts[realPts.length - 1] : projPts[0];
    projJagged = [seam, ...projPts];
    projEl.setAttribute("d", buildJaggedPath(projJagged, baseline));
  } else {
    projEl.setAttribute("d", "");
  }

  // Línea de cresta: el mismo trazo jagged, pero abierta (sin relleno) para que se lea nítido
  if (ridgeEl) {
    const allJaggedPts = realJagged.length && projJagged.length ? [...realJagged, ...projJagged.slice(1)] : (realJagged.length ? realJagged : projJagged);
    if (allJaggedPts.length >= 2) {
      let ridgeD = `M${allJaggedPts[0].x},${allJaggedPts[0].y}`;
      for (let i = 0; i < allJaggedPts.length - 1; i++) {
        const p1 = allJaggedPts[i], p2 = allJaggedPts[i + 1];
        const midX = (p1.x + p2.x) / 2;
        const jitter = i % 2 === 0 ? -16 : 14;
        const midY = (p1.y + p2.y) / 2 + jitter;
        ridgeD += ` L${midX},${midY} L${p2.x},${p2.y}`;
      }
      ridgeEl.setAttribute("d", ridgeD);
    } else {
      ridgeEl.setAttribute("d", "");
    }
  }
}

// ---- Aurora: tus promedios de periodo, hechos de luz ----

function renderAurora() {
  const layer = document.getElementById("aurora-layer");
  if (!layer) return;
  const avgs = DATA.completedTerms.map((t) => t.avg);
  const grades = avgs.length ? avgs : [4.0, 4.0, 4.0];
  const n = grades.length;
  const xStart = 60, xEnd = 1380;
  const spacing = n > 1 ? (xEnd - xStart) / (n - 1) : 0;
  const auroraYFor = (g) => 230 - ((Math.min(Math.max(g, 3), 5) - 3) / 2) * 150;

  const points1 = grades.map((g, i) => ({ x: xStart + spacing * i, y: auroraYFor(g) }));
  const points2 = grades.map((g, i) => ({ x: xStart + spacing * i, y: auroraYFor(g) + 24 }));

  layer.innerHTML = `
    <path d="${buildSmoothPath(points1)}" stroke="url(#aurora-grad-1)" />
    <path d="${buildSmoothPath(points2)}" stroke="url(#aurora-grad-2)" />
  `;
}

// ---- Sol / luna: la hora real, en el cielo ----

function renderCelestialBody() {
  const group = document.getElementById("celestial-body");
  if (!group) return;
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isDay = hour >= 6 && hour < 18;
  const frac = isDay ? (hour - 6) / 12 : (hour >= 18 ? hour - 18 : hour + 6) / 12;
  const x = 120 + frac * (1320 - 120);
  // Confinado a la franja superior del cielo (junto a la constelación) para nunca chocar con el contenido
  const y = 150 - Math.sin(frac * Math.PI) * 128;
  const fillVar = isDay ? "var(--progress)" : "var(--star-color)";

  group.innerHTML = `
    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="22" class="celestial-glow" fill="${fillVar}" opacity="0.28" />
    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" class="celestial-core" fill="${fillVar}" />
  `;
}

// ---- Árbol de progreso: crece con tu % real de créditos aprobados ----

const TREE_LEAVES = [
  { x: 180, y: 650 }, { x: 150, y: 660 }, { x: 210, y: 660 }, { x: 130, y: 690 }, { x: 230, y: 690 },
  { x: 160, y: 630 }, { x: 200, y: 630 }, { x: 110, y: 710 }, { x: 250, y: 710 }, { x: 180, y: 600 },
  { x: 140, y: 610 }, { x: 220, y: 610 }, { x: 95, y: 680 }, { x: 265, y: 680 }, { x: 170, y: 580 }, { x: 190, y: 580 },
];

function renderProgressTree() {
  const group = document.getElementById("progress-tree");
  if (!group) return;
  const stats = computeStats();
  const pct = Math.min(Math.max(stats.pct, 0), 100);
  const bloomCount = Math.round((pct / 100) * TREE_LEAVES.length);

  const trunkTop = { x: 180, y: 760 };
  const canopyCenter = { x: 180, y: 700 };
  let html = `<path class="tree-branch" d="M${trunkTop.x},900 L${trunkTop.x},${trunkTop.y} L${canopyCenter.x},${canopyCenter.y}" />`;
  TREE_LEAVES.forEach((leaf) => {
    html += `<path class="tree-branch" d="M${canopyCenter.x},${canopyCenter.y} L${leaf.x},${leaf.y}" />`;
  });
  TREE_LEAVES.forEach((leaf, i) => {
    const bloomed = i < bloomCount;
    html += `<circle class="tree-leaf ${bloomed ? "bloomed" : ""}" cx="${leaf.x}" cy="${leaf.y}" r="${bloomed ? 7 : 5}" style="animation-delay:${(i * 0.3).toFixed(1)}s" />`;
  });
  group.innerHTML = html;
}

function renderLandscape() {
  renderMountains();
  renderAurora();
  renderCelestialBody();
  renderProgressTree();
}

function init() {
  initTheme();
  saveData();

  renderAmbientStars();
  fullRerender();
  renderGreeting();

  document.getElementById("student-name").textContent = STUDENT.name.split(" ").slice(0, 2).join(" ");
  document.getElementById("year-now").textContent = new Date().getFullYear();

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => renderAll(e.target.value));

  document.getElementById("toggle-all").addEventListener("click", (e) => {
    const details = document.querySelectorAll(".term-card");
    const anyClosed = Array.from(details).some((d) => !d.open);
    details.forEach((d) => (d.open = anyClosed));
    e.target.textContent = anyClosed ? "Colapsar todo" : "Expandir todo";
  });

  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  // Panel de edición
  document.getElementById("open-editor-btn").addEventListener("click", openDrawer);
  document.getElementById("close-editor-btn").addEventListener("click", closeDrawer);
  document.getElementById("editor-overlay").addEventListener("click", closeDrawer);
  document.getElementById("editor-drawer").addEventListener("trap-escape", closeDrawer);
  document.querySelectorAll(".editor-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchEditorTab(btn.dataset.tab));
  });
  document.getElementById("save-courses-btn").addEventListener("click", saveCurrentCourses);
  document.getElementById("close-term-btn").addEventListener("click", reviewClosePeriod);
  document.getElementById("close-preview-confirm").addEventListener("click", confirmClosePeriod);
  document.getElementById("close-preview-cancel").addEventListener("click", cancelClosePeriod);
  document.getElementById("export-backup-btn").addEventListener("click", exportBackup);
  document.getElementById("import-backup-input").addEventListener("change", (e) => {
    if (e.target.files[0]) importBackup(e.target.files[0]);
    e.target.value = "";
  });
  document.getElementById("reset-data-btn").addEventListener("click", confirmResetData);

  // Perfil
  document.getElementById("open-profile-btn").addEventListener("click", openProfileModal);
  document.getElementById("close-profile-btn").addEventListener("click", closeProfileModal);
  document.getElementById("profile-overlay").addEventListener("click", closeProfileModal);
  document.getElementById("profile-modal").addEventListener("trap-escape", closeProfileModal);
  document.getElementById("print-profile-btn").addEventListener("click", () => window.print());

  // Impresión general
  document.getElementById("print-page-btn")?.addEventListener("click", () => window.print());
  initPrintHandling();

  document.querySelectorAll(".scenario-btn").forEach((btn) => {
    btn.addEventListener("click", () => setScenario(btn.dataset.scenario));
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  console.log(
    "%c FOX %c— tablero académico de Ingeniería de Sistemas.",
    "color:#4CC9F0;font-weight:bold;font-size:14px;",
    "color:#A8B0C4;font-size:12px;"
  );
}

document.addEventListener("DOMContentLoaded", init);
