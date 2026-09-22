"use strict";
/* ---------------- OVERVIEW ---------------- */
const JUDGE = [
 ["Income","far","8-10x below top countries","improving","Growth 7.8%; poverty 27.1% to 5.3%","High",["gniw2","gdpq1","pov"]],
 ["Tax burden","mixed","17.6% of GDP vs 34.1% OECD average","mixed","GST gross +14.8%, net +8.3%; narrow filer base","Medium",["oecd","gst","itr"]],
 ["Health","far","Public spend 1.43% of GDP","improving","Infant deaths 32 to 25; out-of-pocket 64% to 43%","High",["nha","srs"]],
 ["Education","behind","Class 3 reading 23.4%","mixed","Reading recovered from 16.3% in 2022; still under 1 in 4","Medium",["aser"]],
 ["Jobs","behind","Youth unemployment 15.9%","worsening","Up from 14.6% a year earlier","Medium",["plfsq","plfsa"]],
 ["Safety","behind","Peace rank 127 of 163","worsening","Fell from 115th a year earlier","Medium",["gpi26","gpi25"]],
 ["R&D","far","0.84% of GDP vs 2.58-4.94%","mixed","Private firms fund 51.8%; RDI scheme early","Medium",["rd","rdi"]],
 ["Political funding","mixed","Rs 16,518 cr in electoral bonds, now struck down","mixed","BJP took 48%; both sides dispute the successor system","Medium",["eb_adr","eb_trib"]],
 ["Accountability","mixed","43 ED convictions from 4,622 cases","mixed","Cases at a 4-year high; most trials not begun","Medium",["ed_a2z","ed_wire"]],
 ["Financial stability","mixed","Banks 1.8% bad loans; reserves $729B","stressed","Rupee -9%; oil shock; food inflation 5.95%","Medium",["npa","resv","fx"]],
 ["Political trust","mixed","Press 157 of 180; Freedom House 62/100","mixed","Power changed hands in states; roll deletions contested","Medium",["rsf2","fh2","elec","sir"]],
 ["Data quality","far","IMF grade C on national accounts","mixed","Census under way; GDP rebased","Low",["imfc","census"]]
];
const TLDR = [
 ["Direction is good, level is low.","Poverty, child deaths, bank health and digital payments have improved. Income per person is still 8-10x below the top countries."],
 ["Tax rates are not the outlier; the base is.","India's top rate (about 39%) is near or below the rich countries'. Its tax share of GDP is half the OECD average, and few people file."],
 ["2026 added stress.","Rupee down about 9%, an oil shock through Hormuz, a 15% monsoon gap, and youth unemployment at 15.9%."],
 ["Money in politics runs through every party.","Electoral bonds gave the BJP 48% of the pool before the scheme was struck down; other parties took the rest through the same route."],
 ["Government claims and independent checks often disagree.","A scheme said to have helped 75,000 farmers, an internship target, and a water-tap count all looked different on the ground."],
 ["The decision depends on who you are.","The report gives the push factors, the pull factors, the friction, and signals to watch. It does not give orders."]
];
R.home = () => {
  const radRows = RANKS.map(x => ({l:x.s, v:Math.round((x.n-x.r)/x.n*100), tip:`${x.l}: rank ${x.r} of ${x.n}. India beats ${((x.n-x.r)/x.n*100).toFixed(0)}% of ranked countries.`}));
  return `
<header class="hero"><div class="wrap hero-grid">
 <div><div class="eyebrow">A fact sheet, not a brochure | India | 20 September 2026</div>
 <h1>India 2026<br><em>the ledger</em></h1>
 <p class="hero-copy">Taxes, benefits, departments, states, promises, stability, corruption, and the stay-or-go question. No party is spared and none is singled out. Every figure carries a year and a link.</p>
 <div class="chips">${[["landmark","Tax and benefits"],["building","Departments"],["house","States map"],["scale","Corruption"],["search","Paper vs ground"],["ship","Foreign policy"],["book","Promises"],["road","Migration"]].map(x=>`<span class="chip">${ic(x[0]).replace('class="icon"','class="icon sm"')}${x[1]}</span>`).join("")}</div></div>
 <div class="panel"><div class="eyebrow">Where India beats the world</div><h3>Share of ranked countries India beats, 9 rankings</h3>${radar(radRows,400)}<p class="fine">Outer ring = beats 100%. Inner ring = 25%. Hover a dot.</p></div>
</div></header>
${vo("home")}
<div class="wrap">
${sec2("what","What this fact sheet is",`
<p>This is a sourced look at India in September 2026. It does not tell you India is a good or bad place to live. It gives the numbers so you can decide for yourself: what tax buys, which promises were kept, which departments are working, which state you would actually be judging, and what independent reporting found when it checked government claims on the ground.</p>
<p>Every party gets the same treatment. Where the BJP-led Centre is in office, its record is checked. Where Congress, TMC, AAP or a regional party runs a state, theirs is checked too. Money in politics, criminal cases among lawmakers, and audit findings appear for whoever they apply to.</p>`)}
${sec2("rules","Five rules",`
<ul class="clean"><li><b>Numbers first, opinions labeled.</b> A claim without a source is marked as a claim.</li><li><b>Both sides get their case.</b> Where the government and its critics disagree, both appear next to the data.</li><li><b>Two numbers, both shown.</b> When official sources disagree, the report shows both and says why.</li><li><b>Honest about gaps.</b> n/v means not verified this session. Calc means my arithmetic. Draft means from the uploaded draft, not re-checked.</li><li><b>No verdict I cannot back.</b> The Stay-or-go and Reckoning reels give questions and signals, not orders.</li></ul>`)}
<section class="blk"><h2>The sixty-second version</h2>
 <div class="g2">
  <div class="card"><span class="st improving">Getting better</span><ul class="clean"><li>Extreme poverty: 27.1% to 5.3% in a decade${c("pov")}</li><li>Infant deaths: 32 to 25 per 1,000 births, 2018 to 2023${c("srs")}</li><li>Banks' bad loans at 1.8%, a multi-decade low${c("npa")}</li><li>UPI: 24.5 billion payments a month${c("upi")}</li></ul></div>
  <div class="card"><span class="st weak">Still far behind the top countries</span><ul class="clean"><li>Income per person about 8-10x lower than Norway, Switzerland, the US${c("gniw","gniw2")}</li><li>Government health spending 1.43% of GDP${c("nha")}</li><li>R&amp;D 0.84% of GDP vs 2.58% (China), 3.45% (US)${c("rd")}</li><li>Peace rank 127th, gender gap 131st${c("gpi26","gender")}</li></ul></div>
  <div class="card"><span class="st stressed">Under stress right now</span><ul class="clean"><li>Rupee near 96 per dollar, down about 9% in a year${c("fx","fx2")}</li><li>Oil near $108; the Hormuz closure hit LPG${c("fx","hormuz")}</li><li>Monsoon about 15% short; food inflation 5.95%${c("monsoon","foodinf")}</li><li>Youth unemployment 15.9%${c("plfsq")}</li></ul></div>
  <div class="card"><span class="st unverified">Disputed or hard to check</span><ul class="clean"><li>New GDP base year and deflator${c("gdpdebate")}</li><li>IMF grades India's national accounts C${c("imfc")}</li><li>PM internship, Jal Jeevan and farm-income claims vs ground checks${c("nl_int","jjm_aud","nl_farm")}</li><li>Voter-roll deletions vs "vote chori" claims${c("sir","vc_adr")}</li></ul></div>
 </div>
</section>
${S("score","scale","Scorecard","Level vs direction, by domain","Level = where India stands against top countries. Direction = which way it moved recently. Confidence = how well the data can be checked. The chips are my reading of the sources.",`<div class="tbl"><table><thead><tr><th>Domain</th><th>Level</th><th>Evidence</th><th>Direction</th><th>Why</th><th>Confidence</th></tr></thead><tbody>${JUDGE.map(j=>`<tr><td><b>${j[0]}</b></td><td>${chipS(j[1])}</td><td>${j[2]}</td><td>${chipS(j[3])}</td><td>${j[4]} ${c(...j[6])}</td><td>${j[5]}</td></tr>`).join("")}</tbody></table></div>`)}
${S("tldr","info","tl;dr","Six findings","",`<div class="g3">${TLDR.map((t,i)=>`<div class="panel"><div class="eyebrow">Finding ${i+1}</div><h3>${t[0]}</h3><p class="muted" style="margin:0">${t[1]}</p></div>`).join("")}</div>`)}
${sec2("bottom","The honest bottom line",`
<p>India is strong on <b>direction</b> and weak on <b>level</b>. Almost every long-run measure has improved. But the gap to the richest countries is large, and 2026 brought real pressure on prices, the rupee, and young people's jobs.</p>
<p>Money in politics and gaps between government claims and ground reality run through every party and every level of government. Judging by these numbers, tax rates alone do not explain the income gap: India's top rate is close to or below the rich countries'. The gaps that stand out are income, public services, air quality, and independent checks on power.</p>`)}
<section class="blk"><h2>Choose a reel</h2>
 <div class="g3">${PAGES.slice(1).map((p,i)=>`<a class="card" style="text-decoration:none" href="#/${p.id}"><span class="mono small">${i+2}</span><h3>${p.name}</h3></a>`).join("")}</div>
</section></div>
${pager("home")}`;
};
function sec2(id,title,body){ return `<section class="blk" id="s-${id}"><h2>${title}</h2>${body}</section>`; }

