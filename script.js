// ---- Course catalogue (educational, expert-led lessons) ----
const COURSES = [
  { title: "Starting a sensual full-body massage", cat: "intimate", label: "Intimate techniques", emoji: "💆", grad: ["#ff5fa2", "#ff8a5c"], time: "03:42", likes: 77, view: "videos" },
  { title: "Mastering touch & rhythm", cat: "intimate", label: "Intimate techniques", emoji: "✋", grad: ["#ff2d7e", "#ff5fa2"], time: "06:15", likes: 55, view: "courses" },
  { title: "Anatomy of pleasure: a guided map", cat: "health", label: "Sexual health", emoji: "🫶", grad: ["#ff8a5c", "#ffb27a"], time: "06:48", likes: 171, view: "courses" },
  { title: "Building unstoppable desire", cat: "desire", label: "Desire & libido", emoji: "🔥", grad: ["#ff3d8b", "#ff8a5c"], time: "06:34", likes: 163, view: "courses" },
  { title: "Techniques in action: live demos", cat: "intimate", label: "Intimate techniques", emoji: "🎬", grad: ["#ff5fa2", "#c44cff"], time: "57:33", likes: 38, view: "videos" },
  { title: "Awakening through mindful touch", cat: "tantra", label: "Tantra", emoji: "🧘", grad: ["#ff8a5c", "#ffd27a"], time: "07:45", likes: 90, view: "courses" },
  { title: "Confident hands: the essentials", cat: "intimate", label: "Intimate techniques", emoji: "💞", grad: ["#ff2d7e", "#ff6fa9"], time: "14:27", likes: 72, view: "videos" },
  { title: "Welcome to this masterclass", cat: "comm", label: "Communication", emoji: "🌹", grad: ["#5a7dff", "#9b6cff"], time: "03:08", likes: 28, view: "courses" },
  { title: "Talking about what you want", cat: "comm", label: "Communication", emoji: "🗣️", grad: ["#ff5fa2", "#5a9dff"], time: "07:11", likes: 87, view: "courses" },
  { title: "Setting the scene for intimacy", cat: "intimate", label: "Intimate techniques", emoji: "🕯️", grad: ["#ff8a5c", "#ff5fa2"], time: "03:13", likes: 59, view: "videos" },
  { title: "The art of the slow build", cat: "tantra", label: "Tantra", emoji: "✨", grad: ["#c44cff", "#ff5fa2"], time: "06:15", likes: 55, view: "courses" },
  { title: "Partner massage techniques", cat: "intimate", label: "Intimate techniques", emoji: "💆‍♂️", grad: ["#ff3d8b", "#ffb27a"], time: "07:44", likes: 24, view: "videos" },
  { title: "Reigniting libido after a slump", cat: "desire", label: "Desire & libido", emoji: "💥", grad: ["#ff5fa2", "#ff8a5c"], time: "07:40", likes: 104, view: "courses" },
  { title: "Getting started with new dynamics", cat: "kink", label: "Kink & BDSM", emoji: "🪢", grad: ["#7a5cff", "#ff5fa2"], time: "04:01", likes: 52, view: "courses" },
  { title: "Aftercare & emotional safety", cat: "kink", label: "Kink & BDSM", emoji: "🤍", grad: ["#5a7dff", "#c44cff"], time: "56:49", likes: 48, view: "videos" },
  { title: "Sensation play for beginners", cat: "kink", label: "Kink & BDSM", emoji: "🌡️", grad: ["#ff5fa2", "#7a5cff"], time: "15:29", likes: 51, view: "courses" },
  { title: "Breathwork for deeper connection", cat: "tantra", label: "Tantra", emoji: "🌬️", grad: ["#ff8a5c", "#ffd27a"], time: "44:46", likes: 10, view: "videos" },
  { title: "Introduction to mindful intimacy", cat: "tantra", label: "Tantra", emoji: "🌸", grad: ["#ff5fa2", "#ff8a5c"], time: "22:09", likes: 42, view: "courses" },
  { title: "Sexual health & safer pleasure", cat: "health", label: "Sexual health", emoji: "🌺", grad: ["#ff3d8b", "#ff8a5c"], time: "09:12", likes: 66, view: "courses" },
  { title: "Rebuilding trust & desire as a couple", cat: "comm", label: "Communication", emoji: "💑", grad: ["#5a9dff", "#ff5fa2"], time: "11:30", likes: 81, view: "courses" },
  { title: "Exploring fantasies together", cat: "desire", label: "Desire & libido", emoji: "💭", grad: ["#c44cff", "#ff5fa2"], time: "08:55", likes: 73, view: "courses" },
  { title: "Mindful presence in the moment", cat: "tantra", label: "Tantra", emoji: "🪷", grad: ["#ff8a5c", "#ffb27a"], time: "05:20", likes: 39, view: "videos" },
  { title: "Negotiation, consent & boundaries", cat: "kink", label: "Kink & BDSM", emoji: "🤝", grad: ["#7a5cff", "#ff6fa9"], time: "13:48", likes: 58, view: "courses" },
  { title: "Understanding your own body", cat: "health", label: "Sexual health", emoji: "🌷", grad: ["#ff5fa2", "#ff8a5c"], time: "10:05", likes: 95, view: "courses" },
];

