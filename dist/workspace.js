/* Optional enhancements; core learning works without any external service. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  let remaining = 25 * 60;
  let end = null;
  function tick() {
    if (end !== null) remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    $('timer-display').textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
    if (remaining === 0 && end !== null) {
      end = null;
      $('timer-toggle').textContent = 'Дахин эхлэх';
      $('timer-message').textContent = 'Дууслаа! 5 минут амраарай.';
    }
  }
  $('timer-toggle').addEventListener('click', () => {
    if (end !== null) { tick(); end = null; $('timer-toggle').textContent = 'Үргэлжлүүлэх'; }
    else { if (remaining === 0) remaining = 1500; end = Date.now() + remaining * 1000; $('timer-toggle').textContent = 'Түр зогсоох'; $('timer-message').textContent = 'Энэ цонхоо нээлттэй байлгаарай.'; }
  });
  $('timer-reset').addEventListener('click', () => { end = null; remaining = 1500; tick(); $('timer-toggle').textContent = 'Эхлүүлэх'; $('timer-message').textContent = '25 минут суралцаад, завсарлаарай.'; });
  setInterval(tick, 500);
  document.addEventListener('visibilitychange', tick);
  $('export-markdown').addEventListener('click', () => {
    let data;
    try { data = JSON.parse(localStorage.getItem('ai100_learning_hub_v2') || '{}'); }
    catch { data = {}; }
    const text = ['# AI100 Academy — Миний тэмдэглэл', '', ...window.AI100_DATA.lessons.flatMap(l => data.notes?.[l.num] ? [`## ${l.num}. ${l.topic}`, '', data.notes[l.num], ''] : [])].join('\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'AI100-notes.md'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  function networkStatus() { $('offline-status').textContent = navigator.onLine ? '● Энэ төхөөрөмж дээр хадгална · Cloud sync байхгүй' : '● Офлайн горим · Энэ төхөөрөмж дээр хадгална'; }
  window.addEventListener('online', networkStatus); window.addEventListener('offline', networkStatus); networkStatus();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./sw.js').catch(() => { $('offline-status').textContent = '● Энэ төхөөрөмж дээр хадгална · Офлайн бэлтгэл амжилтгүй'; });
})();
