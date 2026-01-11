const PROJECTS = [
  {
    id: "p01",
    title: "Puente — Galardón",
    desc: "Símbolo oficial de los Premios Madrid, Capital de Iberoamérica organizados por el Ayuntamiento de Madrid y el (CEAPI).",
    tags: ["Product", "Prototype", "CMF", "Material", "Render"],

    cover: "assets/images/Proyectos/project-01/project-01.png",

    images: [
      "assets/images/Proyectos/project-01/project-01.png",
      "assets/images/Proyectos/project-01/project-01-02.png",
      "assets/images/Proyectos/project-01/project-01-03.png",
      "assets/images/Proyectos/project-01/project-01-04.png",
      "assets/images/Proyectos/project-01/project-01-05.png",
      "assets/images/Proyectos/project-01/project-01-06.png",
    ],

    specs: {
      "Rol": "Diseño de producto + desarrollo físico",
      "Material": "Bronce + marmol",
      "Proceso": "Trabajo manual de los materiales",
      "Entrega": "Renders + galardones terminados"
    },
    links: []
  },
  {
    id: "p02",
    title: "Ángolo — Mueble (taburete)",
    desc: "Taburete minimalista modular. Mención de honor en los SIT Design Awards 2024 en la sección de 'Furniture Design'.",
    tags: ["Product", "Render"],

    cover: "assets/images/Proyectos/project-02/project-02.png",

    images: [
      "assets/images/Proyectos/project-02/project-02.png",
      "assets/images/Proyectos/project-02/project-02-02.png",
      "assets/images/Proyectos/project-02/project-02-03.png",
      "assets/images/Proyectos/project-02/project-02-04.png",
      "assets/images/Proyectos/project-02/project-02-05.png",
      "assets/images/Proyectos/project-02/project-02-06.png",
    ],
    specs: {
      "Objetivo": "Render + propuesta",
      "Formato": "Imágenes (png)",
      "Proceso": "Modelaje 3d + renderizado",
      "Notas": "Análisis ergonomico y estructural"
    },
  },
  {
    id: "p03",
    title: "Stairway to heaven — Luminaria",
    desc: "Lámpara modular intercambiable y apilable. Doble mencion de honor en los LIT Design awards 2025 en las secciones de 'Ambient Lighting' y 'Designer/Custom Lightin'.",
    tags: ["Material", "Product", "System", "Prototype", "Render", "Experimental"],

    cover: "assets/images/Proyectos/project-03/project-03.png",

    images: [
      "assets/images/Proyectos/project-03/project-03.png",
      "assets/images/Proyectos/project-03/project-03-02.png",
      "assets/images/Proyectos/project-03/project-03-03.png",
      "assets/images/Proyectos/project-03/project-03-04.png",
      "assets/images/Proyectos/project-03/project-03-05.png",
    ],

    specs: {
      "Objetivo": "Renders + prototipo",
      "Mood": "Soft / glass / noise",
      "Estética": "Modular + geométrico",
      "Material": "PLA (Impresión 3d)",
    },
  },
  {
    id: "p04",
    title: "Star Guitars — Diseño de marca",
    desc: "Marca e identidad visual desarrollada para empresa de guitarras y merch",
    tags: ["Experimental", "Render", "Graphic"],

    cover: "assets/images/Proyectos/project-04/project-04.png",

    images: [
      "assets/images/Proyectos/project-04/project-04.png",
      "assets/images/Proyectos/project-04/project-04-02.png",
      "assets/images/Proyectos/project-04/project-04-03.png",
    ],

    specs: {
      "Objetivo": "Renders + diseño grafico",
      "Estética": "Moderna + fuerte + distintiva",
      "Uso": "concept exploratorio",
      "Entrega": "Renders + mockups + investigación"
    },
    links: []
  },
  {
    id: "p05",
    title: "C/ — Mueble (lavabo)",
    desc: "Propuesta de mueble adaptado a la mobilidad reducida para baño, desarrollada en 9 horas y presentada al Roca Design Challenge 2023.",
    tags: ["Experimental", "Render", "Product", "System"],

    cover: "assets/images/Proyectos/project-05/project-05.png",

    images: [
      "assets/images/Proyectos/project-05/project-05.png",
      "assets/images/Proyectos/project-05/project-05-02.png",
    ],

    specs: {
      "Objetivo": "Propuesta Moderna + limite de tiempo",
      "Estética": "Moderna + minimalista",
      "Uso": "adaptativo y funcional",
      "Entrega": "Renders + propuesta de valor"
    },
    links: []
  },
  {
    id: "p06",
    title: "Conga — Botella",
    desc: "Botella de vidrio apilable que mejora y facilita el agarre y transporte permitiendo formar patrones circulares con varias botellas, desarrollada para Vidralia 2023",
    tags: ["Experimental", "Render", "Product", "System", "Graphic"],

    cover: "assets/images/Proyectos/project-06/project-06.png",

    images: [
      "assets/images/Proyectos/project-06/project-06.png",
      "assets/images/Proyectos/project-06/project-06-02.png",
      "assets/images/Proyectos/project-06/project-06-03.png",
      "assets/images/Proyectos/project-06/project-06-04.png",
      "assets/images/Proyectos/project-06/project-06-05.png",
    ],

    specs: {
      "Objetivo": "Propuesta Innovadora",
      "Material": "Vidrio",
      "Uso": "Confort + eficiencia",
      "Entrega": "Renders + propuesta"
    },
    links: []
  }
];

