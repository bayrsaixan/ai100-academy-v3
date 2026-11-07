/**
 * AI100 Learning Hub 3.0
 * Static-first application. No backend, external JS library, or API key required.
 * All student-created content stays in this browser until exported by the student.
 */
(() => {
  'use strict';

  const DATA = window.AI100_DATA;
  if (!DATA || !Array.isArray(DATA.lessons) || DATA.lessons.length !== 21) {
    console.error('AI100 course-data.js файл олдсонгүй эсвэл буруу байна.');
    return;
  }

  const { lessons, modules, capstoneSteps } = DATA;
  const STORAGE_KEY = 'ai100_learning_hub_v2';
  const LEGACY_KEY = 'ai100_completed_lessons_v1';
  const TZ = 'Asia/Ulaanbaatar';
  const PAGE_NAMES = {
    dashboard: 'Миний workspace', curriculum: 'Сургалтын замнал',
    schedule: 'Хичээлийн хуваарь', mentor: 'AI Ментор',
    capstone: 'Capstone Studio', notes: 'Миний тэмдэглэл'
  };
  const demoItems = [
    'Асуудал ба зорилтот хэрэглэгч тодорхой',
    'Бодит ажилладаг үндсэн demo бэлэн',
    'GitHub README болон live URL шалгасан',
    'Слайд, demo script, backup хувилбар бэлэн'
  ];
  const mentorSteps = [
    ['01', 'Core Concept', 'Онолыг энгийн жишээ ба Data Science-той холбоно.'],
    ['02', 'Code Walkthrough', 'Цэвэр код, алдааны шалтгааныг ойлгоно.'],
    ['03', 'Best Practices', 'Тест, security, AI туслахын зөв хэрэглээ.'],
    ['04', 'Mini-Challenge', 'Бэлэн хариултгүй, өөрөө бодож шийднэ.'],
    ['05', 'Capstone Link', 'Үзсэнээ төгсөлтийн төсөлдөө холбож ашиглана.']
  ];
  const modes = {
    prepare: 'Хичээл эхлэхээс өмнө 5 минутанд унших 3 суурь ойлголт, урьдчилан мэдвэл зохих 2 нэр томьёо болон шалгах 1 асуулт бэлд.',
    explain: 'Гол онолыг шаталсан байдлаар тайлбарла. Статистик/SQL-ийн жишээтэй харьцуулж, Data Science-ийн бодит хэрэглээг үзүүл.',
    code: 'Хэрэв код эсвэл алдаа өгсөн бол эхлээд root cause тодорхойл. Дараа нь мөр бүрийг тайлбарлаж, PEP8 дагасан алдаа боловсруулалттай жишээ санал болго. Кодгүй бол тухайн сэдвийн богино жишээ өг.',
    challenge: 'Нэг бодит mini-challenge өг. Оролт, гаралт, acceptance criteria, 2 edge case тодорхойл. Миний оролдлогыг харахаас өмнө бүрэн хариу битгий өг.',
    review: 'Миний бичсэн кодын logic, readability, performance, security, тестийг шалга. Шууд бүх хариу кодыг өгөлгүй, эхлээд алдааны үндсэн шалтгаан, сайжруулах зөвлөгөө хэл.',
    capstone: 'Энэ сэдвийг 3–4 хүний багтай бодит AI app / Capstone Project-д ашиглах архитектурын санаа, MVP таск, demo-гийн шалгуурт холбож өг.'
  };

  const byId = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  const moduleFor = lesson => modules.find(module => module.id === lesson.module);
  const toDate = value => new Date(value);
  const dateShort = iso => new Intl.DateTimeFormat('en-US', {
    timeZone: TZ, month: 'short', day: 'numeric'
  }).format(toDate(iso));
  const dateMon = iso => new Intl.DateTimeFormat('en-US', { timeZone: TZ, month: 'short' }).format(toDate(iso));
  const dateDay = iso => new Intl.DateTimeFormat('en-US', { timeZone: TZ, day: '2-digit' }).format(toDate(iso));
  const isLessonDone = number => state.completed.includes(number);
  const completedIn = module => module.lessons.filter(isLessonDone).length;
  const percentage = (number, total) => total ? Math.round((number / total) * 100) : 0;
  const totalDone = () => state.completed.length;

  function defaults() {
    let legacy = [];
    try {
      const raw = JSON.parse(localStorage.getItem(LEGACY_KEY) || '[]');
      if (Array.isArray(raw)) legacy = raw;
    } catch (_) { /* Access to storage may be disabled. */ }
    return { version: 2, completed: cleanCompleted(legacy), notes: {}, quiz: {},
      milestones: [], demo: [], project: {}, theme: 'light' };
  }

  function cleanCompleted(values) {
    if (!Array.isArray(values)) return [];
    return [...new Set(values.filter(num => Number.isInteger(num) && num >= 1 && num <= 21))];
  }

  function validatedState(value) {
    const result = defaults();
    if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
    result.completed = cleanCompleted(value.completed);
    if (Number.isInteger(value.lastLesson) && value.lastLesson >= 1 && value.lastLesson <= 21) result.lastLesson = value.lastLesson;
    if (value.notes && typeof value.notes === 'object' && !Array.isArray(value.notes)) {
      for (const lesson of lessons) {
        const note = value.notes[String(lesson.num)];
        if (typeof note === 'string') result.notes[String(lesson.num)] = note.slice(0, 20000);
      }
    }
    if (value.quiz && typeof value.quiz === 'object' && !Array.isArray(value.quiz)) {
      for (const lesson of lessons) {
        const response = value.quiz[String(lesson.num)];
        if (Number.isInteger(response) && response >= 0 && response < lesson.quiz.options.length) {
          result.quiz[String(lesson.num)] = response;
        }
      }
    }
    result.milestones = cleanIndices(value.milestones, capstoneSteps.length);
    result.demo = cleanIndices(value.demo, demoItems.length);
    if (value.project && typeof value.project === 'object' && !Array.isArray(value.project)) {
      ['name', 'problem', 'audience', 'team', 'mvp', 'metric'].forEach(key => {
        if (typeof value.project[key] === 'string') result.project[key] = value.project[key].slice(0, 10000);
      });
    }
    result.theme = value.theme === 'light' ? 'light' : 'dark';
    return result;
  }

  function cleanIndices(list, size) {
    return Array.isArray(list) ? [...new Set(list.filter(n => Number.isInteger(n) && n >= 0 && n < size))] : [];
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? validatedState(JSON.parse(saved)) : defaults();
    } catch (_) { return defaults(); }
  }

  let state = loadState();
  let toastTimer;
  let currentDialogLesson = null;

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      // Keep the old completion key in sync to preserve interoperability with v1.
      localStorage.setItem(LEGACY_KEY, JSON.stringify(state.completed));
      window.dispatchEvent(new Event('ai100-saved'));
      return true;
    } catch (_) { showToast('Хадгалж чадсангүй. Backup татаж аваарай.'); return false; }
  }

  function showToast(message) {
    const toast = byId('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2900);
  }

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const temp = document.createElement('textarea');
        temp.value = text;
        temp.style.position = 'fixed'; temp.style.opacity = '0';
        document.body.append(temp); temp.select();
        const ok = document.execCommand('copy');
        temp.remove();
        if (!ok) throw new Error('Copy is blocked');
      }
      showToast('Амжилттай хуулагдлаа ✓');
    } catch (_) { showToast('Автомат хуулах боломжгүй. Текстээ сонгож хуулна уу.'); }
  }

  function navigate(view, pushHash = true) {
    if (!Object.hasOwn(PAGE_NAMES, view)) view = 'dashboard';
    document.querySelectorAll('.view').forEach(section => section.classList.toggle('active', section.id === `view-${view}`));
    document.querySelectorAll('[data-nav].nav-link').forEach(button => {
      const active = button.dataset.nav === view;
      button.classList.toggle('active', active);
      active ? button.setAttribute('aria-current', 'page') : button.removeAttribute('aria-current');
    });
    document.querySelectorAll('.mobile-bottom [data-nav]').forEach(button => { button.classList.toggle('active', button.dataset.nav === view); });
    byId('page-breadcrumb').textContent = PAGE_NAMES[view];
    if (pushHash && location.hash !== `#${view}`) history.replaceState(null, '', `#${view}`);
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function setTheme(theme) {
    state.theme = theme === 'light' ? 'light' : 'dark';
    document.body.dataset.theme = state.theme;
    byId('theme-toggle').innerHTML = `${icon(state.theme === 'light' ? 'moon' : 'sun')}<span>${state.theme === 'light' ? 'Харанхуй горим' : 'Гэрэлтэй горим'}</span><span class="theme-shortcut">◐</span>`;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', state.theme === 'light' ? '#f5f6f0' : '#111713');
    saveState();
  }

  function openSidebar() {
    byId('sidebar').classList.add('is-open');
    byId('sidebar-backdrop').hidden = false;
    byId('menu-toggle').setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    byId('sidebar').classList.remove('is-open');
    byId('sidebar-backdrop').hidden = true;
    byId('menu-toggle').setAttribute('aria-expanded', 'false');
  }

  function daysLeft() {
    return Math.max(0, Math.ceil((Date.parse('2026-12-26T09:00:00+08:00') - Date.now()) / 86400000));
  }

  function renderDashboard() {
    const done = totalDone();
    const quizPassed = lessons.filter(lesson => state.quiz[String(lesson.num)] === lesson.quiz.answer).length;
    const modulesDone = modules.filter(module => completedIn(module) === module.lessons.length).length;
    const stats = [
      { label: 'Судалсан хичээл', value: `${done} / 21`, caption: `${percentage(done, 21)}% гүйцэтгэл`, width: percentage(done, 21), color: 'var(--accent)', tint: 'var(--accent-tint)', icon: 'book' },
      { label: 'Дууссан модуль', value: `${modulesDone} / 5`, caption: 'Сургалтын үндсэн чиглэл', width: percentage(modulesDone, 5), color: 'var(--purple)', tint: 'rgba(172,152,246,.1)', icon: 'layers' },
      { label: 'Зөв хариулсан сорил', value: `${quizPassed} / 21`, caption: 'Хичээл бүрд 1 асуулт', width: percentage(quizPassed, 21), color: 'var(--mint)', tint: 'rgba(92,214,186,.1)', icon: 'target' },
      { label: 'Demo Day хүртэл', value: `${daysLeft()}`, caption: '2026.12.26 хүртэлх хоног', width: percentage(49 - Math.min(49, daysLeft()), 49), color: 'var(--blue)', tint: 'rgba(118,169,255,.1)', icon: 'calendar' }
    ];
    byId('dashboard-stats').innerHTML = stats.map(stat => `<div class="stat-card" style="--stat-color:${stat.color};--stat-tint:${stat.tint}"><div class="stat-top"><span class="stat-label">${stat.label}</span><span class="stat-icon">${icon(stat.icon)}</span></div><div class="stat-value">${stat.value}${stat.label === 'Demo Day хүртэл' ? '<span style="font-size:13px;color:var(--muted);margin-left:6px">хоног</span>' : ''}</div><div class="stat-caption">${stat.caption}</div><div class="stat-bar"><span style="width:${stat.width}%"></span></div></div>`).join('');
    byId('dashboard-modules').innerHTML = modules.map(module => {
      const doneInModule = completedIn(module);
      return `<button class="mini-module tone-${module.tone}" data-nav="curriculum" type="button" aria-label="${escapeHTML(module.name)} модуль үзэх"><div class="mini-module-top"><div class="module-glyph">${icon(module.icon)}</div><span class="module-number">MODULE ${module.number}</span></div><h3>${escapeHTML(module.name)}</h3><p>${escapeHTML(module.mn)}</p><div class="mini-module-bottom"><div class="progress-track"><span style="width:${percentage(doneInModule, module.lessons.length)}%"></span></div><span class="mini-count">${doneInModule}/${module.lessons.length}</span></div></button>`;
    }).join('');
    const nextLesson = lessons.find(lesson => lesson.num === state.lastLesson && !isLessonDone(lesson.num)) || lessons.find(lesson => !isLessonDone(lesson.num));
    const focus = nextLesson || lessons[20];
    byId('focus-title').textContent = nextLesson ? focus.topic : 'Бүх хичээлээ дуусгалаа!';
    byId('focus-description').textContent = nextLesson ? focus.desc : 'Capstone төслөө Demo Day-д бэлтгээрэй.';
    byId('focus-meta').textContent = `WEEK ${focus.week} · LESSON ${String(focus.num).padStart(2, '0')}`;
    byId('focus-open').dataset.lesson = focus.num;
    document.querySelector('.hero-number').textContent = String(focus.num).padStart(2, '0');
    byId('continue-card').innerHTML = nextLesson ? `<div class="surface-card continue-card"><div class="continue-icon">${icon('code')}</div><div><span class="lesson-small-meta">WEEK ${nextLesson.week} · LESSON ${String(nextLesson.num).padStart(2, '0')}</span><h3>${escapeHTML(nextLesson.topic)}</h3><p>${escapeHTML(moduleFor(nextLesson).mn)} · ${escapeHTML(nextLesson.teacher)}</p></div><button class="button outline-button continue-action" data-lesson="${nextLesson.num}">Судлах ${icon('arrow')}</button></div>` : `<div class="surface-card continue-card"><div class="continue-icon">${icon('check')}</div><div><h3>21 хичээлээ бүгдийг нь дуусгалаа!</h3><p>Capstone Demo Day бэлтгэлээ үргэлжлүүлээрэй.</p></div><button class="button outline-button" data-nav="capstone">Capstone ${icon('arrow')}</button></div>`;
    const upcoming = lessons.filter(lesson => Date.parse(lesson.endsAt) > Date.now()).slice(0, 4);
    const items = upcoming.length ? upcoming : lessons.slice(-4);
    byId('dashboard-upcoming').innerHTML = items.map(lesson => `<button class="upcoming-item" data-lesson="${lesson.num}"><span class="upcoming-date"><b>${dateDay(lesson.startsAt)}</b><small>${dateMon(lesson.startsAt)}</small></span><span class="upcoming-copy"><strong>#${lesson.num} ${escapeHTML(lesson.topic)}</strong><span>${escapeHTML(lesson.time)} · ${escapeHTML(lesson.teacher)}</span></span>${icon('chevron')}</button>`).join('');
    byId('sidebar-days').textContent = `${daysLeft()} хоног`;
    byId('sidebar-progress').style.width = `${percentage(done, 21)}%`;
  }

  function renderCurriculum() {
    const done = totalDone();
    const pct = percentage(done, lessons.length);
    byId('curriculum-overview').innerHTML = `<div class="big-ring" style="--value:${pct}%"><span>${pct}%</span></div><div><h2>Таны суралцах ахиц</h2><p><strong>${done} / ${lessons.length}</strong> хичээл тэмдэглэсэн · <strong>${modules.filter(module => completedIn(module) === module.lessons.length).length} / ${modules.length}</strong> модуль дууссан</p><p>Хичээл бүрийг нээж ойлголт, дасгал, сорил, тэмдэглэлтэй ажиллаарай.</p></div>`;
    byId('curriculum-modules').innerHTML = modules.map(module => {
      const doneInModule = completedIn(module);
      const moduleLessons = module.lessons.map(id => lessons.find(lesson => lesson.num === id)).filter(Boolean);
      return `<article class="surface-card roadmap-card tone-${module.tone}"><div class="roadmap-head"><span class="roadmap-num">${module.number}</span><div class="roadmap-meta"><h3>${escapeHTML(module.name)}</h3><p>${escapeHTML(module.subtitle)}</p></div><div class="roadmap-right"><span class="roadmap-progress">${doneInModule} / ${module.lessons.length} хичээл</span><div class="progress-track"><span style="width:${percentage(doneInModule, module.lessons.length)}%"></span></div></div></div><p class="roadmap-desc">${escapeHTML(module.description)}</p><div class="roadmap-lessons">${moduleLessons.map(lesson => `<div class="roadmap-lesson"><span class="lesson-state ${isLessonDone(lesson.num) ? 'done' : ''}">${isLessonDone(lesson.num) ? icon('check') : String(lesson.num).padStart(2, '0')}</span><div class="roadmap-lesson-body"><div class="roadmap-lesson-title">${escapeHTML(lesson.topic)}</div><div class="roadmap-lesson-sub">#${lesson.num} · Week ${lesson.week} · ${escapeHTML(dateShort(lesson.startsAt))} · ${escapeHTML(lesson.teacher)}</div></div><button class="lesson-open" data-lesson="${lesson.num}">Нээх →</button></div>`).join('')}</div><div class="outcome-box"><strong>Суралцах үр дүн:</strong> ${escapeHTML(module.outcome)}</div></article>`;
    }).join('');
  }

  function renderSchedule() {
    const search = byId('lesson-search').value.toLocaleLowerCase();
    const week = byId('week-filter').value;
    const status = byId('status-filter').value;
    const filtered = lessons.filter(lesson => {
      if (week !== 'all' && String(lesson.week) !== week) return false;
      if (status === 'done' && !isLessonDone(lesson.num)) return false;
      if (status === 'todo' && isLessonDone(lesson.num)) return false;
      return [lesson.topic, lesson.teacher, lesson.desc, ...lesson.concepts].join(' ').toLocaleLowerCase().includes(search);
    });
    byId('schedule-count').textContent = `${filtered.length} хичээл олдлоо`;
    byId('schedule-list').innerHTML = filtered.length ? filtered.map(lesson => `<article class="schedule-row ${isLessonDone(lesson.num) ? 'done-row' : ''}"><input class="row-check" type="checkbox" data-complete="${lesson.num}" ${isLessonDone(lesson.num) ? 'checked' : ''} aria-label="Хичээл ${lesson.num} дууссан гэж тэмдэглэх"><span class="row-week">W${lesson.week}</span><div class="row-date"><b>${dateShort(lesson.startsAt)}</b><small>${escapeHTML(lesson.day)}</small></div><div class="row-time">${icon('clock')} ${escapeHTML(lesson.time)}</div><div class="row-topic"><strong>#${lesson.num} ${escapeHTML(lesson.topic)}</strong><small>${escapeHTML(lesson.teacher)} · ${escapeHTML(moduleFor(lesson).mn)}</small></div><button class="button outline-button row-action" data-lesson="${lesson.num}" aria-label="Хичээл ${lesson.num} дэлгэрэнгүй">${icon('arrow')}</button></article>`).join('') : '<div class="empty-state"><h3>Хичээл олдсонгүй</h3><p>Хайлтын үг эсвэл шүүлтүүрээ өөрчилнө үү.</p></div>';
  }

  function renderMentorSteps() {
    byId('mentor-steps').innerHTML = mentorSteps.map(step => `<div class="step-item"><b>${step[0]}</b><h3>${step[1]}</h3><p>${step[2]}</p></div>`).join('');
  }

  function buildPrompt() {
    const num = Number(byId('mentor-lesson').value) || 1;
    const lesson = lessons.find(item => item.num === num) || lessons[0];
    const mode = byId('mentor-mode').value;
    const context = byId('mentor-context').value.trim();
    return `# AI100 Academy · Хичээл #${lesson.num} — AI Mentor\n\nЧи миний Principal AI & Full-Stack ML Mentor. Би Data Science-ийн 2-р курсийн оюутан, SQL, статистик, HTML/CSS/JS-ийн суурьтай; macOS орчинд ажилладаг.\n\nХичээл: ${lesson.topic}\nОгноо: ${dateShort(lesson.startsAt)}, 2026 · Week ${lesson.week}\nБагш: ${lesson.teacher}\nСуралцах модуль: ${moduleFor(lesson).name}\n\nОНОВЧТОЙ ЗОРИЛГО:\n${modes[mode] || modes.explain}\n\nХИЧЭЭЛИЙН ХАМРАХ ХҮРЭЭ:\n${lesson.desc}\n\n5 АЛХАМТ МЕНТОРЫН АРГА:\n1. Core Concept — Англи нэр томьёог Монгол тайлбартай, жишээтэй заа.\n2. Code Walkthrough — Тохирох үед ажиллах Python 3 код (PEP8, error handling) үзүүл.\n3. Best Practices — Тест, security, найдвартай байдал, Vibe Coding-ийн анхаарах зүйлс.\n4. Mini-Challenge — Өөрөө хийх нэг даалгавар, шалгах 2 нөхцөл өг.\n5. Capstone Connection — Demo Day-д чиглэсэн AI аппад яаж ашиглахыг тайлбарла.\n\nХариултаа шатлалтай, шууд хэрэглэхүйц гарга. Миний кодыг шалгахдаа root cause-ийг түрүүлж тайлбарла. Мэдэхгүй зүйлээ зохиохгүй.\n${context ? `\nМИНИЙ АСУУЛТ / КОД / НЭМЭЛТ НӨХЦӨЛ:\n${context}\n` : ''}`;
  }

  function renderMentorPrompt() { byId('mentor-output').textContent = buildPrompt(); }

  function renderCapstone() {
    byId('milestone-progress').textContent = `${state.milestones.length}/${capstoneSteps.length}`;
    byId('milestone-list').innerHTML = capstoneSteps.map((step, index) => `<label class="milestone-row ${state.milestones.includes(index) ? 'is-done' : ''}"><input type="checkbox" data-milestone="${index}" ${state.milestones.includes(index) ? 'checked' : ''}><span><strong>${index + 1}. ${escapeHTML(step.title)}</strong><p>${escapeHTML(step.hint)}</p><small>${escapeHTML(step.date)} · Хичээл #${step.lesson}</small></span></label>`).join('');
    byId('demo-checks').innerHTML = demoItems.map((item, index) => `<label class="demo-check"><input type="checkbox" data-demo-check="${index}" ${state.demo.includes(index) ? 'checked' : ''}><span>${escapeHTML(item)}</span></label>`).join('');
  }

  function renderNotes() {
    const search = byId('notes-search').value.toLocaleLowerCase().trim();
    const existing = lessons.filter(lesson => {
      const note = (state.notes[String(lesson.num)] || '').trim();
      return note && `${lesson.topic} ${note}`.toLocaleLowerCase().includes(search);
    });
    byId('notes-list').innerHTML = existing.length ? existing.map(lesson => `<article class="note-row"><div class="note-num">#${String(lesson.num).padStart(2, '0')}</div><div class="note-body"><h3>${escapeHTML(lesson.topic)}</h3><p>${escapeHTML(state.notes[String(lesson.num)])}</p></div><button data-lesson="${lesson.num}" aria-label="Хичээл ${lesson.num} тэмдэглэл засах">Засах →</button></article>`).join('') : `<div class="empty-state"><h3>${search ? 'Хайлтад тохирох тэмдэглэл алга' : 'Эхний тэмдэглэлээ үүсгээрэй'}</h3><p>Хичээлээ нээгээд “Миний тэмдэглэл” талбарт бичнэ үү.</p><button class="button primary-button" data-lesson="${lessons.find(lesson => !isLessonDone(lesson.num))?.num || 1}">Хичээл нээх ${icon('arrow')}</button></div>`;
  }

  function renderAll() {
    renderDashboard(); renderCurriculum(); renderSchedule(); renderCapstone(); renderNotes();
  }

  function toggleCompleted(number, checked) {
    state.completed = checked ? cleanCompleted([...state.completed, number]) : state.completed.filter(item => item !== number);
    saveState(); renderAll();
    if (currentDialogLesson === number && byId('lesson-dialog').open) renderLessonDialog(number);
    showToast(checked ? `Хичээл #${number} дууссан гэж тэмдэглэлээ ✓` : `Хичээл #${number} “Судлах” төлөвт орлоо`);
  }

  function quizFeedback(lesson) {
    const given = state.quiz[String(lesson.num)];
    if (!Number.isInteger(given)) return '';
    const correct = given === lesson.quiz.answer;
    return `<div class="quiz-feedback ${correct ? 'correct' : 'incorrect'}">${correct ? '✓ Зөв хариуллаа!' : `Дахин эргэцүүлээрэй. Зөв хариулт: ${escapeHTML(lesson.quiz.options[lesson.quiz.answer])}.`}<br>${escapeHTML(lesson.quiz.explanation)}</div>`;
  }

  function renderLessonDialog(number) {
    const lesson = lessons.find(item => item.num === number);
    if (!lesson) return;
    const module = moduleFor(lesson);
    currentDialogLesson = number;
    const given = state.quiz[String(number)];
    byId('lesson-dialog-content').innerHTML = `<div class="dialog-header"><button class="dialog-close" id="close-dialog" aria-label="Хичээл хаах">${icon('close')}</button><div class="dialog-overline">LESSON ${String(number).padStart(2, '0')} · WEEK ${lesson.week} · ${escapeHTML(module.name)}</div><h2 id="dialog-title">${escapeHTML(lesson.topic)}</h2><p>${escapeHTML(lesson.desc)}</p><div class="dialog-meta"><span>📅 ${escapeHTML(dateShort(lesson.startsAt))}, 2026</span><span>◷ ${escapeHTML(lesson.time)} (UTC+8)</span><span>Багш: ${escapeHTML(lesson.teacher)}</span></div></div><div class="dialog-body"><section class="dialog-section"><h3>01 / Гол ойлголтууд</h3><ul class="concept-list">${lesson.concepts.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>${lesson.code ? `<section class="dialog-section"><h3>02 / Кодын жишээ</h3><pre class="example-code"><code>${escapeHTML(lesson.code)}</code></pre><button class="text-button" data-copy-code="${number}">Код хуулах ${icon('copy')}</button></section>` : ''}<section class="dialog-section"><h3>Практик даалгавар · Mini-Challenge</h3><div class="exercise-box"><strong>Өөрөө оролдоорой:</strong> ${escapeHTML(lesson.task)}</div></section><section class="dialog-section"><h3>Өөрийгөө шалгах · 1 асуулт</h3><div class="quiz-box"><p class="quiz-question">${escapeHTML(lesson.quiz.question)}</p><div class="quiz-options">${lesson.quiz.options.map((opt,index) => `<label class="quiz-option"><input type="radio" name="lesson-quiz" value="${index}" ${given === index ? 'checked' : ''}>${escapeHTML(opt)}</label>`).join('')}</div><button class="button outline-button" data-check-quiz="${number}" style="margin-top:12px">Хариулт шалгах ${icon('arrow')}</button><div id="quiz-feedback-area">${quizFeedback(lesson)}</div></div></section><section class="dialog-section"><h3>Миний тэмдэглэл</h3><label for="lesson-note" class="sr-only">Хичээлийн тэмдэглэл бичих</label><textarea id="lesson-note" class="form-control notes-editor" placeholder="Юу сурсан бэ? Ойлгоогүй зүйл, кодын алдаа, асуултаа бич..." maxlength="20000">${escapeHTML(state.notes[String(number)] || '')}</textarea><span class="dialog-save-status" id="lesson-save-label">Өөрчлөлт автоматаар хадгалагдана</span></section><div class="dialog-actions"><button class="button outline-button" data-mentor-for="${number}">${icon('spark')} AI-гаар үргэлжлүүлэх</button><div><button class="button ${isLessonDone(number) ? 'outline-button' : 'primary-button'}" data-toggle-dialog-complete="${number}">${icon(isLessonDone(number) ? 'check' : 'target')} ${isLessonDone(number) ? 'Дууссан · Буцаах' : 'Хичээл дууссан'}</button></div></div></div>`;
  }

  function openLesson(number) {
    state.lastLesson = number; saveState();
    const dialog = byId('lesson-dialog');
    if (dialog.open) dialog.close();
    renderLessonDialog(number);
    dialog.showModal();
  }

  function closeLesson() {
    const dialog = byId('lesson-dialog');
    if (dialog.open) dialog.close();
    currentDialogLesson = null;
  }

  function checkQuiz(number) {
    const selected = document.querySelector('input[name="lesson-quiz"]:checked');
    if (!selected) { showToast('Эхлээд нэг хариулт сонгоно уу.'); return; }
    const lesson = lessons.find(item => item.num === number);
    state.quiz[String(number)] = Number(selected.value);
    saveState();
    byId('quiz-feedback-area').innerHTML = quizFeedback(lesson);
    renderDashboard();
    showToast(state.quiz[String(number)] === lesson.quiz.answer ? 'Зөв! ✓' : 'Тайлбарыг уншаад дахин оролдоорой.');
  }

  function toggleIndex(listName, index, checked) {
    const current = state[listName];
    state[listName] = checked ? [...new Set([...current, index])] : current.filter(item => item !== index);
    saveState(); renderCapstone();
  }

  function exportBackup() {
    const payload = { app: 'AI100 Learning Hub', exportedAt: new Date().toISOString(), state };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = `ai100-learning-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Хувийн backup JSON файл татагдлаа.');
  }

  async function importBackup(file) {
    if (!file) return;
    if (file.size > 1500000) { showToast('Backup файл хэт том байна (1.5 MB-аас бага байх ёстой).'); return; }
    try {
      const payload = JSON.parse(await file.text());
      if (!payload || payload.app !== 'AI100 Learning Hub' || !payload.state || typeof payload.state !== 'object' || Array.isArray(payload.state) || !Array.isArray(payload.state.completed) || !payload.state.notes || typeof payload.state.notes !== 'object' || Array.isArray(payload.state.notes)) {
        throw new Error('Incorrect backup structure');
      }
      if (!window.confirm('Импорт хийхэд одоогийн тэмдэглэл, ахиц солигдоно. Үргэлжлүүлэх үү?')) return;
      state = validatedState(payload.state);
      saveState(); setTheme(state.theme);
      populateProjectForm(); renderAll(); renderMentorPrompt();
      showToast('Backup амжилттай сэргээгдлээ ✓');
    } catch (_) { showToast('Backup файл буруу форматтай байна.'); }
    finally { byId('import-data').value = ''; }
  }

  function populateProjectForm() {
    for (const element of byId('project-form').elements) {
      if (element.name && Object.hasOwn(state.project, element.name)) element.value = state.project[element.name];
      else if (element.name) element.value = '';
    }
  }

  function setupEvents() {
    document.addEventListener('click', event => {
      const nav = event.target.closest('[data-nav]');
      if (nav) { navigate(nav.dataset.nav); return; }
      const opener = event.target.closest('[data-lesson]');
      if (opener) { openLesson(Number(opener.dataset.lesson)); return; }
      const mentor = event.target.closest('[data-mentor-for]');
      if (mentor) {
        byId('mentor-lesson').value = mentor.dataset.mentorFor;
        byId('mentor-mode').value = 'explain';
        renderMentorPrompt(); closeLesson(); navigate('mentor'); return;
      }
      const code = event.target.closest('[data-copy-code]');
      if (code) { copyToClipboard(lessons.find(item => item.num === Number(code.dataset.copyCode)).code || ''); return; }
      const quiz = event.target.closest('[data-check-quiz]');
      if (quiz) { checkQuiz(Number(quiz.dataset.checkQuiz)); return; }
      const completion = event.target.closest('[data-toggle-dialog-complete]');
      if (completion) { const num = Number(completion.dataset.toggleDialogComplete); toggleCompleted(num, !isLessonDone(num)); return; }
      if (event.target.closest('#close-dialog')) { closeLesson(); }
    });
    document.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('[data-complete]')) toggleCompleted(Number(target.dataset.complete), target.checked);
      if (target.matches('[data-milestone]')) toggleIndex('milestones', Number(target.dataset.milestone), target.checked);
      if (target.matches('[data-demo-check]')) toggleIndex('demo', Number(target.dataset.demoCheck), target.checked);
    });
    byId('lesson-search').addEventListener('input', renderSchedule);
    byId('week-filter').addEventListener('change', renderSchedule);
    byId('status-filter').addEventListener('change', renderSchedule);
    byId('notes-search').addEventListener('input', renderNotes);
    byId('mentor-lesson').addEventListener('change', renderMentorPrompt);
    byId('mentor-mode').addEventListener('change', renderMentorPrompt);
    byId('mentor-context').addEventListener('input', renderMentorPrompt);
    byId('generate-prompt').addEventListener('click', () => { renderMentorPrompt(); showToast('Prompt шинэчлэгдлээ.'); });
    byId('copy-prompt').addEventListener('click', () => copyToClipboard(buildPrompt()));
    byId('dashboard-calendar').addEventListener('click', () => { location.href = '100_Oyutnii_Hicheeliin_Huvaari.ics'; });
    byId('theme-toggle').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
    byId('menu-toggle').addEventListener('click', () => byId('sidebar').classList.contains('is-open') ? closeSidebar() : openSidebar());
    byId('sidebar-backdrop').addEventListener('click', closeSidebar);
    byId('lesson-dialog').addEventListener('click', event => { if (event.target === byId('lesson-dialog')) closeLesson(); });
    byId('lesson-dialog').addEventListener('close', () => { currentDialogLesson = null; });
    byId('lesson-dialog').addEventListener('input', event => {
      if (event.target.id === 'lesson-note' && currentDialogLesson !== null) {
        state.notes[String(currentDialogLesson)] = event.target.value;
        const saved = saveState();
        byId('lesson-save-label').textContent = saved ? '✓ Энэ төхөөрөмж дээр хадгаллаа' : '⚠ Хадгалагдсангүй — backup татна уу';
        renderNotes();
      }
    });
    byId('project-form').addEventListener('input', event => {
      const field = event.target;
      if (field.name) { state.project[field.name] = field.value; saveState(); }
    });
    byId('export-data').addEventListener('click', exportBackup);
    byId('import-data').addEventListener('change', event => importBackup(event.target.files?.[0]));
    byId('reset-data').addEventListener('click', () => {
      if (!window.confirm('Бүх ахиц, тэмдэглэл, Capstone төлөвлөгөө устах болно. Та итгэлтэй байна уу?')) return;
      state = { version: 2, completed: [], notes: {}, quiz: {}, milestones: [], demo: [], project: {}, theme: state.theme };
      saveState(); populateProjectForm(); renderAll(); showToast('Суралцах өгөгдлийг цэвэрлэлээ.');
    });
    window.addEventListener('hashchange', () => navigate(location.hash.slice(1), false));
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeSidebar();
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); closeLesson(); navigate('schedule'); byId('lesson-search').focus();
      }
    });
  }

  function init() {
    document.body.dataset.theme = state.theme;
    setTheme(state.theme);
    byId('today-label').textContent = new Intl.DateTimeFormat('mn-MN', { timeZone: TZ, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
    byId('mentor-lesson').innerHTML = lessons.map(lesson => `<option value="${lesson.num}">#${lesson.num} · ${escapeHTML(lesson.topic)}</option>`).join('');
    const recommended = lessons.find(lesson => !isLessonDone(lesson.num)) || lessons[0];
    byId('mentor-lesson').value = String(recommended.num);
    populateProjectForm(); renderMentorSteps(); renderMentorPrompt(); renderAll(); setupEvents();
    navigate(location.hash.slice(1) || 'dashboard', false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