// ---- Cover images: generated locally as inline SVG (no external CDN) ----
// Same-origin data URIs always render (no hotlink/region/blocking issues),
// are free of copyright, and stay deterministic per seed.
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const hashSeed = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
};
function coverUrl(seed, colors = ["#ff2d7e", "#ff8a5c"], w = 800, h = 600) {
  const r = hashSeed(seed);
  const [c1, c2] = colors;
  const cx1 = 18 + (r % 55), cy1 = 14 + ((r >> 3) % 46);
  const cx2 = 48 + ((r >> 6) % 48), cy2 = 42 + ((r >> 9) % 50);
  const r1 = 70 + (r % 120), r2 = 110 + ((r >> 4) % 150);
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>` +
    `<defs>` +
    `<linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient>` +
    `<radialGradient id='l' cx='${cx1}%' cy='${cy1}%' r='60%'><stop offset='0' stop-color='#fff' stop-opacity='0.55'/><stop offset='1' stop-color='#fff' stop-opacity='0'/></radialGradient>` +
    `<radialGradient id='d' cx='${cx2}%' cy='${cy2}%' r='60%'><stop offset='0' stop-color='#000' stop-opacity='0.38'/><stop offset='1' stop-color='#000' stop-opacity='0'/></radialGradient>` +
    `</defs>` +
    `<rect width='100%' height='100%' fill='url(#g)'/>` +
    `<circle cx='${(cx1 * w) / 100}' cy='${(cy1 * h) / 100}' r='${r1}' fill='#fff' fill-opacity='0.10'/>` +
    `<circle cx='${(cx2 * w) / 100}' cy='${(cy2 * h) / 100}' r='${r2}' fill='#000' fill-opacity='0.12'/>` +
    `<rect width='100%' height='100%' fill='url(#l)'/>` +
    `<rect width='100%' height='100%' fill='url(#d)'/>` +
    `</svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

const homeCoverImg = document.getElementById("homeCoverImg");
if (homeCoverImg) homeCoverImg.src = coverUrl("home", ["#ff2d7e", "#ff8a5c"], 900, 600);

const grid = document.getElementById("grid");
const shelfEmpty = document.getElementById("shelfEmpty");
const shelfBtn = document.getElementById("shelfBtn");
const shelfCount = document.getElementById("shelfCount");

let activeCat = "all";
let activeView = "courses";
let shelfOnly = false;

// ---- Shelf persistence (saved courses live in the browser) ----
const STORE_KEY = "climax.shelf";
const loadShelf = () => {
  try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY)) || []); }
  catch { return new Set(); }
};
const saved = loadShelf();
const persist = () => localStorage.setItem(STORE_KEY, JSON.stringify([...saved]));

function updateShelfUI() {
  shelfCount.textContent = saved.size;
  shelfBtn.classList.toggle("active", shelfOnly);
  if (typeof syncShelfBadges === "function") syncShelfBadges();
}

function render() {
  const items = COURSES.filter((c) => {
    const catOk = activeCat === "all" || c.cat === activeCat;
    const shelfOk = !shelfOnly || saved.has(c.title);
    return catOk && shelfOk;
  });

  grid.innerHTML = items
    .map((c) => {
      const isSaved = saved.has(c.title);
      return `
    <article class="card" data-title="${c.title}">
      <div class="card-thumb" style="background: linear-gradient(135deg, ${c.grad[0]}, ${c.grad[1]});">
        <img class="cover-img" src="${coverUrl(slug(c.title), c.grad)}" loading="lazy" alt="" onerror="this.remove()">
        <span class="cover-tint"></span>
        <span class="tag">Explicit</span>
        <button class="save-btn ${isSaved ? "saved" : ""}" data-title="${c.title}"
          aria-label="${isSaved ? "Remove from shelf" : "Add to shelf"}"
          title="${isSaved ? "On your shelf" : "Add to shelf"}">${isSaved ? "🔖" : "➕"}</button>
        <span class="emoji">${c.emoji}</span>
        <div class="meta">
          <span class="pill">❤️ ${c.likes}</span>
          <span class="pill">${c.time}</span>
        </div>
      </div>
      <div class="card-foot">
        <div>
          <h3 class="card-title">${c.title}</h3>
          <p class="card-cat">${c.label} · ${episodesFor(c).length} episodes</p>
        </div>
        <button class="add-shelf ${isSaved ? "saved" : ""}" data-title="${c.title}">
          ${isSaved ? "✓ On shelf" : "+ Add to shelf"}
        </button>
      </div>
    </article>`;
    })
    .join("");

  const empty = shelfOnly && items.length === 0;
  shelfEmpty.hidden = !empty;
  updateShelfUI();
}

