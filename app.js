// TaskFlow v2.1 — Full Feature Engine
// ═══════════════════════════════════════

// ── i18n ──
const LANG = {
  id: {
    subtitle: 'Eksekusi fokus harian: rapi, cepat, dan selalu on-track.',
    streak: 'hari streak', add_task: '➕ Tambah Tugas Baru', task_name: 'Nama Tugas',
    category: 'Kategori', priority: 'Prioritas', recurring: 'Berulang',
    link: 'Link / Lampiran', description: 'Deskripsi', add_btn: '✨ Tambah Tugas',
    newest: 'Terbaru', priority_sort: 'Prioritas', category_sort: 'Kategori',
    total: 'Total', in_progress: 'Dikerjakan', done: 'Selesai', completed: 'Selesai',
    list_view: '📋 List', kanban_view: '📊 Board', dashboard_view: '📈 Dashboard',
    weekly_report: '📋 Laporan Minggu Ini', completed_this_week: 'Selesai',
    added_this_week: 'Ditambah', focus_min: 'Mnt Fokus',
    achievements: '🏆 Pencapaian', by_category: '📊 Per Kategori',
    ambient: '🎵 Ambient Sound', pending_col: 'Pending',
    progress_col: 'In Progress', done_col: 'Done',
    // new keys
    empty_title: 'Belum ada tugas', empty_desc: 'Tambahkan tugas pertama Anda!',
    stats_title: '📊 Statistik', calendar_title: '📅 Kalender Deadline',
    deadline_7: '🔔 Deadline 7 Hari', no_deadline_7: 'Tidak ada deadline 7 hari. 🎉',
    today_label: 'Hari ini', saving: 'Menyimpan...', saved: 'Tersimpan ✓',
    save_fail: 'Gagal simpan', task_saved: 'Disimpan', task_added: 'Tugas ditambahkan!',
    moved_trash: 'Dipindahkan ke Trash', restored: 'Dipulihkan',
    no_undo: 'Tidak ada undo', no_redo: 'Tidak ada redo',
    enter_name: 'Masukkan nama!', past_deadline: 'Deadline sudah lewat. Lanjut?',
    bulk_confirm: 'Hapus {n} tugas?', deleted_trash: 'Dihapus ke trash',
    notif_checked: 'Notifikasi diperiksa', import_confirm: 'Import mengganti data. Lanjut?',
    import_invalid: 'File tidak valid', export_fail: 'Export gagal',
    focus_pick: 'Pilih tugas untuk difokuskan', focus_no_task: 'Tidak ada tugas aktif',
    focus_done: 'Fokus selesai! 🎉', focus_start: '▶ Mulai', focus_continue: '▶ Lanjut',
    focus_close: '✕ Tutup', focus_reset: '🔄 Reset', focus_pause: '⏸ Pause',
    select_all: 'Pilih semua', selected_count: '{n} dipilih',
    sub_add: '+ Tambah', delete_title: '🗑️ Hapus Tugas',
    delete_msg: 'Pindahkan ke trash?', delete_cancel: 'Batal', delete_confirm: 'Hapus',
    bulk_cancel: 'Batal', bulk_delete: '🗑 Hapus',
    activity_30: '📅 Aktivitas 30 Hari', hm_less: 'Kurang', hm_more: 'Banyak',
    deadline_today: '⚠️ Deadline Hari Ini!', deadline_tomorrow: '📅 Deadline Besok',
    amb_none: 'Tidak Ada', amb_rain: '🌧 Hujan', amb_fire: '🔥 Api Unggun',
    amb_wind: '🍃 Angin', amb_waves: '🌊 Ombak',
    rec_daily: 'Harian', rec_weekly: 'Mingguan', rec_monthly: 'Bulanan', rec_none: 'Tidak',
    filter_all: 'Semua', filter_active: 'Aktif',
    adv_cat: 'Kategori', adv_pri: 'Prioritas', adv_from: 'Dari Tanggal',
    adv_to: 'Sampai Tanggal', adv_show: 'Tampilkan',
    cal_days: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    ph_task: 'Apa yang ingin Anda kerjakan?', ph_search: 'Cari tugas...', ph_desc: 'Catatan singkat...',
    ins_rate: 'Tingkat Penyelesaian', ins_avg: 'Rata-rata Waktu', ins_day: 'Hari Paling Produktif',
    ins_tasks_week: 'tugas minggu ini', ins_vs_last: 'vs minggu lalu',
    ins_per_task: 'per tugas', ins_tasks_done: 'tugas selesai',
    ins_no_data: 'Belum ada data', ins_up: '↑', ins_down: '↓', ins_same: '—',
    day_names: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  },
  en: {
    subtitle: 'Daily focused execution: organized, fast, always on-track.',
    streak: 'day streak', add_task: '➕ Add New Task', task_name: 'Task Name',
    category: 'Category', priority: 'Priority', recurring: 'Recurring',
    link: 'Link / Attachment', description: 'Description', add_btn: '✨ Add Task',
    newest: 'Newest', priority_sort: 'Priority', category_sort: 'Category',
    total: 'Total', in_progress: 'In Progress', done: 'Done', completed: 'Completed',
    list_view: '📋 List', kanban_view: '📊 Board', dashboard_view: '📈 Dashboard',
    weekly_report: '📋 This Week\'s Report', completed_this_week: 'Completed',
    added_this_week: 'Added', focus_min: 'Focus Min',
    achievements: '🏆 Achievements', by_category: '📊 By Category',
    ambient: '🎵 Ambient Sound', pending_col: 'Pending',
    progress_col: 'In Progress', done_col: 'Done',
    // new keys
    empty_title: 'No tasks yet', empty_desc: 'Add your first task!',
    stats_title: '📊 Statistics', calendar_title: '📅 Deadline Calendar',
    deadline_7: '🔔 Deadlines in 7 Days', no_deadline_7: 'No deadlines in 7 days. 🎉',
    today_label: 'Today', saving: 'Saving...', saved: 'Saved ✓',
    save_fail: 'Save failed', task_saved: 'Saved', task_added: 'Task added!',
    moved_trash: 'Moved to Trash', restored: 'Restored',
    no_undo: 'Nothing to undo', no_redo: 'Nothing to redo',
    enter_name: 'Enter a name!', past_deadline: 'Deadline has passed. Continue?',
    bulk_confirm: 'Delete {n} tasks?', deleted_trash: 'Deleted to trash',
    notif_checked: 'Notifications checked', import_confirm: 'Import will replace data. Continue?',
    import_invalid: 'Invalid file', export_fail: 'Export failed',
    focus_pick: 'Pick a task to focus on', focus_no_task: 'No active tasks',
    focus_done: 'Focus complete! 🎉', focus_start: '▶ Start', focus_continue: '▶ Continue',
    focus_close: '✕ Close', focus_reset: '🔄 Reset', focus_pause: '⏸ Pause',
    select_all: 'Select all', selected_count: '{n} selected',
    sub_add: '+ Add', delete_title: '🗑️ Delete Task',
    delete_msg: 'Move to trash?', delete_cancel: 'Cancel', delete_confirm: 'Delete',
    bulk_cancel: 'Cancel', bulk_delete: '🗑 Delete',
    activity_30: '📅 Activity (30 Days)', hm_less: 'Less', hm_more: 'More',
    deadline_today: '⚠️ Deadline Today!', deadline_tomorrow: '📅 Deadline Tomorrow',
    amb_none: 'None', amb_rain: '🌧 Rain', amb_fire: '🔥 Campfire',
    amb_wind: '🍃 Wind', amb_waves: '🌊 Waves',
    rec_daily: 'Daily', rec_weekly: 'Weekly', rec_monthly: 'Monthly', rec_none: 'None',
    filter_all: 'All', filter_active: 'Active',
    adv_cat: 'Category', adv_pri: 'Priority', adv_from: 'From Date',
    adv_to: 'To Date', adv_show: 'Show',
    cal_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    ph_task: 'What do you want to work on?', ph_search: 'Search tasks...', ph_desc: 'Short note...',
    ins_rate: 'Completion Rate', ins_avg: 'Avg. Completion Time', ins_day: 'Most Productive Day',
    ins_tasks_week: 'tasks this week', ins_vs_last: 'vs last week',
    ins_per_task: 'per task', ins_tasks_done: 'tasks done',
    ins_no_data: 'No data yet', ins_up: '↑', ins_down: '↓', ins_same: '—',
    day_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
};
let curLang = localStorage.getItem('tf_lang') || 'id';
function t(key, vars) { let s = LANG[curLang]?.[key] || LANG['id']?.[key] || key; if (vars) Object.entries(vars).forEach(([k, v]) => s = s.replace(`{${k}}`, v)); return s; }
function applyLang(l) { curLang = l; localStorage.setItem('tf_lang', l); document.documentElement.setAttribute('data-lang', l); document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (LANG[l][k]) el.textContent = LANG[l][k]; }); document.querySelectorAll('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; if (LANG[l][k]) el.placeholder = LANG[l][k]; }); }

// ── Theme & Accent ──
const root = document.documentElement;
function applyTheme(t) { root.setAttribute('data-theme', t); localStorage.setItem('tf_theme', t); document.getElementById('themeToggle').textContent = t === 'dark' ? '☀️' : '🌙'; }
function applyAccent(a) { if (a && a !== 'indigo') root.setAttribute('data-accent', a); else root.removeAttribute('data-accent'); localStorage.setItem('tf_accent', a || 'indigo'); document.querySelectorAll('.accent-dot').forEach(d => d.classList.toggle('active', d.dataset.accent === (a || 'indigo'))); }
applyTheme(localStorage.getItem('tf_theme') === 'dark' ? 'dark' : 'light');
applyAccent(localStorage.getItem('tf_accent') || 'indigo');

// ── Helpers ──
function animateValue(el, end) { if (!el) return; const s = parseInt(el.textContent) || 0; if (s === end) { el.textContent = end; return; } const st = performance.now(); const fn = n => { const p = Math.min((n - st) / 400, 1); el.textContent = Math.round(s + (end - s) * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(fn); }; requestAnimationFrame(fn); }
function launchConfetti() { const c = document.getElementById('confettiContainer'); const cols = ['#6366f1', '#f43f5e', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899']; for (let i = 0; i < 40; i++) { const p = document.createElement('div'); p.className = 'confetti-piece'; p.style.left = `${Math.random() * 100}%`; p.style.background = cols[Math.floor(Math.random() * cols.length)]; p.style.width = `${6 + Math.random() * 8}px`; p.style.height = `${6 + Math.random() * 8}px`; p.style.borderRadius = Math.random() > .5 ? '50%' : '2px'; p.style.animationDuration = `${1.5 + Math.random() * 2}s`; p.style.animationDelay = `${Math.random() * .5}s`; c.appendChild(p); setTimeout(() => p.remove(), 4000); } }
function isPastDate(v) { const s = new Date(`${v}T00:00:00`); const n = new Date(); n.setHours(0, 0, 0, 0); return s < n; }
function todayISO() { return new Date().toISOString().slice(0, 10); }
function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function genId() { return crypto?.randomUUID?.() || `t-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`; }
function clone(d) { return JSON.parse(JSON.stringify(d)); }
function pj(r, f) { try { return r ? JSON.parse(r) : f; } catch { return f; } }

// ── Notifications ──
function requestNotifPermission() { if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission(); }
async function sendNotif(title, body) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try {
    const reg = await navigator.serviceWorker.ready;
    if (reg && reg.showNotification) reg.showNotification(title, { body, icon: 'icons/icon-192.svg' });
    else new Notification(title, { body, icon: 'icons/icon-192.svg' });
  } catch (e) {
    if ('Notification' in window) new Notification(title, { body, icon: 'icons/icon-192.svg' });
  }
}
function checkDeadlineNotifs(tasks) { const today = todayISO(); const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1); const tmrw = tomorrow.toISOString().slice(0, 10); tasks.forEach(tk => { if (tk.status === 'done' || tk.trashed) return; if (tk.deadline === today) sendNotif(t('deadline_today'), tk.title); else if (tk.deadline === tmrw) sendNotif(t('deadline_tomorrow'), tk.title); }); }

// ── Ambient Sound (Web Audio API) ──
let ambientCtx = null, ambientNode = null;
function playAmbient(type) { stopAmbient(); if (type === 'none') return; ambientCtx = new (window.AudioContext || window.webkitAudioContext)(); const dur = 2, sr = ambientCtx.sampleRate, buf = ambientCtx.createBuffer(1, sr * dur, sr), d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) { let v = Math.random() * 2 - 1; if (type === 'rain') v *= (.3 + Math.random() * .2) * (Math.random() > .97 ? .5 : .15); else if (type === 'fire') v *= (.1 + Math.sin(i / sr * 3) * .1); else if (type === 'wind') v *= (.08 + Math.sin(i / sr * .5) * .08); else if (type === 'waves') v *= (.15 + Math.sin(i / sr * .3) * .15); d[i] = v; } ambientNode = ambientCtx.createBufferSource(); ambientNode.buffer = buf; ambientNode.loop = true; const g = ambientCtx.createGain(); g.gain.value = .3; ambientNode.connect(g); g.connect(ambientCtx.destination); ambientNode.start(); }
function stopAmbient() { if (ambientNode) { try { ambientNode.stop(); } catch { } ambientNode = null; } if (ambientCtx) { ambientCtx.close(); ambientCtx = null; } }

// ── Streak & Gamification ──
function getStreakData() { return pj(localStorage.getItem('tf_streak'), { dates: [], current: 0, best: 0 }); }
function saveStreakData(d) { localStorage.setItem('tf_streak', JSON.stringify(d)); }
function recordStreak() { const d = getStreakData(); const today = todayISO(); if (d.dates.includes(today)) return d; d.dates.push(today); d.dates = d.dates.slice(-365); const sorted = [...new Set(d.dates)].sort().reverse(); let streak = 1; for (let i = 1; i < sorted.length; i++) { const prev = new Date(sorted[i - 1]); const cur = new Date(sorted[i]); const diff = (prev - cur) / 86400000; if (diff === 1) streak++; else break; } d.current = streak; if (streak > d.best) d.best = streak; saveStreakData(d); return d; }
function getStreak() { const d = getStreakData(); const today = todayISO(); const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); const yISO = yesterday.toISOString().slice(0, 10); if (!d.dates.includes(today) && !d.dates.includes(yISO)) { d.current = 0; saveStreakData(d); } return d; }

