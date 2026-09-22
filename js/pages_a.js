"use strict";
const PAGES = [
 {id:"home",name:"Overview",icon:"chart"},{id:"tax",name:"Tax",icon:"landmark"},{id:"benefits",name:"Benefits",icon:"utensils"},
 {id:"policy",name:"New rules",icon:"book"},{id:"depts",name:"Departments",icon:"building"},{id:"states",name:"States map",icon:"house"},
 {id:"economy",name:"Economy",icon:"wallet"},{id:"people",name:"People",icon:"heart"},{id:"work",name:"Work",icon:"building"},
 {id:"safety",name:"Safety",icon:"shield"},{id:"future",name:"Future",icon:"flask"},{id:"corruption",name:"Corruption",icon:"scale"},
 {id:"ground",name:"Paper vs ground",icon:"search"},{id:"trust",name:"Politics",icon:"info"},{id:"foreign",name:"Foreign",icon:"ship"},
 {id:"world",name:"World",icon:"ship"},{id:"promises",name:"Promises",icon:"book"},{id:"news",name:"News",icon:"search"},
 {id:"decide",name:"Stay or go",icon:"road"},{id:"reck",name:"Reckoning",icon:"info"},{id:"audit",name:"Audit",icon:"search"}
];
const head = (id, title, sub) => `<header class="wrap" style="padding-top:clamp(34px,6vw,64px)"><div class="eyebrow">Fact sheet | ${PAGES.find(p => p.id === id).name}</div><h1 style="font-size:clamp(40px,7vw,78px);line-height:.92;letter-spacing:-.06em;margin:10px 0 12px">${title}</h1><p class="muted" style="max-width:62ch;font-size:17px">${sub}</p></header>${vo(id)}`;
const pager = id => { const i = PAGES.findIndex(p => p.id === id); const a = PAGES[i-1], b = PAGES[i+1];
  return `<div class="wrap"><div class="pager">${a?`<a href="#/${a.id}"><small>Previous reel</small>${a.name}</a>`:"<span></span>"}${b?`<a href="#/${b.id}"><small>Next reel</small>${b.name}</a>`:""}</div></div>`; };
const R = {};
const usd = v => "$" + fmt(v);
const pc = v => v + "%";

