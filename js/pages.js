"use strict";
/* ---------- PAGES ---------- */
const PAGES = [
 {id:"open",name:"Opening"},{id:"bill",name:"The bill"},{id:"score",name:"Scoreboard"},{id:"sectors",name:"Sectors"},
 {id:"promises",name:"Promises"},{id:"stability",name:"Stability"},{id:"news",name:"News desk"},{id:"decide",name:"Stay or go"},
 {id:"who",name:"Accountability"},{id:"audit",name:"The audit"},{id:"sources",name:"Sources"}
];
const phead = (id, title, sub) => { const i = PAGES.findIndex(p => p.id === id) + 1;
  return `<div class="wrap"><div class="phead"><span class="chip">Reel ${i} of ${PAGES.length}</span><h1>${title}</h1><p>${sub}</p></div></div>`; };
const pager = id => { const i = PAGES.findIndex(p => p.id === id); const a = PAGES[i-1], b = PAGES[i+1];
  return `<div class="wrap"><div class="pager">${a?`<a href="#/${a.id}"><small>Previous reel</small>${a.name}</a>`:"<span></span>"}${b?`<a href="#/${b.id}"><small>Next reel</small>${b.name}</a>`:""}</div></div>`; };

const R = {};

R.open = () => `
<section class="hero"><div class="wrap seq">
  <div class="kick">A statistical report. September 2026.</div>
  <h1>India 2026<span>The Ledger</span></h1>
  <p class="sub">What you pay in tax, what the country delivers, what has been promised, and whether the numbers say stay or go. No party. No mood. Every figure has a source.</p>
  <div class="meta">11 reels | 17 promises scored | 60+ sources | data as of Sept 20, 2026</div>
</div></section>
${scene("open")}
<div class="wrap">
<section class="blk"><h2>The sixty-second version</h2>
 <div class="g2">
  <div class="card"><span class="st improving">Getting better</span><ul class="clean"><li>Extreme poverty: 27.1% to 5.3% in a decade${c("pov")}</li><li>Life expectancy 72.0 years${c("hdr")}</li><li>Half of power capacity is non-fossil${c("renew")}</li><li>Official growth 7.8% in Apr-Jun${c("gdpq1")}</li></ul></div>
  <div class="card"><span class="st weak">Still far behind the top countries</span><ul class="clean"><li>Income per person about 8-10x lower than Norway, Switzerland, the US${c("gniw","gniw2")}</li><li>Government health spending 1.43% of GDP${c("nha")}</li><li>R&amp;D 0.84% of GDP vs 2.58% (China), 3.45% (US)${c("rd")}</li><li>Peace rank 127th, gender gap 131st${c("gpi26","gender")}</li></ul></div>
  <div class="card"><span class="st stressed">Under stress right now</span><ul class="clean"><li>Rupee near 96 per dollar, down about 9% in a year${c("fx","fx2")}</li><li>Oil near $108; the Hormuz closure hit LPG${c("fx","hormuz")}</li><li>Monsoon about 15% short; food inflation 5.95%${c("monsoon","foodinf")}</li><li>Youth unemployment 15.9%${c("plfsq")}</li></ul></div>
  <div class="card"><span class="st unverified">Disputed or hard to check</span><ul class="clean"><li>New GDP base year and deflator${c("gdpdebate")}</li><li>IMF grades India's national accounts C${c("imfc")}</li><li>Jobs numbers differ by method (3.1% vs 5.4%)${c("plfsa","plfsq")}</li><li>Independent freedom indices vs. government pushback${c("rsf2","eac")}</li></ul></div>
 </div>
</section>
<section class="blk"><h2>The honest bottom line</h2>
 <p class="lede">India is strong on <b>direction</b> and weak on <b>level</b>. Most long-run indicators have improved, but the gap to the richest countries is large, and 2026 brought real pressure on prices, the rupee and jobs. On tax, the share of GDP is low compared with rich countries. Judging by these numbers, tax rates alone do not explain the gap: India's top rate is close to or below rich countries' rates. The gaps that stand out are income, public services, air quality, and, on independent indices, press freedom. Each of those matters differently to different people. That is why the Stay or go reel asks questions, not gives orders.</p>
 <div class="note">Tags you'll see: <span class="tag">Draft</span> = taken from the uploaded draft, not re-checked. <span class="tag">Calc</span> = my own arithmetic. <b>n/v</b> = not verified this session. An asterisk (*) = value from the draft.</div>
</section>
<section class="blk"><h2>Choose a reel</h2>
 <div class="g3">${PAGES.slice(1).map((p,i)=>`<a class="card" style="text-decoration:none" href="#/${p.id}"><span class="mono small">Reel ${i+2}</span><h3>${p.name}</h3></a>`).join("")}</div>
</section></div>
${pager("open")}`;

