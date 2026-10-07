export type DealHealth = "Healthy" | "At Risk" | "Critical";
export type DealStage = "Discovery" | "Demo" | "Proposal" | "Negotiation";

export interface Stakeholder { name: string; role: string; engagement: "Engaged" | "Strong engagement" | "Not engaged" }
export interface DealActivity { date: string; type: string; detail: string }
export interface Deal {
  id: string; name: string; value: number; stage: DealStage; score: number; health: DealHealth;
  closeDate: string; owner: string; positiveSignals: string[]; risks: string[]; nextAction: string;
  diagnosis: string; stakeholders: Stakeholder[]; activities: DealActivity[];
}

const companies = [
  ["acme-corp","Acme Corp",42000,"Negotiation",82,"Healthy"],
  ["beta-inc","Beta Inc",38000,"Proposal",48,"At Risk"],
  ["gamma-ltd","Gamma Ltd",35000,"Negotiation",31,"Critical"],
  ["delta-co","Delta Co",32000,"Demo",76,"Healthy"],
  ["nova-systems","Nova Systems",30000,"Proposal",88,"Healthy"],
  ["vertex-labs","Vertex Labs",28000,"Discovery",63,"At Risk"],
  ["orbit-software","Orbit Software",26000,"Negotiation",91,"Healthy"],
  ["pioneer-ai","Pioneer AI",24000,"Proposal",42,"Critical"],
  ["summit-cloud","Summit Cloud",22000,"Demo",72,"Healthy"],
  ["northstar-data","Northstar Data",21000,"Proposal",58,"At Risk"],
  ["atlas-finance","Atlas Finance",20000,"Negotiation",85,"Healthy"],
  ["lumen-tech","Lumen Tech",19000,"Discovery",68,"Healthy"],
  ["cobalt-security","Cobalt Security",18000,"Proposal",39,"Critical"],
  ["meridian-health","Meridian Health",17000,"Demo",79,"Healthy"],
  ["apex-logistics","Apex Logistics",16000,"Discovery",61,"At Risk"],
  ["harbor-works","Harbor Works",15000,"Proposal",84,"Healthy"],
  ["clearpath-io","ClearPath IO",14000,"Demo",73,"Healthy"],
  ["vector-dynamics","Vector Dynamics",13000,"Negotiation",55,"At Risk"],
  ["brightline-media","Brightline Media",12000,"Discovery",87,"Healthy"],
  ["kinetic-retail","Kinetic Retail",11000,"Proposal",34,"Critical"],
  ["terra-energy","Terra Energy",10000,"Demo",67,"Healthy"],
  ["frame-studio","Frame Studio",9000,"Discovery",52,"At Risk"],
  ["signal-ops","Signal Ops",8000,"Proposal",81,"Healthy"],
  ["cascade-hr","Cascade HR",7000,"Demo",46,"At Risk"],
  ["mosaic-pay","Mosaic Pay",6000,"Discovery",75,"Healthy"],
] as const;

const positivePool = [
  "Economic buyer attended the latest meeting", "Proposal opened multiple times this week",
  "Champion shared a clear implementation timeline", "Technical requirements confirmed",
  "Pricing page revisited by two stakeholders", "Next meeting accepted by the buying team",
];
const riskPool = [
  "No meaningful activity in the last 7 days", "Only one stakeholder is engaged",
  "Close date moved twice", "Legal review has not started", "Competitor mentioned in the last call",
];
const actions = [
  "Send a concise recap and confirm the mutual action plan.",
  "Ask your champion to introduce the economic buyer.",
  "Share the security packet before the next evaluation call.",
  "Re-engage with a value-focused note tied to their stated goal.",
  "Schedule a 20-minute decision alignment call this week.",
];

export const deals: Deal[] = companies.map((c, i) => {
  const [id, name, value, stage, score, health] = c;
  const contact = ["Maya Chen","Daniel Brooks","Priya Shah","Tom Becker","Elena Ruiz"][i % 5];
  return {
    id, name, value, stage, score, health, owner: i % 3 === 0 ? "Awais" : i % 3 === 1 ? "Sarah Kim" : "Marcus Lee",
    closeDate: `Oct ${12 + (i % 18)}, 2026`,
    positiveSignals: [positivePool[i % positivePool.length], positivePool[(i + 2) % positivePool.length]],
    risks: health === "Healthy" ? [riskPool[(i + 3) % riskPool.length]] : [riskPool[i % riskPool.length], riskPool[(i + 2) % riskPool.length]],
    nextAction: actions[i % actions.length],
    diagnosis: `${name} has shown ${health === "Healthy" ? "consistent buying intent" : "interest but uneven momentum"}. ${contact} is the most active contact, and the ${stage.toLowerCase()} activity suggests the team should ${health === "Critical" ? "rebuild urgency before forecasting this deal" : "focus the next touchpoint on a concrete decision milestone"}.`,
    stakeholders: [
      { name: contact, role: "Champion", engagement: "Strong engagement" },
      { name: ["Alex Morgan","Nina Patel","James Wilson"][i % 3], role: "Economic buyer", engagement: i % 3 === 0 ? "Engaged" : "Not engaged" },
      { name: ["Owen Park","Sofia Diaz","Liam Reed"][i % 3], role: "Technical evaluator", engagement: i % 4 === 0 ? "Not engaged" : "Engaged" },
    ],
    activities: [
      { date: "Oct 6", type: "Email", detail: `${contact} replied with implementation questions` },
      { date: "Oct 3", type: "Proposal", detail: "Proposal opened and shared internally" },
      { date: "Sep 29", type: "Call", detail: "Discovery follow-up completed" },
      { date: "Sep 24", type: "Demo", detail: "Product demo with buying team" },
    ],
  };
});

export const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
export const pipelineTotal = deals.reduce((sum, deal) => sum + deal.value, 0);
export const weightedPipeline = 312400;