/* ---------------- TAX ---------------- */
const TOLLS = [["wallet","Income tax","Union","Zero up to 12.75 lakh for salaried people under the new regime."],["cart","GST","Union + states","On most goods and services. Several slabs after the Sept 2025 reform."],["ship","Customs duty","Union","On imports."],["fuel","Fuel excise","Union","On petrol and diesel, on top of state VAT."],["fuel","State VAT","State","On fuel and liquor."],["house","Stamp duty","State","When you register a property."],["building","Property and professional tax","State / local","Charged by municipalities and states."],["chart","Capital gains and dividend tax","Union","On profits from shares, property and funds. Check current rates."],["scale","Cess and surcharge","Union","4% cess on income tax, plus a surcharge at high incomes."]];
R.tax = () => `
${head("tax","The bill","Every layer of tax, who pays it, and what it buys.")}
${S("kpi","landmark","01 / the numbers","Tax at a glance","",tiles([
 {n:8.09,dec:2,suf:" crore",l:"Income tax returns filed, FY24",d:"About 6.68% of the population",tone:"lime",k:["itr"]},
 {n:4.9,dec:1,suf:" crore",l:"Returns with zero taxable income",d:"About 3.2 crore above the exemption (calc)",tone:"orange",k:["itr"]},
 {n:12.75,dec:2,pre:"Rs ",suf:" lakh",l:"Zero-tax income, salaried",d:"New regime, after standard deduction",tone:"cyan",k:["slabs","budgetprs"]},
 {n:1.99,dec:2,pre:"Rs ",suf:" lakh cr",l:"GST collected, Aug 2026 (gross)",d:"+14.8% on a year earlier",tone:"lime",k:["gst"]},
 {n:67.9,dec:1,suf:"%",l:"Rise in GST refunds, Aug 2026",d:"Net GST grew only 8.3%",tone:"red",k:["gst"]},
 {n:26,suf:"%",l:"Union spending that goes to interest",tone:"red",k:["exprs"]},
 {n:4.3,dec:1,suf:"%",l:"Fiscal deficit target, FY27",d:"Down from 4.4%",tone:"blue",k:["budgetprs"]},
 {n:55.6,dec:1,suf:"%",l:"Centre's debt / GDP",d:"Target near 50% by March 2031",tone:"blue",k:["budgetprs"]}
]))}
${S("atlas","cart","02 / tax atlas","Nine tolls","Structures, not rates. Rates change with each budget or GST Council meeting.",`<div class="tollgrid">${TOLLS.map(t=>`<div class="toll"><div style="display:flex;justify-content:space-between;align-items:center"><div class="ico">${ic(t[0])}</div><span class="tag">${t[2]}</span></div><h4>${t[1]}</h4><p>${t[3]}</p></div>`).join("")}</div>`)}
${S("calc","wallet","03 / calculator","Your income tax, and the curve behind it","New regime. Type a salary or drag the slider.",`<div class="g2">
 <div class="panel"><div class="eyebrow">Inputs</div><div class="calc"><div><label for="sal">Yearly gross salary (rupees, in lakh)</label><input id="sal" type="number" min="0" max="500" step="0.5" value="15" inputmode="decimal"><input id="salr" type="range" min="0" max="100" step="0.5" value="15" aria-label="Salary slider"><label style="font-weight:500"><input id="std" type="checkbox" checked> Salaried (75,000 standard deduction)</label><p class="fine">FY 2025-26 rates carried into 2026-27. Approximate: no marginal relief on surcharge, no other deductions. GST and other indirect taxes are not included. ${c("slabs","ita25")}</p></div><div class="res" id="calcout" aria-live="polite"></div></div></div>
 <div class="panel"><div class="eyebrow">Effective income tax rate by salary</div><h3>The curve: 0% up to 12.75 lakh, then it climbs</h3><div id="curve"></div><p class="read"><b>Read:</b> the rate is not a step. It rises smoothly after the 12.75 lakh threshold and only approaches 30% at very high incomes.</p></div></div>`)}
${S("world","scale","04 / world comparison","How big is India's tax bite?","Two views: total tax share of GDP, and the top income tax rate.",`<div class="g2">
 ${panel("Taxes / GDP, general government","Half the OECD average",hbars([{l:"India",v:17.6,india:1,note:"draft"},{l:"Mexico",v:18.3,note:"OECD low"},{l:"United States",v:25.6,note:"draft"},{l:"OECD average",v:34.1,tone:"violet"},{l:"Norway",v:40.2,note:"draft"},{l:"Sweden",v:41.4,note:"draft"},{l:"Finland",v:42.2,note:"draft"},{l:"Denmark",v:45.2,note:"OECD high"}],{fmt:pc,max:50}),"India's 17.6% covers all governments (an IMF figure from the draft, not re-checked). The Centre alone is about 11.2%. Do not compare 11.2% with other countries' totals.",["oecd"])}
 ${panel("Top income tax rate","India is near the bottom of this group",hbars([{l:"India (top, new regime)",v:39,india:1,note:"calc"},{l:"Norway",v:39.6},{l:"Switzerland",v:39.7},{l:"US (avg. combined)",v:42.1},{l:"Germany",v:47.5},{l:"Finland",v:51.8},{l:"Sweden",v:52.3},{l:"Denmark",v:55.9,note:"60.5 in 2026"}],{fmt:pc,max:60}),"India's number is 30% slab, 25% maximum surcharge, and 4% cess: my arithmetic. At about 96 rupees to the dollar, the 30% slab begins near $25,000 of taxable income.",["taxf"])}
