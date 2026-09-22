"use strict";
/* One quote opens each page. Attributions are to the person named; wording as commonly published. */
const QUOTES = {
  home:{q:"Facts are stubborn things.",a:"John Adams, 1770"},
  tax:{q:"In this world nothing can be said to be certain, except death and taxes.",a:"Benjamin Franklin, 1789"},
  benefits:{q:"Taxes are what we pay for civilized society.",a:"Oliver Wendell Holmes Jr., 1927"},
  policy:{q:"However good a Constitution may be, if those who are implementing it are not good, it will prove to be bad.",a:"B. R. Ambedkar, Constituent Assembly, 1949"},
  depts:{q:"Not everything that counts can be counted, and not everything that can be counted counts.",a:"William Bruce Cameron, 1963 (often credited to Einstein)"},
  states:{q:"The soul of India lives in its villages.",a:"Mahatma Gandhi, 1936"},
  economy:{q:"It is a capital mistake to theorise before one has data.",a:"Arthur Conan Doyle, A Scandal in Bohemia"},
  people:{q:"The first wealth is health.",a:"Ralph Waldo Emerson, 1860"},
  work:{q:"No society can surely be flourishing and happy, of which the far greater part of the members are poor and miserable.",a:"Adam Smith, 1776"},
  safety:{q:"Injustice anywhere is a threat to justice everywhere.",a:"Martin Luther King Jr., 1963"},
  future:{q:"The best way to predict the future is to invent it.",a:"Alan Kay, 1971"},
  trust:{q:"Democracy in India is only a top-dressing on an Indian soil, which is essentially undemocratic.",a:"B. R. Ambedkar, Constituent Assembly, 1949"},
  corruption:{q:"Power tends to corrupt, and absolute power corrupts absolutely.",a:"Lord Acton, 1887"},
  ground:{q:"When a measure becomes a target, it ceases to be a good measure.",a:"Marilyn Strathern, 1997 (after Charles Goodhart)"},
  foreign:{q:"We have no eternal allies, and we have no perpetual enemies. Our interests are eternal and perpetual.",a:"Lord Palmerston, 1848"},
  world:{q:"What should they know of England who only England know?",a:"Rudyard Kipling, 1891"},
  promises:{q:"Promises and pie-crust are made to be broken.",a:"Jonathan Swift, 1738"},
  news:{q:"Sunlight is said to be the best of disinfectants.",a:"Louis Brandeis, 1913"},
  decide:{q:"Where the mind is without fear and the head is held high.",a:"Rabindranath Tagore, Gitanjali"},
  reck:{q:"The buck stops here.",a:"Sign on Harry S. Truman's desk"},
  audit:{q:"Trust, but verify.",a:"Russian proverb"}
};
function vo(pid){
  const q = QUOTES[pid]; if (!q) return "";
  return `<section class="wrap reveal"><figure class="quote"><blockquote>&ldquo;${q.q}&rdquo;</blockquote><figcaption>${q.a}</figcaption></figure></section>`;
}