R.bill = () => `
${phead("bill","The bill","What you pay, who pays it, and what comes back.")}
${scene("bill")}
<div class="wrap">
<section class="blk"><h2>Nine places tax meets you</h2>
 <p class="lede">These are the structures, not the rates. Rates change with each budget or GST Council meeting.</p>
 <div class="g3">
 ${[["Income tax","Union","Zero up to 12.75 lakh for salaried people under the new regime."],["GST","Union + states","On most goods and services. Several slabs after the Sept 2025 reform."],["Customs duty","Union","On imports."],["Fuel excise","Union","On petrol and diesel, on top of state VAT."],["State VAT","State","On fuel and liquor."],["Stamp duty","State","When you register a property."],["Property and professional tax","State / local","Charged by municipalities and states."],["Capital gains and dividend tax","Union","On profits from shares, property and funds. Check current rates."],["Cess and surcharge","Union","4% cess on income tax, plus a surcharge at high incomes."]].map(x=>`<div class="card"><span class="tag">${x[1]}</span><h3 style="margin-top:8px">${x[0]}</h3><p class="small" style="margin:0">${x[2]}</p></div>`).join("")}
 </div>
 <p class="small" style="margin-top:10px">Income tax slabs (new regime): nil to 4 lakh, 5%, 10%, 15%, 20%, 25% by 4-lakh steps, and 30% above 24 lakh.${c("slabs","ita25")} Slabs were unchanged in the 2026 Budget.${c("budgetprs")}</p>
</section>
<section class="blk"><h2>Who actually pays income tax</h2>
 <div class="kv"><div><b>8.09 crore</b><span>Returns filed in FY24 (about 6.68% of the population)${c("itr")}</span></div><div><b>4.9 crore</b><span>of those showed zero taxable income${c("itr")}</span></div><div><b>about 3.2 crore</b><span>had income above the exemption (my subtraction) <span class="tag">Calc</span></span></div></div>
 <p class="lede">Income tax is paid by a small group. GST and fuel taxes reach everyone, which is why a person with no income tax bill can still feel heavily taxed.</p>
</section>
<section class="blk"><h2>Try it: income tax on your salary</h2>
 <div class="card calc">
  <div>
   <label for="sal">Yearly gross salary (rupees, in lakh)</label>
   <input id="sal" type="number" min="0" max="500" step="0.5" value="15" inputmode="decimal">
   <input id="salr" type="range" min="0" max="100" step="0.5" value="15" aria-label="Salary slider">
   <label style="font-weight:500"><input id="std" type="checkbox" checked> Salaried (75,000 standard deduction)</label>
   <p class="small">New regime, FY 2025-26 rates as carried into 2026-27. Approximate: no marginal relief on surcharge, no other deductions. GST and other indirect taxes are not included.</p>
  </div>
  <div class="res" id="calcout" aria-live="polite"></div>
 </div>
</section>
<section class="blk"><h2>How big is India's tax bite, compared with others?</h2>
 <p class="lede">Tax as a share of GDP. India's 17.6% covers all levels of government (IMF figure from the draft); the Centre alone is about 11.2% (draft). Do not compare 11.2% with other countries' totals.</p>
 ${bars([{l:"India (all govts)",v:17.6,india:1,note:"draft"},{l:"Mexico",v:18.3,note:"OECD low"},{l:"United States",v:25.6,note:"draft"},{l:"OECD average",v:34.1},{l:"Norway",v:40.2,note:"draft"},{l:"Sweden",v:41.4,note:"draft"},{l:"Finland",v:42.2,note:"draft"},{l:"Denmark",v:45.2,note:"OECD high"}],{fmt:v=>v+"%"})}
 <p class="small">OECD range for 2024 (provisional): 18.3% (Mexico) to 45.2% (Denmark), average 34.1%.${c("oecd")}</p>
 <div class="note"><b>What this means.</b> India taxes a smaller share of a smaller economy. Even the same share would buy less per person. The lever is the size of the formal tax base, not only the rate.</div>
</section>
<section class="blk"><h2>Top income tax rates</h2>
 ${bars([{l:"India (top, new regime)",v:39,india:1,note:"calc"},{l:"Norway",v:39.6},{l:"Switzerland",v:39.7},{l:"US (avg. combined)",v:42.1},{l:"Germany",v:47.5},{l:"Finland",v:51.8},{l:"Sweden",v:52.3},{l:"Denmark",v:55.9,note:"60.5 in 2026"}],{fmt:v=>v+"%"})}
 <p class="small">Europe figures for 2025.${c("taxf")} India's number is my arithmetic: 30% slab, 25% maximum surcharge, 4% cess. At about 96 rupees per dollar, the 30% slab begins near $25,000 of taxable income. <span class="tag">Calc</span></p>
</section>
<section class="blk"><h2>What comes back</h2>
 <div class="kv"><div><b>4.3%</b><span>Union fiscal deficit target, FY27${c("budgetprs")}</span></div><div><b>55.6%</b><span>Debt as a share of GDP${c("budgetprs")}</span></div><div><b>about 26%</b><span>of Union spending goes to interest${c("exprs")}</span></div><div><b>1.43%</b><span>of GDP goes to government health spending${c("nha")}</span></div></div>
 <p class="lede">A large slice of every tax rupee pays past borrowing. That is why critics say the money does not reach services, and why officials say the deficit is falling. Both statements match the numbers.</p>
</section></div>
${pager("bill")}`;