const ACHIEVEMENTS = [
  { id: 'first', icon: '🌟', name: 'First Steps', desc_id: 'Selesaikan 1 tugas', desc_en: 'Complete 1 task', check: t => t.filter(x => x.status === 'done').length >= 1 },
  { id: 'five', icon: '✋', name: 'High Five', desc_id: 'Selesaikan 5 tugas', desc_en: 'Complete 5 tasks', check: t => t.filter(x => x.status === 'done').length >= 5 },
  { id: 'ten', icon: '🔟', name: 'Perfect 10', desc_id: 'Selesaikan 10 tugas', desc_en: 'Complete 10 tasks', check: t => t.filter(x => x.status === 'done').length >= 10 },
  { id: 'fifty', icon: '🏅', name: 'Half Century', desc_id: 'Selesaikan 50 tugas', desc_en: 'Complete 50 tasks', check: t => t.filter(x => x.status === 'done').length >= 50 },
  { id: 'streak3', icon: '🔥', name: 'On Fire', desc_id: '3 hari streak', desc_en: '3-day streak', check: () => getStreak().current >= 3 },
  { id: 'streak7', icon: '💪', name: 'Week Warrior', desc_id: '7 hari streak', desc_en: '7-day streak', check: () => getStreak().current >= 7 },
  { id: 'streak30', icon: '👑', name: 'Monthly Master', desc_id: '30 hari streak', desc_en: '30-day streak', check: () => getStreak().current >= 30 },
  { id: 'focus5', icon: '🧘', name: 'Focus Ninja', desc_id: '5 sesi fokus', desc_en: '5 focus sessions', check: () => (pj(localStorage.getItem('tf_focus_count'), 0)) >= 5 },
  { id: 'cats', icon: '🗂️', name: 'Organized', desc_id: 'Gunakan 4+ kategori', desc_en: 'Use 4+ categories', check: t => new Set(t.map(x => x.category)).size >= 4 },
  { id: 'sub', icon: '📋', name: 'Detail Oriented', desc_id: 'Buat 10+ sub-tasks', desc_en: 'Create 10+ sub-tasks', check: t => t.reduce((a, x) => a + (x.subtasks || []).length, 0) >= 10 },
];

