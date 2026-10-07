// The words on the site, one object per section. Claude updates one section per module.
// Every number in a Fact traces to an atomic note in research/02 Atomic Notes, and through it to a source note.
// Fact shape: { value: "13.2%", label: "Operating margin, FY2025", source: "S1", tier: "R" | "D" | "E", note: "02 Atomic Notes/FY2025 operating margin 12.3 percent" }
// A section with status "coming" renders as "Coming in Module N". Set status to "live" when it is built.

window.CONTENT = {
  site: {
    companyName: "[COMPANY]",
    ticker: "[TICKER]",
    exchange: "[EXCHANGE]",
    price: null,            // number, from the workbook FrontPage; leave null until Module 2 if unsure
    priceDate: null,        // "YYYY-MM-DD"
    oneLineThesis: "",      // twelve words or fewer, written in Module 1
    team: ["[TEAMMATE ONE]", "[TEAMMATE TWO]"],
    updated: "",            // "YYYY-MM-DD", refreshed at each wrap-up
    callBadge: ""           // filled in Module 5, e.g. "Buy below $150, avoid above $190"
  },

  thesis: {
    status: "coming", module: 1, title: "Thesis",
    headline: "",           // eight words or fewer
    lede: "",               // the memo's argument in forty words or fewer
    stage: "",              // "Mature", "High growth", "Start-up", or "Decline"
    facts: [],              // three Facts that carry the stage diagnosis
    blocks: [               // one block per memo heading, forty words or fewer each
      // { title: "Life-cycle stage", text: "" },
      // { title: "What it means for valuation", text: "" },
      // { title: "Why this company", text: "" },
      // { title: "Recent developments", text: "" }
    ],
    soWhat: "",             // one sentence, twenty words or fewer
    numbersWeStillNeed: []
  },

  financials: {
    status: "coming", module: 2, title: "Financials",
    headline: "", lede: "", facts: [], blocks: [], soWhat: "",
    driverJustifications: [] // { driver: "Revenue growth", assumption: "3.0%", because: "", source: "" }
  },

  vault: {                  // the Knowledge Bank page, site/vault.html: a graph of research/, like the Bloom site's
    status: "coming", module: 3, title: "Knowledge Bank",
    // Topic chips across the top of the graph. Each lights up the notes whose tags include one of
    // its tags or whose title contains one of its keywords. Six to eight chips, written in Module 3.
    themes: []              // { label: "Cost of capital", tags: ["wacc", "beta"], kw: ["wacc", "beta", "cost of"] }
  },

  valuation: {
    status: "coming", module: 4, title: "Valuation",
    headline: "", lede: "", blocks: [], soWhat: "",
    mostSensitiveTo: ""     // one sentence naming the assumption that moves value most
  },

  theCall: {
    status: "coming", module: 5, title: "The Call",
    headline: "", lede: "", facts: [], soWhat: "", numbersWeStillNeed: [],
    call: "",               // "Buy", "Hold", or "Sell", from the memo
    buyBelow: null, avoidAbove: null,   // dollars per share, from the memo
    weights: {},            // the memo's weight for each bull, base, and bear case, by name, e.g. { Bull: 0.25, Base: 0.5, Bear: 0.25 }; the cases are the valuation object's scenarios
    memoWeighted: { perpetuity: null, exitMultiple: null },  // the memo's weighted value per share both ways, for the check line
    peerScreen: { by: "", date: "", kept: [], dropped: [] },  // the AI-proposed comparable set: { name, why }
    premiumDriver: "",      // one sentence: why we trade at a premium or discount to the peers
    reconciliation: { short: "", full: "" }  // the DCF versus the multiples: one line of 15 words or fewer, and the memo's full text
  },

  risks: {
    status: "coming", module: 6, title: "Risks",
    headline: "", lede: "",
    risks: [],              // { risk: "twelve words or fewer", fact: { value: "", label: "", source: "", tier: "" }, ourResponse: "twenty words or fewer" }
    discountRateNote: "",   // one line on how risk shows up in the discount rate
    soWhat: ""
  },

  catalysts: {
    status: "coming", module: 6, title: "Catalysts",
    headline: "", lede: "",
    reflection: "",         // the real options reflection, trimmed to eighty words
    catalysts: [],          // { event: "", when: "", whyItMatters: "", wouldChangeOurView: "", source: "" }
    tripwires: [],          // { condition: "", why: "", whatWeWouldDo: "" }
    earningsScorecard: null // optional, for fun; only if the company reports before Module 8
  },

  process: {
    status: "coming", module: 7, title: "Process",
    headline: "", lede: "",
    catalog: [],            // rows from AI Log.md
    helped: [], misled: [],
    recommendations: []
  }
};
