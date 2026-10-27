// ── Theme toggle (remembers choice) ─────────────────────────
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch {}
document.getElementById("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
});

document.getElementById("year").textContent = new Date().getFullYear();

// ── Reveal sections on scroll ───────────────────────────────
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ── Spotlight effect on research cards ──────────────────────
document.querySelectorAll(".feature").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// ── Publications ────────────────────────────────────────────
const listEl = document.getElementById("pub-list");
const countEl = document.getElementById("pub-count");
const searchEl = document.getElementById("pub-search");

const escapeHtml = (s = "") =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function renderPublications(query = "") {
  const q = query.trim().toLowerCase();
  const pubs = PUBLICATIONS
    .filter((p) => !q || [p.title, p.authors, p.venue, ...(p.tags || [])].join(" ").toLowerCase().includes(q))
    .sort((a, b) => b.year - a.year);

  countEl.textContent = `${pubs.length} paper${pubs.length === 1 ? "" : "s"}`;

  if (!pubs.length) {
    listEl.innerHTML = `<p class="empty">${PUBLICATIONS.length ? "No papers match your search." : "Publications coming soon."}</p>`;
    return;
  }

  const byYear = pubs.reduce((acc, p) => ((acc[p.year] ||= []).push(p), acc), {});
  listEl.innerHTML = Object.keys(byYear)
    .sort((a, b) => b - a)
    .map((year) => `
      <div class="pub-year">
        <h3>${year}</h3>
        <div class="pub-items">
          ${byYear[year].map((p) => {
            const authors = escapeHtml(p.authors)
              .replace(HIGHLIGHT_NAME, (m) => `<mark>${m}</mark>`)
              .replace(/\*/g, "<sup>*</sup>");
            const note = p.note ? `<span class="pub-note">${escapeHtml(p.note)}</span>` : "";
            const tags = (p.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
            const paper = p.url ? `<a class="pub-link" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Paper ↗</a>` : "";
            const code = p.code ? `<a class="pub-link" href="${escapeHtml(p.code)}" target="_blank" rel="noopener">Code ↗</a>` : "";
            return `
              <article class="pub">
                <div class="pub-title">${escapeHtml(p.title)}</div>
                <div class="pub-authors">${authors}${note}</div>
                <div class="pub-meta">
                  ${p.venue ? `<span class="pub-venue">${escapeHtml(p.venue)}</span>` : ""}
                  ${tags}${paper}${code}
                </div>
              </article>`;
          }).join("")}
        </div>
      </div>`)
    .join("");
}
searchEl.addEventListener("input", (e) => renderPublications(e.target.value));
renderPublications();

// ── Animated neural-network background ──────────────────────
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let nodes = [];
const mouse = { x: -9999, y: -9999 };

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.8,
  }));
}

function draw() {
  const rgb = getComputedStyle(root).getPropertyValue("--node").trim();
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const LINK = 140;
  for (const n of nodes) {
    if (!reduceMotion) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > innerWidth) n.vx *= -1;
      if (n.y < 0 || n.y > innerHeight) n.vy *= -1;
    }
    // nodes drift gently toward the cursor, like attention
    const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
    if (d < 180) { n.x += dx * 0.004; n.y += dy * 0.004; }
  }
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < LINK) {
        ctx.strokeStyle = `rgba(${rgb}, ${(1 - d / LINK) * 0.35})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
  }
  for (const n of nodes) {
    ctx.fillStyle = `rgba(${rgb}, 0.9)`;
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
  }
  requestAnimationFrame(draw);
}

addEventListener("resize", resize);
addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
resize();
draw();