</div>`)}
${S("scale","chart","05 / scale","Similar idea, very different revenue","A rough scale using my own arithmetic: tax share of GDP times income per person (World Bank Atlas method).",`<div class="g3">
 <div class="panel"><div class="eyebrow">India</div><div class="big2">$470</div><p class="muted">Government revenue per person per year: 17.6% of about $2,650. <span class="tag">Calc</span></p></div>
 <div class="panel"><div class="eyebrow">Norway</div><div class="big2 blue">$39,500</div><p class="muted">40.2% of about $98,170 per person. <span class="tag">Calc</span> ${c("gniatlas")}</p></div>
 <div class="panel"><div class="eyebrow">The gap</div><div class="big2 red">~85x</div><p class="muted">The rate gap is only 2.3x. The revenue-per-person gap is roughly 85x. The base, not the rate, drives it.</p></div></div>`)}
${S("spend","building","06 / what comes back","Where the money goes","",`<div class="g2">
 ${panel("Union spending","About a quarter goes to interest",donut([{v:26,l:"Interest on past borrowing",tone:"red"},{v:74,l:"Everything else",tone:"lime"}],{center:"26%",sub:"interest",label:"Share of Union spending on interest"}),"Roughly one rupee in four of Union spending pays for money already borrowed. Government health spending is 1.43% of GDP.",["exprs","nha"])}
 ${panel("GST, August 2026","Gross up 14.8%, refunds up 67.9%, net up 8.3%",hbars([{l:"Gross collections",v:14.8,tone:"cyan"},{l:"Refunds",v:67.9,tone:"red"},{l:"Net collections",v:8.3,tone:"orange"}],{fmt:pc,max:70}),"Both numbers are true. Gross is what the system takes in. Net is what the government keeps after refunds. The sources do not explain why refunds jumped.",["gst","gstoct"])}
</div>`)}
${pager("tax")}`;

