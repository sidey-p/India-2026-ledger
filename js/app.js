"use strict";
const nav = document.getElementById("nav"), app = document.getElementById("app");
nav.innerHTML = PAGES.map(p => `<a href="#/${p.id}" data-id="${p.id}">${p.name}</a>`).join("");
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- counters ---- */
function runCount(el){
  const to = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0, pre = el.dataset.pre || "", suf = el.dataset.suf || "";
  const f = v => pre + Number(v).toLocaleString("en-IN", {minimumFractionDigits:dec, maximumFractionDigits:dec}) + suf;
  if (calm) { el.textContent = f(to); return; }
  const t0 = performance.now(), D = 1000;
  const step = t => { const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3); el.textContent = f(to * e); if (k < 1) requestAnimationFrame(step); };
  el.textContent = f(0); requestAnimationFrame(step);
}
let io = null;
function setupReveal(){
  if (io) io.disconnect();
  const items = app.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || calm){ document.documentElement.classList.add("no-anim"); items.forEach(el => el.querySelectorAll("[data-count]").forEach(runCount)); return; }
  document.documentElement.classList.remove("no-anim");
  io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; io.unobserve(el);
    el.querySelectorAll("[data-count]").forEach(n => { n.textContent = (n.dataset.pre||"") + "0" + (n.dataset.suf||""); });
    requestAnimationFrame(() => { el.classList.add("in"); el.querySelectorAll("[data-count]").forEach(runCount); });
  }), {threshold:.12, rootMargin:"0px 0px -6% 0px"});
  items.forEach(el => io.observe(el));
}

/* ---- tooltip ---- */
const tip = document.getElementById("tip");
function showTip(t, x, y){ tip.textContent = t.dataset.tip; tip.classList.add("on"); const w = tip.offsetWidth, h = tip.offsetHeight;
  tip.style.left = Math.max(8, Math.min(innerWidth - w - 8, x + 14)) + "px"; tip.style.top = Math.max(8, Math.min(innerHeight - h - 8, y + 16)) + "px"; }
document.addEventListener("pointerover", e => { const t = e.target.closest("[data-tip]"); if (t) showTip(t, e.clientX, e.clientY); else tip.classList.remove("on"); });
document.addEventListener("pointermove", e => { const t = e.target.closest("[data-tip]"); if (t && tip.classList.contains("on")) showTip(t, e.clientX, e.clientY); });
document.addEventListener("focusin", e => { const t = e.target.closest("[data-tip]"); if (t){ const r = t.getBoundingClientRect(); showTip(t, r.left, r.top); } });
document.addEventListener("focusout", () => tip.classList.remove("on"));
addEventListener("scroll", () => tip.classList.remove("on"), {passive:true});

/* ---- tabs (delegated) ---- */
app.addEventListener("click", e => {
  const b = e.target.closest(".tabbtn[data-tab]"); if (!b) return;
  const box = b.closest("[data-tabs]"); if (!box) return;
  box.querySelectorAll(".tabbtn").forEach(x => x.setAttribute("aria-selected", x === b ? "true" : "false"));
  box.querySelectorAll(".tabpanel").forEach(p => { p.hidden = p.dataset.panel !== b.dataset.tab; });
});

