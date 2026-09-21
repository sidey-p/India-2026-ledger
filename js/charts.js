"use strict";
/* Reusable stat components. Everything returns an HTML string. */
const ee = s => String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const tipA = t => `data-tip="${ee(t)}" tabindex="0"`;
const ic = n => `<svg class="icon" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const srcs = (...k) => `<span class="srcs">${c(...k)}</span>`;

/* KPI tiles. t = {n (number) | txt, pre, suf, dec, l, d, k, tone, tip} */
function tiles(list){
  return `<div class="kpis">${list.map(t => {
    const shown = t.txt !== undefined ? t.txt : `${t.pre||""}${Number(t.n).toLocaleString("en-IN",{minimumFractionDigits:t.dec||0,maximumFractionDigits:t.dec||0})}${t.suf||""}`;
    const cnt = t.txt === undefined ? ` data-count="${t.n}" data-dec="${t.dec||0}" data-pre="${ee(t.pre||"")}" data-suf="${ee(t.suf||"")}"` : "";
    return `<div class="kpi ${t.tone||""}" ${tipA(t.tip||t.l)}><div class="n"><span${cnt}>${shown}</span></div><div class="l">${t.l}</div>${t.d?`<div class="d">${t.d}</div>`:""}${t.k?`<div class="d">${c(...[].concat(t.k))}</div>`:""}</div>`;
  }).join("")}</div>`;
}

/* Horizontal bars. rows: {l, v, note, tone, india, nv, tip} */
function hbars(rows, o={}){
  const f = o.fmt || (v => v); const vals = rows.filter(r => !r.nv).map(r => r.v); const m = o.max || Math.max(...vals);
  return `<div class="hb" role="list">${rows.map(r => r.nv
    ? `<div class="hrow nv" role="listitem"><span class="hl">${r.l}</span><span class="ht"></span><span class="hv">n/v</span></div>`
    : `<div class="hrow ${r.tone||""}${r.india?" me":""}" role="listitem" ${tipA(r.tip || `${r.l}: ${f(r.v)}${r.note?" ("+r.note+")":""}`)}><span class="hl">${r.l}</span><span class="ht"><i style="--w:${Math.max(1.5,r.v/m*100).toFixed(1)}%"></i></span><span class="hv">${r.disp!==undefined?r.disp:f(r.v)}${r.note?`<small>${r.note}</small>`:""}</span></div>`).join("")}</div>`;
}

/* Column chart for trends. rows: {l, v, tone, india, tip} */
function cols(rows, o={}){
  const f = o.fmt || (v => v); const m = o.max || Math.max(...rows.map(r => r.v)) * 1.12;
  return `<div class="cols" style="--n:${rows.length}" role="list">${rows.map(r => `<div class="col ${r.tone||""}${r.india?" me":""}" role="listitem" ${tipA(r.tip || `${r.l}: ${f(r.v)}`)}><div class="cv">${f(r.v)}</div><div class="cb"><i style="--h:${(r.v/m*100).toFixed(1)}%"></i></div><div class="cl">${r.l}</div></div>`).join("")}</div>`;
}

/* Donut. parts: [{v (percent), l, tone}] */
function donut(parts, o={}){
  const r = 64, C = 2*Math.PI*r; let off = 0;
  const arcs = parts.map(p => { const len = p.v/100*C; const s = `<circle class="t-${p.tone||"blue"}" cx="85" cy="85" r="${r}" stroke-dasharray="${len.toFixed(2)} ${(C-len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 85 85)" ${tipA(`${p.l}: ${p.v}%`)}/>`; off += len; return s; }).join("");
  return `<div class="donut-wrap"><svg class="donut" viewBox="0 0 170 170" role="img" aria-label="${ee(o.label||"Donut chart")}"><circle class="bgc" cx="85" cy="85" r="${r}"/>${arcs}<text x="85" y="88">${o.center||""}</text><text class="sub" x="85" y="106">${o.sub||""}</text></svg><div class="legend">${parts.map(p => `<div><i class="${p.tone||"blue"}"></i><span>${p.l} <b>${p.v}%</b></span></div>`).join("")}</div></div>`;
}

/* Radar. rows: {l, v (0-100), tip} */
function radar(rows, size=420){
  const n = rows.length, cx = size/2, cy = size/2, R = size/2 - 84;
  const P = (i, v) => { const a = (-90 + 360*i/n) * Math.PI/180; return [cx + Math.cos(a)*R*v/100, cy + Math.sin(a)*R*v/100]; };
  const ring = v => rows.map((_, i) => P(i, v).map(x => x.toFixed(1)).join(",")).join(" ");
  const poly = rows.map((r, i) => P(i, r.v).map(x => x.toFixed(1)).join(",")).join(" ");
  const axes = rows.map((_, i) => { const [x, y] = P(i, 100); return `<line class="axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join("");
  const labels = rows.map((r, i) => { const [x, y] = P(i, 122); const anchor = Math.abs(x-cx) < 8 ? "middle" : (x > cx ? "start" : "end"); return `<text class="lbl" x="${x.toFixed(1)}" y="${(y+4).toFixed(1)}" text-anchor="${anchor}">${r.l}</text>`; }).join("");
  const dots = rows.map((r, i) => { const [x, y] = P(i, r.v); return `<circle class="dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" ${tipA(r.tip || `${r.l}: ${r.v}%`)}/>`; }).join("");
  return `<svg class="chart" viewBox="0 0 ${size} ${size}" role="img" aria-label="Radar chart of the share of ranked countries India beats">${[25,50,75,100].map(v => `<polygon class="ring" points="${ring(v)}"/>`).join("")}${axes}<polygon class="rad" points="${poly}"/>${dots}${labels}</svg>`;
}