/* ---------------- ECONOMY ---------------- */
const GRADES = `<div class="hb" style="grid-template-columns:repeat(4,1fr);display:grid;gap:8px">${[["A","Best"],["B","Good"],["C","Second-lowest"],["D","Lowest"]].map(g=>`<div class="kpi ${g[0]==="C"?"red":""}" style="text-align:center"><div class="n">${g[0]}</div><div class="d">${g[1]}</div></div>`).join("")}</div>`;
R.economy = () => `
${head("economy","The money","Growth, prices, the rupee, oil, banks, debt, and how far the numbers can be trusted.")}
${S("kpi","wallet","01 / the dashboard","Twelve economic readings","",tiles([
 {n:7.8,dec:1,suf:"%",l:"GDP growth, Apr-Jun 2026",d:"New series; FY26 was 7.6%",tone:"lime",k:["gdpq1","gdpnew"]},
 {n:6.7,dec:1,suf:"%",l:"RBI growth forecast, FY27",tone:"orange",k:["rbi"]},
 {n:4.82,dec:2,suf:"%",l:"Consumer inflation, Aug",d:"Highest since Dec 2024",tone:"orange",k:["cpi"]},
 {n:5.95,dec:2,suf:"%",l:"Food inflation, Aug",tone:"red",k:["foodinf"]},
 {n:5.25,dec:2,suf:"%",l:"RBI repo rate",d:"On hold",tone:"blue",k:["rbi"]},
 {n:95.89,dec:2,pre:"Rs ",l:"Rupee per dollar",d:"Down about 9% in 12 months",tone:"red",k:["fx2","fx"]},
 {n:729.3,dec:1,pre:"$",suf:"B",l:"Forex reserves, 21 Aug",d:"Special deposit swap raised $72.85B",tone:"cyan",k:["resv","fcnr"]},
 {n:1.8,dec:1,suf:"%",l:"Bank gross bad loans, Mar 2026",d:"Multi-decade low",tone:"cyan",k:["npa"]},
 {n:4.3,dec:1,suf:"%",l:"Fiscal deficit target, FY27",tone:"blue",k:["budgetprs"]},
 {n:55.6,dec:1,suf:"%",l:"Centre debt / GDP",d:"General govt about 81-85%",tone:"blue",k:["budgetprs","debtst"]},
 {txt:"$104-108",l:"Brent crude, Sept 2026",tone:"red",k:["fx"]},
 {n:88,suf:"%",l:"LPG imports via Hormuz",tone:"red",k:["hormuz"]}
]))}
${S("growth","chart","02 / growth","Growth: high, and argued over","In February 2026 the government rebuilt GDP with a new base year (2022-23).",`<div class="g2">
 ${panel("Real growth vs what 2047 needs","The bar to clear is 7.8%",hbars([{l:"FY26 actual",v:7.6},{l:"Q1 FY27 actual",v:7.8,india:1},{l:"RBI forecast FY27",v:6.7,tone:"orange"},{l:"Needed avg to 2047",v:7.8,tone:"violet",note:"World Bank"}],{fmt:pc,max:9}),"Growth is fast by world standards. The World Bank says developed status by 2047 needs about 7.8% a year for 22 years, and the RBI forecasts less for FY27.",["gdpq1","gdpnew","rbi","wbgrowth"])}
 ${panel("The deflator argument","GDP deflator vs actual inflation",hbars([{l:"GDP deflator",v:2.5,tone:"red"},{l:"Consumer inflation",v:3.9,tone:"orange"},{l:"Wholesale inflation",v:9.78,tone:"orange"}],{fmt:pc,max:11}),"A low deflator makes real growth look higher. The explainer notes an old-vs-new comparison giving 2.6% growth is not a valid one, so critics and defenders both have a point.",["gdpdebate"])}
 ${panel("Nominal GDP, FY26","The rebase lowered the size by about 3-4%",hbars([{l:"Old series",v:357,tone:"violet",note:"lakh crore"},{l:"New series",v:345,india:1,note:"lakh crore"}],{fmt:v=>"Rs "+v,max:400}),"The IMF's April 2026 table puts India 6th at about $4.15 trillion, behind Japan and the UK.",["gdpdebate","gdpnew","imf6"])}
 ${panel("IMF grade for India's national accounts","C: the second-lowest of four",GRADES,"This does not prove the growth number is wrong. It means outsiders cannot fully verify it.",["imfc"])}
</div>`)}
${S("shock","fuel","03 / shocks","Oil, the rupee, and trade","",`<div class="g2">
 ${panel("Hormuz exposure","How much of India's imports use one strait",hbars([{l:"LPG",v:88,tone:"red"},{l:"LNG",v:55,tone:"orange"},{l:"Crude oil",v:41,tone:"orange"}],{fmt:pc,max:100}),"When the strait closed in early March, India faced cooking-gas shortages and protests.",["hormuz","lpg"])}
 ${panel("US tariff on most Indian goods","Announced 50% to 18%, then the courts",cols([{l:"Before Feb 2026",v:50,tone:"red"},{l:"Announced Feb 2",v:18,tone:"cyan"}],{fmt:pc}),"The US Supreme Court struck down the emergency tariffs on Feb 20, and by June the deal was still not final. Treat 18% as announced, not settled.",["trade","trade2"])}
</div>`)}
${S("banks","building","04 / banks","Banks: the strongest number","",`<div class="g2">
 ${panel("Gross bad loans, share of loans","7.5% to 1.8% in five years",cols([{l:"Mar 2021",v:7.5,tone:"red"},{l:"Mar 2025",v:2.3,tone:"orange"},{l:"Mar 2026",v:1.8,tone:"cyan"}],{fmt:pc}),"Healthy banks absorb shocks better. In the RBI's own stress tests, banks stay above minimum capital even in adverse scenarios.",["npa","npa25","npa21"])}
 ${panel("Government debt, share of GDP","The states add a lot",hbars([{l:"Centre",v:55.6,india:1},{l:"Centre target, Mar 2031",v:50,tone:"cyan"},{l:"Centre + states (FY23)",v:81,tone:"orange",note:"range 81-85"},{l:"IMF adverse case, FY28",v:100,tone:"red",note:"ministry: worst case"}],{fmt:pc,max:105}),"In 2023 the IMF warned combined debt could reach 100% in an adverse case. The finance ministry called that a worst case and noted the debt is mostly in rupees.",["budgetprs","debtst","ggdebt","ggdebt2"])}
