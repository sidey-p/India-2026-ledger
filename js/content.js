"use strict";
/* Scenes, helpers, and report data */
/* ---------- SCENES ---------- */
const SCENES = {
  open:{slug:"INT. A CHAI STALL OUTSIDE A METRO STATION. EVENING.",lines:[
    ["ASHA",`Nine lakh a year. Zero income tax on that. So why is my account empty by the twentieth?`,"checking her salary slip"],
    ["RAVI",`Because tax is not one bill. It's GST on the shelf, petrol at the pump, stamp duty on the shop. The salary slip is the smallest part.`],
    ["THE AUDITOR",`You're both half right. India collects about 17.6% of GDP in tax. Denmark collects 45.2%. The OECD average is 34.1%.`,"sets down a folder"],
    ["ASHA",`So we pay less. Then why do we get less?`],
    ["THE AUDITOR",`Because a small share of a small income is still small money. And most filers owe nothing: 4.9 crore of 8.09 crore returns showed zero taxable income.`],
    ["RAVI",`So who pays?`],
    ["THE AUDITOR",`Everyone who buys something. That's what makes it hard to see. I'll show every number, where it came from, and how sure I am.`],
    ["ACTION","The Auditor turns to the camera. No side. No verdict without evidence."]]},
  bill:{slug:"INT. TAX OFFICE, AFTER HOURS. A SINGLE LAMP.",lines:[
    ["THE OFFICIAL",`Income tax is zero up to twelve lakh. Everyday goods got cheaper last September. Collections kept rising. That is a system working.`,"speaking for the government's stated case"],
    ["THE CRITIC",`Gross GST is up 15%, but refunds are up 68%, and net is up 8%. A quarter of the Union budget goes to interest, not to hospitals.`,"speaking for the critics' case"],
    ["THE AUDITOR",`Gross GST: 1.99 lakh crore rupees in August. Net growth: 8.3%. Interest: about 26% of Union spending. Each of you has a real number. Neither has the whole picture.`]]},
  score:{slug:"INT. A PROJECTION ROOM. A WORLD MAP ON THE WALL.",lines:[
    ["ASHA",`Where do we actually stand?`],
    ["THE AUDITOR",`Depends on the question. Innovation: 38th of 139. Happiness: 116th of 147. Peace: 127th of 163. Press freedom: 157th of 180.`],
    ["ASHA",`That looks bad.`],
    ["THE AUDITOR",`Some of it is. Some of it is a poor country measured against very rich ones. So I'll show both: the rank, and the income gap behind it.`]]},
  sectors:{slug:"INT. A TRAIN CAR, PUNE TO DELHI. NIGHT.",lines:[
    ["RAVI",`My mother's operation. The scheme paid part. I paid the rest.`,"looking out the window"],
    ["THE AUDITOR",`You're the average. Households still pay 43.4% of all health spending out of pocket. Ten years ago it was 64.2%. Better, and still heavy.`],
    ["ASHA",`And my cousin's school?`],
    ["THE AUDITOR",`The average adult has 6.88 years of schooling. Public education spending is somewhere between 2.7% and 4% of GDP, depending on who counts. The promise was 6%.`]]},
  promises:{slug:"INT. A PARLIAMENT LIBRARY. NIGHT. TWO LONG TABLES.",lines:[
    ["THE OFFICIAL",`Half our power capacity is clean, five years early. Extreme poverty is down. The Maoist leadership is finished.`],
    ["THE CRITIC",`Farm income was going to double by 2022. Manufacturing was going to reach 25% of GDP. The bullet train was going to run in 2022.`],
    ["THE AUDITOR",`You're reading from the same ledger, different pages. I'm going to keep score, line by line.`]]},
  stability:{slug:"EXT. A CURRENCY EXCHANGE COUNTER. DAY. HEAT.",lines:[
    ["RAVI",`The dollar was 83 rupees three years ago. Now it's almost 96.`],
    ["THE AUDITOR",`Down about 9% in the last year alone. Oil is near $108, the US Federal Reserve just raised rates, and the monsoon is the weakest since 2009. But reserves are $729 billion.`],
    ["ASHA",`Is that a crisis?`],
    ["THE AUDITOR",`The data show stress, not a crisis. I'd watch three numbers: the rupee, reserves, and food prices.`]]},
  news:{slug:"INT. A NEWSROOM. MIDNIGHT.",lines:[
    ["ACTION","Screens flicker. Headlines stack up."],
    ["THE AUDITOR",`Nine months, three shocks: a war that closed a shipping lane, a new way of counting GDP, and a weak monsoon. Here they are in order, with dates and sources.`]]},
  decide:{slug:"INT. AN AIRPORT DEPARTURE HALL. DAWN.",lines:[
    ["ASHA",`I have an offer abroad.`,"holding a boarding pass, not yet using it"],
    ["THE AUDITOR",`Three things first. The income gap is real: roughly 8 to 10 times. The doors are narrowing: the US just extended a $100,000 H-1B fee, though a court is blocking it for now. And your rupee salary has lost about 9% against the dollar in a year.`],
    ["ASHA",`So go?`],
    ["THE AUDITOR",`I don't answer that. I hand you the questions you have to answer.`]]},
  who:{slug:"INT. AN EMPTY COURTROOM. NIGHT.",lines:[
    ["THE CRITIC",`Who is accountable?`],
    ["THE OFFICIAL",`We are, for what the Centre controls. Health, police, and most farming belong to the states.`],
    ["THE AUDITOR",`Both true. Currency and defense are the Centre's. Statistics belong to a ministry the IMF graded C. Elections belong to a commission the Supreme Court just backed. Everyone is accountable for something. Nobody is accountable for everything.`]]},
  audit:{slug:"INT. A WRITER'S ROOM. DAWN. PAGES EVERYWHERE.",lines:[
    ["THE AUDITOR",`The first draft was not a lie. It was a sketch. Here is what I checked, what I changed, and what I still can't confirm.`,"to camera"]]}
};
function scene(id){
  const s = SCENES[id];
  return `<section class="screen" aria-label="Opening scene"><div class="slug">${s.slug}</div>${s.lines.map(l => l[0]==="ACTION"
    ? `<p class="action">${l[1]}</p>`
    : `<div class="dlg"><div class="who">${l[0]}</div>${l[2]?`<div class="paren">(${l[2]})</div>`:""}<div class="say">${l[1]}</div></div>`).join("")}</section>`;
}

