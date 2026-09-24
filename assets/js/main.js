document.documentElement.classList.add('has-js');

/* ==========================================================================
   1. CONSTANTES, DICCIONARIOS Y ELEMENTOS DEL DOM
   ========================================================================== */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const cert2Link = document.getElementById('cert2Link');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const CERT2_HREF = {
  es: 'assets/certs/cisco-introduccion-ciberseguridad-es.pdf',
  en: 'assets/certs/cisco-introduction-cybersecurity-en.pdf'
};

const I18N = {
  es: {
    nav_stack: 'Stack', nav_proyectos: 'Proyectos', nav_educacion: 'Educación',
    nav_trayectoria: 'Trayectoria', nav_contacto: 'Contacto',
    hero_eyebrow: '// hola',
    hero_role: 'Técnico en Análisis de Sistemas (en formación) — San Nicolás de los Arroyos, Argentina',
    badge_status_label: 'estado:', badge_status_value: 'buscando primera oportunidad IT',
    badge_stack_label: 'stack:', badge_egreso_label: 'egreso:', badge_egreso_value: 'dic. 2026',
    hero_bio: 'Estudiante avanzado de la Tecnicatura Superior en Análisis de Sistemas (ISFT N°38), a pocos meses de recibirme. Combino una base sólida en lógica, bases de datos y arquitectura de software con experiencia práctica construyendo aplicaciones reales: desde sistemas de gestión en PHP y Laravel hasta mis primeros pasos en el ecosistema .NET (C#, ASP.NET Core MVC, Entity Framework). Soy una persona proactiva y organizada, acostumbrada a resolver problemas bajo presión, y estoy buscando mi primera oportunidad para crecer como desarrollador.',
    cta_email: 'Escribime', cta_cv: 'Descargar CV', cta_proyectos: 'Ver proyectos',
    stack_eyebrow: '// stack', stack_title: 'Lo que sé hacer (y lo que estoy aprendiendo)',
    stack_lede: 'Una base formada en la carrera, reforzada con proyectos propios y un foco actual en .NET.',
    skill_backend: 'Backend', skill_db: 'Bases de datos', skill_frontend: 'Frontend', skill_tools: 'Herramientas',
    proyectos_eyebrow: '// proyectos', proyectos_title: 'Proyectos',
    proyectos_lede: 'Tres proyectos que muestran cómo paso de la teoría al código.',
    project1_status: 'en desarrollo',
    project1_desc: 'Proyecto de Práctica Profesional 3, desarrollado en equipo. Estoy sumando nuevos módulos a un sistema de gestión y estadísticas construido sobre Laravel.',
    project2_status: 'finalizado',
    project2_desc: 'Aplicación web para gestionar pedidos de viandas, pensada para uso en el Ejército Argentino. Incluye registro y login de usuarios, panel de control, selección y cancelación de viandas, y recuperación de contraseña.',
    project3_status: 'proyecto personal',
    project3_desc: 'Sistema de gestión bibliotecaria desarrollado por mi cuenta para practicar Laravel de punta a punta: modelos, rutas, migraciones de base de datos y vistas Blade.',
    project_link: 'Ver repositorio',
    educacion_eyebrow: '// educación', educacion_title: 'Formación',
    edu1_date: '2024 — actualidad', edu1_badge: 'promedio destacado', edu1_egreso: 'egreso estimado dic. 2026',
    chip_algoritmos: 'Algoritmos y Estructuras de Datos', chip_ingsoft: 'Ingeniería de Software',
    chip_bd: 'Base de Datos', chip_so: 'Sistemas Operativos', chip_redes: 'Redes y Comunicaciones',
    chip_arq: 'Arquitectura de las Computadoras', chip_estadistica: 'Estadística',
    edu2_title: 'Bachiller en Ciencias Sociales',
    certs_title: 'Certificaciones', certs_lede: 'Cursos y credenciales complementarias a la carrera.',
    cert1_level: 'Inglés B1', cert_view: 'Ver certificado',
    cert2_name: 'Introducción a Ciberseguridad', cert2_month: 'sep.',
    trayectoria_eyebrow: '// trayectoria', trayectoria_title: 'Antes del código',
    trayectoria_lede: 'Mi camino hacia los sistemas no empezó en un aula. Estos trabajos me enseñaron disciplina, trabajo en equipo y a resolver problemas rápido — hoy aplico lo mismo escribiendo código.',
    job1_date: 'jul. 2022 — actualidad', job1_title: 'Logística y reparto · Pedidos Ya',
    job1_desc: 'Planificación de rutas y resolución de problemas en tiempo real durante los envíos.',
    job2_date: 'oct. 2022 — sep. 2023', job2_title: 'Operario de puente grúa · Sidersa S.A.',
    job2_desc: 'Manejo de maquinaria pesada y trabajo en equipo bajo protocolos estrictos de seguridad.',
    job3_date: 'mar. 2021 — sep. 2021', job3_title: 'Operario calificado · Motomel, La Emilia SRL',
    job3_desc: 'Control de calidad y operación de maquinaria de inyección industrial.',
    contacto_eyebrow: '// contacto', contacto_title: 'Hablemos',
    contacto_lede: 'Estoy terminando la carrera y buscando mi primera oportunidad en sistemas. Si tenés un proyecto, una pasantía, o simplemente querés charlar de tecnología, escribime.',
    label_email: 'Email', label_phone: 'Teléfono', label_location: 'Ubicación',
    footer_note: 'Hecho con prolijidad, módulo a módulo.',
    theme_to_dark: 'Cambiar a modo oscuro', theme_to_light: 'Cambiar a modo claro',
    lang_toggle_aria: 'Switch to English',
    doc_title: 'Agustín Ponce — Analista de Sistemas en formación'
  },
  en: {
    nav_stack: 'Stack', nav_proyectos: 'Projects', nav_educacion: 'Education',
    nav_trayectoria: 'Background', nav_contacto: 'Contact',
    hero_eyebrow: '// hi',
    hero_role: 'Systems Analysis Technician (in progress) — San Nicolás de los Arroyos, Argentina',
    badge_status_label: 'status:', badge_status_value: 'looking for my first IT role',
    badge_stack_label: 'stack:', badge_egreso_label: 'graduating:', badge_egreso_value: 'Dec. 2026',
    hero_bio: "Advanced student of the Systems Analysis degree (ISFT N°38), a few months from graduating. I combine a solid base in logic, databases and software architecture with hands-on experience building real applications: from management systems in PHP and Laravel to my first steps in the .NET ecosystem (C#, ASP.NET Core MVC, Entity Framework). I'm proactive and organized, used to solving problems under pressure, and I'm looking for my first opportunity to grow as a developer.",
    cta_email: 'Email me', cta_cv: 'Download CV', cta_proyectos: 'View projects',
    stack_eyebrow: '// stack', stack_title: "What I can do (and what I'm learning)",
    stack_lede: 'A foundation built in my degree, reinforced with personal projects and a current focus on .NET.',
    skill_backend: 'Backend', skill_db: 'Databases', skill_frontend: 'Frontend', skill_tools: 'Tools',
    proyectos_eyebrow: '// projects', proyectos_title: 'Projects',
    proyectos_lede: 'Three projects that show how I move from theory to code.',
    project1_status: 'in progress',
    project1_desc: 'Professional Practice 3 project, built as a team. I keep adding new modules to a management and statistics system built on Laravel.',
    project2_status: 'completed',
    project2_desc: 'Web app to manage meal-tray orders, built for use by the Argentine Army. Includes user registration/login, a control panel, meal selection and cancellation, and password recovery.',
    project3_status: 'personal project',
    project3_desc: 'Library management system I built on my own to practice Laravel end to end: models, routes, database migrations and Blade views.',
    project_link: 'View repository',
    educacion_eyebrow: '// education', educacion_title: 'Education',
    edu1_date: '2024 — present', edu1_badge: 'top of class', edu1_egreso: 'expected graduation Dec. 2026',
    chip_algoritmos: 'Algorithms & Data Structures', chip_ingsoft: 'Software Engineering',
    chip_bd: 'Databases', chip_so: 'Operating Systems', chip_redes: 'Networks & Communications',
    chip_arq: 'Computer Architecture', chip_estadistica: 'Statistics',
    edu2_title: 'High School Diploma — Social Sciences',
    certs_title: 'Certifications', certs_lede: 'Courses and credentials that complement the degree.',
    cert1_level: 'English B1', cert_view: 'View certificate',
    cert2_name: 'Introduction to Cybersecurity', cert2_month: 'Sep',
    trayectoria_eyebrow: '// background', trayectoria_title: 'Before the code',
    trayectoria_lede: "My path into systems didn't start in a classroom. These jobs taught me discipline, teamwork and how to solve problems fast — I apply the same today while writing code.",
    job1_date: 'Jul 2022 — present', job1_title: 'Logistics & delivery · Pedidos Ya',
    job1_desc: 'Route planning and real-time problem solving during deliveries.',
    job2_date: 'Oct 2022 — Sep 2023', job2_title: 'Overhead crane operator · Sidersa S.A.',
    job2_desc: 'Heavy machinery operation and teamwork under strict safety protocols.',
    job3_date: 'Mar 2021 — Sep 2021', job3_title: 'Skilled operator · Motomel, La Emilia SRL',
    job3_desc: 'Quality control and operation of industrial injection machinery.',
    contacto_eyebrow: '// contact', contacto_title: "Let's talk",
    contacto_lede: "I'm finishing my degree and looking for my first opportunity in systems. If you have a project, an internship, or just want to talk tech, reach out.",
    label_email: 'Email', label_phone: 'Phone', label_location: 'Location',
    footer_note: 'Built carefully, module by module.',
    theme_to_dark: 'Switch to dark mode', theme_to_light: 'Switch to light mode',
    lang_toggle_aria: 'Cambiar a Español',
    doc_title: 'Agustín Ponce — Systems Analysis Technician (in progress)'
  }
};