</div>`)}
${S("stress","scale","05 / stress test","Auditor's reading","My reading of the sources, not an official rating.",`<div class="tbl"><table><thead><tr><th>Indicator</th><th>Latest</th><th>Read</th></tr></thead><tbody>
 <tr><td>Growth</td><td>7.8% (new series)</td><td>${chipS("partial")}</td></tr>
 <tr><td>Inflation</td><td>4.82% (food 5.95%)</td><td>${chipS("mixed")}</td></tr>
 <tr><td>Rupee</td><td>95.89; -9% in a year</td><td>${chipS("stressed")}</td></tr>
 <tr><td>Reserves</td><td>$729.3B</td><td>${chipS("improving")}</td></tr>
 <tr><td>Bank bad loans</td><td>1.8%</td><td>${chipS("improving")}</td></tr>
 <tr><td>Fiscal / debt</td><td>4.3% / 55.6% (Centre)</td><td>${chipS("mixed")}</td></tr>
 <tr><td>GST</td><td>Gross +14.8%, net +8.3%</td><td>${chipS("mixed")}</td></tr>
 <tr><td>Monsoon</td><td>About 15% below normal</td><td>${chipS("stressed")}</td></tr>
 <tr><td>Oil</td><td>$104-108</td><td>${chipS("stressed")}</td></tr></tbody></table></div>
 <p class="read"><b>Read:</b> stress, not a crisis. A crisis would look like reserves falling fast, and they are not. Watch the rupee, reserves, and food inflation next quarter.</p>`)}
${pager("economy")}`;