/* ---- page-specific behavior ---- */
const INIT = {
  tax(){
    const sal = document.getElementById("sal"), rng = document.getElementById("salr"), std = document.getElementById("std"), out = document.getElementById("calcout"), curve = document.getElementById("curve");
    const inr = n => "Rs " + fmt(Math.round(n));
    const go = () => {
      const g = (parseFloat(sal.value) || 0) * 100000, r = calcTax(g, std.checked), eff = g ? r.total / g * 100 : 0;
      out.innerHTML = `<div><span>Gross salary</span><b>${inr(g)}</b></div><div><span>Taxable income</span><b>${inr(r.taxable)}</b></div><div><span>Slab tax after rebate</span><b>${inr(r.tax)}</b></div><div><span>Surcharge</span><b>${inr(r.sur)}</b></div><div><span>Cess (4%)</span><b>${inr(r.cess)}</b></div><div class="total"><span>Total income tax</span><b>${inr(r.total)}</b></div><div><span>Share of gross</span><b>${eff.toFixed(1)}%</b></div><div><span>Monthly take-home (before other deductions)</span><b>${inr((g - r.total) / 12)}</b></div>`;
      const pts = []; for (let x = 0; x <= 100; x++){ const q = calcTax(x * 100000, std.checked); pts.push([x, x ? q.total / (x * 100000) * 100 : 0]); }
      const mx = Math.min(100, g / 100000);
      curve.innerHTML = lineChart(pts, {x0:0, x1:100, y0:0, y1:40, xt:[0,25,50,75,100], yt:[0,10,20,30,40], fx:v => v + "L", fy:v => v + "%", marker:[mx, eff, eff.toFixed(1) + "%"], label:"Effective income tax rate by salary"});
    };
    sal.addEventListener("input", () => { rng.value = Math.min(100, sal.value); go(); });
    rng.addEventListener("input", () => { sal.value = rng.value; go(); });
    std.addEventListener("change", go); go();
  },
  world(){
    let sel = [...CO], mk = "gni";
    const out = document.getElementById("cmpout"), cc = document.getElementById("cmpc"), cm = document.getElementById("cmpm");
    const draw = () => { out.innerHTML = cmpHTML(mk, sel); };
    cc.addEventListener("click", e => { const b = e.target.closest("[data-cn]"); if (!b) return;
      const on = b.getAttribute("aria-pressed") === "true";
      if (on && sel.length === 1) return;
      b.setAttribute("aria-pressed", on ? "false" : "true");
      sel = CO.filter(cn => cc.querySelector(`[data-cn="${cn}"]`).getAttribute("aria-pressed") === "true"); draw(); });
    cm.addEventListener("click", e => { const b = e.target.closest("[data-m]"); if (!b) return;
      mk = b.dataset.m; cm.querySelectorAll(".tabbtn").forEach(x => x.setAttribute("aria-selected", x === b ? "true" : "false")); draw(); });
  },
  promises(){
    const btns = document.querySelectorAll(".fchip[data-f]");
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      const f = b.dataset.f; document.querySelectorAll("#plist .pc").forEach(p => { p.style.display = (f === "all" || p.dataset.s === f) ? "" : "none"; });
    }));
  },
  depts(){
    const btns = document.querySelectorAll(".fchip[data-df]");
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      const f = b.dataset.df; document.querySelectorAll("#dlist .pc").forEach(p => { p.style.display = (f === "all" || p.dataset.s === f) ? "" : "none"; });
    }));
  },
  states(){
    let cur = LAYERS[0], selId = "up";
    const box = document.getElementById("mapbox"), legend = document.getElementById("maplegend"), rank = document.getElementById("maprank"), detail = document.getElementById("statedetail");
    const tabs = document.querySelectorAll("#layers .tabbtn");
    const redraw = () => {
      box.innerHTML = mapSVG(cur);
      legend.innerHTML = legendHTML(cur);
      rank.innerHTML = rankBars(cur);
      box.querySelectorAll(".stt").forEach(p => { if (p.dataset.id === selId) p.classList.add("sel"); });
    };
    redraw();
    box.addEventListener("click", e => { const p = e.target.closest(".stt"); if (!p) return;
      box.querySelectorAll(".stt.sel").forEach(x => x.classList.remove("sel")); p.classList.add("sel");
      selId = p.dataset.id; detail.innerHTML = stateDetail(selId); });
    box.addEventListener("keydown", e => { if (e.key !== "Enter" && e.key !== " ") return; const p = e.target.closest(".stt"); if (!p) return; e.preventDefault(); p.click(); });
    tabs.forEach(b => b.addEventListener("click", () => {
      tabs.forEach(x => x.setAttribute("aria-selected", x === b ? "true" : "false"));
      cur = LAYERS.find(L => L.k === b.dataset.layer); redraw();
    }));
  }
};

/* ---- router ---- */
function route(){
  const id = location.hash.replace(/^#\/?/, "") || "home";
  const p = PAGES.find(x => x.id === id) || PAGES[0];
  app.innerHTML = R[p.id]();
  nav.querySelectorAll("a").forEach(a => { if (a.dataset.id === p.id){ a.setAttribute("aria-current", "page"); a.scrollIntoView({inline:"center", block:"nearest"}); } else a.removeAttribute("aria-current"); });
  document.title = (p.id === "home" ? "" : p.name + " | ") + "The Ledger: India 2026";
  setupReveal();
  if (INIT[p.id]) INIT[p.id]();
  window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
const prog = document.getElementById("prog");
addEventListener("scroll", () => { const h = document.documentElement.scrollHeight - innerHeight; prog.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`; }, {passive:true});
document.getElementById("theme").addEventListener("click", () => {
  const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.dataset.theme = cur === "dark" ? "light" : "dark";
});
/* ---- intro animation (once per tab session) ---- */
(function(){
  const ov = document.getElementById("introOverlay");
  if (!ov) return;
  if (sessionStorage.getItem("ledgerIntroSeen") || calm) { ov.remove(); return; }
  sessionStorage.setItem("ledgerIntroSeen", "1");
  setTimeout(() => { ov.classList.add("gone"); setTimeout(() => ov.remove(), 550); }, 1500);
  ov.addEventListener("click", () => { ov.classList.add("gone"); setTimeout(() => ov.remove(), 300); });
})();

route();
