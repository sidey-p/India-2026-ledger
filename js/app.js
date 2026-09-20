"use strict";
/* ---------- INIT + ROUTER ---------- */
const INIT = {
  bill(){
    const sal = document.getElementById("sal"), rng = document.getElementById("salr"), std = document.getElementById("std"), out = document.getElementById("calcout");
    const inr = n => "₹" + fmt(Math.round(n));
    const go = () => { const g = (parseFloat(sal.value) || 0) * 100000; const r = calcTax(g, std.checked); const eff = g ? r.total / g * 100 : 0;
      out.innerHTML = `<div><span>Gross salary</span><b>${inr(g)}</b></div><div><span>Taxable income</span><b>${inr(r.taxable)}</b></div><div><span>Slab tax after rebate</span><b>${inr(r.tax)}</b></div><div><span>Surcharge</span><b>${inr(r.sur)}</b></div><div><span>Cess (4%)</span><b>${inr(r.cess)}</b></div><div class="total"><span>Total income tax</span><b>${inr(r.total)}</b></div><div><span>Share of gross</span><b>${eff.toFixed(1)}%</b></div><div><span>Monthly take-home (before other deductions)</span><b>${inr((g - r.total) / 12)}</b></div>`; };
    sal.addEventListener("input", () => { rng.value = Math.min(100, sal.value); go(); });
    rng.addEventListener("input", () => { sal.value = rng.value; go(); });
    std.addEventListener("change", go); go();
  },
  promises(){
    const btns = document.querySelectorAll(".fchip");
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      const f = b.dataset.f; document.querySelectorAll("#plist .pc").forEach(p => { p.style.display = (f === "all" || p.dataset.s === f) ? "" : "none"; });
    }));
  }
};
const nav = document.getElementById("nav"), app = document.getElementById("app");
nav.innerHTML = PAGES.map((p,i) => `<a href="#/${p.id}" data-id="${p.id}"><i>${String(i+1).padStart(2,"0")}</i>${p.name}</a>`).join("");
function route(){
  const id = location.hash.replace(/^#\/?/, "") || "open";
  const p = PAGES.find(x => x.id === id) || PAGES[0];
  app.innerHTML = R[p.id]();
  nav.querySelectorAll("a").forEach(a => { if (a.dataset.id === p.id) { a.setAttribute("aria-current","page"); a.scrollIntoView({inline:"center",block:"nearest"}); } else a.removeAttribute("aria-current"); });
  document.title = (p.id === "open" ? "" : p.name + " | ") + "The Ledger: India 2026";
  if (INIT[p.id]) INIT[p.id]();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
document.getElementById("theme").addEventListener("click", () => {
  const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = cur === "dark" ? "light" : "dark";
});
route();