/* ---------------- PEOPLE ---------------- */
R.people = () => `
${head("people","The people","Health, schools, poverty, inequality, and women. The averages, and the ranges hiding behind them.")}
${S("health","heart","01 / health","Health","Life is longer and families pay less of the bill, but public spending is still small.",tiles([
 {n:72.0,dec:1,suf:" yrs",l:"Life expectancy, 2023",tone:"cyan",k:["hdr"]},
 {n:25,l:"Infant deaths per 1,000 births, 2023",d:"32 in 2018",tone:"cyan",k:["srs"]},
 {n:29,l:"Under-5 deaths per 1,000, 2023",tone:"cyan",k:["srs"]},
 {n:33.8,dec:1,suf:"%",l:"Children stunted (NFHS-5)",d:"35.5% on another estimate",tone:"red",k:["nfhs","owid"]},
 {n:57,suf:"%",l:"Women (15-49) anemic",tone:"red",k:["nfhs"]},
 {n:1.43,dec:2,suf:"%",l:"Government health spend, % of GDP",d:"Goal was 2.5% by 2025",tone:"red",k:["nha","nhp"]},
 {n:43.4,dec:1,suf:"%",l:"Health costs paid out of pocket",d:"64.2% a decade ago",tone:"orange",k:["nha"]},
 {n:2.1,dec:2,l:"Nurses per 1,000 people",tone:"orange",k:["nfhs"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Infant mortality, per 1,000 births","Down 7 points in five years",cols([{l:"2018",v:32,tone:"red"},{l:"2022",v:26,tone:"orange"},{l:"2023",v:25,tone:"cyan"}]),"Progress is steady, at about 1.4 points a year.",["srs"])}
 ${panel("Infant mortality by state, 2023","Kerala 5; Chhattisgarh, Madhya Pradesh, Uttar Pradesh 37",hbars([{l:"Kerala",v:5,tone:"cyan"},{l:"India",v:25,india:1},{l:"Chhattisgarh",v:37,tone:"red"},{l:"Madhya Pradesh",v:37,tone:"red"},{l:"Uttar Pradesh",v:37,tone:"red"}],{max:40}),"More than 7x apart. A child's odds depend heavily on the state they are born in.",["srs"])}
 ${panel("Under-5 mortality by state, 2023","Kerala 8 to Madhya Pradesh 44",hbars([{l:"Kerala",v:8,tone:"cyan"},{l:"Tamil Nadu",v:13,tone:"cyan"},{l:"India",v:29,india:1},{l:"Chhattisgarh",v:41,tone:"red"},{l:"Uttar Pradesh",v:42,tone:"red"},{l:"Madhya Pradesh",v:44,tone:"red"}],{max:48}),"Public health is a state subject, so the state map matters more than the national average.",["srs"])}
 ${panel("Who pays for health, 2022-23","Government and households pay almost equal shares",donut([{v:43.7,l:"Government",tone:"lime"},{v:43.4,l:"Out of pocket",tone:"red"},{v:12.9,l:"Other (calc)",tone:"grey"}],{center:"43%",sub:"out of pocket",label:"Health financing"}),"Out-of-pocket spending was 64.2% of the total a decade ago. Total health spending is 3.37% of GDP.",["nha"])}
 ${panel("Government health spending, % of GDP","Actual vs promise",hbars([{l:"2022-23 actual",v:1.43,india:1},{l:"2.5% goal for 2025",v:2.5,tone:"violet"}],{fmt:pc,max:3}),"The 2025 figure is not published yet, so the final result is not confirmed.",["nha","nhp"])}
</div></section>
${S("edu","book","02 / education","Education","Most children are in school. Fewer are learning the basics.",tiles([
 {n:23.4,dec:1,suf:"%",l:"Class 3 children who read a Class 2 text (govt schools)",d:"16.3% in 2022",tone:"orange",k:["aser"]},
 {n:48.8,dec:1,suf:"%",l:"Class 5 children who read a Class 2 text",tone:"orange",k:["aser"]},
 {n:90,suf:"%+",l:"Children 6-14 enrolled, rural",tone:"cyan",k:["aser2"]},
 {n:8,suf:"%",l:"Aged 15-16 not in school",d:"13% in Uttar Pradesh",tone:"red",k:["aser2"]},
 {n:6.88,dec:2,suf:" yrs",l:"Mean years of schooling, adults",tone:"orange",k:["hdr"]},
 {txt:"2.7-4%",l:"Public education spend, % of GDP",d:"Goal 6%, never met",tone:"red",k:["edu","edu2"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Class 3 reading, ASER (government schools)","Recovered, but under 1 in 4",cols([{l:"2018",v:20.9,tone:"orange"},{l:"2022",v:16.3,tone:"red"},{l:"2024",v:23.4,tone:"cyan"}],{fmt:pc}),"The best ASER has recorded, and still fewer than one in four. ASER covers rural India only and is run by an NGO, not the government.",["aser"])}
 ${panel("Out of school, ages 15-16, 2024","Uttar Pradesh worst of the states listed",hbars([{l:"Uttar Pradesh",v:13,tone:"red"},{l:"Bihar",v:8.6,tone:"orange"},{l:"National",v:8,india:1},{l:"West Bengal",v:5.4},{l:"Assam",v:5}],{fmt:pc,max:15}),"Punjab, Kerala, and Himachal Pradesh are improving. Bihar, UP, West Bengal, and Madhya Pradesh still struggle with basics.",["aser2"])}
 ${panel("Public education spending, % of GDP","Two official counts, one goal",hbars([{l:"Economic Survey count",v:2.7,tone:"red"},{l:"Azim Premji Univ. count",v:4,tone:"orange"},{l:"NEP goal",v:6,tone:"violet"}],{fmt:pc,max:7}),"They differ on what counts as education spending. Neither is close to 6%.",["edu","edu2"])}
</div></section>
${S("pov","scale","03 / poverty and inequality","Poverty and inequality","Poverty is the clearest success. Inequality depends on the ruler.",`<div class="g2">
 ${panel("Extreme poverty at $3 a day","27.1% to 5.3% in about a decade",cols([{l:"2011-12",v:27.1,tone:"red"},{l:"2022-23",v:5.3,tone:"cyan"}],{fmt:pc}),"Survey methods changed, so the two ends are not perfectly comparable.",["pov","pov2"])}
 ${panel("Gini index: consumption vs income","Same country, opposite pictures",hbars([{l:"Consumption Gini (World Bank)",v:25.5,tone:"cyan"},{l:"Income Gini (WID)",v:62,tone:"red"}],{max:70}),"Consumption is what people spend. Income is what they earn, and rich households save much of theirs. UNDP says inequality cuts India's human development score by about 30.7%. HDI is 0.685, ranked 130th of 193.",["gini","hdr","hdrtop"])}
