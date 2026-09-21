"use strict";
/* Cinematic voice-over that opens each reel. These are illustrations, not data. */
const VO = {
  open: [
    `Fade in. A chai stall outside a metro station, a little past eight in the evening. A woman in a blue kurta reads her salary slip under a yellow bulb.`,
    `Nine lakh rupees a year. Income tax: zero. She should feel good about that. Instead she opens her bank app, then looks across the road at the price board on the petrol pump, then at the small print on a grocery receipt. The camera stays on her face. One question is forming. Where did it all go?`,
    `This report follows that question across an entire country. It counts what the state collects and what it delivers. It stands India next to the richest, healthiest, most stable countries on Earth. It reads the promises that were made and the dates that passed. And then it asks the question people are already asking in family group chats: is this still worth it, or is it time to leave?`
  ],
  bill: [
    `Follow one rupee through one ordinary day.`,
    `Morning. A scooter, a full tank. Part of that price is tax, and it goes to two governments at once. Noon. Lunch, a receipt, a line marked GST. Evening. A new phone charger, another line. By midnight the same person has paid several kinds of tax and filed no form at all.`,
    `Now pull the camera back. The frame holds a whole country doing the same thing, all day, every day. Most of these people will never owe income tax. Yet every one of them is in this story. So we begin here: what the tax system asks, who it asks, and what it hands back.`
  ],
  money: [
    `Cut to a currency exchange counter. A board of red and green numbers. One of them has been climbing for a year.`,
    `That number is the rupee price of one dollar. Late last week it closed at 95.89. In twelve months the rupee lost about nine percent of its value. In the same twelve months, a war closed a shipping lane, the way India counts its GDP was rebuilt, and the monsoon came in weak. Three shocks. One economy.`,
    `This reel is about money in the widest sense: growth, prices, debt, banks, and the numbers that say whether the floor beneath the country is solid. It also asks a harder question. How much of what we are told can we trust?`
  ],
  people: [
    `A government clinic before it opens. The line is already out the door. Cut to a classroom, a ceiling fan turning slowly, a teacher writing a sentence on the board.`,
    `Health and school are where a country keeps its promises to ordinary people. They are also where the gap with the richest countries is widest, and where the gap inside India is widest too. A child born in Kerala and a child born in Madhya Pradesh live in the same country and in different worlds. The numbers say how different.`,
    `This reel covers health, schools, poverty, inequality, and women. It is the longest one on purpose.`
  ],
  work: [
    `Night shift. A warehouse lit like a stage. A young man scans parcels while his phone buzzes with a job alert from a company in another country.`,
    `Work is where taxes, prices, and the size of the economy meet a single life. It decides whether a person builds savings or spends them, whether they stay in a city or leave the country. India's official growth is high. The question here is whether jobs are keeping pace, and which jobs.`
  ],
  streets: [
    `A metro platform at night, mostly empty. A woman checks the time.`,
    `Safety is not one number. It is crime in the city, risk on the border, and the sense that the state can keep order. This reel keeps those apart: everyday crime, terror and conflict, and one long unrest in the northeast. The camera stays steady. The numbers are hard to read, and worth the effort.`
  ],
  future: [
    `A phone held over a tea seller's QR code. A soft chime. The sale is done in a second.`,
    `That chime is one of India's clearest wins, and it opens the last set of questions. What does the next twenty years stand on? Money for research. Clean power. Air you can breathe. A climate that keeps changing. The country is building fast. This reel checks the ground it is building on.`
  ],
  vote: [
    `A polling booth in the gray light before opening. Officials stack the registers. A voter waits with a card in hand.`,
    `A country's stability is not only its currency. It is whether people can change their government, speak freely, and trust the numbers that describe them. This reel keeps to what the record shows: elections that changed hands, voter rolls that were redrawn, rankings that the government disputes, and a census that is finally being run.`
  ],
  world: [
    `The camera rises. India shrinks to one lit region on a night-time map of the world.`,
    `Now the comparison. Ten countries. Nine world rankings. Some of these countries are rich beyond easy comparison, and some are closer peers. Watch what changes when you compare like with like, and what does not change at all.`
  ],
  promises: [
    `A long wooden table. Stacks of paper, each marked with a date.`,
    `Every government makes promises. What matters is the date printed on the page and what happened next. This reel keeps score on nineteen public promises and claims from the last decade, using only what can be checked. Delivered means delivered. Missed means missed. When nobody outside the government has confirmed a claim, the report says so.`
  ],
  news: [
    `A newsroom at midnight. Every screen shows something different.`,
    `Twenty-two headlines, oldest first, from the day GST rates were cut last September to this weekend. Read them as one story: a reform, a war, a recount, a monsoon.`
  ],
  exit: [
    `Departure hall, dawn. A rolling suitcase, a boarding pass, and a phone showing the rupee price of a dollar.`,
    `This is the reel the whole report has been heading toward. The honest answer is that there is no single answer. There are numbers that push people out, numbers that hold them in, and a set of choices that depend on who you are. What follows lays them side by side, and then hands the decision back to you.`
  ],
  reck: [
    `An empty courtroom. A single lamp over the table.`,
    `Everything so far has been description. This reel asks who is answerable. In a federal country the answer is rarely one name. Public health belongs to the states, currency to the Centre, elections to a commission, statistics to a ministry that the IMF graded C. Below is the map of who holds which lever, and twelve questions any citizen can put to any representative.`
  ],
  audit: [
    `A writing desk at dawn. A printed draft covered in red pen.`,
    `The draft you started with was not so much wrong as thin. Here is what held up, what was stale, and what was missing entirely. And here is every place where two honest numbers disagree.`
  ]
};
const VOMAP = {home:"open",tax:"bill",economy:"money",people:"people",work:"work",safety:"streets",future:"future",trust:"vote",world:"world",promises:"promises",news:"news",decide:"exit",reck:"reck",audit:"audit"};
function vo(pid){
  const p = VO[VOMAP[pid]]; const i = (typeof PAGES !== "undefined" ? PAGES.findIndex(x => x.id === pid) + 1 : 0);
  return `<section class="wrap reveal"><div class="vo" aria-label="Voice-over"><div class="vl">Voice-over | Reel ${i}</div><p class="lead">${p[0]}</p>${p[1]?`<p class="more">${p[1]}</p>`:""}</div></section>`;
}