// Toggle a course on/off the shelf (works from either button)
function toggleSave(title) {
  if (saved.has(title)) saved.delete(title);
  else saved.add(title);
  persist();
  render();
}

// ---- Series → episodes ----
const EP_TEMPLATES = [
  "Introduction & what you'll learn",
  "The fundamentals",
  "Step-by-step technique",
  "Reading your partner's cues",
  "Common mistakes to avoid",
  "Putting it into practice",
  "Going deeper",
  "Bringing it all together",
];
const EP_TIMES = ["03:42", "06:15", "07:44", "05:20", "08:55", "06:34", "11:30", "04:01"];

const EP_COSTS = [5, 8, 10, 12]; // unlock-credit price tiers

// Stable per-series episode list (first episode is free, rest cost unlock credits)
function episodesFor(course) {
  const n = 5 + (course.title.length % 4); // 5–8 episodes
  return Array.from({ length: n }, (_, i) => ({
    no: i + 1,
    title: EP_TEMPLATES[i % EP_TEMPLATES.length],
    time: EP_TIMES[(i + course.title.length) % EP_TIMES.length],
    free: i === 0,
    cost: i === 0 ? 0 : EP_COSTS[(i + course.title.length) % EP_COSTS.length],
  }));
}

// ---- Unlock credits (spent to unlock a lesson without a membership) ----
const CREDITS_KEY = "climaxpal.credits";
const UNLOCKED_KEY = "climaxpal.unlocked";
let credits = (() => {
  const v = parseInt(localStorage.getItem(CREDITS_KEY), 10);
  return Number.isFinite(v) ? v : 30; // new visitors start with 30 credits
})();
const unlockedSet = (() => {
  try { return new Set(JSON.parse(localStorage.getItem(UNLOCKED_KEY)) || []); }
  catch { return new Set(); }
})();
const persistCredits = () => localStorage.setItem(CREDITS_KEY, String(credits));
const persistUnlocked = () => localStorage.setItem(UNLOCKED_KEY, JSON.stringify([...unlockedSet]));
const epKey = (course, ep) => `${slug(course.title)}-${ep.no}`;

function updateCreditsUI() {
  const chip = document.getElementById("creditsChip");
  const me = document.getElementById("meCredits");
  if (chip) chip.textContent = `🔑 ${credits} credits`;
  if (me) me.textContent = credits;
}
updateCreditsUI();

// ---- Series detail overlay ----
const detail = document.getElementById("detail");
const detailCover = document.getElementById("detailCover");
const detailCat = document.getElementById("detailCat");
const detailTitle = document.getElementById("detailTitle");
const detailMeta = document.getElementById("detailMeta");
const detailDesc = document.getElementById("detailDesc");
const detailSave = document.getElementById("detailSave");
const epList = document.getElementById("epList");
let currentDetail = null;

function updateDetailSave() {
  if (!currentDetail) return;
  const isSaved = saved.has(currentDetail.title);
  detailSave.dataset.title = currentDetail.title;
  detailSave.classList.toggle("saved", isSaved);
  detailSave.textContent = isSaved ? "✓ On shelf" : "+ Add to shelf";
}

function renderEpisodes(c) {
  const eps = episodesFor(c);
  epList.innerHTML = eps
    .map((ep) => {
      const unlocked = ep.free || unlockedSet.has(epKey(c, ep));
      const flag = ep.free
        ? `<span class="ep-flag free">Free</span>`
        : unlocked
          ? `<span class="ep-flag unlocked">✓ Unlocked</span>`
          : `<span class="ep-flag cost">🔑 ${ep.cost}</span>`;
      return `
    <li class="ep ${unlocked ? "is-unlocked" : ""}" data-no="${ep.no}">
      <div class="ep-cover" style="background: linear-gradient(135deg, ${c.grad[0]}, ${c.grad[1]});">
        <img class="cover-img" src="${coverUrl(slug(c.title) + '-' + ep.no, c.grad)}" loading="lazy" alt="" onerror="this.remove()">
        <span class="cover-tint"></span>
        <span class="emoji">${c.emoji}</span>
        <span class="ep-no">EP ${ep.no}</span>
        ${flag}
        <span class="ep-dur">${ep.time}</span>
        <span class="ep-play">${unlocked ? "▶" : "🔒"}</span>
      </div>
      <div class="ep-info">
        <div class="ep-title">${ep.no}. ${ep.title}</div>
      </div>
    </li>`;
    })
    .join("");
}