R.score = () => {
  const rows = RANKS.map(x => ({...x, pct:(x.n - x.r) / x.n * 100})).sort((a,b) => b.pct - a.pct);
  const ratio = (a,b) => (a/b).toFixed(1);
  return `
${phead("score","India vs the top","Nine world rankings. Then ten countries, side by side, with gaps left visible.")}
${scene("score")}
<div class="wrap">
<section class="blk"><h2>Where India sits</h2>
 <p class="lede">Each bar shows the share of ranked countries India beats. Longer is better. The dot is India.</p>
 <div>${rows.map(x=>`<div class="rk"><div>${x.l}${c(x.k)}</div><div class="trk" role="img" aria-label="India beats ${x.pct.toFixed(0)} percent"><i style="width:${x.pct}%"></i><b style="left:${x.pct}%"></b></div><div class="r"><b>${x.r}</b> of ${x.n}<br><span class="small">beats ${x.pct.toFixed(0)}%</span></div></div>`).join("")}</div>
 <div class="note"><b>Read this fairly.</b> A country with lower income tends to rank lower on happiness, human development and health. India ranks better on innovation (38th of 139) than on almost everything else. It ranks worst on press freedom, gender gap, air quality, and peace.</div>
</section>
<section class="blk"><h2>Ten countries side by side</h2>
 <p class="lede"><b>n/v</b> = not verified this session. * = value from the draft, not re-checked. Peace ranks are 2026 where marked; other peers were not verified.</p>
 <div class="tbl"><table><thead><tr><th>Country</th><th>Income per person (GNI, PPP $, 2024)</th><th>Happiness rank (2026)</th><th>Peace rank (2026)</th><th>Press freedom rank (2026)</th><th>Corruption score (2025)</th><th>Innovation rank (2025)</th><th>Top income tax rate</th></tr></thead><tbody>
 ${PEERS.map(p=>`<tr class="${p.me?"me":""}"><td>${p.c}</td><td>${p.gni}</td><td>${p.whr}</td><td>${p.gpi}</td><td>${p.rsf}</td><td>${p.cpi}</td><td>${p.gii}</td><td>${p.tax}</td></tr>`).join("")}
 </tbody></table></div>
 <p class="small">Sources: ${c("gniw","gniw2","gnid","gnis","whr","whr2","gpi26","rsf2","cpi25","gii","taxf")} In the corruption column, higher scores mean cleaner. 80+ means the country scored above 80 and was in the top five.</p>
</section>
<section class="blk"><h2>The income gap</h2>
 ${bars([{l:"Singapore",v:126190},{l:"Norway",v:106830},{l:"Switzerland",v:91100},{l:"United States",v:85980},{l:"Denmark",v:82240},{l:"Germany",v:74880},{l:"Sweden",v:74150},{l:"India",v:11050,india:1}],{fmt:v=>"$"+fmt(v)})}
 <p class="small">GNI per person, PPP, current international dollars, 2024.${c("gniw","gniw2","gnid","gnis")} Compared with India: Norway ${ratio(106830,11050)}x, Switzerland ${ratio(91100,11050)}x, US ${ratio(85980,11050)}x, Germany ${ratio(74880,11050)}x, Singapore ${ratio(126190,11050)}x.</p>
</section>
<section class="blk"><h2>Research spending, share of GDP</h2>
 ${bars([{l:"India",v:.84,india:1},{l:"China",v:2.58},{l:"Germany",v:3.1,note:"older"},{l:"United States",v:3.45},{l:"South Korea",v:4.94}],{fmt:v=>v+"%"})}
 <p class="small">India per DST (2023-24); the Economic Survey uses 0.6%.${c("rd","rd2")}</p>
</section></div>
${pager("score")}`;
};