/* Render */
const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalBadges = document.getElementById("modalBadges");
const modalSpecs = document.getElementById("modalSpecs");
const modalLinks = document.getElementById("modalLinks");

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const allTags = ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];
let activeTag = "All";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderFilters() {
  filters.innerHTML = "";
  allTags.forEach(tag => {
    const b = el("button", "filterBtn" + (tag === activeTag ? " active" : ""), tag);
    b.type = "button";
    b.addEventListener("click", () => {
      activeTag = tag;
      renderFilters();
      renderGrid();
    });
    filters.appendChild(b);
  });
}

function renderGrid() {
  grid.innerHTML = "";

  const items = PROJECTS.filter(p => activeTag === "All" || p.tags.includes(activeTag));
  if (!items.length) {
    const empty = el("div", "card");
    empty.style.padding = "16px";
    empty.textContent = "No hay proyectos con ese filtro.";
    grid.appendChild(empty);
    return;
  }

  items.forEach(p => {
    const card = el("article", "card");
    card.tabIndex = 0;

    const media = el("div", "cardMedia");
    const img = new Image();
    img.src = p.cover;
    img.alt = p.title;
    media.appendChild(img);

    const body = el("div", "cardBody");
    body.appendChild(el("h3", "cardTitle", p.title));
    body.appendChild(el("p", "cardDesc", p.desc));

    const badges = el("div", "badges");
    p.tags.slice(0, 3).forEach(t => badges.appendChild(el("span", "badge", t)));
    body.appendChild(badges);

    card.appendChild(media);
    card.appendChild(body);

    const open = () => openModal(p.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") open();
    });

    grid.appendChild(card);
  });
}

/* Modal */
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalMedia = document.querySelector(".modalMedia");

let currentImages = [];
let currentIndex = 0;

function updateModalImage() {
  modalImg.src = currentImages[currentIndex];
}

modalPrev?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateModalImage();
});

modalNext?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateModalImage();
});

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  currentImages = Array.isArray(p.images) && p.images.length ? p.images : [p.cover];
  currentIndex = 0;

  modalImg.src = currentImages[currentIndex];
  modalImg.alt = p.title;

  if (modalMedia) modalMedia.classList.toggle("single", currentImages.length === 1);

  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;

  modalBadges.innerHTML = "";
  p.tags.forEach(t => modalBadges.appendChild(el("span", "badge", t)));

  modalSpecs.innerHTML = "";
  Object.entries(p.specs || {}).forEach(([k, v]) => {
    const s = el("div", "spec");
    s.appendChild(el("div", "specKey", k));
    s.appendChild(el("div", "specVal", v));
    modalSpecs.appendChild(s);
  });

  modalLinks.innerHTML = "";
  (p.links || []).forEach(l => {
    const a = el("a", "btn", l.label);
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noreferrer";
    modalLinks.appendChild(a);
  });

  modal.showModal();
}

modal.addEventListener("click", (e) => {
  const rect = modal.getBoundingClientRect();
  const inDialog =
    rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX && e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX && e.clientX <= rect.left + rect.width;

  if (!inDialog) modal.close();
});

/* Theme */
const themeBtn = document.getElementById("themeBtn");
const KEY = "portfolio_theme";

function setTheme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  localStorage.setItem(KEY, mode);
  themeBtn.textContent = (mode === "dark") ? "⏾" : "☀︎";
}
setTheme(localStorage.getItem(KEY) || "light");

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

renderFilters();
renderGrid();

/* Nav icon animation */
const navAnimations = {
  work: ["ᕙ(⇀‸↼‶)ᕗ", "↼(⇀‸↼‶)⇀"],
  about: ["╮ (. ❛ ᴗ ❛.) ╭", "⏋ (. ❛ ᴗ ❛.) ⎾"],
  contact: ["🕻ꉂ(˵˃ ᗜ ˂˵)", "🕻ꉂ(˵˃ ◡ ˂˵)"]
};

