"use strict";
/* Scenes, helpers, and report data */
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
  {t:"Developed nation by 2047",by:"Long-term goal",s:"unverified",e:`The World Bank has said this needs about 7.8% average growth for 22 years. Growth was 7.6% in FY26; the RBI forecasts 6.7% for FY27.`,k:["wbgrowth","gdpnew","rbi"]},
  {t:"Digital payments for everyday life",by:"Digital India goal | Ongoing",s:"delivered",e:`UPI processed a record 24.51 billion transactions worth 29.82 lakh crore rupees in August 2026, up 22% by volume and 20% by value in a year. It is now accepted in 11 countries. Average payment size keeps falling, which shows small everyday use.`,k:["upi"]},
  {t:"A new census after 2011",by:"Postponed from 2021 | Now under way",s:"partial",e:`Houselisting runs April to September 2026 and the head count in February 2027. It is the first digital census and the first to count caste since 1931. The gap since 2011 is the longest since 1881 (secondary source). Results are not out yet.`,k:["census","census2","census3"]}
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
  ["1 Apr 2026","Census houselisting begins; new Income-tax Act takes effect","The first digital census starts its first phase. The new tax law replaces the old one.","census","ita25"],
  ["30 Apr 2026","RSF press freedom index","India falls to 157th of 180.","rsf2"],
  ["4 May 2026","State election results","BJP wins West Bengal; UDF wins Kerala; TVK becomes largest in Tamil Nadu; BJP holds Assam.","elec"],
  ["27 May 2026","Supreme Court upholds voter-roll revision (SIR)","The revision removed about 91 lakh names in West Bengal. The Election Commission says these were deceased, shifted, or duplicate entries.","sir","sir2"],
  ["28 May 2026","First Kuki-Zo village resettled in Manipur","The first resettlement since violence began in May 2023.","manipur2"],
  ["Jun 2026","Global Peace Index 2026","India falls to 127th, from 115th a year earlier.","gpi26"],
  ["30 Jun 2026","RBI Financial Stability Report","Bank bad loans at a multi-decade low of 1.8% of loans.","npa"],
  ["5 Aug 2026","RBI holds repo rate at 5.25%","FY27 growth forecast raised to 6.7%.","rbi"],
  ["31 Aug 2026","Q1 FY27 GDP: 7.8% on the new series","Critics question the deflator and the new base.","gdpq1","gdpdebate"],
  ["1 Sep 2026","GST and UPI records for August","GST gross 1.99 lakh crore, refunds +67.9%. UPI hits 24.51 billion transactions.","gst","upi"],
  ["Mid Sep 2026","CPI inflation 4.82% for August; food inflation 5.95%","Highest headline reading since December 2024.","cpi","foodinf"],
  ["16 Sep 2026","US Fed raises rates for the first time since 2023","Pressure on the rupee, which sits near 96 per dollar.","fx"],
  ["18 Sep 2026","US extends $100,000 H-1B fee rule to Sept 2027","Courts are still blocking it. Status may change quickly.","h1b","h1bk"],
  ["18 Sep 2026","Rupee closes at 95.89; monsoon deficit near 15%","The weakest monsoon since 2009 if the gap holds.","fx2","monsoon"]
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
 ["Denmark top tax rate","55.9% (2025)","60.5% (2026)","Different year"],
 ["Child stunting","33.8% (NFHS-5, 2019-21)","35.5% (Our World in Data, 2020)","Different surveys and years"],
 ["Class 3 reading (ASER 2024)","23.4% read a Class 2 text (PARI summary, government schools)","27% (an exam-prep summary of the same report)","Possibly different school groups; I used the PARI figures"],
 ["Debt","55.6% of GDP (Centre)","About 81-85% of GDP (Centre plus states)","Different coverage"]
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

RANKS.forEach(x => { x.s = {gii:"Innovation",cpi25:"Corruption",hdrtop:"Human dev.",whr:"Happiness",gpi26:"Peace",ghi:"Hunger",rsf2:"Press",gender:"Gender",air:"Air"}[x.k]; });
