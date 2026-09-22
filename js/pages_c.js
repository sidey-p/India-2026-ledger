"use strict";
/* ---------------- BENEFITS: who pays, who receives ---------------- */
R.benefits = () => `
${head("benefits","What you get back","Who pays tax, who receives what, and what the states are handing out.")}
${S("kpi","wallet","01 / the numbers","Tax paid, benefits received","",tiles([
 {n:3.2,dec:1,suf:" crore",l:"Income-tax returns above the exemption (FY24, calc)",d:"8.09 crore filed; 4.9 crore showed zero taxable income",tone:"orange",k:["itr"]},
 {n:81.35,dec:2,suf:" crore",l:"People covered by free foodgrains (PMGKAY)",d:"About 25 recipients per return above the exemption (calc)",tone:"cyan",k:["pmg","itr"]},
 {n:4.55,dec:2,pre:"Rs ",suf:" lakh cr",l:"Union subsidies, 2026-27",d:"Food 2.28, fertiliser 1.71",tone:"lime",k:["exprs"]},
 {n:63500,pre:"Rs ",suf:" cr",l:"PM-KISAN, flat for the third year",d:"Rs 6,000 a year per farmer",tone:"orange",k:["pmk"]},
 {n:95692,pre:"Rs ",suf:" cr",l:"VB-G RAM G (replaced MGNREGA, Dec 2025)",d:"MGNREGS itself: Rs 30,000 crore, down from 86,000",tone:"blue",k:["vbg","exprs"]},
 {n:1.68,dec:2,pre:"Rs ",suf:" lakh cr",l:"State women's cash schemes (2025-26)",d:"12 states (14 by mid-2026)",tone:"violet",k:["cash_dh","cash_bs"]},
 {n:27.5,dec:1,suf:"%",l:"State debt / GDP (Mar 2025)",d:"Only Gujarat, Maharashtra, Odisha under 20%",tone:"red",k:["ssf"]},
 {n:40,suf:"%",l:"Union revenue receipts spent on interest",tone:"red",k:["exprs"]}
]))}
${S("who","scale","02 / who pays","A narrow base pays income tax; everyone pays indirect tax","Income tax reaches a small group. Almost everyone pays GST, fuel tax and stamp duty inside prices.",`<div class="g2">
 ${panel("People counted, in crore (not like-for-like)","Returns vs recipients",hbars([{l:"Returns above exemption",v:3.2,tone:"orange",note:"calc"},{l:"All returns filed",v:8.09,tone:"blue"},{l:"Free-grain recipients",v:81.35,tone:"cyan"}],{max:85,fmt:v=>v+" cr"}),"These are different things (returns, people). The point is scale: the income-tax base is narrow while entitlements reach most households.",["itr","pmg"])}
 ${panel("Union spending shares, 2026-27 (categories overlap)","Where a Union rupee goes",hbars([{l:"Interest",v:26.3,tone:"red"},{l:"Capital spending (all)",v:22.9,tone:"lime",note:"calc"},{l:"Defence",v:14.67,tone:"violet"},{l:"Subsidies",v:8.5,tone:"orange",note:"calc"},{l:"VB-G RAM G + MGNREGS",v:2.35,tone:"blue",note:"calc"},{l:"PM-KISAN",v:1.19,tone:"cyan",note:"calc"}],{fmt:pc,max:30}),"Share of the Rs 53.47 lakh crore Union spending plan. Defence and capital spending overlap, so do not add these.",["exprs","def_prs"])}
</div>`)}
${S("states","cart","03 / state cash transfers","Women's cash schemes, across parties","Started in two states in 2022-23. Now 12 to 14. Most were announced before elections, by governments of several parties.",`<div class="g2">
 ${panel("Budget for the scheme, Rs crore","2025-26 and 2026-27",hbars(CASHT.filter(x=>x.b).map(x=>({l:x.s,v:x.b,tone:x.pc==="inc"?"cyan":"orange",tip:`${x.s}: Rs ${fmt(x.b)} crore. ${x.note}`})),{max:40000,fmt:v=>"Rs "+fmt(v)}),"Orange: states now under BJP or NDA. Blue: Congress. Bihar is a one-time payout. Karnataka's guarantee schemes are not sized here.",["cash_bs","cash_dp","bihar_dh"])}
 <div class="panel"><div class="eyebrow">Detail</div><h3>What each state did</h3><div class="tbl"><table><thead><tr><th>State</th><th>Scheme</th><th>Payout</th><th>Note</th></tr></thead><tbody>${CASHT.map(x=>`<tr><td><b>${x.s}</b></td><td>${x.sch}</td><td>${x.amt}</td><td>${x.note} ${c(...x.k)}</td></tr>`).join("")}</tbody></table></div></div>