/* Line chart. pts: [[x,y]], o: {x0,x1,y0,y1,xt,yt,fx,fy,marker:[x,y,label],label} */
function lineChart(pts, o={}){
  const W = o.w || 640, H = o.h || 250, p = {l:46, r:16, t:16, b:32};
  const xs = pts.map(a => a[0]), ys = pts.map(a => a[1]);
  const x0 = o.x0 ?? Math.min(...xs), x1 = o.x1 ?? Math.max(...xs), y0 = o.y0 ?? 0, y1 = o.y1 ?? Math.max(...ys) * 1.1;
  const X = x => p.l + (x-x0)/(x1-x0)*(W-p.l-p.r), Y = y => H-p.b - (y-y0)/(y1-y0)*(H-p.t-p.b);
  const fx = o.fx || (v => v), fy = o.fy || (v => v);
  const yt = o.yt || [0,.25,.5,.75,1].map(t => y0 + t*(y1-y0));
  const xt = o.xt || [x0, (x0+x1)/2, x1];
  const d = pts.map((a, i) => (i ? "L" : "M") + X(a[0]).toFixed(1) + " " + Y(a[1]).toFixed(1)).join("");
  const area = d + `L${X(x1).toFixed(1)} ${Y(y0).toFixed(1)}L${X(x0).toFixed(1)} ${Y(y0).toFixed(1)}Z`;
  const grid = yt.map(v => `<line class="grid" x1="${p.l}" x2="${W-p.r}" y1="${Y(v).toFixed(1)}" y2="${Y(v).toFixed(1)}"/><text x="${p.l-8}" y="${(Y(v)+4).toFixed(1)}" text-anchor="end">${fy(v)}</text>`).join("");
  const xl = xt.map(v => `<text x="${X(v).toFixed(1)}" y="${H-10}" text-anchor="middle">${fx(v)}</text>`).join("");
  const dots = o.dots ? pts.map(a => `<circle class="dot" cx="${X(a[0]).toFixed(1)}" cy="${Y(a[1]).toFixed(1)}" r="5" ${tipA((o.dotTip||(q=>q.join(", ")))(a))}/>`).join("") : "";
  let mk = "";
  if (o.marker){ const [mx, my, ml] = o.marker; mk = `<line class="grid" x1="${X(mx).toFixed(1)}" x2="${X(mx).toFixed(1)}" y1="${p.t}" y2="${H-p.b}" stroke-dasharray="4 4"/><circle class="dot" cx="${X(mx).toFixed(1)}" cy="${Y(my).toFixed(1)}" r="6"/><text x="${Math.min(W-p.r-70, X(mx)+8).toFixed(1)}" y="${(Y(my)-10).toFixed(1)}" style="fill:var(--text);font-weight:800">${ml}</text>`; }
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${ee(o.label||"Line chart")}">${grid}${xl}<path class="area" d="${area}"/><path class="ln" d="${d}"/>${dots}${mk}</svg>`;
}