/* ---------------- AUDIT + SOURCES ---------------- */
R.audit = () => `
${head("audit","The audit","Was the first draft right? Mostly, on what it said. Thin and partly out of date on the rest. And how this rebuild was checked.")}
${S("draft","search","01 / the draft","Held up, stale, and missing","",`<div class="g3">
 <div class="panel"><span class="st improving">Held up</span><ul class="clean" style="margin-top:10px"><li>Centre-only 11.2% vs. all-government 17.6% is the right way to think about it (17.6% not re-checked)</li><li>Happiness rank 116 of 147 ${c("whr")}</li><li>Human development rank 130 of 193 ${c("hdrtop")}</li><li>OECD figures: Denmark 45.2%, average 34.1% ${c("oecd")}</li><li>Norway ($106,830) and US ($85,980) income ${c("gniw")}</li></ul></div>
 <div class="panel"><span class="st weak">Wrong or stale</span><ul class="clean" style="margin-top:10px"><li>Peace rank was 2025 (115th). 2026 is 127th ${c("gpi26")}</li><li>Schooling used 6.57 (2022). Latest: 6.88 (2023) ${c("hdr")}</li><li>Denmark income $84,680 vs. World Bank $82,240 ${c("gnid")}</li><li>Sweden income rounded to $75,000 vs. $74,150 ${c("gnis")}</li><li>No mention of the new GDP series or the IMF grade ${c("gdpnew","imfc")}</li></ul></div>
 <div class="panel"><span class="st unverified">Missing from the draft</span><ul class="clean" style="margin-top:10px"><li>Jobs, security, R&amp;D, stability, health and school outcomes</li><li>Political funding, criminal cases in politics, and central-agency data</li><li>State-by-state figures</li><li>Independent checks on government claims</li></ul></div></div>`)}
${S("grey","scale","02 / grey areas","Same topic, different numbers","",`<div class="tbl"><table><thead><tr><th>Topic</th><th>Number A</th><th>Number B</th><th>Why they differ</th></tr></thead><tbody>${GREY.map(g=>`<tr><td><b>${g[0]}</b></td><td>${g[1]}</td><td>${g[2]}</td><td>${g[3]}</td></tr>`).join("")}</tbody></table></div>`)}
${S("nv","info","03 / limits","Still not verified",``,`<div class="g2"><div class="panel"><ul class="clean"><li>Peer life expectancy, peer health spending, peer learning scores</li><li>Peer crime rates</li><li>The Democracy Index 2025 score and the latest V-Dem rating</li><li>The 2026 Global Innovation Index (2025 used here)</li><li>Delhi excise case, Karnataka MUDA, TASMAC, Jane Street, PM CARES, Pegasus</li><li>UK, Japan, Australia, ASEAN, Israel foreign relations in detail</li><li>Semiconductors, AI, and 2026 stock market performance</li></ul></div><div class="panel"><h3>Method and confidence</h3><p class="muted">Every number links to a source. Tiers: <b>Official</b> (government or multilateral), <b>Index</b> (the publisher), <b>Analysis</b>, <b>Press</b>, and <b>Secondary</b> (aggregators or exam-prep sites quoting others, used only when a primary source could not be reached). Rank bars use each index's own country count. <span class="tag">Calc</span> is my arithmetic. The state map uses schematic paths from svg-maps/india; boundaries are not authoritative.</p></div></div>`)}
${S("bias","scale","04 / on sources with a lean","Reading Newslaundry, OpIndia, and the rest","",`
<p class="lede">This report draws on outlets with different editorial leans, on both sides. Newslaundry and The Wire are subscriber-funded and critical of the current central government; OpIndia and DD News are supportive of it and were used mainly to carry official statements. ADR (Association for Democratic Reforms) is a non-partisan election-monitoring body whose data is drawn from candidates' own sworn affidavits. PRS Legislative Research is a non-partisan parliamentary research group. Where a claim rests on a single outlet with a clear lean, that is noted in the text next to the claim.</p>`)}
${S("src","book","05 / sources",`All ${KEYS.length} sources`,"In the order the bracketed numbers appear.",`<div class="panel"><ol style="padding-left:1.4em;line-height:1.5;margin:0">${KEYS.map((k,i)=>{const s=SRC[k];return `<li value="${i+1}" style="margin:.45em 0">${s[1]?`<a href="${s[1]}" target="_blank" rel="noopener" style="text-decoration:underline">${s[0]}</a>`:s[0]} <span class="tag">${s[2]}</span></li>`;}).join("")}</ol></div>`)}
${pager("audit")}`;