</div>
<p class="read" style="margin-top:14px"><b>Read:</b> PRS found six of the 12 states running these schemes have a revenue deficit, and the schemes make it worse. When power changed hands in Bengal, the new government raised the monthly payout to Rs 3,000. In Bihar, Rs 10,000 went to women's accounts days before the election model code, and the coalition won. Cash transfers win votes across parties; the fiscal cost is real and the evidence on jobs or income effects is thin.${c("cash_dh","bihar_dh","cash_bs")}</p>`)}
${S("subs","fuel","04 / subsidies","Food, fertiliser, and a fixed farm cheque","",`<div class="g3">
 ${panel("Food and fertiliser","87% of the subsidy bill",donut([{v:50,l:"Food (Rs 2.28 lakh cr)",tone:"cyan"},{v:37.6,l:"Fertiliser (Rs 1.71 lakh cr)",tone:"orange"},{v:12.4,l:"Other incl. LPG 2.6%",tone:"grey"}],{center:"87%",sub:"food+fert.",label:"Subsidy split"}),"In 2025-26 food subsidy ran 12% over budget and fertiliser 11% over.",["exprs"])}
 ${panel("PM-KISAN, Rs crore","Frozen for three years",cols([{l:"2024-25",v:63500},{l:"2025-26",v:63500},{l:"2026-27",v:63500,tone:"orange"}],{fmt:v=>fmt(v)}),"A flat nominal amount loses value as costs rise. The Bihar NDA campaign promised to raise it by Rs 3,000; the 2026 Budget did not.",["pmk","bihar_dh"])}
 ${panel("MGNREGA to VB-G RAM G","Budget for the old scheme fell by two-thirds",cols([{l:"MGNREGA 2025-26",v:86000,tone:"blue"},{l:"MGNREGS 2026-27",v:30000,tone:"red"},{l:"VB-G RAM G 2026-27",v:95692,tone:"cyan"}],{fmt:v=>fmt(v)}),"The Act changed in December 2025; activists said several aspects were unclear.",["vbg","exprs"])}
</div>`)}
${pager("benefits")}`;

/* ---------------- POLICY: new rules and charges ---------------- */
R.policy = () => `
${head("policy","New rules, new charges","UPI merchant fees, tax law, labour codes, and how Parliament is passing them.")}
${S("upi","wifi","01 / UPI merchant fee","The 0.4% UPI fee, in plain numbers","From 15 October 2026. The consumer does not pay it directly. The merchant does. Whether shops pass it on is the open question.",tiles([
 {n:0.4,dec:1,suf:"%",l:"Fee on merchant payments above Rs 2,000",tone:"orange",k:["upi_bs","upi_op"]},
 {n:300,pre:"Rs ",l:"Fee cap, for payments of Rs 75,000 or more",tone:"lime",k:["upi_bs"]},
 {n:96,suf:"%",l:"Merchant payments unaffected (up to Rs 2,000)",tone:"cyan",k:["upi_op"]},
 {n:18,suf:"%",l:"GST charged on the fee itself",d:"Rs 10,000 payment: Rs 40 fee + Rs 7.20 GST = Rs 47.20",tone:"red",k:["upi_dt"]},
 {n:20000,pre:"Rs ",suf:" cr",l:"Estimated yearly cost of running UPI",tone:"blue",k:["upi_bs"]},
 {n:2000,pre:"Rs ",suf:" cr",l:"Government incentive budgeted, 2026-27",d:"Rs 2,196 crore paid in 2025-26",tone:"violet",k:["upi_op"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Two statements, fifteen months apart","What the government said, and then did",`<div class="hb"><div class="hrow" ${tipA("Finance Ministry, 12 June 2025")}><span class="hl">June 2025</span><span class="ht"><i style="--w:12%"></i></span><span class="hv">"No plan"</span></div><div class="hrow me" ${tipA("NPCI announcement, 15 September 2026")}><span class="hl">Sept 2026</span><span class="ht"><i style="--w:100%"></i></span><span class="hv">0.4% fee</span></div></div>`,"In June 2025 the Finance Ministry called MDR reports 'completely false, baseless, and misleading'. In March 2026 a parliamentary committee called zero-MDR unsustainable, and the US trade representative named it a trade barrier. In September the fee was announced. The government rejects that it was foreign pressure and says costs drove it.",["upi_25","upi_tt","upi_bs"])}
 ${panel("Who pays whom","What UPI's subsidy covered",cols([{l:"Running cost (est.)",v:20000,tone:"red"},{l:"Govt incentive 2025-26",v:2196,tone:"orange"},{l:"Industry losses (est.)",v:5500,tone:"grey"}],{fmt:v=>fmt(v)}),"Rs crore per year. The incentive covered about a tenth of the estimated running cost.",["upi_bs","upi_tt","upi_op"])}
</div></section>
${S("tl","book","02 / timeline","Policy timeline","",`<div class="panel"><ol class="tl">${POLICIES.map(p=>`<li><div class="d">${p.d.toUpperCase()}</div><h4>${p.t}</h4><p>${p.e} ${c(...p.k)}</p></li>`).join("")}</ol></div>`)}
${S("parl","scale","03 / how laws are passed","Parliament is passing more with less debate","Lok Sabha productivity in the last three sessions measured by PRS.",`<div class="g2">
 ${panel("Lok Sabha productivity, share of scheduled time","95% to 29% to 15%",cols([{l:"2024",v:95,tone:"cyan"},{l:"2025",v:29,tone:"orange"},{l:"Monsoon 2026",v:15,tone:"red"}],{fmt:pc}),"The 15% matches the lowest since the Winter Session of 2016. Question Hour ran 1% of scheduled time in the Lok Sabha.",["par_out","par_prs"])}
 ${panel("Monsoon Session 2026","12 bills introduced, 11 passed, 0 sent to committees",hbars([{l:"Public Exams Amendment Bill",v:17.6,tone:"cyan",note:"hours"},{l:"All other 10 bills together",v:15.4,tone:"orange",note:"hours"},{l:"Seven bills, Lok Sabha",v:0.47,tone:"red",note:"28 minutes total"}],{max:20,fmt:v=>v+" h"}),"A bill increasing the number of Supreme Court judges got four minutes of Lok Sabha discussion. In 2025, five of 13 bills went to committees. Passing bills fast is not itself wrong; passing them unseen makes errors harder to catch.",["par_bs","par_bs2"])}
</div>
<div class="note" style="margin-top:14px"><b>Not verified this session:</b> the Digital Personal Data Protection rules, the Online Gaming Act, the SHANTI nuclear law, the Waqf Amendment Act, the FASTag annual pass and the state of GST 2.0 slabs beyond the October 2025 collection data.</div>`)}
${pager("policy")}`;

/* ---------------- DEPARTMENTS ---------------- */
R.depts = () => `
${head("depts","Every department, one line each","Budget, status, and what the record shows. Government claims are marked as claims.")}
${S("board","building","01 / status board","Twenty-two departments and bodies","Status is my reading of the evidence below it. Click any row's sources to check.",`
<div class="filters" role="group" aria-label="Filter departments">${["all","improving","mixed","weak","stressed","unverified"].map(f=>`<button type="button" class="fchip" data-df="${f}" aria-pressed="${f==="all"}">${f==="all"?"All":(ST2[f]||f)}</button>`).join("")}</div>
<div id="dlist">${DEPTS.map(d=>`<article class="pc" data-s="${d.s}"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:flex-start"><div><h4>${d.n}</h4><div class="meta">${d.b}</div></div>${chipS(d.s)}</div><p style="margin:.3em 0 0;color:var(--soft)">${d.e} ${c(...d.k)}</p></article>`).join("")}</div>`)}
${S("count","chart","02 / count","How the board reads","",`<div class="g2">
 ${panel("Status of the 22","My reading of each row",hbars(["improving","mixed","weak","stressed","unverified"].map(k=>({l:ST2[k],v:DEPTS.filter(d=>d.s===k).length,tone:{improving:"cyan",mixed:"orange",weak:"red",stressed:"red",unverified:"grey"}[k]})),{max:10}),"Only one department, Railways, is rated improving, and its evidence is government data. The board is not a ranking of ministers or parties.",[])}
 <div class="note"><b>What this does not cover.</b> I did not audit every ministry. Missing here: Communications, Space, Environment, Tribal Affairs, Social Justice, Women and Child Development, Culture and Sports. Absence is not a clean bill.</div>
</div>`)}
${pager("depts")}`;

/* ---------------- STATES: interactive map ---------------- */
const LAYERS = [
 {k:"pc",l:"Who runs the state",type:"cat"},
 {k:"pci",l:"Income per person",f:v=>"Rs "+fmt(v),dir:"hi",u:"GSDP per person, 2024-25",src:["pci_w"]},
 {k:"imr",l:"Infant deaths",f:v=>v,dir:"lo",u:"per 1,000 births (SRS, 2024 bulletin)",src:["imr_w","srs"]},
 {k:"mpi",l:"Multidimensional poverty",f:v=>v+"%",dir:"lo",u:"% of people, 2019-21",src:["mpi_r","mpi_n"]},
 {k:"crime",l:"Recorded crime rate",f:v=>v,dir:"neutral",u:"per lakh, IPC+SLL, 2023",src:["ncrb_w","ncrb_p"]},
 {k:"murder",l:"Murder rate",f:v=>v,dir:"lo",u:"per lakh, 2023",src:["ncrb_w","ncrb_p"]},
 {k:"conv",l:"Conviction rate",f:v=>v+"%",dir:"hi",u:"IPC cases, 2023",src:["ncrb_w","ncrb_p"]},
 {k:"corr",l:"Corruption cases registered",f:v=>v,dir:"neutral",u:"cases, NCRB 2023 (not per person)",src:["ncrb_w","ncrb_p"]}
];
const PARTYCLS = {bjp:{l:"BJP chief minister",v:"--orange"},nda:{l:"NDA ally chief minister",v:"--lime"},inc:{l:"Congress chief minister",v:"--blue"},opp:{l:"Other opposition / regional",v:"--violet"},none:{l:"No elected chief minister or no data",v:"--line"}};
function layerVals(L){ return Object.keys(STATE_INFO).filter(i => STATE_INFO[i][L.k] !== undefined).map(i => ({id:i, v:STATE_INFO[i][L.k]})); }
function stateFill(L, id){
  const d = STATE_INFO[id];
  if (L.type === "cat") return `var(${PARTYCLS[d.pc||"none"].v})`;
  if (d[L.k] === undefined) return "color-mix(in srgb,var(--muted) 18%,var(--panel))";
  const all = layerVals(L).map(x => x.v).sort((a,b) => a-b);
  const rank = all.filter(v => v < d[L.k]).length / Math.max(1, all.length - 1);
  if (L.dir === "neutral") return `color-mix(in srgb,var(--blue) ${Math.round(18+rank*72)}%,var(--panel))`;
  const goodness = L.dir === "hi" ? rank : 1 - rank;
  return `color-mix(in srgb,var(--cyan) ${Math.round(goodness*100)}%,var(--red))`;
}
function stateTip(id){
  const d = STATE_INFO[id]; let t = d.n + (d.cm ? `\nCM: ${d.cm} (${d.p})` : "\nNo elected chief minister");
  LAYERS.slice(1).forEach(L => { t += `\n${L.l}: ${d[L.k] !== undefined ? L.f(d[L.k]) : "n/a"}`; });
  return t;
}
function stateDetail(id){
  const d = STATE_INFO[id];
  const rows = LAYERS.slice(1).map(L => { const all = layerVals(L); const v = d[L.k];
    if (v === undefined) return `<tr><td>${L.l}</td><td>n/a</td><td></td></tr>`;
    const sorted = all.map(x => x.v).sort((a,b) => L.dir === "lo" ? a-b : b-a);
    const rk = sorted.indexOf(v) + 1;
    return `<tr><td>${L.l}<div class="fine">${L.u}</div></td><td><b>${L.f(v)}</b>${L.k==="mpi"&&d.mpiu?" *":""}</td><td class="fine">#${rk} of ${all.length}</td></tr>`; }).join("");
  return `<div class="eyebrow">Selected</div><h3>${d.n}</h3><p class="muted" style="margin:0 0 10px">${d.cm ? `Chief minister: ${d.cm} (${d.p}). ` + PARTYCLS[d.pc].l + "." : "No elected chief minister (administrator-run) or no data."}</p><div class="tbl"><table style="min-width:0"><thead><tr><th>Measure</th><th>Value</th><th>Rank</th></tr></thead><tbody>${rows}</tbody></table></div><p class="fine">Rank 1 = best for income, conviction rate; lowest for infant deaths, poverty, murder; highest count for crime and corruption cases (recorded rates are not quality scores). * value not re-verified.</p>`;
}
function mapSVG(L){
  const paths = Object.keys(INDIA_MAP.paths).map(id => `<path class="stt" data-id="${id}" d="${INDIA_MAP.paths[id]}" style="fill:${stateFill(L,id)}" tabindex="0" role="button" aria-label="${ee(STATE_INFO[id].n)}" data-tip="${ee(stateTip(id))}"></path>`).join("");
  return `<svg viewBox="${INDIA_MAP.viewBox}" class="indiamap" role="group" aria-label="Map of India by state">${paths}</svg>`;
}
function legendHTML(L){
  if (L.type === "cat") return `<div class="legend" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">${Object.keys(PARTYCLS).map(k => `<div><i style="background:var(${PARTYCLS[k].v})"></i><span>${PARTYCLS[k].l} <b>${Object.keys(STATE_INFO).filter(i=>(STATE_INFO[i].pc||"none")===k).length}</b></span></div>`).join("")}</div>`;
  const vals = layerVals(L).map(x => x.v); const lo = Math.min(...vals), hi = Math.max(...vals);
  const left = L.dir === "hi" ? "var(--red)" : L.dir === "lo" ? "var(--cyan)" : "color-mix(in srgb,var(--blue) 18%,var(--panel))";
  const right = L.dir === "hi" ? "var(--cyan)" : L.dir === "lo" ? "var(--red)" : "var(--blue)";
  return `<div class="ramp" style="background:linear-gradient(90deg,${left},${right})"></div><div class="ramplab"><span>${L.f(lo)}</span><span>${L.u}</span><span>${L.f(hi)}</span></div><p class="fine">Colors rank states against each other (percentile), so extremes do not wash out the rest.${L.dir==="neutral"?" Blue only shows higher or lower; it does not say good or bad.":""}</p>`;
}
function rankBars(L){
  if (L.type === "cat") return "";
  const all = layerVals(L).filter(x => x.id !== "dd").sort((a,b) => L.dir === "lo" ? a.v-b.v : b.v-a.v);
  const top = all.slice(0,5), bot = all.slice(-5);
  const row = (x, tone) => ({l:STATE_INFO[x.id].n, v:x.v, tone});
  const mx = Math.max(...all.map(x => x.v));
  return `<div class="g2"><div><div class="eyebrow">Top 5 (${L.dir==="lo"?"lowest":"highest"})</div>${hbars(top.map(x=>row(x,L.dir==="neutral"?"blue":"cyan")),{fmt:L.f,max:mx})}</div><div><div class="eyebrow">Bottom 5 (${L.dir==="lo"?"highest":"lowest"})</div>${hbars(bot.map(x=>row(x,L.dir==="neutral"?"blue":"red")),{fmt:L.f,max:mx})}</div></div>`;
}
R.states = () => `
${head("states","State by state","Interactive map. Pick a layer, then hover or tap a state.")}
${S("map","ship","01 / the map","Eight layers of state data","Ruling party is as of September 2026. Data years differ by layer. Map is schematic (Ladakh drawn inside Jammu and Kashmir; boundaries are not authoritative).",`
<div class="panel"><div class="eyebrow">Layer</div><div class="tabbar" id="layers" role="tablist">${LAYERS.map((L,i)=>`<button type="button" role="tab" class="tabbtn" data-layer="${L.k}" aria-selected="${i===0}">${L.l}</button>`).join("")}</div>
<div class="mapgrid"><div id="mapbox">${mapSVG(LAYERS[0])}</div><div><div id="statedetail">${stateDetail("up")}</div></div></div>
<div id="maplegend">${legendHTML(LAYERS[0])}</div><div id="maprank"></div>
<p class="fine">Sources ${c("cm_ie","pci_w","imr_w","mpi_r","ncrb_w","ncrb_p","map_s")}. Map paths: svg-maps/india, Victor Cazanave, CC BY 4.0.</p></div>`)}
${S("read","scale","02 / how to read it","Five cautions before you draw conclusions","",`<div class="g2">
 ${panel("Recorded crime is partly a registration story","Kerala and Delhi top the crime rate",hbars([{l:"Kerala",v:1631.2,tone:"orange"},{l:"Delhi",v:1602,tone:"orange"},{l:"Gujarat",v:806.3},{l:"Haryana",v:739.2},{l:"Uttar Pradesh",v:335.3},{l:"India",v:448.3,india:1}],{max:1700}),"NCRB warns that rates depend on how readily complaints are registered. Kerala also has an IPC conviction rate of 88.9%, the highest in India. UP's rate is low and its conviction rate is 74.9%. West Bengal's conviction rate is 8.5%. Do not read the crime rate as a safety score.",["ncrb_w","ncrb_p"])}
 ${panel("Corruption cases are counted where they are registered","Maharashtra 812, Karnataka 362",hbars([{l:"Maharashtra",v:812,tone:"orange"},{l:"Karnataka",v:362,tone:"orange"},{l:"Rajasthan",v:316,tone:"orange"},{l:"Tamil Nadu",v:302,tone:"orange"},{l:"Punjab",v:287,tone:"orange"},{l:"Uttar Pradesh",v:169},{l:"West Bengal",v:8}],{max:850}),"NCRB counted 4,069 anti-corruption cases in 2023 nationally. More cases can mean more enforcement, not more corruption. States with few cases may have weak enforcement. It says nothing about the size of any scam.",["ncrb_w"])}
 ${panel("Party map after 2026","What changed this year",`<ul class="clean"><li>West Bengal: BJP replaced TMC (9 May).</li><li>Tamil Nadu: TVK replaced DMK (10 May).</li><li>Kerala: Congress-led UDF replaced the LDF (18 May).</li><li>Karnataka: D. K. Shivakumar became chief minister (3 June).</li><li>Bihar: BJP's Samrat Choudhary became chief minister (15 April).</li><li>Manipur: an elected government returned in February.</li></ul>`,"BJP now holds 17 chief-minister posts, Congress 4. The rest are regional parties, several allied with the NDA.",["cm_ie","elec"])}
 ${panel("Income and the state ledger","Bihar 33% of India's average",hbars([{l:"Sikkim",v:763749,tone:"cyan"},{l:"Goa",v:709045,tone:"cyan"},{l:"Delhi",v:552727,tone:"cyan"},{l:"India",v:234859,india:1},{l:"Uttar Pradesh",v:124366,tone:"red"},{l:"Bihar",v:76490,tone:"red"}],{fmt:v=>"Rs "+fmt(v),max:800000}),"Small states with tourism, hydropower or a big capital lead. Bihar has been last in every year of the past four decades; it is about a third of the national average.",["pci_w"])}
</div>
<div class="note" style="margin-top:14px"><b>Data warnings.</b> Infant-death values for small states swing from year to year (Manipur shows 2). The poverty layer uses 2019-21 survey data and seven of its values were not re-verified (marked *). Ladakh, Lakshadweep and Dadra & Nagar Haveli/Daman & Diu have partial data.</div>`)}
${pager("states")}`;

/* ---------------- CORRUPTION ---------------- */
R.corruption = () => `
${head("corruption","Scams, corruption, and who is investigated","Every party, every level. Allegation, finding and outcome are kept apart.")}
${S("kpi","scale","01 / the numbers","Corruption in numbers","",tiles([
 {n:39,suf:"/100",l:"Corruption Perceptions Index score",d:"Rank 91 of 182; global average 42",tone:"orange",k:["cpi25"]},
 {n:16518,pre:"Rs ",suf:" cr",l:"Electoral bonds bought, 2018 to Jan 2024",d:"Struck down 15 Feb 2024",tone:"red",k:["eb_adr"]},
 {n:46,suf:"%",l:"Lok Sabha MPs (2024) with declared criminal cases",d:"27 convicted; record high",tone:"red",k:["adr_ls"]},
 {n:43,l:"ED money-laundering convictions, FY22 to FY26",d:"From 4,622 cases",tone:"orange",k:["ed_a2z"]},
 {n:2,l:"Convictions among 193 politicians booked by ED (10 yrs)",tone:"orange",k:["ed_dh"]},
 {n:54282,pre:"Rs ",suf:" cr",l:"Grants with no utilisation certificate (CAG)",d:"Paperwork gap; not proven theft",tone:"orange",k:["cag_w","cag_w2"]},
 {n:4069,l:"Anti-corruption cases registered nationally, 2023",d:"Maharashtra 812",tone:"blue",k:["ncrb_w"]},
 {n:65,suf:"%",l:"New West Bengal MLAs (2026) with declared cases",d:"49% in 2021",tone:"red",k:["adr_wb"]}
]))}
${S("money","wallet","02 / political money","Who funds the parties","",`<div class="g2">
 ${panel("Donations through electoral bonds, 2017-18 to 2022-23","Rs crore, top three",hbars([{l:"BJP",v:6566,tone:"orange"},{l:"Congress",v:1122,tone:"blue"},{l:"TMC",v:1092,tone:"cyan"}],{max:7000,fmt:v=>"Rs "+fmt(v)}),"BJP took 48.4% of bond money received by 20 parties. The bonds were anonymous to the public until the Supreme Court struck them down. TMC got 95% of its donations via bonds; the BJD 93%.",["eb_trib","eb_adr2"])}
 ${panel("Party donations over Rs 20,000, after the bonds","BJP up 53%, Congress down 54%",cols([{l:"BJP 2023-24",v:3967,tone:"orange"},{l:"BJP 2024-25",v:6088,tone:"orange"},{l:"Cong. 2023-24",v:1129,tone:"blue"},{l:"Cong. 2024-25",v:522,tone:"blue"}],{fmt:v=>fmt(v)}),"Rs crore (ADR). Transparency activists say the same practices continue through other channels, such as electoral trusts.",["eb_adr"])}
</div>`)}
${S("agencies","shield","03 / investigations","Central agencies: activity vs outcomes","The government says the agencies act on evidence, not politics. Critics say the pattern is uneven. Both are on the record.",`<div class="g2">
 ${panel("ED money-laundering cases and convictions","Cases up; convictions flat",cols([{l:"FY22",v:1116},{l:"FY23",v:953},{l:"FY24",v:698},{l:"FY25",v:775},{l:"FY26",v:1080,tone:"red"}],{fmt:v=>fmt(v)}),"Convictions in those years: 3, 9, 13, 9, 9. Government: 94.82% conviction rate among cases that reached a verdict. Most trials had not begun.",["ed_wire","ed_a2z","ed_wire2"])}
 ${panel("Who gets investigated","Politicians in ED cases",hbars([{l:"Prominent politicians probed 2014-22",v:121,tone:"blue"},{l:"Of those, opposition",v:115,tone:"red"},{l:"Politicians booked, 2015-25",v:193,tone:"blue"},{l:"Convictions among them",v:2,tone:"orange"}],{max:200}),"The 121 and 115 come from an Indian Express analysis cited by The Wire. Investigations reportedly slow when a target joins the ruling side (a claim by researchers). The minister told Parliament ED does not distinguish by party.",["ed_wire2","ed_dh"])}
</div>`)}
${S("cases","search","04 / case files","What the record shows","Allegation, finding, and status are labeled separately.",`<div class="tbl"><table><thead><tr><th>Case</th><th>Who</th><th>What the record shows</th><th>Status</th></tr></thead><tbody>${CASES.map(x=>`<tr><td><b>${x.c}</b></td><td>${x.who}</td><td>${x.f} ${c(...x.k)}</td><td>${x.st}</td></tr>`).join("")}</tbody></table></div>`)}
${S("adr","info","05 / who is in politics","Declared criminal cases, by party","Self-declared in candidate affidavits. A case is not a conviction.",`<div class="g2">
 ${panel("Lok Sabha 2024 winners with declared cases","Share of each party's MPs",hbars([{l:"Shiv Sena",v:71,tone:"violet",note:"5 of 7"},{l:"DMK",v:59,tone:"violet",note:"13 of 22"},{l:"TDP",v:50,tone:"violet",note:"8 of 16"},{l:"Congress",v:49,tone:"blue",note:"49 of 99"},{l:"SP",v:45,tone:"violet",note:"21 of 37"},{l:"TMC",v:45,tone:"cyan",note:"13 of 29"},{l:"BJP",v:39,tone:"orange",note:"94 of 240"},{l:"All MPs",v:46,india:1,note:"251 of 543"}],{fmt:pc,max:80}),"Every major party has a large share. Serious cases: 170 MPs (31%). Winning odds for a candidate with declared cases were 15.3%.",["adr_ls"])}
 ${panel("2026 state assemblies","Newly elected MLAs with declared cases",hbars([{l:"West Bengal (all)",v:65,tone:"red",note:"190 of 292"},{l:"Bengal BJP",v:74,tone:"orange",note:"152 of 206"},{l:"Bengal TMC",v:43,tone:"cyan",note:"34 of 80"},{l:"Assam (all)",v:17,tone:"blue",note:"21 of 126"},{l:"All state MLAs (2025)",v:45,india:1,note:"1,861 of 4,092"}],{fmt:pc,max:80}),"Bengal rose from 49% in 2021 to 65%. Assam fell from 27% to 17%. Andhra Pradesh had the highest state share (79%). Wealth rose too: 85% of Assam MLAs are crorepatis.",["adr_wb","adr_as","adr_st"])}
</div>`)}
${S("states","building","06 / where cases are registered","Corruption cases by state","Counts, not per person. See the State map reel for all states.",`<div class="g2">
 ${panel("NCRB anti-corruption cases, 2023","Top states",hbars([{l:"Maharashtra",v:812},{l:"Karnataka",v:362},{l:"Rajasthan",v:316},{l:"Tamil Nadu",v:302},{l:"Punjab",v:287},{l:"Odisha",v:267},{l:"Madhya Pradesh",v:262},{l:"Kerala",v:211}],{max:850}),"The list mixes BJP, Congress and regional governments. It measures registered cases, not corruption.",["ncrb_w"])}
 <div class="note"><b>Not verified this session:</b> the Delhi excise policy case, Karnataka's MUDA case, the TASMAC probe, Telangana's Kaleshwaram probe, the Jane Street order, PM CARES, Pegasus, and Lokpal statistics. This reel lists what could be sourced, not every alleged scam. Newslaundry is subscriber-funded; in August 2026 the Delhi Commission for Women said it is examining complaints about its workplace handling. Its reporting is used only where an RTI reply or public record supports it.</div>
</div>`)}
${pager("corruption")}`;

/* ---------------- PAPER vs GROUND ---------------- */
R.ground = () => `
${head("ground","Paper vs ground","What official numbers say, and what independent checks found.")}
${S("gap","search","01 / gap in numbers","How much of the headline survives","Simple ratios from reported figures. They compare different things, so read them as scale, not as a score.",`<div class="g2">
 ${panel("Share of the promise or headline that reached the ground","Calc",hbars([{l:"PM internships finished vs promised (2 yrs)",v:.17,tone:"red",note:"5,200 of 30 lakh"},{l:"PM internship offers vs promised",v:5.8,tone:"red",note:"1.73 lakh of 30 lakh"},{l:"Net FDI vs gross FDI, FY26",v:7.3,tone:"orange",note:"$6.95B of $94.84B"},{l:"ED convictions vs cases, FY22-26",v:0.93,tone:"orange",note:"43 of 4,622"},{l:"Villages with working water (audit)",v:74,tone:"cyan",note:"26% non-functional"},{l:"Class 3 children who can read (gov. schools)",v:23.4,tone:"orange"}],{fmt:pc,max:100}),"Each bar is my arithmetic on a different scheme. A low bar does not prove failure: some outcomes take years, and ED cases can still be in trial. It shows the distance between headline and delivery.",["nl_int","fdi_ob","ed_a2z","jjm_aud","aser"])}
 <div class="stack">${GROUND.slice(0,3).map(g=>`<div class="panel"><div class="eyebrow">${g.t}</div><p style="margin:.5em 0"><b>Paper:</b> ${g.p}</p><p style="margin:0"><b>Ground:</b> ${g.g} ${c(...g.k)}</p></div>`).join("")}</div>
</div>`)}
${S("all","book","02 / the full list","Ten claims, checked","",`<div class="tbl"><table><thead><tr><th>Claim</th><th>Paper says</th><th>Independent checks say</th></tr></thead><tbody>${GROUND.map(g=>`<tr><td><b>${g.t}</b></td><td>${g.p}</td><td>${g.g} ${c(...g.k)}</td></tr>`).join("")}</tbody></table></div>
<div class="note" style="margin-top:14px"><b>Fair use of this table.</b> Some rows show a government number contradicted by a third party (JJM, farmer income). Some show a number that is true but partial (gross FDI). Some show a claim nobody has independently checked (railways, Naxal). Each row says which. Newslaundry, The Wire and other independent outlets are one kind of check; government audits (CAG) and court records are others, and they are given more weight.</div>`)}
${pager("ground")}`;

/* ---------------- FOREIGN ---------------- */
R.foreign = () => `
${head("foreign","Foreign relations","Where each relationship stands, what changed in 2025-26, and what it costs.")}
${S("kpi","ship","01 / numbers","Foreign policy in numbers","",tiles([
 {n:151.1,dec:1,pre:"$",suf:"B",l:"India-China trade, year to Mar 2026 (record)",tone:"blue",k:["fp_cn"]},
 {n:112.16,dec:2,pre:"$",suf:"B",l:"India's trade deficit with China (record)",d:"$99.21B a year earlier",tone:"red",k:["fp_cn"]},
 {txt:"50% to 18%",l:"US tariff on most Indian goods, Feb 2026 deal",d:"Then a court struck the emergency tariffs",tone:"orange",k:["trade","trade2"]},
 {n:96.6,dec:1,suf:"%",l:"EU goods getting tariff cuts under the FTA",d:"99.5% of Indian goods",tone:"cyan",k:["fp_eu"]},
 {n:135.46,dec:2,pre:"$",suf:"B",l:"Remittances received, FY25",tone:"cyan",k:["remit"]},
 {n:88,suf:"%",l:"LPG imports through Hormuz",tone:"red",k:["hormuz"]}
]))}
${S("rel","road","02 / relationship by relationship","Status of each relationship","Direction is my reading of the sources, not a diplomatic rating.",`<div id="rlist">${RELATIONS.map(r=>`<article class="pc"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><h4>${r.c}</h4>${chipS(r.dir==="weak"?"stressed":r.dir)}</div><p style="margin:.3em 0 0;color:var(--soft)">${r.f} ${c(...r.k)}</p></article>`).join("")}</div>`)}
${S("read","scale","03 / reading","What the pattern shows","",`<div class="g2">
 ${panel("China: more trade, bigger gap","Trade and deficit, $ billion",cols([{l:"Deficit prior year",v:99.21,tone:"orange"},{l:"Deficit FY26",v:112.16,tone:"red"},{l:"Total trade FY26",v:151.1,tone:"blue"}],{fmt:v=>"$"+v}),"India depends on China for electronics parts, solar inputs and chemicals. Easing investment rules is partly a response to that dependence. Border differences remain.",["fp_cn","fp_eaf"])}
 <div class="note"><b>What this does not say.</b> I verified relations with the US, China, Russia, Pakistan, the EU, the Gulf and neighbours only at the level shown. I did not check the UK trade deal, Japan, Australia, ASEAN, Israel, Canada, or Afghanistan. The government's own account of its foreign policy (multi-alignment, strategic autonomy) is a stated aim; outcomes above are what sources report.</div>
</div>`)}
${pager("foreign")}`;