/* Rank ruler rows (share of ranked countries India beats). */
function rankRows(list){
  return list.map(x => { const pct = (x.n - x.r) / x.n * 100;
    return `<div class="rk" ${tipA(`${x.l}: rank ${x.r} of ${x.n}. India beats ${pct.toFixed(0)}% of ranked countries.`)}><div>${x.l}${c(x.k)}</div><div class="trk"><i style="--w:${pct.toFixed(1)}%"></i><b style="left:${pct.toFixed(1)}%"></b></div><div class="r"><b>${x.r}</b> of ${x.n}<br><span class="fine">beats ${pct.toFixed(0)}%</span></div></div>`; }).join("");
}

/* Score meter (value out of max, optional reference mark) */
function meter(v, max, o={}){
  const w = v/max*100, r = o.ref !== undefined ? o.ref/max*100 : null;
  return `<div class="hrow ${o.tone||"me"}" ${tipA(o.tip || `${o.label||""}: ${v} of ${max}`)}><span class="hl">${o.label||""}</span><span class="ht" style="position:relative"><i style="--w:${w.toFixed(1)}%"></i>${r!==null?`<u style="position:absolute;left:${r}%;top:-3px;bottom:-3px;width:2px;background:var(--text);opacity:.8"></u>`:""}</span><span class="hv">${v}/${max}${o.note?`<small>${o.note}</small>`:""}</span></div>`;
}

/* Tabs */
const tabs = (id, items) => `<div data-tabs="${id}"><div class="tabbar" role="tablist">${items.map((t, i) => `<button type="button" role="tab" class="tabbtn" data-tab="${t.k}" aria-selected="${i===0}">${t.l}</button>`).join("")}</div>${items.map((t, i) => `<div class="tabpanel" role="tabpanel" data-panel="${t.k}"${i?" hidden":""}>${t.h}</div>`).join("")}</div>`;

/* Layout helpers */
const panel = (eyebrow, title, body, read, keys) => `<div class="panel"><div class="eyebrow">${eyebrow}</div><h3>${title}</h3>${body}${read?`<p class="read"><b>Read:</b> ${read}</p>`:""}${keys?`<div class="fine" style="margin-top:8px">Sources ${c(...keys)}</div>`:""}</div>`;
const S = (id, icon, eyebrow, title, sub, body) => `<section class="wrap reveal sec" id="s-${id}"><div class="section-head"><div style="display:flex;gap:14px;align-items:center"><div class="ico">${ic(icon)}</div><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2></div></div>${sub?`<p>${sub}</p>`:""}</div>${body}</section>`;
const ST2 = {delivered:"Delivered",partial:"Partly",missed:"Missed",unverified:"Can't verify",improving:"Improving",mixed:"Mixed",weak:"Weak",stressed:"Under stress",worsening:"Worsening",flat:"Flat",far:"Far behind",behind:"Behind",strong:"Strong"};
const chipS = s => `<span class="st ${s}">${ST2[s]||s}</span>`;