R.sectors = () => `
${phead("sectors","The sectors","Health, education, jobs, poverty, security, research, air, and gender. Each with what improved, what failed, and where the data disagree.")}
${scene("sectors")}
<div class="wrap">
${SECTORS.map((s,i)=>`<details class="sec"${i===0?" open":""}><summary><span>${s.n}</span>${stChip(s.s)}</summary><div class="body"><p class="lede">${s.lead}</p>
 <div class="kv">${s.kv.map(k=>`<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join("")}</div>
 <div class="g2"><div class="card"><h3>What improved</h3><p style="margin:0">${s.good}</p></div><div class="card"><h3>What is failing</h3><p style="margin:0">${s.bad}</p></div></div>
 <div class="note"><b>Grey area.</b> ${s.grey}</div>
 <p class="small"><b>Who holds the lever:</b> ${s.who}<br><b>Top-country comparison:</b> ${s.cmp}</p></div></details>`).join("")}
</div>
${pager("sectors")}`;

R.promises = () => {
  const cnt = k => PROMISES.filter(p => p.s === k).length;
  return `
${phead("promises","Promises vs delivery","Seventeen claims and targets, scored on the evidence I could find.")}
${scene("promises")}
<div class="wrap">
 <div class="g4"><div class="card"><div class="big">${cnt("delivered")}</div>${stChip("delivered")}</div><div class="card"><div class="big">${cnt("partial")}</div>${stChip("partial")}</div><div class="card"><div class="big">${cnt("missed")}</div>${stChip("missed")}</div><div class="card"><div class="big">${cnt("unverified")}</div>${stChip("unverified")}</div></div>
 <div class="note">This scorecard is not a vote on any party. The list mixes targets set by Union governments over ten years. It is not complete: I did not have room to audit every scheme. A missed date is not the same as a failed project, and a delivered target is not the same as a good result.</div>
 <div class="filters" role="group" aria-label="Filter">${["all","delivered","partial","missed","unverified"].map(f=>`<button type="button" class="fchip" data-f="${f}" aria-pressed="${f==="all"}">${f==="all"?"All":ST[f]}</button>`).join("")}</div>
 <div id="plist">${PROMISES.map(p=>`<article class="pc" data-s="${p.s}"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><h3>${p.t}</h3>${stChip(p.s)}</div><div class="meta">${p.by}</div><p style="margin:.3em 0 0">${p.e} ${c(...p.k)}</p></article>`).join("")}</div>