</div>`)}
${S("women","heart","04 / women","Women","",tiles([
 {n:131,suf:" of 148",l:"Global Gender Gap rank, 2025",tone:"red",k:["gender"]},
 {n:32.7,dec:1,suf:"%",l:"Women in the labor force, June 2026",d:"24.8% in cities",tone:"red",k:["plfsm"]},
 {n:448211,l:"Crimes against women registered, 2023",d:"66.2 per lakh women",tone:"orange",k:["ncrbw"]},
 {n:77.6,dec:1,suf:"%",l:"Chargesheeting rate, these cases",tone:"cyan",k:["ncrbw"]}
]))}
<section class="wrap reveal sec">${panel("Crimes against women, rate per lakh women, 2023","Telangana highest at 124.9; national 66.2",hbars([{l:"Telangana",v:124.9,tone:"red"},{l:"Rajasthan",v:114.8,tone:"red"},{l:"Odisha",v:112.4,tone:"red"},{l:"Haryana",v:110.3,tone:"orange"},{l:"Kerala",v:86.1,tone:"orange"},{l:"India",v:66.2,india:1}],{max:130}),"Better reporting can raise recorded crime, so a higher rate does not by itself prove more crime. Uttar Pradesh recorded the most cases (66,381).",["ncrbw"])}</section>
${pager("people")}`;

