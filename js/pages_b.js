"use strict";
/* ---------------- SAFETY ---------------- */
R.safety = () => `
${head("safety","The streets","Everyday crime, terror and conflict, and one long unrest in the northeast.")}
${S("kpi","shield","01 / the numbers","Safety in numbers","",tiles([
 {txt:"127th",l:"Global Peace Index 2026, of 163",d:"115th a year earlier",tone:"red",k:["gpi26","gpi25"]},
 {n:62.4,dec:1,suf:" lakh",l:"Cognizable crimes recorded, 2023",tone:"orange",k:["ncrb"]},
 {n:448.3,dec:1,l:"Crime rate per lakh people, 2023",d:"422.2 in 2022",tone:"orange",k:["ncrb"]},
 {n:27721,l:"Murders, 2023",d:"Down 2.8%; about 2 per 100,000 (calc)",tone:"cyan",k:["ncrb2"]},
 {n:31.2,dec:1,suf:"%",l:"Rise in cybercrime, 2023",tone:"red",k:["ncrb"]},
 {n:944291,l:"Crimes in 19 large cities, 2023",d:"Up 10.6%",tone:"orange",k:["ncrb2"]},
 {n:26,l:"Killed in the Pahalgam attack, April 2025",tone:"red",k:["sec25"]},
 {n:60000,suf:"+",l:"Displaced by Manipur violence",tone:"red",k:["manipur"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Global Peace Index rank (lower is better)","Down 12 places in a year",cols([{l:"2025",v:115,tone:"orange"},{l:"2026",v:127,tone:"red"}]),"The index includes conflict, militarization, and tension with neighbors, so a fall can come from border risk as much as from street crime. Switzerland ranks 3rd; Singapore and Finland are in the top ten.",["gpi26","gpi25"])}
 ${panel("Crime rate per lakh people","Up 6% in a year",cols([{l:"2022",v:422.2},{l:"2023",v:448.3,tone:"orange"}]),"Police data count reported crime. Better reporting can raise the count.",["ncrb"])}
 ${panel("Murders","Down 2.8%",cols([{l:"2022",v:28522},{l:"2023",v:27721,tone:"cyan"}],{fmt:v=>fmt(v)}),"The motive named most often was 'disputes' (9,209 cases).",["ncrb2"])}
 ${panel("Crimes against women, registered","Edging up",cols([{l:"2021",v:428278},{l:"2022",v:445256},{l:"2023",v:448211,tone:"orange"}],{fmt:v=>fmt(v)}),"Rate: 66.2 per lakh women. Rape cases: 29,670.",["ncrbw"])}
</div></section>
${S("conflict","shield","02 / terror and conflict","Terror, border, and the northeast","",`<div class="g2">
 ${panel("Timeline","2025-2026",`<ol class="tl"><li><div class="d">22 APR 2025</div><h4>Pahalgam attack</h4><p>26 people killed, 25 of them tourists.</p></li><li><div class="d">7-10 MAY 2025</div><h4>Operation Sindoor</h4><p>A four-day India-Pakistan conflict; ceasefire on 10 May.</p></li><li><div class="d">10 NOV 2025</div><h4>Car blast near Red Fort, Delhi</h4><p>Part of a mixed year for internal security.</p></li><li><div class="d">30 MAR 2026</div><h4>'Naxal-free' claim</h4><p>The Home Minister told Parliament India is virtually Naxal-free.</p></li></ol>`,"",["sec25","sindoor","naxal"])}
 ${panel("Manipur since May 2023","Displacement and the justice gap",tiles([{n:60000,suf:"+",l:"People displaced (official)",tone:"red",k:["manipur"]},{n:7000,l:"Homes destroyed (official)",tone:"red",k:["manipur"]},{n:947,pre:"Rs ",suf:" crore",l:"Relief cleared, April 2026",tone:"orange",k:["manipur2"]},{txt:"0",l:"Convictions after three years",tone:"red",k:["manipur2"]}]),"The first Kuki-Zo village was resettled only on 28 May 2026. President's rule was followed by a new elected government.",["manipur","manipur2"])}