</div>
${pager("promises")}`;
};

R.stability = () => `
${phead("stability","Stability","Financial first, then political, then how far the numbers themselves can be trusted.")}
${scene("stability")}
<div class="wrap">
<section class="blk"><h2>Financial: the dashboard</h2>
 <div class="tbl"><table><thead><tr><th>Indicator</th><th>Latest</th><th>Auditor's read</th></tr></thead><tbody>
  <tr><td>Real GDP growth, Apr-Jun 2026${c("gdpq1")}</td><td>7.8% (new series)</td><td>${stChip("partial")} Strong, disputed</td></tr>
  <tr><td>RBI growth forecast, FY27${c("rbi")}</td><td>6.7%</td><td>${stChip("mixed")} Slower than Q1</td></tr>
  <tr><td>Consumer inflation, August${c("cpi")}</td><td>4.82% (food 5.95%)${c("foodinf")}</td><td>${stChip("mixed")} Rising</td></tr>
  <tr><td>Repo rate${c("rbi")}</td><td>5.25%</td><td>${stChip("mixed")} On hold</td></tr>
  <tr><td>Rupee per dollar${c("fx2","fx")}</td><td>95.89; down about 9% in a year</td><td>${stChip("stressed")}</td></tr>
  <tr><td>Foreign exchange reserves${c("resv")}</td><td>$729.3 billion (21 Aug)</td><td>${stChip("improving")} Large. A special deposit swap window raised about $72.85 billion.${c("fcnr")}</td></tr>
  <tr><td>Fiscal deficit / debt${c("budgetprs")}</td><td>4.3% / 55.6% of GDP</td><td>${stChip("mixed")} Falling, but interest is about 26% of spending${c("exprs")}</td></tr>
  <tr><td>GST, August${c("gst")}</td><td>Gross +14.8%, net +8.3%</td><td>${stChip("mixed")} Refunds up 67.9%</td></tr>
  <tr><td>US tariffs${c("trade","trade2")}</td><td>18% in the announced deal; deal not final</td><td>${stChip("unverified")}</td></tr>
  <tr><td>Monsoon${c("monsoon")}</td><td>About 15% below normal</td><td>${stChip("stressed")} Weakest since 2009 if it holds</td></tr>
  <tr><td>Oil (Brent)${c("fx")}</td><td>About $104-108</td><td>${stChip("stressed")} A war-driven shock</td></tr>
 </tbody></table></div>
 <div class="note"><b>Auditor's read.</b> This is stress, not a crisis. A crisis would look like reserves falling fast. Reserves are near record, though partly because of a special deposit scheme. The three numbers that matter most in the next quarter: the rupee, reserves, and food prices.</div>
</section>
<section class="blk"><h2>Political</h2>
 <div class="g2">
  <div class="card"><h3>Competition is real</h3><p>Power changed hands in several states in May 2026: the BJP won West Bengal (206 of 294 seats), the UDF won Kerala, and TVK became the largest party in Tamil Nadu. The BJP held Assam.${c("elec")} Freedom House notes that parties regularly replace each other in office.${c("fh")}</p></div>
  <div class="card"><h3>Trust is contested</h3><p>The voter-roll revision (SIR) removed about 91 lakh names in West Bengal, about 12% of the roll; Bihar lost about 47 lakh.${c("sir","sir2")} The Election Commission says the names were deceased, moved, or duplicates. The Supreme Court upheld the process on 27 May but left room for individual challenges.${c("sir2")}</p></div>
  <div class="card"><h3>Independent indices</h3><p>Press freedom: 157th of 180 (RSF).${c("rsf2")} Freedom House: 62 of 100, Partly Free.${c("fh2")} Corruption perception: 39 of 100, rank 91.${c("cpi25")} The PM's Economic Advisory Council has argued that such indices are subjective and should be held accountable.${c("eac")} Both sides are on record.</p></div>
  <div class="card"><h3>Security backdrop</h3><p>Pahalgam (April 2025), a four-day conflict with Pakistan (May 2025), and a car blast in Delhi (November 2025).${c("sec25","sindoor")} The Global Peace Index fell from 115th to 127th.${c("gpi26","gpi25")}</p></div>
 </div>
</section>
<section class="blk"><h2>Can the numbers be trusted?</h2>
 <div class="g2">
  <div class="card"><h3>IMF grade: C</h3><p>The IMF gave India's national accounts a C, the second-lowest grade.${c("imfc")}</p></div>
  <div class="card"><h3>GDP was rebased</h3><p>The new series (base 2022-23) lowered nominal GDP for FY26 by about 3-4%.${c("gdpnew")} Critics ask about the deflator used. The explainer notes that the old and new series are not directly comparable.${c("gdpdebate")}</p></div>
  <div class="card"><h3>Census gap</h3><p>The last census was in 2011. The IMF has urged updated population data.${c("imfc")}</p></div>
  <div class="card"><h3>Different official numbers</h3><p>Unemployment, R&amp;D and education spending each have two official numbers. See the grey-area table in the audit.</p></div>
 </div>