/* ---------------- WORK ---------------- */
R.work = () => `
${head("work","The work","Jobs, wages, factories, the young, and the other labor market: the one abroad.")}
${S("kpi","building","01 / labor market","Work in numbers","",tiles([
 {n:5.4,dec:1,suf:"%",l:"Unemployment, Apr-Jun 2026 (weekly status)",tone:"orange",k:["plfsq"]},
 {n:3.1,dec:1,suf:"%",l:"Unemployment, 2025 (usual status)",d:"Different definition, also true",tone:"cyan",k:["plfsa"]},
 {n:15.9,dec:1,suf:"%",l:"Youth (15-29) unemployment, Apr-Jun 2026",d:"14.6% a year earlier",tone:"red",k:["plfsq"]},
 {n:25,suf:"%",l:"Youth not working, studying, or training, 2025",tone:"red",k:["plfsa"]},
 {n:54.6,dec:1,suf:"%",l:"Labor force participation",tone:"blue",k:["plfsq"]},
 {n:15.9,dec:1,suf:"%",l:"Manufacturing share of GDP, 2023-24",d:"16.7% in 2013-14",tone:"red",k:["mfg"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Two official unemployment numbers","Different rulers, same country",hbars([{l:"Overall, usual status (2025)",v:3.1,tone:"cyan"},{l:"Overall, weekly status (Apr-Jun 2026)",v:5.4,tone:"orange"},{l:"Youth, usual status (2025)",v:9.9,tone:"cyan"},{l:"Youth, weekly status (Apr-Jun 2026)",v:15.9,tone:"red"}],{fmt:pc,max:18}),"Usual status sorts people by what they mostly did over the year. Weekly status looks at the week before the survey.",["plfsa","plfsq"])}
 ${panel("Youth unemployment, weekly status","Up 1.3 points in a year",cols([{l:"Apr-Jun 2025",v:14.6,tone:"orange"},{l:"Apr-Jun 2026",v:15.9,tone:"red"}],{fmt:pc}),"Young people carry the weakest numbers in the labor market.",["plfsq"])}
 ${panel("Manufacturing share of GDP","Flat for a decade, far from the goal",cols([{l:"2013-14",v:16.7},{l:"2023-24",v:15.9,tone:"red"},{l:"Goal (now 2030)",v:25,tone:"violet"}],{fmt:pc}),"The goal has slipped from 2022 to 2030.",["mfg"])}
 ${panel("Income per person, GNI PPP, 2024","The gap is about 8-10x",hbars([{l:"Singapore",v:126190},{l:"Norway",v:106830},{l:"Switzerland",v:91100},{l:"United States",v:85980},{l:"Denmark",v:82240},{l:"Germany",v:74880},{l:"Sweden",v:74150},{l:"India",v:11050,india:1}],{fmt:usd}),"PPP adjusts for local prices. At market exchange rates India's figure is about $2,650, which matters if you earn in rupees and spend in dollars.",["gniw","gniw2","gnid","gnis","gniatlas"])}
</div></section>
${S("abroad","ship","02 / the other labor market","Leaving is already part of the economy","About 18.5 million Indians worked abroad in 2024, roughly half in the Gulf.",tiles([
 {n:18.5,dec:1,suf:" million",l:"Indians working abroad, 2024",tone:"blue",k:["remit"]},
 {n:135.46,dec:2,pre:"$",suf:"B",l:"Remittances received, FY25",d:"More than 10% of current account receipts",tone:"cyan",k:["remit"]},
 {n:620,suf:"k+",l:"Indian students abroad",tone:"violet",k:["unmig"]}
]))}
<section class="wrap reveal sec"><div class="g2">
 ${panel("Top remittance recipients, 2024","India nearly doubles the second",hbars([{l:"India",v:129.4,india:1},{l:"Mexico",v:68},{l:"China",v:48},{l:"Philippines",v:40},{l:"Pakistan",v:33}],{fmt:v=>"$"+v+"B",max:140}),"World Bank economists' 2024 ranking; India's figure is the RBI's 2024 number.",["remit"])}
 ${panel("Remittances to India, $ billion","Up about 2.6x since 2010",cols([{l:"2010",v:53.48},{l:"2015",v:68.91},{l:"2020",v:83.15},{l:"2024",v:137.67,tone:"cyan"}],{fmt:v=>"$"+v}),"UN migration report figures (secondary source); the RBI's FY25 number is $135.46 billion.",["unmig","remit"])}
 ${panel("Citizenship renounced, lakh people","About 2 lakh a year",cols([{l:"2022",v:2.25},{l:"2023",v:2.16},{l:"2024",v:2.06,tone:"orange"}],{fmt:v=>v+"L"}),"Includes long-settled emigrants who take foreign citizenship. It is not the number who moved that year.",["renounce","renounce24"])}
 ${panel("Millionaires estimated to leave, per year","Falling, per Henley (an estimate)",cols([{l:"2022",v:7500},{l:"2023",v:6500},{l:"2024",v:4300,tone:"orange"},{l:"2025 (forecast)",v:3500,tone:"grey"}],{fmt:v=>fmt(v)}),"Henley's numbers are modelled estimates, not official counts.",["henley","henley25"])}
</div>
<div class="note" style="margin-top:14px"><b>What these numbers do not say.</b> The surveys count who is working, not how good the work is. I did not verify wage data, informal-sector size, or job security.</div></section>
${pager("work")}`;