let navFrame = 0;

setInterval(() => {
  navFrame = navFrame === 0 ? 1 : 0;

  document.querySelectorAll("[data-anim]").forEach(link => {
    const key = link.dataset.anim;
    const iconEl = link.querySelector(".navIcon");
    if (!iconEl) return;
    iconEl.textContent = navAnimations[key][navFrame];
  });
}, 1000);

/* Corner mascot */
const mascot = document.getElementById("cornerMascot");
const base = document.getElementById("cornerBase");
const zzz = document.getElementById("cornerZzz");
const zSpans = zzz ? Array.from(zzz.querySelectorAll(".z")) : [];
const heart = document.getElementById("cornerHeart");
const alertLine = document.getElementById("cornerAlert");

const ICON_AWAKE = "𐔌՞ .ˬ.՞𐦯";
const ICON_SLEEP = "𐔌՞ -ˬ-՞𐦯  z z z";
const ICON_WAKE = "𐔌՞ •o•՞𐦯";

let isSleeping = false;
let sleepTimer = null;
let zzzTimer = null;
let heartTimer = null;
let alertTimer = null;

function clearAllTimers() {
  if (sleepTimer) clearTimeout(sleepTimer);
  if (zzzTimer) clearInterval(zzzTimer);
  if (heartTimer) clearTimeout(heartTimer);
  if (alertTimer) clearTimeout(alertTimer);

  sleepTimer = zzzTimer = heartTimer = alertTimer = null;
}

function hideLines() {
  mascot.classList.remove("show-heart", "alert");
}

function startSleepCountdown() {
  if (sleepTimer) clearTimeout(sleepTimer);
  sleepTimer = setTimeout(() => {
    goToSleep();
  }, 20000);
}

function startZzzAnimation() {
  let step = 0;
  zSpans.forEach(s => (s.style.display = "none"));

  if (zzzTimer) clearInterval(zzzTimer);
  zzzTimer = setInterval(() => {
    step = (step + 1) % 4;
    zSpans.forEach((s, i) => {
      s.style.display = (i < step) ? "inline" : "none";
    });
  }, 500);
}

function stopZzzAnimation() {
  if (zzzTimer) clearInterval(zzzTimer);
  zzzTimer = null;
  zSpans.forEach(s => (s.style.display = "none"));
}

function goToSleep() {
  hideLines();
  if (heartTimer) { clearTimeout(heartTimer); heartTimer = null; }
  if (alertTimer) { clearTimeout(alertTimer); alertTimer = null; }

  isSleeping = true;
  mascot.classList.add("sleeping");
  base.textContent = "𐔌՞ -ˬ-՞𐦯";
  startZzzAnimation();
}

function wakeFromSleepWithAlert() {
  stopZzzAnimation();
  mascot.classList.remove("sleeping");
  isSleeping = false;

  hideLines();
  mascot.classList.add("alert");
  base.textContent = ICON_WAKE;

  if (alertTimer) clearTimeout(alertTimer);
  alertTimer = setTimeout(() => {
    mascot.classList.remove("alert");
    base.textContent = ICON_AWAKE;
    alertTimer = null;
    startSleepCountdown();
  }, 1000);
}

function showHeartWhileAwake() {
  mascot.classList.remove("alert");
  mascot.classList.add("show-heart");

  if (heartTimer) clearTimeout(heartTimer);
  heartTimer = setTimeout(() => {
    mascot.classList.remove("show-heart");
    heartTimer = null;
  }, 2000);
}

function initMascot() {
  if (!mascot || !base || !zzz) return;

  base.textContent = ICON_AWAKE;
  hideLines();
  stopZzzAnimation();
  mascot.classList.remove("sleeping");
  isSleeping = false;

  startSleepCountdown();

  mascot.addEventListener("click", () => {
    if (sleepTimer) clearTimeout(sleepTimer);

    if (isSleeping) {
      wakeFromSleepWithAlert();
    } else {
      showHeartWhileAwake();
      startSleepCountdown();
    }
  });
}

initMascot();

/* Download confirm */
const downloadBtn = document.getElementById("downloadPortfolio");

if (downloadBtn) {
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const ok = confirm(
      "¿Quieres descargar el portfolio en PDF?\n\n(Peso aproximado: varios MB)"
    );

    if (ok) {
      const link = document.createElement("a");
      link.href = "assets/CV-Diego-Rodriguez-Klecker.pdf";
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
}