</section></div>
${pager("stability")}`;

R.news = () => `
${phead("news","News desk","The headlines that moved the numbers, oldest first.")}
${scene("news")}
<div class="wrap"><ol class="tl">${NEWS.map(n=>`<li><div class="d">${n[0]}</div><h3>${n[1]}</h3><p>${n[2]} ${c(...n.slice(3))}</p></li>`).join("")}</ol></div>
${pager("news")}`;

R.decide = () => `
${phead("decide","Stay or go","No verdict. A map of what the numbers favor, by situation.")}
${scene("decide")}
<div class="wrap">
<section class="blk"><h2>The numbers that push people out</h2>
 <div class="kv"><div><b>8-10x</b><span>Income gap to top countries${c("gniw","gniw2")}</span></div><div><b>2.06 lakh</b><span>Citizenships renounced in 2024${c("renounce24")}</span></div><div><b>2.16 lakh</b><span>in 2023${c("renounce")}</span></div><div><b>4,300</b><span>Millionaires estimated to leave in 2024, down from 7,500 in 2022${c("henley","henley25")}</span></div></div>
 <div class="note">Renunciation counts include long-settled emigrants who take foreign citizenship. They are not the number of people who moved that year. Henley's figures are estimates.</div>
</section>
<section class="blk"><h2>The numbers that pull the other way</h2>
 <ul class="clean"><li>Doors are narrowing. The US extended its $100,000 H-1B fee rule to September 2027; courts are blocking it for now.${c("h1b","h1bk")} Canada, the UK and Australia have also tightened rules.${c("migr")}</li><li>The rupee has weakened about 9% in a year. Foreign earnings are worth more in rupees, but foreign costs are in dollars.${c("fx")}</li><li>Rich countries' top tax rates are similar or higher: Denmark 55.9%, Sweden 52.3%, Germany 47.5%.${c("taxf")}</li><li>Poverty is down, clean power is up, and official growth is high.${c("pov","renew","gdpq1")}</li></ul>
</section>
<section class="blk"><h2>By situation</h2>
 <div class="g2">${PERSONAS.map(p=>`<div class="card"><h3>${p.n}</h3><p><b>Case for staying or timing:</b> ${p.pro}</p><p><b>Case for moving, and the catch:</b> ${p.con}</p><p class="small"><b>Ask yourself:</b> ${p.ask}</p></div>`).join("")}</div>
</section>
<section class="blk"><h2>Five questions before any decision</h2>
 <ol class="qs">${[`Do I have a legal way to stay long-term in the place I'm considering?`,`How many months can I cover if my income drops by 30%?`,`What do I lose that a salary can't replace: family, community, language?`,`Which risk worries me most: money, safety, freedom, air, or health?`,`Can I test it first, with a short contract or visit?`].map(q=>`<li>${q}</li>`).join("")}</ol>
</section>
<div class="note">What this report cannot tell you: your skills, your family, and your risk tolerance. It is not immigration, tax or investment advice.</div></div>
${pager("decide")}`;

R.who = () => `
${phead("who","Accountability","Who holds each lever, what is failing, why, and what could fix it.")}
${scene("who")}
<div class="wrap">
<section class="blk"><h2>Who, what, why, how</h2>
 <p class="lede">The "How to fix" column lists commonly proposed options, not proven outcomes.</p>
 <div class="tbl"><table><thead><tr><th>Area</th><th>Who holds the lever</th><th>What is failing</th><th>Why</th><th>How to fix (options)</th><th>Watch</th></tr></thead><tbody>
 ${ACCOUNT.map(a=>`<tr><td><b>${a[0]}</b></td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td>${a[4]}</td><td>${a[5]}</td></tr>`).join("")}
 </tbody></table></div>
 <div class="note">Many of the biggest levers sit with state governments: public health, police, most farming. A national verdict can hide a state that is doing well or badly. Look up your own state's numbers.</div>
</section>
<section class="blk"><h2>Twelve questions to put to any elected representative</h2>
 <ol class="qs">${QUESTIONS.map(q=>`<li>${q}</li>`).join("")}</ol>