/* ---------- HELPERS ---------- */
const fmt = (n, d=0) => Number(n).toLocaleString("en-IN", {maximumFractionDigits:d, minimumFractionDigits:d});
function bars(rows, o={}){
  const f = o.fmt || (v => v); const m = o.max || Math.max(...rows.map(r => r.v));
  return `<div class="bars" role="list">${rows.map(r => `<div class="brow${r.india?" is-india":""}" role="listitem"><span class="bl">${r.l}</span><span class="bt"><i style="width:${Math.max(1,r.v/m*100)}%"></i></span><span class="bv">${f(r.v)}${r.note?`<small>${r.note}</small>`:""}</span></div>`).join("")}</div>`;
}
const ST = {delivered:"Delivered", partial:"Partly", missed:"Missed", unverified:"Can't verify", improving:"Improving", mixed:"Mixed", weak:"Weak", stressed:"Under stress"};
const stChip = s => `<span class="st ${s}">${ST[s]}</span>`;

/* ---------- DATA ---------- */
const RANKS = [
  {l:"Innovation (WIPO Global Innovation Index 2025)", r:38, n:139, k:"gii"},
  {l:"Corruption perception (Transparency Intl. 2025)", r:91, n:182, k:"cpi25"},
  {l:"Human development (UNDP, 2023 data)", r:130, n:193, k:"hdrtop"},
  {l:"Happiness (World Happiness Report 2026)", r:116, n:147, k:"whr"},
  {l:"Peace (Global Peace Index 2026)", r:127, n:163, k:"gpi26"},
  {l:"Hunger (Global Hunger Index 2025, secondary source)", r:102, n:123, k:"ghi"},
  {l:"Press freedom (RSF 2026)", r:157, n:180, k:"rsf2"},
  {l:"Gender gap (WEF 2025)", r:131, n:148, k:"gender"},
  {l:"Air quality (IQAir 2025: 6th most polluted of 143)", r:138, n:143, k:"air"}
];
const PEERS = [
  {c:"India",me:1,gni:"11,050",whr:"116",gpi:"127",rsf:"157",cpi:"39 (rank 91)",gii:"38",tax:"about 39% (calc)"},
  {c:"Norway",gni:"106,830",whr:"6",gpi:"n/v",rsf:"1",cpi:"80+",gii:"20*",tax:"39.6%"},
  {c:"Switzerland",gni:"91,100",whr:"10",gpi:"3",rsf:"n/v",cpi:"n/v",gii:"1",tax:"39.7%"},
  {c:"Denmark",gni:"82,240",whr:"3",gpi:"n/v",rsf:"4",cpi:"89 (rank 1)",gii:"9*",tax:"55.9%"},
  {c:"Sweden",gni:"74,150",whr:"5",gpi:"n/v",rsf:"5",cpi:"n/v",gii:"2*",tax:"52.3%"},
  {c:"Finland",gni:"65,640*",whr:"1",gpi:"top 10",rsf:"n/v",cpi:"80+",gii:"7*",tax:"51.8%"},
  {c:"Germany",gni:"74,880",whr:"n/v",gpi:"n/v",rsf:"n/v",cpi:"n/v",gii:"n/v",tax:"47.5%"},
  {c:"Singapore",gni:"126,190",whr:"n/v",gpi:"top 10",rsf:"n/v",cpi:"80+",gii:"5*",tax:"n/v"},
  {c:"United States",gni:"85,980",whr:"23",gpi:"n/v",rsf:"64",cpi:"rank 29",gii:"3*",tax:"about 42% (avg. combined)"},
  {c:"China",gni:"n/v",whr:"65",gpi:"n/v",rsf:"178",cpi:"43",gii:"10*",tax:"n/v"}
];
const PROMISES = [
  {t:"Double farmers' income",by:"Announced 2016 | Goal year 2022",s:"missed",e:`A government committee said the goal needed about 10.4% real growth a year. Official survey numbers show farm income rising much more slowly in real terms. I found no later survey showing it was met.`,k:["farm","farm2"]},
  {t:"Manufacturing at 25% of GDP",by:"Make in India, 2014 | First for 2022, now 2030",s:"missed",e:`Manufacturing was 15.9% of GDP in 2023-24, against 16.7% in 2013-14 (constant prices). The share has not risen in a decade.`,k:["mfg"]},
  {t:"Mumbai-Ahmedabad bullet train",by:"Launched 2017 | Goal Aug 2022",s:"missed",e:`First stretch now due August 2027, the full line by end of 2029. Cost is heading from about 1.08 to about 1.98 lakh crore rupees. Part of the delay came from land and state-level disputes.`,k:["bullet","bullet2"]},
  {t:"175 GW of renewable power",by:"2015 goal | Goal year 2022",s:"missed",e:`Missed by the 2022 date, though solar and wind additions sped up afterward.`,k:["renew"]},
  {t:"50% of power capacity from non-fossil sources",by:"Climate pledge, 2021 | Goal year 2030",s:"delivered",e:`Reached in mid-2025, five years early. Caveat: this counts installed capacity, not the share of electricity actually generated. Coal still produces most generation.`,k:["renew"]},
  {t:"Government health spending at 2.5% of GDP",by:"National Health Policy 2017 | Goal year 2025",s:"missed",e:`Latest official data (2022-23): 1.43% of GDP, or 1.48% on the new GDP series. Data for 2025 is not out yet, so the final result is not confirmed.`,k:["nha","nhp"]},
  {t:"Public education spending at 6% of GDP",by:"Kothari Commission 1968; repeated in NEP 2020",s:"missed",e:`One estimate puts spending near 4% of GDP. The Economic Survey's narrower count shows about 2.7%. Neither is close to 6%.`,k:["edu","edu2"]},
  {t:"End the Maoist insurgency",by:"Home Ministry | Deadline 31 March 2026",s:"unverified",e:`The Home Minister told Parliament on 30 March that India is virtually Naxal-free. I found no independent audit. Treat it as a government claim until one appears.`,k:["naxal"]},
  {t:"Zero income tax up to 12 lakh",by:"Budget 2025",s:"delivered",e:`In force. For salaried people it works out to 12.75 lakh after the standard deduction. Slabs were left unchanged in the 2026 Budget.`,k:["slabs","budgetprs"]},
  {t:"GST rate cuts and simplification",by:"GST Council | 22 Sept 2025",s:"partial",e:`Rates on many goods were cut and collections still grew (October 2025: +4.6%). But it is not one flat rate: there are still several slabs, and refunds are now rising fast.`,k:["gstoct","gst"]},
  {t:"Deficit at 4.3% of GDP, debt near 50% by March 2031",by:"Budget 2026-27",s:"partial",e:`The FY27 deficit target is 4.3% (down from 4.4%). Debt is 55.6% of GDP. The oil shock, weak rupee, and weak monsoon make the path harder.`,k:["budgetprs"]},
  {t:"Cut extreme poverty",by:"Government and World Bank framing",s:"delivered",e:`Extreme poverty at $3 a day fell from 27.1% (2011-12) to 5.3% (2022-23). Caveat: survey methods changed, so old and new numbers are not perfectly comparable.`,k:["pov","pov2"]},
  {t:"A top-4 economy",by:"Claimed through 2025",s:"partial",e:`After the GDP rebase and a weaker rupee, the IMF's April 2026 table shows India 6th at about $4.15 trillion, behind Japan and the UK.`,k:["imf6","gdpnew"]},
  {t:"Reforms are driving 7.8% growth",by:"Q1 FY27 release",s:"partial",e:`The 7.8% figure is official. But it relies on a new base year and a new deflator, which critics question. The IMF still grades India's national accounts C.`,k:["gdpq1","gdpdebate","imfc"]},
  {t:"RDI scheme: 1 lakh crore rupees for private R&D",by:"Cabinet, July 2025 | Six years",s:"partial",e:`Launched. At the latest update, about 2,000 crore was sanctioned to two funding bodies and about 500 crore disbursed. Too early to judge.`,k:["rdi","rd"]},
  {t:"Lower US tariffs",by:"Interim deal, Feb 2026",s:"partial",e:`The announced deal cut tariffs on most goods from 50% to 18%. Then the US Supreme Court struck down the emergency tariffs, and by June the deal was still not final.`,k:["trade","trade2"]},
  {t:"Developed nation by 2047",by:"Long-term goal",s:"unverified",e:`The World Bank has said this needs about 7.8% average growth for 22 years. Growth was 7.6% in FY26; the RBI forecasts 6.7% for FY27.`,k:["wbgrowth","gdpnew","rbi"]}
];
const NEWS = [
  ["22 Sep 2025","GST rate cuts take effect","Rates cut on many goods. Collections grew 4.6% in October anyway.","gstoct"],
  ["10 Nov 2025","Car blast near Delhi's Red Fort","One of several security incidents in 2025, after the Pahalgam attack in April.","sec25"],
  ["1 Feb 2026","Union Budget 2026-27","Deficit target 4.3% of GDP. Income tax slabs unchanged.","budgetprs"],
  ["2 Feb 2026","Interim US-India trade deal announced","Tariffs on most goods cut from 50% to 18%.","trade"],
  ["20 Feb 2026","US Supreme Court strikes down emergency tariffs","The deal's timeline slips; new US probes follow.","trade2"],
  ["27 Feb 2026","New GDP series, base year 2022-23","FY26 growth 7.6%. Nominal GDP is lower by about 3-4% than the old series.","gdpnew"],
  ["Early Mar 2026","Strait of Hormuz closes in the Iran war","LPG shortages and protests in India. Most of India's LPG imports come through that route.","hormuz","lpg"],
  ["30 Mar 2026","Home Minister says India is virtually Naxal-free","A government claim on the 31 March deadline.","naxal"],
  ["30 Apr 2026","RSF press freedom index","India falls to 157th of 180.","rsf2"],
  ["4 May 2026","State election results","BJP wins West Bengal; UDF wins Kerala; TVK becomes largest in Tamil Nadu; BJP holds Assam.","elec"],
  ["27 May 2026","Supreme Court upholds voter-roll revision (SIR)","The revision removed about 91 lakh names in West Bengal. The Election Commission says these were deceased, shifted, or duplicate entries.","sir","sir2"],
  ["Jun 2026","Global Peace Index 2026","India falls to 127th, from 115th a year earlier.","gpi26"],
  ["5 Aug 2026","RBI holds repo rate at 5.25%","FY27 growth forecast raised to 6.7%.","rbi"],
  ["31 Aug 2026","Q1 FY27 GDP: 7.8% on the new series","Critics question the deflator and the new base.","gdpq1","gdpdebate"],
  ["1 Sep 2026","GST, August: gross 1.99 lakh crore","Gross +14.8%, refunds +67.9%, net +8.3%.","gst"],
  ["Mid Sep 2026","CPI inflation 4.82% for August; food inflation 5.95%","Highest headline reading since December 2024.","cpi","foodinf"],
  ["16 Sep 2026","US Fed raises rates for the first time since 2023","Pressure on the rupee, which sits near 96 per dollar.","fx"],
  ["18 Sep 2026","US extends $100,000 H-1B fee rule to Sept 2027","Courts are still blocking it. Status may change quickly.","h1b","h1bk"],
  ["19 Sep 2026","Rupee closes at 95.89; monsoon deficit near 15%","The weakest monsoon since 2009 if the gap holds.","fx2","monsoon"]
];