</div>
<div class="g2" style="margin-top:14px">
 ${panel("Maoist claim","Government claim, no independent audit found",`<span class="st unverified">Can't verify</span>`,"The claim was made on 30 March, the day before the deadline. Treat it as a government claim until an independent check appears.",["naxal"])}
 <div class="note"><b>What these numbers do not say.</b> Police statistics miss what is not reported. The peace index is a composite, so a change in rank does not say which part moved. I did not verify crime data for other countries, so this reel cannot say whether India is safer or less safe than peers day to day.</div>
</div>`)}
${pager("safety")}`;

/* ---------------- FUTURE ---------------- */
R.future = () => `
${head("future","The future","Research, digital rails, clean power, air, climate, and the growth the future needs.")}
${S("kpi","flask","01 / the numbers","The future in numbers","",tiles([
 {n:0.84,dec:2,suf:"%",l:"R&D spend, % of GDP, 2023-24",d:"Economic Survey says 0.6%",tone:"red",k:["rd","rd2"]},
 {n:51.8,dec:1,suf:"%",l:"Share of R&D paid by private firms",tone:"orange",k:["rd"]},
 {n:24.51,dec:2,suf:"B",l:"UPI payments in Aug 2026",d:"+22% in a year",tone:"lime",k:["upi"]},
 {n:29.82,dec:2,pre:"Rs ",suf:" lakh cr",l:"UPI value, Aug 2026",d:"+20% in a year",tone:"lime",k:["upi"]},
 {n:50,suf:"%",l:"Non-fossil share of power capacity",d:"Reached mid-2025",tone:"cyan",k:["renew"]},
 {n:48.9,dec:1,l:"Average PM2.5, ug/m3, 2025",d:"About 10x the WHO guideline",tone:"red",k:["air"]},
 {n:66,suf:" of 100",l:"Most polluted cities that are Indian",tone:"red",k:["air"]},
 {n:15,suf:"%",l:"Monsoon rainfall below normal, Sept 2026",d:"Weakest since 2009 if it holds",tone:"red",k:["monsoon"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Research spending, % of GDP","India spends a fraction of the leaders",hbars([{l:"India",v:.84,india:1},{l:"China",v:2.58},{l:"Germany",v:3.1,note:"older"},{l:"United States",v:3.45},{l:"South Korea",v:4.94}],{fmt:pc,max:5.5}),"India is the world's third-largest producer of research papers and ranks 38th of 139 on the Global Innovation Index, so output is strong for the money spent.",["rd","rd2","gii"])}
 ${panel("Who pays for R&D in India","About half is private",donut([{v:51.8,l:"Private sector",tone:"lime"},{v:48.2,l:"Government and others",tone:"blue"}],{center:"52%",sub:"private",label:"R&D funders"}),"The 1 lakh crore rupee RDI scheme aims to raise private research.",["rd","rdi"])}
 ${panel("RDI scheme, share of the 1 lakh crore rupees","2% sanctioned, 0.5% disbursed",hbars([{l:"Sanctioned (2,000 cr)",v:2,tone:"orange"},{l:"Disbursed (500 cr)",v:.5,tone:"red"},{l:"Scheme size",v:100,tone:"violet"}],{fmt:pc,max:100}),"Too early to judge; the scheme runs six years. Percentages are my arithmetic on the reported amounts.",["rdi"])}
 ${panel("UPI transactions each August, billion","Up 64% in two years",cols([{l:"Aug 2024",v:14.9},{l:"Aug 2025",v:20.01},{l:"Aug 2026",v:24.51,tone:"lime"}],{fmt:v=>v+"B"}),"UPI is accepted in 11 countries. Volume grows faster than value, so the average payment is getting smaller: everyday use.",["upi"])}
 ${panel("UPI value each August, lakh crore rupees","Up 45% in two years",cols([{l:"Aug 2024",v:20.6},{l:"Aug 2025",v:24.85},{l:"Aug 2026",v:29.82,tone:"lime"}],{fmt:v=>"Rs "+v}),"Value grew 20% in the last year.",["upi"])}
 ${panel("Power capacity","Half is non-fossil, but generation is not",donut([{v:50,l:"Non-fossil capacity",tone:"cyan"},{v:50,l:"Fossil capacity",tone:"grey"}],{center:"50%",sub:"non-fossil",label:"Power capacity"}),"Capacity is not generation. Coal still produces most of the electricity, and 88% of LPG imports route through one strait.",["renew","hormuz"])}
 ${panel("Growth India needs","7.8% average for 22 years",hbars([{l:"Needed to 2047 (World Bank)",v:7.8,tone:"violet"},{l:"FY26",v:7.6},{l:"RBI forecast FY27",v:6.7,tone:"orange"}],{fmt:pc,max:9}),"A UN report counts over 5 million disaster displacements in India in 2024, mainly from floods and storms.",["wbgrowth","gdpnew","rbi","unmig"])}
</div>
<div class="note" style="margin-top:14px"><b>Not verified in this report:</b> progress on semiconductors and AI, and stock market performance in 2026. A record payment month says nothing about research quality, and a high share of clean capacity says nothing about how reliable the grid is at night.</div></section>
${pager("future")}`;

