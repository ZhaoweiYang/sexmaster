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
    <article class="card">
      <div class="card-thumb" style="background: linear-gradient(135deg, ${c.grad[0]}, ${c.grad[1]});">
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
          <p class="card-cat">${c.label}</p>
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

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".save-btn, .add-shelf");
  if (!btn) return;
  e.preventDefault();
  toggleSave(btn.dataset.title);
});

// "My shelf" button in the nav filters to saved courses
shelfBtn.addEventListener("click", () => {
  shelfOnly = !shelfOnly;
  if (shelfOnly) document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  render();
});

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