/* ---------- SECTORS ---------- */
const SECTORS = [
 {n:"Health",s:"mixed",lead:`Life is longer and families pay less of the bill than before, but public spending is still small.`,
  kv:[["72.0 yrs","Life expectancy, 2023"+c("hdr")],["1.43%","Government health spending, share of GDP (2022-23)"+c("nha")],["43.4%","Share of health spending paid out of pocket, down from 64.2%"+c("nha")],["2.5%","GDP share promised for 2025"+c("nhp")]],
  good:`Out-of-pocket share fell sharply. Government health spending is now about 44% of all health spending.`+c("nha"),
  bad:`At 1.43% of GDP, public spending is well below the promise. Government health spending is only about 4.9% of all government spending.`+c("nha"),
  grey:`The new GDP series moves the health share from 1.43% to 1.48%. Same money, different denominator.`+c("nha"),
  who:`Public health is a state subject. The Centre funds schemes; states run most hospitals.`,
  cmp:`Top-ranked countries spend several times more per person. I did not verify peer health-spending shares this session.`},
 {n:"Education",s:"mixed",lead:`Schooling has grown, but the average adult still has under seven years of it, and public spending is below the 6% goal.`,
  kv:[["6.88 yrs","Mean years of schooling, 2023"+c("hdr")],["2.7% to about 4%","Public education spending, share of GDP, by two counts"+c("edu","edu2")],["6%","Long-standing target"+c("edu")]],
  good:`Years of schooling and expected schooling have risen over time.`+c("hdr"),
  bad:`The 6% target has never been reached. The review behind the 4% figure calls for a clearer, shared Centre-state funding split.`+c("edu"),
  grey:`The 2.7% and about 4% figures are both official-source numbers. They differ on what counts as education spending.`+c("edu","edu2"),
  who:`Education is on the concurrent list, and states pay most of the bill.`,
  cmp:`I did not verify learning-outcome data (for example ASER) or peer test scores this session.`},
 {n:"Jobs and income",s:"stressed",lead:`Headline unemployment looks low on one measure and high on another. Young people are hit hardest.`,
  kv:[["5.4%","Unemployment, Apr-Jun 2026 (weekly status)"+c("plfsq")],["15.9%","Youth (15-29) unemployment, same period"+c("plfsq")],["3.1%","Unemployment, 2025 annual (usual status)"+c("plfsa")],["about 25%","Youth not in work, school or training, 2025"+c("plfsa")],["about 32.7%","Female labor force participation, June 2026 monthly"+c("plfsm")],["$11,050","Income per person, PPP, 2024 (World Bank)"+c("gniw2")]],
  good:`Growth is high on paper, and participation in the labor force is about 54.6%.`+c("plfsq"),
  bad:`Youth unemployment rose from 14.6% a year earlier to 15.9%. Manufacturing has not grown as a share of the economy.`+c("plfsq","mfg"),
  grey:`3.1% and 5.4% are both official. They use different definitions (usual status vs. current weekly status). Neither is wrong.`+c("plfsa","plfsq"),
  who:`Centre (industrial policy), states (labor, land, skills), and private firms.`,
  cmp:`Norway's income per person is about 9.7 times India's; the United States' is about 7.8 times.`+c("gniw","gniw2")},
 {n:"Poverty and inequality",s:"improving",lead:`Fewer people live in extreme poverty. How unequal India is depends on what you measure.`,
  kv:[["5.3%","Extreme poverty at $3 a day, 2022-23"+c("pov")],["25.5","Gini on consumption (World Bank)"+c("gini")],["62","Gini on income (World Inequality Database)"+c("gini")],["30.7%","Loss to human development from inequality"+c("hdr")]],
  good:`Extreme poverty is far lower than a decade earlier.`+c("pov"),
  bad:`Income is far more unequal than consumption data suggests. Inequality cuts India's human development score by about 30.7%.`+c("gini","hdr"),
  grey:`Consumption Gini (25.5) makes India look nearly equal. Income Gini (62) says the opposite. Both are real; they measure different things.`+c("gini"),
  who:`Centre and states share welfare spending.`,cmp:`Peer Gini values were not verified this session.`},
 {n:"Security and peace",s:"weak",lead:`The Global Peace Index dropped India 12 places in a year. It measures conflict, militarization and tension, not only street crime.`,
  kv:[["127th","Global Peace Index 2026 (was 115th)"+c("gpi26","gpi25")],["26","People killed in the Pahalgam attack, April 2025"+c("sec25")],["4 days","India-Pakistan conflict, May 2025; ceasefire on 10 May"+c("sindoor")]],
  good:`The Home Minister says Maoist violence has ended. Independent confirmation is missing.`+c("naxal"),
  bad:`A car blast in Delhi in November 2025 and risks along the border with Pakistan keep the index score weak.`+c("sec25","sindoor"),
  grey:`I did not review NCRB crime data, women's safety data, or the state of Manipur this session. Day-to-day safety varies a lot by state and city.`,
  who:`Terror and borders are the Centre's. Policing is a state subject.`,cmp:`GPI 2026: Switzerland 3rd; Singapore, Finland in the top 10. Other peers not verified.`+c("gpi26")},
 {n:"R&D and technology",s:"weak",lead:`India spends under 1% of GDP on research. It produces many papers and ranks well on innovation for its income level.`,
  kv:[["0.84%","R&D spending, 2023-24 (DST)"+c("rd")],["0.6%","Economic Survey's figure"+c("rd2")],["2.58%","China"+c("rd")],["3.45%","United States"+c("rd")],["4.94%","South Korea"+c("rd")],["51.8%","Share of R&D paid by private firms"+c("rd")]],
  good:`India is the world's third-largest producer of research papers, and 38th of 139 on the innovation index.`+c("rd2","gii"),
  bad:`Private firms fund about half of R&D (51.8%). The 1 lakh crore rupee RDI scheme has released little money so far.`+c("rd","rdi"),
  grey:`0.6% vs 0.84%: the sources do not explain the gap clearly.`+c("rd","rd2"),
  who:`Centre (science ministries and funds), private firms, universities.`,cmp:`Researchers per million people are also far lower than South Korea (see DST).`+c("dst")},
 {n:"Air, climate and energy security",s:"weak",lead:`Air pollution is a daily cost. Energy supply became a shock in 2026.`,
  kv:[["48.9 µg/m³","Average PM2.5, 2025 (about 10x the WHO limit)"+c("air")],["66 of 100","Most polluted cities that are in India"+c("air")],["50%","Non-fossil share of power capacity, mid-2025"+c("renew")],["-15%","Monsoon rainfall gap, Sept 2026"+c("monsoon")]],
  good:`Clean power capacity is growing fast and hit 50% early.`+c("renew"),
  bad:`India ranked sixth most polluted of 143 countries, and Delhi was the most polluted capital for the eighth year. The Hormuz closure exposed the LPG supply chain.`+c("air","hormuz"),
  grey:`Capacity share is not generation share. Coal still produces most of the electricity.`+c("renew"),
  who:`Centre (energy, air commission), states and cities (enforcement).`,cmp:`I did not verify peer air-quality numbers this session.`},
 {n:"Women and gender",s:"weak",lead:`India ranks 131st of 148 on the Global Gender Gap. Few urban women are in the labor force.`,
  kv:[["131 of 148","Global Gender Gap 2025"+c("gender")],["about 24.8%","Urban female labor force participation, June 2026"+c("plfsm")]],
  good:`I found no clear gain to report in this session's data. I did not check the long-run trend.`,
  bad:`Only about one in four urban women is in the labor force.`+c("plfsm"),
  grey:`The gender gap index blends economics, education, health and politics. Rankings move with the exact indicators used.`,
  who:`Centre and states.`,cmp:`Peer ranks were not verified this session.`}
];
const ACCOUNT = [
 ["Tax base and budget","Finance Ministry; GST Council (Centre and states)",`Few income-tax filers; interest is about 26% of Union spending; GST refunds are jumping.`+c("itr","exprs","gst"),`Low incomes, a large informal economy, past debt.`,`Widen the formal base; process refunds faster; follow a published debt path.`,`Net GST growth; deficit vs 4.3% target`],
 ["Health","States run hospitals; Centre funds schemes",`Government spending 1.43% of GDP; households pay 43.4%.`+c("nha"),`Low public spending; weak primary care.`,`Raise public spending toward the 2.5% goal; fund primary care first.`,`Next National Health Accounts`],
 ["Education","States (most spending); Centre (schemes)",`6% target never met; measured spending is 2.7% to about 4%.`+c("edu","edu2"),`Split responsibility; a narrow official definition.`,`One shared definition and a public Centre-state funding formula.`,`Spending share; learning surveys`],
 ["Jobs","Centre (industry policy); states; firms",`Youth unemployment 15.9%; manufacturing share flat.`+c("plfsq","mfg"),`Growth in services and capital-heavy sectors; small firms stay small.`,`Labor-intensive manufacturing; skills tied to real hiring; work options for women.`,`Quarterly PLFS`],
 ["Statistics and the census","MoSPI; Registrar General",`IMF grade C; GDP rebase disputed; no census since 2011.`+c("imfc","gdpdebate"),`Old and new series are not shown side by side; long gaps in surveys.`,`Publish old and new series and the deflator inputs; finish the census.`,`Dual-series release`],
 ["Elections and voter rolls","Election Commission; courts; parties",`Roll revision removed about 91 lakh names in West Bengal; the Court upheld the process but left room for challenges.`+c("sir","sir2"),`Trust depends on visible appeals and reasons.`,`Publish reasons for each deletion and appeal outcomes, quickly.`,`Restored-name counts`],
 ["Press and civil liberties","Centre; states; courts; media owners",`RSF: 157th of 180. Freedom House: 62/100, Partly Free.`+c("rsf2","fh2"),`Legal pressure and concentrated ownership, according to these indices. The government's own advisers dispute their methods.`+c("eac"),`Narrower use of criminal and security laws against reporting; open ownership data.`,`Next RSF and Freedom House editions`],
 ["Security","Centre (terror, borders); states (police)",`GPI rank fell to 127th; Pahalgam; Delhi blast.`+c("gpi26","sec25"),`Threats from neighbors and terror networks; uneven state policing.`,`Better intelligence sharing; police reform in states.`,`Incidents; GPI`],
 ["Energy and inflation","Petroleum ministry; RBI; states",`88% of LPG imports came through Hormuz; rupee near 96; food inflation 5.95%.`+c("hormuz","fx2","foodinf"),`Import dependence; weak monsoon.`,`Diversify suppliers; storage; expand piped gas.`,`Brent, rupee, reserves`],
 ["Air and climate","Centre (air commission); states; cities",`PM2.5 at 48.9; Delhi the most polluted capital.`+c("air"),`Pollution crosses state lines; enforcement is local.`,`Regional airshed rules with real penalties.`,`Annual PM2.5`]
];
const PERSONAS = [
 {n:"Tech worker aiming abroad",pro:`Income per person is about 8 to 10 times higher in the US, Switzerland, or Norway.`+c("gniw","gniw2"),con:`The US $100,000 H-1B fee rule was extended to September 2027, though courts are blocking it. Canada, the UK, and Australia have also tightened.`+c("h1b","migr"),ask:`Do I have a sponsor and a path to residency? What is my plan if the visa fails?`},
 {n:"Small-business owner",pro:`Official growth is 7.8%, and net GST is still rising 8%.`+c("gdpq1","gst"),con:`Fuel and LPG supply shocks, a weak monsoon, and a rupee near 96 raise costs. Refunds are up 68%, which matters if you wait on them.`+c("hormuz","monsoon","gst"),ask:`Can my margins survive another oil shock? How much cash do I have?`},
 {n:"Parent of school-age kids",pro:`Public spending on education and health has grown over time.`+c("hdr","nha"),con:`Air pollution is about 10 times the WHO limit, and average schooling is 6.88 years.`+c("air","hdr"),ask:`What school quality can I reach? What are the air and health costs where I live?`},
 {n:"High earner or investor",pro:`India's top income tax rate is about 39% including surcharge and cess. That is lower than or close to the rates in the comparison countries (calc).`+c("taxf"),con:`Rupee weakness, oil stress, and data doubts add risk. Henley estimates 3,500 millionaires would leave in 2025, down from 7,500 in 2022; these are estimates, not counts.`+c("henley","henley25"),ask:`Where are my assets and taxes tied? Have I asked a qualified tax adviser about residency rules?`},
 {n:"Journalist, activist, or civic-minded",pro:`Elections are competitive; power changed hands in several states in 2026.`+c("elec","fh2"),con:`RSF ranks India 157th; Freedom House scores it 62 and Partly Free. The government's advisers dispute these indices' methods.`+c("rsf2","fh2","eac"),ask:`What specific risks do I face where I work? What protections exist abroad, and for how long?`},
 {n:"Retiree or health-conscious",pro:`Out-of-pocket share of health costs has fallen to 43.4%.`+c("nha"),con:`Air quality is poor and public health spending is low.`+c("air","nha")+` Care access abroad depends on your residency status and insurance, which you would need to check.`,ask:`What would my care cost here vs. abroad, in real terms?`}
];
const QUESTIONS = [
 `Will you publish the old and new GDP series side by side, with the deflator inputs?`,
 `What is the date and funding plan to reach 2.5% of GDP in public health spending, and who pays: the Centre or the states?`,
 `What is the plan, in numbers and by when, to bring youth unemployment (15.9%) down?`,
 `When will the census be completed, and when will its data be released?`,
 `What is the plan for the interest bill, which takes about 26% of Union spending?`,
 `How fast are GST refunds now, and why did they rise 68%?`,
 `How many names deleted in the voter-roll revisions were later restored on appeal?`,
 `What safeguards stop criminal and security laws from being used against reporters?`,
 `What is the backup plan if a shipping lane like Hormuz closes again?`,
 `Who audits claims like "Naxal-free," and when will that audit be public?`,
 `What is the plan for air pollution that crosses state borders?`,
 `For each missed promise date, what is the new date, and who is accountable for it?`
];
const GREY = [
 ["Unemployment","3.1% (2025, usual status)","5.4% (Apr-Jun 2026, weekly status)","Different definitions"],
 ["R&D spending","0.6% (Economic Survey)","0.84% (DST, 2023-24)","Sources don't explain the gap"],
 ["Education spending","About 2.7% of GDP","About 4% of GDP","What counts as education"],
 ["Inequality","Gini 25.5 (consumption)","Gini 62 (income)","Consumption vs. income"],
 ["Extreme poverty","2.3% at $2.15 a day","5.3% at $3.00 a day","The poverty line was raised"],
 ["GDP size, FY26","357 lakh crore (old series)","345 lakh crore (new series)","New base year and method"],
 ["Q1 growth","7.8% (new-series comparison)","One critic's 2.6% (new level vs old-series level)","The explainer says the second is not a valid comparison"],
 ["Tax burden","11.2% of GDP (Centre only, from draft)","17.6% of GDP (all governments, from draft)","Different coverage"],
 ["Health spending","1.43% of GDP","1.48% of GDP","Old vs. new GDP denominator"],
 ["Denmark top tax rate","55.9% (2025)","60.5% (2026)","Different year"]
];

/* ---------- TAX CALC ---------- */
function calcTax(gross, salaried){
  let taxable = Math.max(0, gross - (salaried ? 75000 : 0));
  const slabs = [[400000,0],[800000,.05],[1200000,.10],[1600000,.15],[2000000,.20],[2400000,.25],[Infinity,.30]];
  let tax = 0, prev = 0;
  for (const [cap, r] of slabs){ if (taxable > prev){ tax += (Math.min(taxable, cap) - prev) * r; } prev = cap; }
  if (taxable <= 1200000) tax = 0;
  else tax = Math.min(tax, taxable - 1200000);
  let sr = taxable > 20000000 ? .25 : taxable > 10000000 ? .15 : taxable > 5000000 ? .10 : 0;
  const sur = tax * sr; const cess = (tax + sur) * .04;
  const total = tax + sur + cess;
  return {taxable, tax, sur, cess, total};
}