/* ==========================================================================
   2. FUNCIONES DE LÓGICA (TEMA E IDIOMA)
   ========================================================================== */
function getStoredLang() {
  try { return localStorage.getItem('lang'); } catch (e) { return null; }
}
function storeLang(lang) {
  try { localStorage.setItem('lang', lang); } catch (e) { /* no disponible */ }
}

function updateThemeLabel() {
  const lang = root.getAttribute('lang') === 'en' ? 'en' : 'es';
  const dict = I18N[lang];
  if (!dict) return; // Validación de seguridad extra
  
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', isDark ? dict.theme_to_light : dict.theme_to_dark);
  }
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  
  // Actualizar textos en el HTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  
  // Actualizar atributos y estados
  document.title = dict.doc_title;
  root.setAttribute('lang', lang);
  
  if (langToggle) {
    langToggle.setAttribute('data-lang', lang);
    langToggle.setAttribute('aria-label', dict.lang_toggle_aria);
  }
  
  if (cert2Link) {
    cert2Link.setAttribute('href', CERT2_HREF[lang] || CERT2_HREF.es);
  }
  
  // Refrescar la etiqueta del tema con el nuevo idioma
  updateThemeLabel();
}

function getStoredTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}
function storeTheme(theme) {
  try { localStorage.setItem('theme', theme); } catch (e) { /* no disponible */ }
}
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-checked', String(theme === 'dark'));
  }
  updateThemeLabel();
}

/* ==========================================================================
   3. INICIALIZACIÓN (SE EJECUTA AL CARGAR LA PÁGINA)
   ========================================================================== */

// Configurar el Idioma
const browserLang = (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
applyLang(getStoredLang() || browserLang);

// Configurar el Tema
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(getStoredTheme() || (prefersDark ? 'dark' : 'light'));

/* ==========================================================================
   4. EVENT LISTENERS
   ========================================================================== */

// Botón de cambio de tema
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storeTheme(next);
  });
}

// Botón de cambio de idioma
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const next = langToggle.getAttribute('data-lang') === 'es' ? 'en' : 'es';
    applyLang(next);
    storeLang(next);
  });
}

// Menú móvil
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   5. SCROLL REVEAL (ANIMACIONES AL HACER SCROLL)
   ========================================================================== */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (reduceMotion) {
  revealEls.forEach(el => el.classList.add('is-visible'));
} else if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}