import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/components/win-deals/page-meta";
import { SiteHeader } from "@/components/marketing/site-header";
import { Diagnosis, EarlyAccess, FAQ, FinalCTA, Footer, Hero, HowAIWorks, Integration, IntelligenceLayer, LearningLoop, NextActionSection, PipelineSection, Problem, SignalsAndRisks, Stakeholders, Trust, WinScoreSection } from "@/components/marketing/home-sections";

export const Route = createFileRoute("/")({
  head: () => pageMeta("AI Deal Intelligence", "WIN DEALS analyzes your CRM pipeline to show which deals need attention, why they're at risk, and what to do next."),
  component: Landing,
});

function Landing() {
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <Hero /><Problem /><IntelligenceLayer /><HowAIWorks /><WinScoreSection /><SignalsAndRisks /><Diagnosis /><NextActionSection /><Stakeholders /><PipelineSection /><LearningLoop /><Integration /><Trust /><EarlyAccess /><FAQ /><FinalCTA />
    </main>
    <Footer />
  </div>;
}
