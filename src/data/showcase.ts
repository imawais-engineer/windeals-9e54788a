/**
 * Centralized homepage showcase data (from the homepage spec).
 * Kept in one module so it can later be replaced with API data.
 */
export type ShowcaseHealth = "healthy" | "at_risk" | "critical";

export interface ShowcaseDeal {
  id: string;
  companyName: string;
  value: number;
  stage: string;
  winScore: number;
  health: ShowcaseHealth;
  risk: string;
  nextAction: string;
}

export const showcaseDeals: ShowcaseDeal[] = [
  { id: "gamma-ltd", companyName: "Gamma Ltd", value: 31000, stage: "Negotiation", winScore: 31, health: "critical", risk: "Decision maker not engaged", nextAction: "Engage decision maker" },
  { id: "acme-corp", companyName: "Acme Corp", value: 42000, stage: "Proposal", winScore: 82, health: "at_risk", risk: "Procurement inactive", nextAction: "Contact procurement" },
  { id: "delta-co", companyName: "Delta Co", value: 75000, stage: "Proposal", winScore: 91, health: "healthy", risk: "Strong buying signals", nextAction: "Send final proposal" },
];

export const showcasePipeline = { activeDeals: 27, pipelineValue: "$486K", healthy: 13, atRisk: 7, critical: 5 };

export const showcaseNextAction = "Contact procurement today and confirm whether they've reviewed the implementation timeline.";

export const showcaseScore = {
  score: 82,
  dimensions: [["Engagement", "Strong"], ["Momentum", "Good"], ["Stakeholders", "Good"], ["Activity", "Moderate"], ["Timing", "Good"]] as const,
  risks: ["Procurement inactive", "No activity for 5 days", "Implementation timeline unresolved"],
};

export const showcaseSignals = ["Decision maker engaged", "Proposal opened 3×", "Champion active", "Recent meeting completed"];
export const showcaseRisks = ["Procurement inactive", "No activity for 5 days", "Implementation unresolved"];

export const showcaseDiagnosis = {
  text: "This deal is progressing, but procurement is becoming the primary risk. Strong executive engagement suggests genuine buying intent, but the commercial approval path remains unclear.",
  basedOn: ["Procurement inactivity", "Approaching close date", "Executive engagement"],
};

export type StakeholderStatus = "at_risk" | "champion" | "not_engaged";
export const showcaseStakeholders: { name: string; role: string; status: StakeholderStatus; lastActivity?: string }[] = [
  { name: "Sarah Ahmed", role: "Procurement Manager", status: "at_risk", lastActivity: "5 days ago" },
  { name: "Michael Chen", role: "VP Operations", status: "champion", lastActivity: "2 days ago" },
  { name: "David Smith", role: "CTO", status: "not_engaged" },
];