function openDetail(title) {
  const c = COURSES.find((x) => x.title === title);
  if (!c) return;
  currentDetail = c;
  const eps = episodesFor(c);

  detailCover.style.background = `linear-gradient(135deg, ${c.grad[0]}, ${c.grad[1]})`;
  const coverImg = document.getElementById("detailCoverImg");
  coverImg.style.display = "";
  coverImg.onerror = () => { coverImg.style.display = "none"; };
  coverImg.src = coverUrl(slug(c.title), c.grad, 1200, 720);
  detailCover.querySelector(".emoji").textContent = c.emoji;
  detailCat.textContent = c.label;
  detailTitle.textContent = c.title;
  detailMeta.textContent = `Series · ${eps.length} episodes · ❤️ ${c.likes}`;
  detailDesc.textContent =
    `An expert-led series on ${c.label.toLowerCase()} — ${eps.length} guided lessons you can follow at your own pace, on your own terms.`;
  updateDetailSave();

  renderEpisodes(c);

  detail.hidden = false;
  document.body.classList.add("detail-open");
  detail.scrollTop = 0;
}

function closeDetail() {
  detail.hidden = true;
  document.body.classList.remove("detail-open");
  currentDetail = null;
}

document.getElementById("detailBack").addEventListener("click", closeDetail);
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!unlock.hidden) closeUnlock();
  else if (!detail.hidden) closeDetail();
});
detailSave.addEventListener("click", () => {
  if (currentDetail) { toggleSave(currentDetail.title); updateDetailSave(); }
});
// ---- Unlock / paywall modal: shown whenever a user tries to view content ----
const unlock = document.getElementById("unlock");
const openUnlock = () => { unlock.hidden = false; document.body.classList.add("no-scroll"); };
const closeUnlock = () => { unlock.hidden = true; document.body.classList.remove("no-scroll"); };
unlock.addEventListener("click", (e) => {
  // The unlock button is a real link; close only when tapping the backdrop
  if (e.target.hasAttribute("data-close")) closeUnlock();
});

// Clicking any episode (the content) opens the 0元试看 free-preview popup
epList.addEventListener("click", (e) => {
  if (e.target.closest(".ep")) openUnlock();
});

// The "0元试看" watch CTA opens the same popup
document.getElementById("detailPlay").addEventListener("click", openUnlock);

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".save-btn, .add-shelf");
  if (btn) { e.preventDefault(); toggleSave(btn.dataset.title); return; }
  const card = e.target.closest(".card");
  if (card) openDetail(card.dataset.title);
});

// "My shelf" button in the desktop nav filters to saved courses
shelfBtn.addEventListener("click", () => {
  shelfOnly = !shelfOnly;
  if (shelfOnly) document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  render();
});

// ---- Mobile short-drama style bottom tabs: Home / Saved / Me ----
const TAB_TITLES = { home: "Home", shelf: "Saved", me: "Me" };
const appTitle = document.getElementById("appTitle");
const tabBadge = document.getElementById("tabBadge");
const meShelfCount = document.getElementById("meShelfCount");

function setTab(tab) {
  document.body.dataset.tab = tab;
  document.querySelectorAll(".tab").forEach((t) =>
    t.classList.toggle("active", t.dataset.tab === tab)
  );
  appTitle.textContent = TAB_TITLES[tab] || "";
  // The "Saved" tab reuses the shelf-only filter
  shelfOnly = tab === "shelf";
  window.scrollTo({ top: 0 });
  render();
}

document.getElementById("tabbar").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (tab) setTab(tab.dataset.tab);
});

// Tapping "My shelf" inside the profile screen jumps to the Saved tab
document.querySelector('.me-list [data-go="shelf"]')
  ?.addEventListener("click", () => setTab("shelf"));

// Keep the mobile shelf counts in sync whenever the shelf changes
const syncShelfBadges = () => {
  tabBadge.textContent = saved.size;
  tabBadge.hidden = saved.size === 0;
  if (meShelfCount) meShelfCount.textContent = saved.size;
};

// initialise mobile state
document.body.dataset.tab = "home";
syncShelfBadges();

// Category filters
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  render();
});

// Courses / All videos toggle
document.querySelectorAll(".seg").forEach((seg) => {
  seg.addEventListener("click", () => {
    document.querySelectorAll(".seg").forEach((s) => s.classList.remove("active"));
    seg.classList.add("active");
    activeView = seg.dataset.view;
    render();
  });
});

// Dismissible promo bar
const promo = document.getElementById("promo");
if (promo) {
  promo.addEventListener("click", () => promo.style.display = "none");
}

render();