/* ---------------- TRUST ---------------- */
R.trust = () => `
${head("trust","The vote","Elections, voter rolls, freedom indices, and whether the numbers themselves can be trusted.")}
${S("kpi","scale","01 / the numbers","Trust in numbers","",tiles([
 {txt:"157 of 180",l:"RSF press freedom rank, 2026",tone:"red",k:["rsf2"]},
 {n:62,suf:"/100",l:"Freedom House score, 2026",d:"Partly Free",tone:"orange",k:["fh2"]},
 {n:39,suf:"/100",l:"Corruption perceptions score, 2025",d:"Rank 91 of 182; global average 42",tone:"orange",k:["cpi25"]},
 {txt:"C",l:"IMF grade, national accounts",d:"Second-lowest of four",tone:"red",k:["imfc"]},
 {n:91,suf:" lakh",l:"Names removed, West Bengal roll revision",d:"About 12% of the roll",tone:"orange",k:["sir"]},
 {n:47,suf:" lakh",l:"Names removed, Bihar",tone:"orange",k:["sir2"]},
 {n:16,suf:" years",l:"Gap since the last census (2011)",d:"Longest since 1881",tone:"red",k:["census3"]},
 {txt:"Feb 2027",l:"Population head count",d:"First digital census; first caste count since 1931",tone:"cyan",k:["census","census2"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Independent index scores","Out of 100 (higher is better)",`<div class="hb">${meter(31.96,100,{label:"RSF press freedom score",tone:"red"})}${meter(62,100,{label:"Freedom House",tone:"orange"})}${meter(39,100,{label:"Corruption perceptions",tone:"orange",ref:42,note:"line = global avg 42"})}</div>`,"These are perception-based and expert-judgment scores. The PM's Economic Advisory Council has argued they are subjective and should be held accountable. Both positions are on record.",["rsf2","fh2","cpi25","eac"])}
 ${panel("Voter-roll revision (SIR)","Names removed, in lakh",hbars([{l:"West Bengal",v:91,tone:"red"},{l:"Bihar",v:47,tone:"orange"}],{fmt:v=>v+" lakh",max:100}),"The Election Commission says the names were deceased, moved, or duplicates. The Supreme Court upheld the process on 27 May but left room for individual challenges. Both facts stand: the removals are large, and the process was upheld.",["sir","sir2"])}
 ${panel("May 2026 state elections","Power changed hands in several states",`<ul class="clean"><li><b>West Bengal:</b> BJP won 206 of 294 seats.</li><li><b>Kerala:</b> UDF won.</li><li><b>Tamil Nadu:</b> TVK became the largest party.</li><li><b>Assam:</b> BJP held.</li></ul>`,"Freedom House notes that different parties regularly succeed one another in office.",["elec","fh"])}
 ${panel("Census 2027 timeline","The data fix is under way",`<ol class="tl"><li><div class="d">1 APR - 30 SEP 2026</div><h4>Houselisting</h4><p>Every home and household is listed, through a 30-day window per state.</p></li><li><div class="d">FEB 2027</div><h4>Population head count</h4><p>Reference moment 1 March 2027. Includes caste for the first time since 1931.</p></li><li><div class="d">BUDGET</div><h4>Rs 11,718 crore</h4><p>Approved by the Union Cabinet.</p></li></ol>`,"Results are not out yet.",["census","census2","census3"])}
 ${panel("GDP was rebased","New base year 2022-23 (Feb 2026)",`<p class="muted" style="margin:0">FY26 nominal GDP is about 3-4% lower on the new series. Critics question the deflator; an explainer says old and new series cannot be compared directly.</p>`,"The IMF's grade of C reflects that outsiders cannot fully verify the numbers.",["gdpnew","gdpdebate","imfc"])}
 <div class="note"><b>What these numbers do not say.</b> The Election Commission gives one account of the deleted names and critics give another; the Court ruled on the process, not each case. I did not check the Democracy Index 2025 or the latest V-Dem rating.</div>
</div></section>
${pager("trust")}`;