</section>
<section class="screen" aria-label="Closing scene"><div class="slug">INT. THE SAME CHAI STALL. LATER. THE LIGHTS ARE OFF.</div>
 <div class="dlg"><div class="who">RAVI</div><div class="say">So after all of it, is it worth staying?</div></div>
 <div class="dlg"><div class="who">THE AUDITOR</div><div class="say">I can tell you what got better, what got worse, and what nobody can verify. The rest is yours.</div></div>
 <p class="action">The Auditor closes the folder. Cut to black.</p></section></div>
${pager("who")}`;

R.audit = () => `
${phead("audit","The audit","Was the first draft right? Mostly, on what it said. Incomplete and partly out of date on the rest.")}
${scene("audit")}
<div class="wrap">
<section class="blk"><div class="g3">
 <div class="card"><span class="st improving">Held up</span><ul class="clean"><li>Centre-only 11.2% vs. all-government 17.6% is the right way to think about it (17.6% not re-checked)</li><li>Happiness rank 116 of 147${c("whr")}</li><li>Human development rank 130 of 193${c("hdrtop")}</li><li>OECD figures: Denmark 45.2%, average 34.1%${c("oecd")}</li><li>Norway ($106,830) and US ($85,980) income${c("gniw")}</li></ul></div>
 <div class="card"><span class="st weak">Wrong or stale</span><ul class="clean"><li>Peace rank was 2025 (115th). The 2026 rank is 127th${c("gpi26")}</li><li>Schooling used 6.57 (2022). Latest: 6.88 (2023)${c("hdr")}</li><li>Denmark income $84,680 vs. World Bank $82,240${c("gnid")}</li><li>Sweden income rounded to $75,000 vs. $74,150${c("gnis")}</li><li>No mention of the new GDP series or the IMF grade${c("gdpnew","imfc")}</li></ul></div>
 <div class="card"><span class="st unverified">Missing</span><ul class="clean"><li>Jobs, security, R&amp;D, stability</li><li>Any real claim audit (it covered five soft claims)</li><li>Recent news and migration barriers</li><li>A stay-or-go framework</li></ul></div>
</div></section>
<section class="blk"><h2>Grey-area catalog: same topic, different numbers</h2>
 <div class="tbl"><table><thead><tr><th>Topic</th><th>Number A</th><th>Number B</th><th>Why they differ</th></tr></thead><tbody>${GREY.map(g=>`<tr><td><b>${g[0]}</b></td><td>${g[1]}</td><td>${g[2]}</td><td>${g[3]}</td></tr>`).join("")}</tbody></table></div>
 <p class="small">Sources for these rows are in the Sources reel; several are in the sector and stability reels.</p>
</section>
<section class="blk"><h2>Still not verified</h2>
 <ul class="clean"><li>Peer life expectancy, crime rates and bank health</li><li>NCRB crime data, women's safety, and the situation in Manipur</li><li>Learning outcomes (ASER) and peer test scores</li><li>The Democracy Index 2025 score and the latest V-Dem rating</li><li>The 2026 Global Innovation Index (2025 used here)</li><li>Global Peace Index 2026 ranks for most peers</li><li>Draft-only items: Finland income, life expectancy, electricity access, internet use, homicide rate</li></ul>
</section>
<section class="blk"><h2>Method and confidence</h2>
 <p class="lede">Every number links to a source. Tiers: <b>Official</b> (government or multilateral primary), <b>Index</b> (the index publisher), <b>Analysis</b> (think tank or professional explainer), <b>Press</b>, and <b>Secondary</b> (aggregators or exam-prep sites quoting others). Secondary sources were used only when a primary one could not be reached, and they are labeled. Rank-based bars use each index's own country count. Anything marked Calc is my arithmetic.</p>
</section></div>
${pager("audit")}`;

R.sources = () => `
${phead("sources","Sources","Every link used in this report, in the order the numbers appear in brackets.")}
<div class="wrap"><ol style="padding-left:1.4em;line-height:1.5">${KEYS.map((k,i)=>{const s=SRC[k];return `<li value="${i+1}" style="margin:.5em 0">${s[1]?`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`:s[0]} <span class="tag">${s[2]}</span></li>`;}).join("")}</ol></div>
${pager("sources")}`;