// ── PWA ──
// ── PWA ──
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => { });
let deferredInstallPrompt = null;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installBtn) installBtn.style.display = 'inline-flex';
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  if (installBtn) installBtn.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', () => {
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
      }
    });
  }
});

// ═══════════════════════════════════════
// TaskManager Class
// ═══════════════════════════════════════
class TaskManager {
  constructor() {
    this.storageKey = 'taskflow_tasks'; this.metaKey = 'taskflow_meta';
    this.pageSize = 10; this.currentPage = 1; this.calendarDate = new Date();
    this.selectedDate = todayISO(); this.selectedTaskIds = new Set();
    this.lastRenderedRows = []; this.currentFilter = 'all'; this.currentSort = 'newest';
    this.currentView = 'list'; this.toDelete = null; this.saveTimer = null; this.savedTimer = null;
    this.undoStack = []; this.redoStack = []; this.maxHistory = 80;
    this.advFilter = { category: '', priority: '', dateFrom: '', dateTo: '', show: 'active' };
    this.taskTimers = {};
    this.tasks = pj(localStorage.getItem(this.storageKey), []);
  }

  save(opt = {}) {
    document.getElementById('savingIndicator').classList.add('on');
    document.getElementById('savingLabel').textContent = t('saving');
    clearTimeout(this.saveTimer); clearTimeout(this.savedTimer);
    this.saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
        document.getElementById('savingLabel').textContent = t('saved');
        this.savedTimer = setTimeout(() => document.getElementById('savingIndicator').classList.remove('on'), 900);
        if (!opt.silent) this.toast(t('task_saved'), 's');
      } catch { document.getElementById('savingIndicator').classList.remove('on'); this.toast(t('save_fail'), 'e'); }
    }, 300);
  }

  pushHistory() { this.undoStack.push(clone(this.tasks)); if (this.undoStack.length > this.maxHistory) this.undoStack.shift(); this.redoStack = []; }
  undo() { if (!this.undoStack.length) { this.toast(t('no_undo'), 'i'); return; } this.redoStack.push(clone(this.tasks)); this.tasks = this.undoStack.pop(); this.save({ silent: true }); this.render(); this.toast('Undo ✓', 'i'); }
  redo() { if (!this.redoStack.length) { this.toast(t('no_redo'), 'i'); return; } this.undoStack.push(clone(this.tasks)); this.tasks = this.redoStack.pop(); this.save({ silent: true }); this.render(); this.toast('Redo ✓', 'i'); }

  // CRUD
  add(title, priority, deadline, status, category, desc, recurring, link) {
    this.pushHistory();
    this.tasks.unshift({ id: genId(), title: title || 'Untitled', description: desc || '', priority: priority || 'medium', status: status || 'pending', category: category || 'other', deadline: deadline || todayISO(), subtasks: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), completedAt: null, pinned: false, trashed: false, recurring: recurring || 'none', link: link || '', timeSpent: 0, order: this.tasks.length });
    this.save({ silent: true }); this.render(); this.toast(t('task_added'), 's');
  }

  update(id, patch, opt = { silent: true }) {
    const i = this.tasks.findIndex(x => x.id === id); if (i < 0) return; this.pushHistory();
    const wasNotDone = this.tasks[i].status !== 'done';
    this.tasks[i] = { ...this.tasks[i], ...patch, updatedAt: new Date().toISOString() };
    if (patch.status === 'done' && wasNotDone) { this.tasks[i].completedAt = new Date().toISOString(); launchConfetti(); recordStreak(); this.handleRecurring(this.tasks[i]); }
    this.save(opt); this.updateStats(); this.renderChart();
  }

  remove(id) { this.pushHistory(); const tk = this.tasks.find(x => x.id === id); if (tk) { tk.trashed = true; tk.updatedAt = new Date().toISOString(); } this.save({ silent: true }); this.render(); this.toast(t('moved_trash'), 'i'); }
  permanentDelete(id) { this.pushHistory(); this.tasks = this.tasks.filter(tk => tk.id !== id); this.save({ silent: true }); this.render(); }
  restore(id) { const tk = this.tasks.find(x => x.id === id); if (tk) { this.pushHistory(); tk.trashed = false; this.save({ silent: true }); this.render(); this.toast(t('restored'), 's'); } }

  togglePin(id) { const t = this.tasks.find(x => x.id === id); if (t) { this.pushHistory(); t.pinned = !t.pinned; this.save({ silent: true }); this.render(); } }

  handleRecurring(t) { if (!t.recurring || t.recurring === 'none') return; const next = { ...clone(t), id: genId(), status: 'pending', completedAt: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; const d = new Date(t.deadline); if (t.recurring === 'daily') d.setDate(d.getDate() + 1); else if (t.recurring === 'weekly') d.setDate(d.getDate() + 7); else if (t.recurring === 'monthly') d.setMonth(d.getMonth() + 1); next.deadline = d.toISOString().slice(0, 10); this.tasks.unshift(next); }

  // Subtasks
  addSubtask(tid, text) { const t = this.tasks.find(x => x.id === tid); if (!t || !text.trim()) return; this.pushHistory(); if (!t.subtasks) t.subtasks = []; t.subtasks.push({ id: genId(), text: text.trim(), done: false }); this.save({ silent: true }); this.render(); }
  toggleSubtask(tid, sid) { const t = this.tasks.find(x => x.id === tid); if (!t) return; const s = (t.subtasks || []).find(x => x.id === sid); if (!s) return; this.pushHistory(); s.done = !s.done; this.save({ silent: true }); this.render(); }
  removeSubtask(tid, sid) { const t = this.tasks.find(x => x.id === tid); if (!t) return; this.pushHistory(); t.subtasks = (t.subtasks || []).filter(x => x.id !== sid); this.save({ silent: true }); this.render(); }

  // Time tracking
  startTimer(id) {
    if (this.taskTimers[id]) return;
    this.taskTimers[id] = {
      start: Date.now(),
      interval: setInterval(() => {
        const badge = document.querySelector(`.task-item[data-id="${id}"] .task-timer-badge`);
        if (badge) {
          const elapsed = Math.floor((Date.now() - this.taskTimers[id].start) / 1000);
          const task = this.tasks.find(x => x.id === id);
          const total = (task?.timeSpent || 0) + elapsed;
          badge.textContent = `⏱ ${this.formatTime(total)}`;
        }
      }, 1000)
    };
    this.render();
  }
  stopTimer(id) { const timer = this.taskTimers[id]; if (!timer) return; const elapsed = Math.floor((Date.now() - timer.start) / 1000); clearInterval(timer.interval); delete this.taskTimers[id]; const t = this.tasks.find(x => x.id === id); if (t) { this.pushHistory(); t.timeSpent = (t.timeSpent || 0) + elapsed; this.save({ silent: true }); } this.render(); }
  formatTime(s) { const sec = s % 60; const m = Math.floor(s / 60) % 60; const h = Math.floor(s / 3600); if (h > 0) return `${h}h${m}m`; if (m > 0) return `${m}m${sec}s`; return `${sec}s`; }

  // Filtering
  filtered() {
    const q = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
    const af = this.advFilter;
    return this.tasks.filter(t => {
      if (af.show === 'active' && t.trashed) return false;
      if (af.show === 'trash' && !t.trashed) return false;
      if (this.currentFilter !== 'all' && t.status !== this.currentFilter) return false;
      if (af.category && t.category !== af.category) return false;
      if (af.priority && t.priority !== af.priority) return false;
      if (af.dateFrom && t.deadline < af.dateFrom) return false;
      if (af.dateTo && t.deadline > af.dateTo) return false;
      if (q && !t.title.toLowerCase().includes(q) && !(t.description || '').toLowerCase().includes(q) && !(t.category || '').toLowerCase().includes(q)) return false;
      return true;
    });
  }

  sorted(arr) {
    const x = [...arr]; const pinned = x.filter(t => t.pinned); const rest = x.filter(t => !t.pinned);
    const sortFn = (a, b) => {
      if (this.currentSort === 'deadline') return new Date(a.deadline) - new Date(b.deadline);
      if (this.currentSort === 'priority') { const r = { high: 0, medium: 1, low: 2 }; return r[a.priority] - r[b.priority]; }
      if (this.currentSort === 'category') return (a.category || '').localeCompare(b.category || '');
      return new Date(b.createdAt) - new Date(a.createdAt);
    };
    pinned.sort(sortFn); rest.sort(sortFn); return [...pinned, ...rest];
  }

  view() { return this.sorted(this.filtered()); }
  pagedRows(rows) { const tp = Math.max(1, Math.ceil(rows.length / this.pageSize)); if (this.currentPage > tp) this.currentPage = tp; if (this.currentPage < 1) this.currentPage = 1; return rows.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize); }
  setPage(p) { this.currentPage = p; this.render(); }

  // Selection
  toggleSelect(id, c) { if (c) this.selectedTaskIds.add(id); else this.selectedTaskIds.delete(id); this.updateBulkUI(); }
  clearSelection() { this.selectedTaskIds.clear(); this.updateBulkUI(); this.render(); }
  toggleSelectPage(c) { this.lastRenderedRows.forEach(t => { if (c) this.selectedTaskIds.add(t.id); else this.selectedTaskIds.delete(t.id); }); this.updateBulkUI(); this.render(); }
  deleteSelected() { if (!this.selectedTaskIds.size) return; if (!confirm(t('bulk_confirm', { n: this.selectedTaskIds.size }))) return; this.pushHistory(); this.tasks.forEach(tk => { if (this.selectedTaskIds.has(tk.id)) tk.trashed = true; }); this.selectedTaskIds.clear(); this.save({ silent: true }); this.render(); this.toast(t('deleted_trash'), 'i'); }

  moveTask(id, dir) { const rows = this.view(); const idx = rows.findIndex(t => t.id === id); if (idx < 0) return; const ni = idx + dir; if (ni < 0 || ni >= rows.length) return; this.pushHistory(); const ids = rows.map(t => t.id);[ids[idx], ids[ni]] = [ids[ni], ids[idx]]; const set = new Set(ids); const map = new Map(this.tasks.filter(t => set.has(t.id)).map(t => [t.id, t])); const vis = ids.map(id => map.get(id)).filter(Boolean); const merged = []; let p = 0; for (const t of this.tasks) merged.push(set.has(t.id) ? vis[p++] : t); this.tasks = merged; this.save({ silent: true }); this.render(); }

  // ── Render ──
  render() {
    if (this.currentView === 'list') this.renderList();
    else if (this.currentView === 'kanban') this.renderKanban();
    else if (this.currentView === 'dashboard') this.renderDashboard();
    this.updateStats(); this.renderChart(); this.renderStreak(); this.updateInsights();
  }

  renderList() {
    const list = document.getElementById('taskList'); const empty = document.getElementById('emptyState');
    const all = this.view(); const rows = this.pagedRows(all); this.lastRenderedRows = rows;
    if (!all.length) { list.innerHTML = ''; empty.style.display = 'block'; this.renderPagination(0); this.updateBulkUI(); this.renderCalendar(); return; }
    empty.style.display = 'none'; list.innerHTML = rows.map(t => this.renderRow(t)).join('');
    this.renderPagination(all.length); this.updateBulkUI(); this.renderCalendar();
  }

  renderRow(t) {
    const done = t.status === 'done'; const sel = this.selectedTaskIds.has(t.id);
    const cats = { work: '💼 Work', personal: '👤 Personal', study: '📚 Study', health: '💪 Health', finance: '💰 Finance', other: '📌 Other' };
    const subs = t.subtasks || []; const subDone = subs.filter(s => s.done).length;
    const isTimerOn = !!this.taskTimers[t.id]; const elapsed = isTimerOn ? Math.floor((Date.now() - this.taskTimers[t.id].start) / 1000) : 0;
    const totalTime = (t.timeSpent || 0) + elapsed;
    const recLabels = { daily: window.t('rec_daily'), weekly: window.t('rec_weekly'), monthly: window.t('rec_monthly') };

    let extras = '';
    if (t.recurring && t.recurring !== 'none') extras += `<span class="task-recurring-badge">🔁 ${recLabels[t.recurring] || t.recurring}</span>`;
    if (t.link) extras += `<a class="task-link" href="${esc(t.link)}" target="_blank" rel="noopener">🔗 Link</a>`;
    if (totalTime > 0 || isTimerOn) extras += `<span class="task-timer-badge ${isTimerOn ? 'timer-active' : ''}">⏱ ${this.formatTime(totalTime)}</span>`;

    const subHtml = `<div class="subtask-section"><div class="subtask-header"><span>Sub-tasks ${subs.length ? `(${subDone}/${subs.length})` : ''}</span><button class="subtask-add-btn" data-action="show-sub-input" data-id="${t.id}">${window.t('sub_add')}</button></div>${subs.length ? `<div class="subtask-progress"><div class="subtask-progress-fill" style="width:${subs.length ? (subDone / subs.length * 100) : 0}%"></div></div>` : ''}<div class="subtask-list">${subs.map(s => `<div class="subtask-item ${s.done ? 'done' : ''}"><input type="checkbox" ${s.done ? 'checked' : ''} data-action="toggle-sub" data-task-id="${t.id}" data-sub-id="${s.id}"><span class="subtask-text">${esc(s.text)}</span><button class="subtask-delete" data-action="delete-sub" data-task-id="${t.id}" data-sub-id="${s.id}">✕</button></div>`).join('')}</div><div class="subtask-input" id="subInput-${t.id}" style="display:none"><input class="input" placeholder="Sub-task..." data-sub-input="${t.id}" /><button class="btn btn-primary btn-sm" data-action="add-sub" data-id="${t.id}">+</button></div></div>`;

    return `<div class="task-item ${done ? 'done' : ''} ${sel ? 'selected' : ''} ${t.pinned ? 'pinned' : ''} ${t.trashed ? 'trashed' : ''}" data-id="${t.id}" data-priority="${t.priority}" draggable="true">
      <div class="task-top">
        <div class="task-select"><input type="checkbox" ${sel ? 'checked' : ''} data-action="select-item" data-id="${t.id}"></div>
        <label class="check-wrap"><input class="check-input" type="checkbox" data-action="toggle" data-id="${t.id}" ${done ? 'checked' : ''}><span class="check-box"></span></label>
        <div class="task-content">
          <div class="task-title" contenteditable="true" data-field="title" data-id="${t.id}">${esc(t.title)}</div>
          <div class="task-meta">
            <span class="chip-category cat-${t.category || 'other'}">${cats[t.category] || cats.other}</span>
            <span class="chip"><select data-field="priority" data-id="${t.id}"><option value="low" ${t.priority === 'low' ? 'selected' : ''}>🟢 Low</option><option value="medium" ${t.priority === 'medium' ? 'selected' : ''}>🟡 Med</option><option value="high" ${t.priority === 'high' ? 'selected' : ''}>🔴 High</option></select></span>
            <span class="chip"><select data-field="status" data-id="${t.id}"><option value="pending" ${t.status === 'pending' ? 'selected' : ''}>⏳ Pending</option><option value="in-progress" ${t.status === 'in-progress' ? 'selected' : ''}>🚀 ${window.t('in_progress')}</option><option value="done" ${t.status === 'done' ? 'selected' : ''}>✅ ${window.t('done')}</option></select></span>
            <span class="chip"><input type="date" data-field="deadline" data-id="${t.id}" value="${t.deadline}"></span>
            ${extras}
          </div>
          ${t.description ? `<div style="margin-top:6px;font-size:.85rem;color:var(--tm);padding:0 6px">${esc(t.description)}</div>` : ''}
          ${subHtml}
        </div>
        <div class="task-actions">
          <button class="action-btn pin-btn" data-action="pin" data-id="${t.id}" title="${t.pinned ? 'Unpin' : 'Pin'}">${t.pinned ? '📌' : '📍'}</button>
          <button class="action-btn" data-action="${isTimerOn ? 'stop-timer' : 'start-timer'}" data-id="${t.id}" title="Timer">${isTimerOn ? '⏹' : '⏱'}</button>
          <button class="action-btn move-btn" data-action="move-up" data-id="${t.id}">↑</button>
          <button class="action-btn move-btn" data-action="move-down" data-id="${t.id}">↓</button>
          ${t.trashed ? `<button class="action-btn" data-action="restore" data-id="${t.id}" title="Restore">♻️</button>` : ''}
          <button class="action-btn" data-action="open-delete" data-id="${t.id}">🗑</button>
        </div>
      </div>
    </div>`;
  }

  // ── Kanban ──
  renderKanban() {
    const active = this.tasks.filter(t => !t.trashed);
    ['pending', 'in-progress', 'done'].forEach(status => {
      const items = active.filter(t => t.status === status);
      const listEl = document.getElementById(status === 'pending' ? 'kanbanPendingList' : status === 'in-progress' ? 'kanbanProgressList' : 'kanbanDoneList');
      const countEl = document.getElementById(status === 'pending' ? 'kanbanPending' : status === 'in-progress' ? 'kanbanProgress' : 'kanbanDone');
      if (countEl) countEl.textContent = items.length;
      if (!listEl) return;
      listEl.innerHTML = items.map(t => {
        const cats = { work: '💼', personal: '👤', study: '📚', health: '💪', finance: '💰', other: '📌' };
        return `<div class="kanban-card" draggable="true" data-id="${t.id}"><div class="kanban-card-title">${esc(t.title)}</div><div class="kanban-card-meta"><span class="chip-category cat-${t.category || 'other'}" style="font-size:.7rem">${cats[t.category] || '📌'} ${t.category}</span><span class="chip" style="font-size:.7rem">${t.priority === 'high' ? '🔴' : t.priority === 'medium' ? '🟡' : '🟢'}</span>${t.deadline ? `<span class="chip" style="font-size:.7rem">📅 ${t.deadline}</span>` : ''}</div></div>`;
      }).join('');
      // Kanban drag
      listEl.querySelectorAll('.kanban-card').forEach(card => {
        card.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', card.dataset.id); card.classList.add('dragging'); });
        card.addEventListener('dragend', () => card.classList.remove('dragging'));
      });
      listEl.addEventListener('dragover', e => e.preventDefault());
      listEl.addEventListener('drop', e => { e.preventDefault(); const id = e.dataTransfer.getData('text/plain'); const newStatus = listEl.dataset.status; if (id && newStatus) this.update(id, { status: newStatus }); this.render(); });
    });
  }

  // ── Dashboard ──
  renderDashboard() {
    const now = new Date(); const weekAgo = new Date(); weekAgo.setDate(now.getDate() - 7);
    const wComp = this.tasks.filter(t => t.completedAt && new Date(t.completedAt) >= weekAgo).length;
    const wAdd = this.tasks.filter(t => new Date(t.createdAt) >= weekAgo).length;
    const focusCount = pj(localStorage.getItem('tf_focus_count'), 0);
    const streak = getStreak();
    animateValue(document.getElementById('weekCompleted'), wComp);
    animateValue(document.getElementById('weekAdded'), wAdd);
    animateValue(document.getElementById('weekFocus'), focusCount);
    animateValue(document.getElementById('weekStreak'), streak.current);
    // Heatmap
    const hm = document.getElementById('heatmap'); if (hm) {
      const cells = []; for (let i = 29; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i); const iso = d.toISOString().slice(0, 10);
        const count = this.tasks.filter(tk => tk.completedAt && tk.completedAt.startsWith(iso)).length;
        const level = count === 0 ? 0 : count <= 1 ? 1 : count <= 2 ? 2 : count <= 4 ? 3 : 4;
        cells.push(`<div class="heatmap-cell hm-${level}" title="${iso}: ${count} selesai"></div>`);
      } hm.innerHTML = cells.join('');
    }
    // Achievements
    const al = document.getElementById('achievementsList'); if (al) {
      al.innerHTML = ACHIEVEMENTS.map(a => { const u = a.check(this.tasks); const desc = curLang === 'en' ? a.desc_en : a.desc_id; return `<div class="achievement ${u ? 'unlocked' : 'locked'}"><span class="achievement-icon">${a.icon}</span><div class="achievement-info"><div class="achievement-name">${a.name}</div><div class="achievement-desc">${desc}</div></div></div>`; }).join('');
    }
    // Category breakdown
    const cb = document.getElementById('catBreakdown'); if (cb) {
      const cats = ['work', 'personal', 'study', 'health', 'finance', 'other']; const colors = { work: 'var(--p)', personal: 'var(--accent)', study: 'var(--w)', health: 'var(--ok)', finance: 'var(--i)', other: 'var(--tm)' };
      const total = this.tasks.filter(t => !t.trashed).length || 1;
      cb.innerHTML = cats.map(c => { const n = this.tasks.filter(t => t.category === c && !t.trashed).length; const pct = Math.round(n / total * 100); return `<div class="cat-bar-item"><span class="cat-bar-label">${c}</span><div class="cat-bar-track"><div class="cat-bar-fill" style="width:${pct}%;background:${colors[c]}"></div></div><span class="cat-bar-num">${n}</span></div>`; }).join('');
    }
  }

  // ── Stats, Chart, Streak ──
  updateStats() {
    const active = this.tasks.filter(t => !t.trashed);
    animateValue(document.getElementById('totalTasks'), active.length);
    animateValue(document.getElementById('pendingTasks'), active.filter(t => t.status === 'pending').length);
    animateValue(document.getElementById('inProgressTasks'), active.filter(t => t.status === 'in-progress').length);
    animateValue(document.getElementById('completedTasks'), active.filter(t => t.status === 'done').length);
    const total = active.length; const fills = [total ? 100 : 0, total ? active.filter(t => t.status === 'pending').length / total * 100 : 0, total ? active.filter(t => t.status === 'in-progress').length / total * 100 : 0, total ? active.filter(t => t.status === 'done').length / total * 100 : 0];
    document.querySelectorAll('.stat-card').forEach((c, i) => { const f = c.querySelector('.stat-progress-fill'); if (f) f.style.width = `${fills[i]}%`; });
  }

  renderChart() {
    const active = this.tasks.filter(t => !t.trashed); const total = active.length;
    const done = active.filter(t => t.status === 'done').length; const prog = active.filter(t => t.status === 'in-progress').length; const pend = active.filter(t => t.status === 'pending').length;
    const circ = 2 * Math.PI * 40;
    const arcs = [total ? done / total * circ : 0, total ? prog / total * circ : 0, total ? pend / total * circ : 0];
    ['donutDone', 'donutProgress', 'donutPending'].forEach((id, i) => { const el = document.getElementById(id); if (el) { el.setAttribute('stroke-dasharray', `${arcs[i]} ${circ}`); el.setAttribute('stroke-dashoffset', `${-arcs.slice(0, i).reduce((a, v) => a + v, 0)}`); } });
    const pe = document.getElementById('donutPercent'); if (pe) pe.textContent = total ? `${Math.round(done / total * 100)}%` : '0%';
  }

  updateInsights() {
    const now = new Date();
    const active = this.tasks.filter(tk => !tk.trashed);
    const done = active.filter(tk => tk.status === 'done' && tk.completedAt);

    // 1. Completion Rate (this week vs last week)
    const weekStart = new Date(now); weekStart.setDate(now.getDate() - now.getDay()); weekStart.setHours(0, 0, 0, 0);
    const lastWeekStart = new Date(weekStart); lastWeekStart.setDate(lastWeekStart.getDate() - 7);
    const thisWeek = done.filter(tk => new Date(tk.completedAt) >= weekStart).length;
    const lastWeek = done.filter(tk => { const d = new Date(tk.completedAt); return d >= lastWeekStart && d < weekStart; }).length;
    const rateEl = document.getElementById('insightRate');
    const rateSub = document.getElementById('insightRateSub');
    if (rateEl) rateEl.textContent = `${thisWeek} ${t('ins_tasks_week')}`;
    if (rateSub) {
      const diff = thisWeek - lastWeek;
      if (diff > 0) rateSub.innerHTML = `<span class="trend-up">${t('ins_up')} +${diff}</span> ${t('ins_vs_last')}`;
      else if (diff < 0) rateSub.innerHTML = `<span class="trend-down">${t('ins_down')} ${diff}</span> ${t('ins_vs_last')}`;
      else rateSub.innerHTML = `<span class="trend-same">${t('ins_same')}</span> ${t('ins_vs_last')}`;
    }

    // 2. Avg Completion Time
    const avgEl = document.getElementById('insightAvg');
    const avgSub = document.getElementById('insightAvgSub');
    const withTimes = done.filter(tk => tk.createdAt && tk.completedAt);
    if (withTimes.length > 0) {
      const avgMs = withTimes.reduce((sum, tk) => sum + (new Date(tk.completedAt) - new Date(tk.createdAt)), 0) / withTimes.length;
      const avgH = avgMs / 3600000;
      if (avgEl) avgEl.textContent = avgH < 1 ? `${Math.round(avgH * 60)}m` : avgH < 24 ? `${Math.round(avgH)}h` : `${(avgH / 24).toFixed(1)}d`;
      if (avgSub) avgSub.textContent = `${t('ins_per_task')}`;
    } else {
      if (avgEl) avgEl.textContent = '—';
      if (avgSub) avgSub.textContent = t('ins_no_data');
    }

    // 3. Most Productive Day
    const dayEl = document.getElementById('insightDay');
    const daySub = document.getElementById('insightDaySub');
    if (done.length > 0) {
      const dayCounts = [0, 0, 0, 0, 0, 0, 0];
      done.forEach(tk => { if (tk.completedAt) dayCounts[new Date(tk.completedAt).getDay()]++; });
      const maxDay = dayCounts.indexOf(Math.max(...dayCounts));
      const dayNames = t('day_names');
      if (dayEl) dayEl.textContent = Array.isArray(dayNames) ? dayNames[maxDay] : dayNames;
      if (daySub) daySub.textContent = `${dayCounts[maxDay]} ${t('ins_tasks_done')}`;
    } else {
      if (dayEl) dayEl.textContent = '—';
      if (daySub) daySub.textContent = t('ins_no_data');
    }
  }

  renderStreak() { const s = getStreak(); const el = document.getElementById('streakCount'); if (el) el.textContent = s.current; }

  renderPagination(n) {
    const el = document.getElementById('pagination'); if (!el) return;
    const tp = Math.max(1, Math.ceil(n / this.pageSize));
    if (n <= this.pageSize) { el.style.display = 'none'; return; } el.style.display = 'flex';
    let h = `<button class="page-btn" data-page="${Math.max(1, this.currentPage - 1)}" ${this.currentPage === 1 ? 'disabled' : ''}>◀</button>`;
    for (let i = 1; i <= tp; i++)h += `<button class="page-btn ${i === this.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    h += `<button class="page-btn" data-page="${Math.min(tp, this.currentPage + 1)}" ${this.currentPage === tp ? 'disabled' : ''}>▶</button>`; el.innerHTML = h;
  }

  updateBulkUI() { const bar = document.getElementById('bulkBar'); const cnt = document.getElementById('bulkCount'); if (!bar || !cnt) return; const n = this.selectedTaskIds.size; cnt.textContent = t('selected_count', { n }); bar.classList.toggle('show', n > 0); const cb = document.getElementById('selectPageCheckbox'); if (cb) { const ids = this.lastRenderedRows.map(tk => tk.id); cb.checked = ids.length > 0 && ids.every(id => this.selectedTaskIds.has(id)); } }

  // ── Calendar ──
  renderCalendar() {
    const tEl = document.getElementById('calendarTitle'); const gEl = document.getElementById('calendarGrid'); const dEl = document.getElementById('dueList'); if (!tEl || !gEl || !dEl) return;
    const ms = new Date(this.calendarDate.getFullYear(), this.calendarDate.getMonth(), 1);
    const me = new Date(this.calendarDate.getFullYear(), this.calendarDate.getMonth() + 1, 0);
    const off = (ms.getDay() + 6) % 7; const days = me.getDate();
    const locale = curLang === 'en' ? 'en-US' : 'id-ID';
    const ml = ms.toLocaleDateString(locale, { month: 'long', year: 'numeric' }); tEl.textContent = ml.charAt(0).toUpperCase() + ml.slice(1);
    const tasksByDate = new Map();
    this.tasks.forEach(tk => { if (tk.deadline && !tk.trashed) { if (!tasksByDate.has(tk.deadline)) tasksByDate.set(tk.deadline, []); tasksByDate.get(tk.deadline).push(tk); } });
    const dayNames = LANG[curLang].cal_days;
    const ti = todayISO();
    const priColor = { high: '#ef4444', medium: '#f59e0b', low: '#10b981' };
    const statusIco = { pending: '⏳', 'in-progress': '🚀', done: '✅' };
    let cells = dayNames.map(d => `<div class="cal-head">${d}</div>`).join('');
    for (let i = 0; i < off; i++) cells += '<div class="cal-cell empty"></div>';
    for (let d = 1; d <= days; d++) {
      const iso = `${ms.getFullYear()}-${String(ms.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const tasks = tasksByDate.get(iso) || [];
      let dotsHtml = '';
      if (tasks.length) {
        const dots = tasks.slice(0, 4).map(tk => `<span class="cal-dot" style="background:${priColor[tk.priority] || priColor.medium}"></span>`).join('');
        dotsHtml = `<div class="cal-dots">${dots}${tasks.length > 4 ? `<span class="cal-dot-more">+${tasks.length - 4}</span>` : ''}</div>`;
      }
      let tipHtml = '';
      if (tasks.length) {
        const dl = new Date(`${iso}T00:00:00`).toLocaleDateString(locale, { day: 'numeric', month: 'short' });
        tipHtml = `<div class="cal-tooltip"><div class="cal-tip-head">📅 ${dl}</div>${tasks.map(tk => `<div class="cal-tip-row"><span class="cal-tip-dot" style="background:${priColor[tk.priority] || priColor.medium}"></span><span class="cal-tip-ico">${statusIco[tk.status] || '⏳'}</span><span class="cal-tip-name">${esc(tk.title)}</span></div>`).join('')}</div>`;
      }
      cells += `<button class="cal-cell ${this.selectedDate === iso ? 'active' : ''} ${ti === iso ? 'today' : ''} ${tasks.length ? 'has-tasks' : ''}" data-date="${iso}"><span>${d}</span>${dotsHtml}${tipHtml}</button>`;
    }
    gEl.innerHTML = cells;
    const now = new Date(); now.setHours(0, 0, 0, 0); const nw = new Date(now); nw.setDate(now.getDate() + 6);
    const wk = this.tasks.filter(tk => { if (!tk.deadline || tk.trashed) return false; const dd = new Date(`${tk.deadline}T00:00:00`); return dd >= now && dd <= nw; }).sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    if (!wk.length) { dEl.innerHTML = `<p style="color:var(--tm);font-size:.88rem">${t('no_deadline_7')}</p>`; return; }
    dEl.innerHTML = `<div class="due-list">${wk.map(tk => { const dd = new Date(`${tk.deadline}T00:00:00`); const diff = Math.floor((dd - now) / 86400000); const badge = diff === 0 ? 'today' : diff <= 2 ? 'soon' : 'safe'; const label = diff === 0 ? t('today_label') : `D-${diff}`; return `<div class="due-item"><span class="due-badge ${badge}">${label}</span><span class="due-title">${esc(tk.title)}</span><span class="due-date">${tk.deadline}</span></div>`; }).join('')}</div>`;
  }

  // Export/Import
  buildExport() { return { app: 'TaskFlow', version: 2.1, exportedAt: new Date().toISOString(), tasks: clone(this.tasks), theme: localStorage.getItem('tf_theme') || 'light', accent: localStorage.getItem('tf_accent') || 'indigo', lang: curLang }; }
  importPayload(p) { if (!p || !Array.isArray(p.tasks)) throw new Error('Invalid'); this.pushHistory(); this.tasks = clone(p.tasks); if (p.theme) applyTheme(p.theme); if (p.accent) applyAccent(p.accent); if (p.lang) applyLang(p.lang); this.save({ silent: true }); this.render(); }

  toast(msg, type = 'i') { const c = document.getElementById('toastContainer'); const icons = { s: '✅', e: '❌', i: 'ℹ️', w: '⚠️' }; const t = document.createElement('div'); t.className = `toast ${type}`; t.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span class="toast-msg">${msg}</span>`; c.appendChild(t); let timer = setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 3000); t.addEventListener('mouseenter', () => clearTimeout(timer)); t.addEventListener('mouseleave', () => { timer = setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 1500); }); }
}

// ═══════════════════════════════════════
// Initialize
// ═══════════════════════════════════════
const tm = new TaskManager();
applyLang(curLang);

// View toggle
document.querySelectorAll('.view-btn').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.view-btn').forEach(x => x.classList.remove('active')); b.classList.add('active');
  tm.currentView = b.dataset.view;
  document.getElementById('listView').style.display = b.dataset.view === 'list' ? '' : 'none';
  document.getElementById('kanbanView').style.display = b.dataset.view === 'kanban' ? '' : 'none';
  document.getElementById('dashboardView').style.display = b.dataset.view === 'dashboard' ? '' : 'none';
  tm.render();
}));

// Theme/Accent/Lang
document.getElementById('themeToggle').addEventListener('click', () => applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

document.getElementById('langToggle').addEventListener('click', () => { const nl = curLang === 'id' ? 'en' : 'id'; applyLang(nl); tm.render(); tm.toast(`Language: ${nl.toUpperCase()}`, 'i'); });

// Notifications
document.getElementById('notifBtn').addEventListener('click', () => { requestNotifPermission(); checkDeadlineNotifs(tm.tasks); tm.toast(t('notif_checked'), 'i'); });

// Form
document.getElementById('formToggle')?.addEventListener('click', () => { const g = document.getElementById('formGrid'); g.classList.toggle('collapsed'); document.getElementById('formToggle').textContent = g.classList.contains('collapsed') ? '▶' : '▼'; });

function addTask() {
  const el = document.getElementById('taskTitle'); const title = el.value.trim();
  if (!title) { tm.toast(t('enter_name'), 'e'); el.focus(); return; }
  const dl = document.getElementById('taskDeadline').value;
  if (dl && isPastDate(dl) && !confirm(t('past_deadline'))) return;
  tm.currentPage = 1;
  tm.add(title, document.getElementById('taskPriority').value, dl, document.getElementById('taskStatus').value, document.getElementById('taskCategory').value, document.getElementById('taskDesc').value.trim(), document.getElementById('taskRecurring').value, document.getElementById('taskLink').value.trim());
  el.value = ''; document.getElementById('taskDesc').value = ''; document.getElementById('taskLink').value = '';
  document.getElementById('taskPriority').value = 'medium'; document.getElementById('taskStatus').value = 'pending';
  document.getElementById('taskRecurring').value = 'none'; document.getElementById('taskDeadline').valueAsDate = new Date();
}
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Search/Sort/Filter
document.getElementById('searchInput').addEventListener('input', () => { tm.currentPage = 1; tm.render(); });
document.querySelectorAll('.sort-btn[data-sort]').forEach(b => b.addEventListener('click', e => { tm.currentSort = e.currentTarget.dataset.sort; document.querySelectorAll('.sort-btn[data-sort]').forEach(x => x.classList.remove('active')); e.currentTarget.classList.add('active'); tm.currentPage = 1; tm.render(); }));
document.querySelectorAll('.stat-card').forEach(c => c.addEventListener('click', () => { document.querySelectorAll('.stat-card').forEach(x => x.classList.remove('active')); c.classList.add('active'); tm.currentFilter = c.dataset.filter; tm.currentPage = 1; tm.render(); }));

// Advanced Filter
document.getElementById('advFilterToggle')?.addEventListener('click', () => { const p = document.getElementById('advFilterPanel'); p.style.display = p.style.display === 'none' ? 'block' : 'none'; });
['filterCategory', 'filterPriority', 'filterDateFrom', 'filterDateTo', 'filterShow'].forEach(id => { document.getElementById(id)?.addEventListener('change', e => { const k = id.replace('filter', '').toLowerCase().replace('datefrom', 'dateFrom').replace('dateto', 'dateTo'); tm.advFilter[k] = e.target.value; tm.currentPage = 1; tm.render(); }); });
document.getElementById('clearFiltersBtn')?.addEventListener('click', () => { tm.advFilter = { category: '', priority: '', dateFrom: '', dateTo: '', show: 'active' };['filterCategory', 'filterPriority', 'filterDateFrom', 'filterDateTo'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; }); document.getElementById('filterShow').value = 'active'; tm.currentPage = 1; tm.render(); });

// Task list events
const taskList = document.getElementById('taskList');
taskList.addEventListener('change', e => {
  const t = e.target, id = t.dataset.id;
  if (t.dataset.action === 'select-item') { tm.toggleSelect(id, t.checked); tm.render(); return; }
  if (t.dataset.action === 'toggle') { tm.update(id, { status: t.checked ? 'done' : 'pending' }); tm.render(); return; }
  if (t.dataset.action === 'toggle-sub') { tm.toggleSubtask(t.dataset.taskId, t.dataset.subId); return; }
  if (t.dataset.field === 'priority') { tm.update(id, { priority: t.value }); tm.render(); return; }
  if (t.dataset.field === 'status') { tm.update(id, { status: t.value }); tm.render(); return; }
  if (t.dataset.field === 'deadline') { tm.update(id, { deadline: t.value }); tm.render(); }
});

taskList.addEventListener('click', e => {
  const act = e.target.closest('[data-action]'); if (!act) return; const a = act.dataset.action, id = act.dataset.id;
  if (a === 'open-delete') { const t = tm.tasks.find(x => x.id === id); if (!t) return; tm.toDelete = id; document.getElementById('deleteTaskTitle').textContent = t.title; document.getElementById('deleteModal').classList.add('on'); return; }
  if (a === 'move-up') { tm.moveTask(id, -1); return; }
  if (a === 'move-down') { tm.moveTask(id, 1); return; }
  if (a === 'pin') { tm.togglePin(id); return; }
  if (a === 'start-timer') { tm.startTimer(id); return; }
  if (a === 'stop-timer') { tm.stopTimer(id); return; }
  if (a === 'restore') { tm.restore(id); return; }
  if (a === 'show-sub-input') { const el = document.getElementById(`subInput-${id}`); if (el) { el.style.display = el.style.display === 'none' ? 'flex' : 'none'; el.querySelector('input')?.focus(); } return; }
  if (a === 'add-sub') { const inp = document.querySelector(`[data-sub-input="${id}"]`); if (inp && inp.value.trim()) tm.addSubtask(id, inp.value); return; }
  if (a === 'delete-sub') { tm.removeSubtask(act.dataset.taskId, act.dataset.subId); return; }
});

taskList.addEventListener('keydown', e => { if (e.target.closest('.task-title') && e.key === 'Enter') { e.preventDefault(); e.target.blur(); } const si = e.target.closest('[data-sub-input]'); if (si && e.key === 'Enter') { e.preventDefault(); if (si.value.trim()) tm.addSubtask(si.dataset.subInput, si.value); } });
taskList.addEventListener('blur', e => { const x = e.target.closest('.task-title[data-field="title"]'); if (!x) return; const v = x.textContent.trim(); if (v) tm.update(x.dataset.id, { title: v }); else { const old = tm.tasks.find(t => t.id === x.dataset.id); x.textContent = old ? old.title : ''; } }, true);

// Drag
taskList.addEventListener('dragstart', e => { const item = e.target.closest('.task-item'); if (item) { item.classList.add('dragging'); e.dataTransfer.setData('text/plain', item.dataset.id); } });
taskList.addEventListener('dragend', e => { const item = e.target.closest('.task-item'); if (item) item.classList.remove('dragging'); });

// Delete modal
const dm = document.getElementById('deleteModal'); const closeDM = () => { dm.classList.remove('on'); tm.toDelete = null; };
dm.addEventListener('click', e => { if (e.target === e.currentTarget) closeDM(); const a = e.target.closest('[data-action]'); if (!a) return; if (a.dataset.action === 'close-modal') closeDM(); if (a.dataset.action === 'confirm-delete') { if (tm.toDelete) tm.remove(tm.toDelete); closeDM(); } });

// Pagination & Calendar
document.getElementById('pagination')?.addEventListener('click', e => { const b = e.target.closest('.page-btn[data-page]'); if (b && !b.disabled) tm.setPage(Number(b.dataset.page)); });
document.getElementById('calPrev')?.addEventListener('click', () => { tm.calendarDate = new Date(tm.calendarDate.getFullYear(), tm.calendarDate.getMonth() - 1, 1); tm.renderCalendar(); });
document.getElementById('calNext')?.addEventListener('click', () => { tm.calendarDate = new Date(tm.calendarDate.getFullYear(), tm.calendarDate.getMonth() + 1, 1); tm.renderCalendar(); });
document.getElementById('calendarGrid')?.addEventListener('click', e => { const c = e.target.closest('.cal-cell[data-date]'); if (c) { tm.selectedDate = c.dataset.date; tm.renderCalendar(); } });

// Bulk
document.getElementById('bulkDeleteBtn')?.addEventListener('click', () => tm.deleteSelected());
document.getElementById('bulkClearBtn')?.addEventListener('click', () => tm.clearSelection());
document.getElementById('selectPageCheckbox')?.addEventListener('change', e => tm.toggleSelectPage(e.target.checked));

// Export/Import
document.getElementById('exportDataBtn')?.addEventListener('click', () => { try { const d = JSON.stringify(tm.buildExport(), null, 2); const b = new Blob([d], { type: 'application/json' }); const u = URL.createObjectURL(b); const a = document.createElement('a'); a.href = u; a.download = `taskflow-${todayISO()}.json`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(u); tm.toast('Export ✓', 's'); } catch { tm.toast(t('export_fail'), 'e'); } });
document.getElementById('importDataBtn')?.addEventListener('click', () => document.getElementById('importFileInput').click());
document.getElementById('importFileInput')?.addEventListener('change', e => { const f = e.target.files?.[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const p = JSON.parse(String(r.result || '{}')); if (!confirm(t('import_confirm'))) return; tm.importPayload(p); tm.toast('Import ✓', 's'); } catch { tm.toast(t('import_invalid'), 'e'); } finally { e.target.value = ''; } }; r.readAsText(f); });

// Focus Mode
const fs = { running: false, paused: false, seconds: 25 * 60, total: 25 * 60, interval: null };
function updateFocus() { const m = Math.floor(fs.seconds / 60); const s = fs.seconds % 60; document.getElementById('focusTime').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; const circ = 2 * Math.PI * 45; const prog = fs.total > 0 ? ((fs.total - fs.seconds) / fs.total) * circ : 0; document.getElementById('focusRing').setAttribute('stroke-dashoffset', circ - prog); }
function startFocus() { if (fs.running && !fs.paused) return; fs.running = true; fs.paused = false; document.getElementById('focusStartBtn').style.display = 'none'; document.getElementById('focusPauseBtn').style.display = ''; fs.interval = setInterval(() => { if (fs.seconds <= 0) { clearInterval(fs.interval); fs.running = false; document.getElementById('focusStartBtn').style.display = ''; document.getElementById('focusPauseBtn').style.display = 'none'; launchConfetti(); const fc = (pj(localStorage.getItem('tf_focus_count'), 0)) + 1; localStorage.setItem('tf_focus_count', String(fc)); tm.toast(t('focus_done'), 's'); return; } fs.seconds--; updateFocus(); }, 1000); }
function pauseFocus() { clearInterval(fs.interval); fs.paused = true; document.getElementById('focusStartBtn').textContent = t('focus_continue'); document.getElementById('focusStartBtn').style.display = ''; document.getElementById('focusPauseBtn').style.display = 'none'; }
function resetFocus() { clearInterval(fs.interval); fs.running = false; fs.paused = false; fs.seconds = fs.total; document.getElementById('focusStartBtn').textContent = t('focus_start'); document.getElementById('focusStartBtn').style.display = ''; document.getElementById('focusPauseBtn').style.display = 'none'; updateFocus(); }
document.getElementById('focusBtn').addEventListener('click', () => {
  document.getElementById('focusOverlay').classList.add('on'); resetFocus();
  const sel = document.getElementById('focusTaskSelect');
  const activeTasks = tm.tasks.filter(tk => !tk.trashed && tk.status !== 'done');
  sel.innerHTML = activeTasks.length
    ? activeTasks.map(tk => `<option value="${tk.id}">${esc(tk.title)}</option>`).join('')
    : `<option value="">${t('focus_no_task')}</option>`;
});
document.getElementById('focusStartBtn').addEventListener('click', startFocus);
document.getElementById('focusPauseBtn').addEventListener('click', pauseFocus);
document.getElementById('focusResetBtn').addEventListener('click', resetFocus);
document.getElementById('focusCloseBtn').addEventListener('click', () => { clearInterval(fs.interval); fs.running = false; fs.paused = false; document.getElementById('focusOverlay').classList.remove('on'); });

// Keyboard
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeDM(); document.getElementById('focusOverlay').classList.remove('on'); clearInterval(fs.interval); } if (e.key === 'Enter' && e.ctrlKey) addTask(); if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) { e.preventDefault(); tm.undo(); } if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z'))) { e.preventDefault(); tm.redo(); } });

// Init
document.getElementById('taskDeadline').valueAsDate = new Date();
tm.render();
checkDeadlineNotifs(tm.tasks);

// ── Live Clock ──
function updateClock() {
  try {
    const now = new Date();
    const locale = curLang === 'en' ? 'en-US' : 'id-ID';
    const timeEl = document.getElementById('clockTime');
    const dateEl = document.getElementById('clockDate');
    if (timeEl) timeEl.textContent = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    if (dateEl) {
      const dateStr = now.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      let tz = '';
      try { tz = typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : ''; } catch (e) { }
      dateEl.textContent = tz ? `${dateStr} · ${tz}` : dateStr;
    }
  } catch (e) { console.error('Clock error:', e); }
}
updateClock();
setInterval(updateClock, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateClock(); });