/* ---------------- WORLD ---------------- */
const CO = ["India","Norway","Switzerland","Denmark","Sweden","Finland","Germany","Singapore","United States","China","South Korea"];
const CM = [
 {k:"gni",l:"Income per person",fmt:usd,sub:"GNI, PPP $, 2024",data:{India:11050,Norway:106830,Switzerland:91100,Denmark:82240,Sweden:74150,Finland:65640,Germany:74880,Singapore:126190,"United States":85980},src:["gniw","gniw2","gnid","gnis"],read:"Finland's value is from the draft (not re-checked). China's is n/v."},
 {k:"rd",l:"Research spending",fmt:pc,sub:"% of GDP",data:{India:.84,China:2.58,Germany:3.1,"United States":3.45,"South Korea":4.94},src:["rd","rd2"],read:"Germany's figure is older."},
 {k:"taxrate",l:"Top income tax rate",fmt:pc,sub:"%",data:{India:39,Norway:39.6,Switzerland:39.7,Denmark:55.9,Sweden:52.3,Finland:51.8,Germany:47.5,"United States":42.1},src:["taxf"],read:"India's is my arithmetic. US is the average combined federal and state rate."},
 {k:"taxgdp",l:"Taxes / GDP",fmt:pc,sub:"%, general government",data:{India:17.6,"United States":25.6,Norway:40.2,Sweden:41.4,Finland:42.2,Denmark:45.2},src:["oecd"],read:"Only Denmark's 45.2% was re-checked; the others are from the draft."},
 {k:"whr",l:"Happiness rank",type:"rank",n:147,sub:"World Happiness Report 2026",data:{India:116,Norway:6,Switzerland:10,Denmark:3,Sweden:5,Finland:1,"United States":23,China:65},src:["whr","whr2"],read:"Bars show the share of ranked countries beaten. Germany and Singapore are n/v."},
 {k:"rsf",l:"Press freedom rank",type:"rank",n:180,sub:"RSF 2026",data:{India:157,Norway:1,Denmark:4,Sweden:5,"United States":64,China:178},src:["rsf2"],read:"Switzerland, Finland, Germany and Singapore are n/v."},
 {k:"gii",l:"Innovation rank",type:"rank",n:139,sub:"WIPO GII 2025",data:{India:38,Switzerland:1,Sweden:2,"United States":3,Singapore:5,Finland:7,Denmark:9,China:10,Norway:20},src:["gii"],read:"Values other than India's come from the draft and match the published top ten as I know it. The 2026 edition was not found."},
 {k:"cpi",l:"Corruption score",fmt:v=>v+"/100",sub:"Transparency Intl. 2025, higher is cleaner",data:{India:39,Denmark:89,China:43},src:["cpi25"],read:"Finland, Singapore and Norway also scored above 80, but exact scores were not verified."}
];
function cmpHTML(mk, sel){
  const m = CM.find(x => x.k === mk);
  const have = sel.filter(cn => m.data[cn] !== undefined).map(cn => ({cn, v:m.data[cn]}));
  if (m.type === "rank") have.sort((a,b) => a.v - b.v); else have.sort((a,b) => b.v - a.v);
  const rows = have.map(h => m.type === "rank"
    ? {l:h.cn, v:(m.n-h.v)/m.n*100, disp:"#"+h.v, note:"beats "+Math.round((m.n-h.v)/m.n*100)+"%", india:h.cn==="India", tip:`${h.cn}: rank ${h.v} of ${m.n}`}
    : {l:h.cn, v:h.v, india:h.cn==="India"});
  sel.filter(cn => m.data[cn] === undefined).forEach(cn => rows.push({l:cn, nv:true}));
  if (!have.length) return `<p class="muted">No verified values for the selected countries.</p>`;
  const bar = m.type === "rank" ? hbars(rows,{max:100}) : hbars(rows,{fmt:m.fmt});
  return `<div class="eyebrow">${m.sub}</div><h3>${m.l}</h3>${bar}<p class="read"><b>Read:</b> ${m.read} <span class="fine">Sources ${c(...m.src)}</span></p>`;
}
R.world = () => {
  const radRows = RANKS.map(x => ({l:x.s, v:Math.round((x.n-x.r)/x.n*100), tip:`${x.l}: rank ${x.r} of ${x.n}. India beats ${((x.n-x.r)/x.n*100).toFixed(0)}%.`}));
  return `
${head("world","India vs the top","Nine world rankings. Eleven countries. Gaps left visible.")}
${S("radar","chart","01 / rankings","Where India sits in nine rankings","Longer is better. Each bar is the share of ranked countries India beats.",`<div class="g2"><div class="panel"><div class="eyebrow">Radar</div><h3>India's profile</h3>${radar(radRows,420)}</div><div class="panel"><div class="eyebrow">Ranks</div><h3>Rank and share beaten</h3>${rankRows([...RANKS].sort((a,b)=>(b.n-b.r)/b.n-(a.n-a.r)/a.n))}<p class="read"><b>Read:</b> India ranks best on innovation (38th of 139) and worst on air quality, gender gap, and press freedom. A poorer country tends to rank lower on income-linked indices, so a low rank is partly income and partly choices.</p></div></div>`)}
${S("cmp","ship","02 / compare tool","Pick countries, pick a metric","Tap a country to add or remove it. Tap a metric to switch the chart. Missing values show n/v, not a guess.",`<div class="panel"><div class="eyebrow">Countries</div><div class="filters" id="cmpc">${CO.map(cn=>`<button type="button" class="fchip" data-cn="${cn}" aria-pressed="true">${cn}</button>`).join("")}</div><div class="eyebrow">Metric</div><div class="tabbar" id="cmpm" role="tablist">${CM.map((m,i)=>`<button type="button" role="tab" class="tabbtn" data-m="${m.k}" aria-selected="${i===0}">${m.l}</button>`).join("")}</div><div id="cmpout">${cmpHTML("gni",CO)}</div></div>`)}
${S("matrix","scale","03 / matrix","Ten countries side by side","n/v = not verified this session. * = value from the draft, not re-checked.",`<div class="tbl"><table><thead><tr><th>Country</th><th>Income (GNI PPP $)</th><th>Happiness</th><th>Peace 2026</th><th>Press freedom</th><th>Corruption 2025</th><th>Innovation</th><th>Top tax rate</th></tr></thead><tbody>${PEERS.map(p=>`<tr class="${p.me?"me":""}"><td>${p.c}</td><td>${p.gni}</td><td>${p.whr}</td><td>${p.gpi}</td><td>${p.rsf}</td><td>${p.cpi}</td><td>${p.gii}</td><td>${p.tax}</td></tr>`).join("")}</tbody></table></div><p class="fine">Sources ${c("gniw","gniw2","gnid","gnis","whr","whr2","gpi26","rsf2","cpi25","gii","taxf")}. In the corruption column higher is cleaner; 80+ means the country scored above 80 and was in the top five.</p>`)}
${S("gap","wallet","04 / the gap","The income gap, in multiples","",tiles([
 {n:9.7,dec:1,suf:"x",l:"Norway's income per person vs India's",tone:"blue",k:["gniw","gniw2"]},
 {n:8.2,dec:1,suf:"x",l:"Switzerland",tone:"blue",k:["gniw"]},
 {n:7.8,dec:1,suf:"x",l:"United States",tone:"blue",k:["gniw"]},
 {n:6.8,dec:1,suf:"x",l:"Germany",tone:"blue",k:["gniw"]},
 {n:11.4,dec:1,suf:"x",l:"Singapore",tone:"blue",k:["gniw"]}
]))}
${pager("world")}`;
};

/* ---------------- PROMISES ---------------- */
R.promises = () => {
  const cnt = k => PROMISES.filter(p => p.s === k).length, n = PROMISES.length;
  const pct = k => Math.round(cnt(k)/n*100);
  return `
${head("promises","Promises vs delivery",`${n} claims and targets, scored on the evidence I could find.`)}
${S("score","book","01 / scoreboard","Score at a glance","This is not a vote on any party. The list mixes targets set by Union governments over ten years. It is not complete.",`<div class="g2">
 <div class="panel"><div class="eyebrow">Outcome of ${n} claims</div>${donut([{v:pct("delivered"),l:"Delivered ("+cnt("delivered")+")",tone:"cyan"},{v:pct("partial"),l:"Partly ("+cnt("partial")+")",tone:"orange"},{v:pct("missed"),l:"Missed ("+cnt("missed")+")",tone:"red"},{v:100-pct("delivered")-pct("partial")-pct("missed"),l:"Can't verify ("+cnt("unverified")+")",tone:"grey"}],{center:String(n),sub:"claims",label:"Promise outcomes"})}</div>
 <div class="panel"><div class="eyebrow">How to read it</div><ul class="clean"><li>A missed date is not a failed project. Many missed targets, like the bullet train, are late and over budget but still moving.</li><li>A delivered target is not the same as a good result. Half of power capacity is non-fossil, and coal still produces most electricity.</li><li>Delivered where the plumbing is digital or simple: payments, tax thresholds, poverty. Missed where it needs private investment or years of spending: farm income, manufacturing, health and education budgets.</li></ul></div></div>`)}
<section class="wrap reveal sec"><div class="filters" role="group" aria-label="Filter">${["all","delivered","partial","missed","unverified"].map(f=>`<button type="button" class="fchip" data-f="${f}" aria-pressed="${f==="all"}">${f==="all"?"All":ST2[f]}</button>`).join("")}</div>
 <div id="plist">${PROMISES.map(p=>`<article class="pc" data-s="${p.s}"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><h4>${p.t}</h4>${chipS(p.s)}</div><div class="meta">${p.by}</div><p style="margin:.3em 0 0;color:var(--soft)">${p.e} ${c(...p.k)}</p></article>`).join("")}</div></section>
${pager("promises")}`;
};

/* ---------------- NEWS ---------------- */
R.news = () => `
${head("news","News desk","The headlines that moved the numbers, oldest first.")}
<section class="wrap reveal sec"><div class="panel"><ol class="tl">${NEWS.map(n=>`<li><div class="d">${n[0].toUpperCase()}</div><h4>${n[1]}</h4><p>${n[2]} ${c(...n.slice(3))}</p></li>`).join("")}</ol></div></section>
${pager("news")}`;

/* ---------------- STAY OR GO ---------------- */
const SIGNALS = [
 ["Youth unemployment (quarterly PLFS)","Falling for three quarters in a row","Rising, or stuck near 16%"],
 ["Rupee per dollar","Stable for a full quarter","New lows"],
 ["Government health spending","Moving toward 2% of GDP and beyond","Flat near 1.4%"],
 ["IMF grade on national accounts","Upgraded from C","Stays C, or old and new series still not shown together"],
 ["Census release","Data published on schedule","Delayed again"],
 ["Air quality (annual PM2.5)","Falling","Flat or rising"],
 ["Refunds and net GST","Refund growth cooling","Refund growth stays far above collections"]
];
R.decide = () => `
${head("decide","Stay or go","No verdict. The numbers that push, the numbers that hold, and a map of who they matter to.")}
${S("push","road","01 / what pushes","The numbers that push people out","",tiles([
 {txt:"8-10x",l:"Income gap to top countries",tone:"red",k:["gniw","gniw2"]},
 {n:15.9,dec:1,suf:"%",l:"Youth unemployment",tone:"red",k:["plfsq"]},
 {n:1.43,dec:2,suf:"%",l:"Government health spend, % of GDP",tone:"red",k:["nha"]},
 {n:48.9,dec:1,l:"PM2.5, about 10x the WHO guideline",tone:"red",k:["air"]},
 {n:2.06,dec:2,suf:" lakh",l:"Citizenships renounced, 2024",tone:"orange",k:["renounce24"]},
 {n:4300,l:"Millionaires estimated to leave, 2024",tone:"orange",k:["henley"]}
]))}
${S("hold","house","02 / what holds","The numbers that hold people in","",tiles([
 {n:5.3,dec:1,suf:"%",l:"Extreme poverty",tone:"cyan",k:["pov"]},
 {n:1.8,dec:1,suf:"%",l:"Bank bad loans",tone:"cyan",k:["npa"]},
 {n:24.5,dec:1,suf:"B",l:"UPI payments a month",tone:"cyan",k:["upi"]},
 {n:12.75,dec:2,suf:" lakh",l:"Zero income tax, salaried",tone:"cyan",k:["slabs"]},
 {n:39,suf:"%",l:"India's top income tax rate, vs 40-56% abroad",d:"Calc",tone:"cyan",k:["taxf"]},
 {n:50,suf:"%",l:"Non-fossil power capacity",tone:"cyan",k:["renew"]}
]))}
${S("friction","ship","03 / the friction","Doors are narrowing","",`<div class="g3">
 ${panel("United States","$100,000 H-1B fee rule",`<div class="big2 red">$100k</div>`,"Extended on 18 Sept to September 2027; courts are still blocking it. Status can change quickly.",["h1b","h1bk"])}
 ${panel("Canada, UK, Australia","Rules tightened on students and residency",`<div class="big2 red">3</div>`,"Business Standard's 2025 recap describes narrower options for Indians.",["migr"])}
 ${panel("The rupee","Down about 9% in a year",`<div class="big2 red">-9%</div>`,"Foreign earnings are worth more in rupees, but foreign costs are in dollars.",["fx"])}
</div>`)}
${S("who","heart","04 / by situation","What the numbers favor, by situation","Pick a situation.",tabs("persona",PERSONAS.map((p,i)=>({k:"p"+i,l:p.n,h:`<div class="g3"><div class="panel"><div class="eyebrow">Case for staying, or timing</div><p style="margin:0">${p.pro}</p></div><div class="panel"><div class="eyebrow">Case for moving, and the catch</div><p style="margin:0">${p.con}</p></div><div class="panel"><div class="eyebrow">Ask yourself</div><p style="margin:0">${p.ask}</p></div></div>`}))))}
${S("signals","chart","05 / signals","Signals to watch, quarter by quarter","Direction matters more than one reading. These are not predictions.",`<div class="tbl"><table><thead><tr><th>Signal</th><th>Improving looks like</th><th>Worsening looks like</th></tr></thead><tbody>${SIGNALS.map(s=>`<tr><td><b>${s[0]}</b></td><td>${s[1]}</td><td>${s[2]}</td></tr>`).join("")}</tbody></table></div>`)}
${S("five","info","06 / questions","Five questions before any decision","",`<ol class="qs">${[`Do I have a legal way to stay long-term in the place I'm considering?`,`How many months can I cover if my income drops by 30%?`,`What do I lose that a salary can't replace: family, community, language?`,`Which risk worries me most: money, safety, freedom, air, or health?`,`Can I test it first, with a short contract or visit?`].map(q=>`<li>${q}</li>`).join("")}</ol><div class="note" style="margin-top:14px">What this report cannot tell you: your skills, your family, and your risk tolerance. It is not immigration, tax or investment advice.</div>`)}
${pager("decide")}`;

/* ---------------- RECKONING ---------------- */
R.reck = () => `
${head("reck","Reckoning","Who holds each lever, what is failing, why, and what could fix it.")}
${S("matrix","scale","01 / accountability","Who, what, why, how","The 'How to fix' column lists commonly proposed options, not proven outcomes. Many big levers sit with state governments: public health, police, most farming.",`<div class="tbl"><table><thead><tr><th>Area</th><th>Who holds the lever</th><th>What is failing</th><th>Why</th><th>How to fix (options)</th><th>Watch</th></tr></thead><tbody>${ACCOUNT.map(a=>`<tr><td><b>${a[0]}</b></td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td>${a[4]}</td><td>${a[5]}</td></tr>`).join("")}</tbody></table></div>`)}
${S("qs","info","02 / questions","Twelve questions for any elected representative","",`<ol class="qs">${QUESTIONS.map(q=>`<li>${q}</li>`).join("")}</ol>`)}
<section class="wrap reveal"><div class="vo" aria-label="Closing voice-over"><div class="vl">Voice-over | Closing</div><p class="lead">Back at the chai stall, the woman folds her salary slip and slides it into her bag.</p><p class="more">She knows things she did not know an hour ago. The tax she can see is smaller than she thought, and the tax she cannot see is larger. The country around her is doing some things very well and some things badly, depending on the state, the school, the hospital, and the year. If she goes, the doors are narrowing. If she stays, the air, the jobs, and the trust in the numbers are still to be won. Nobody in this frame is asked to be angry, or to be grateful. They are asked to keep score. Cut to black.</p></div></section>
${pager("reck")}`;

/* ---------------- AUDIT + SOURCES ---------------- */
R.audit = () => `
${head("audit","The audit","Was the first draft right? Mostly, on what it said. Thin and partly out of date on the rest.")}
${S("draft","search","01 / the draft","Held up, stale, and missing","",`<div class="g3">
 <div class="panel"><span class="st improving">Held up</span><ul class="clean" style="margin-top:10px"><li>Centre-only 11.2% vs. all-government 17.6% is the right way to think about it (17.6% not re-checked)</li><li>Happiness rank 116 of 147 ${c("whr")}</li><li>Human development rank 130 of 193 ${c("hdrtop")}</li><li>OECD figures: Denmark 45.2%, average 34.1% ${c("oecd")}</li><li>Norway ($106,830) and US ($85,980) income ${c("gniw")}</li></ul></div>
 <div class="panel"><span class="st weak">Wrong or stale</span><ul class="clean" style="margin-top:10px"><li>Peace rank was 2025 (115th). 2026 is 127th ${c("gpi26")}</li><li>Schooling used 6.57 (2022). Latest: 6.88 (2023) ${c("hdr")}</li><li>Denmark income $84,680 vs. World Bank $82,240 ${c("gnid")}</li><li>Sweden income rounded to $75,000 vs. $74,150 ${c("gnis")}</li><li>No mention of the new GDP series or the IMF grade ${c("gdpnew","imfc")}</li></ul></div>
 <div class="panel"><span class="st unverified">Missing from the draft</span><ul class="clean" style="margin-top:10px"><li>Jobs, security, R&amp;D, stability, health and school outcomes</li><li>A real claim audit (it covered five soft claims)</li><li>Recent news and migration barriers</li><li>A stay-or-go framework</li></ul></div></div>`)}
${S("grey","scale","02 / grey areas","Same topic, different numbers","",`<div class="tbl"><table><thead><tr><th>Topic</th><th>Number A</th><th>Number B</th><th>Why they differ</th></tr></thead><tbody>${GREY.map(g=>`<tr><td><b>${g[0]}</b></td><td>${g[1]}</td><td>${g[2]}</td><td>${g[3]}</td></tr>`).join("")}</tbody></table></div>`)}
${S("nv","info","03 / limits","Still not verified","",`<div class="g2"><div class="panel"><ul class="clean"><li>Peer life expectancy, peer health spending, peer learning scores</li><li>Peer crime rates</li><li>The Democracy Index 2025 score and the latest V-Dem rating</li><li>The 2026 Global Innovation Index (2025 used here)</li><li>Global Peace Index 2026 ranks for most peers</li><li>Semiconductors, AI, and 2026 stock market performance</li><li>Current casualty figures for Manipur</li></ul></div><div class="panel"><h3>Method and confidence</h3><p class="muted">Every number links to a source. Tiers: <b>Official</b> (government or multilateral), <b>Index</b> (the publisher), <b>Analysis</b>, <b>Press</b>, and <b>Secondary</b> (aggregators or exam-prep sites quoting others, used only when a primary source could not be reached). Rank bars use each index's own country count. <span class="tag">Calc</span> is my arithmetic. The scenes that open each reel are illustrations with no data.</p></div></div>`)}
${S("src","book","04 / sources",`All ${KEYS.length} sources`,"In the order the bracketed numbers appear.",`<div class="panel"><ol style="padding-left:1.4em;line-height:1.5;margin:0">${KEYS.map((k,i)=>{const s=SRC[k];return `<li value="${i+1}" style="margin:.45em 0">${s[1]?`<a href="${s[1]}" target="_blank" rel="noopener" style="text-decoration:underline">${s[0]}</a>`:s[0]} <span class="tag">${s[2]}</span></li>`;}).join("")}</ol></div>`)}
${pager("audit")}`;
