import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta } from "@/components/win-deals/page-meta";
import { PublicPage } from "@/components/marketing/public-page";
import { LegalDocument, type LegalSection } from "@/components/marketing/legal-document";
import { CONTACT_EMAIL, LEGAL_GOVERNING_LAW } from "@/data/legal";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta("Terms of Service — WIN DEALS", "Review the terms governing use of WIN DEALS.", true),
  component: Terms,
});

// Legal review required before production use — especially liability,
// indemnification, prohibited use, and governing law.
const sections: LegalSection[] = [
  { id: "acceptance", nav: "Acceptance", title: "Acceptance of Terms", body: <p>By accessing or using WIN DEALS, you agree to these Terms of Service. If you do not agree, please do not use the service.</p> },
  { id: "service", nav: "Service", title: "Description of the Service", body: <>
    <p>WIN DEALS provides software that analyzes authorized sales and CRM information to provide deal intelligence, pipeline insights, and recommended actions.</p>
    <p>WIN DEALS is not a CRM and does not replace your existing CRM or sales systems.</p>
  </> },
  { id: "accounts", nav: "Accounts", title: "Accounts", body: <>
    <p>You are responsible for:</p>
    <ul><li>providing accurate information;</li><li>maintaining the security of your account;</li><li>making sure your account is used only by authorized people;</li><li>activity performed through your account.</li></ul>
  </> },
  { id: "connected-services", nav: "Connected Services", title: "Connected Services", body: <>
    <p>You may connect third-party services, such as HubSpot, to WIN DEALS. When you do, you are responsible for:</p>
    <ul><li>having appropriate authorization to connect the service;</li><li>granting appropriate permissions;</li><li>complying with that service's own terms.</li></ul>
    <p>WIN DEALS does not control third-party services.</p>
  </> },
  { id: "ai-outputs", nav: "AI Outputs", title: "AI-Generated Information", body: <>
    <p>WIN DEALS may use AI to generate summaries, diagnoses, insights, scores, recommendations, and other outputs.</p>
    <p>AI-generated outputs may be incomplete, inaccurate, or unsuitable for a particular situation.</p>
    <p><strong>You are responsible for reviewing outputs and exercising your own professional judgment before taking action.</strong></p>
  </> },
  { id: "user-responsibilities", nav: "User Responsibilities", title: "User Responsibilities", body: <>
    <p>You must not:</p>
    <ul><li>misuse the service;</li><li>attempt to gain unauthorized access to the service or its systems;</li><li>interfere with or disrupt the service;</li><li>violate applicable laws;</li><li>upload or process information you are not authorized to use;</li><li>use the service for prohibited purposes.</li></ul>
  </> },
  { id: "intellectual-property", nav: "Intellectual Property", title: "Intellectual Property", body: <>
    <p>WIN DEALS and its licensors own the WIN DEALS software, branding, website, product design, and documentation.</p>
    <p>Information you provide or authorize us to process is not WIN DEALS intellectual property. We do not claim ownership of your data.</p>
  </> },
  { id: "user-data", nav: "User Data", title: "User Data", body: <p>You retain your rights in information you provide or authorize WIN DEALS to process, subject to the rights and licenses necessary to operate the service. See our <Link to="/privacy">Privacy Policy</Link> for how we handle information.</p> },
  { id: "third-party-services", nav: "Third-Party Services", title: "Third-Party Services", body: <>
    <p>Third-party services may have their own:</p>
    <ul><li>terms;</li><li>privacy policies;</li><li>availability;</li><li>limitations.</li></ul>
    <p>WIN DEALS does not control third-party services and is not responsible for them.</p>
  </> },
  { id: "availability", nav: "Availability", title: "Service Availability", body: <>
    <p>We work to keep WIN DEALS available, but we do not promise uninterrupted service. In particular:</p>
    <ul><li>the service may occasionally be unavailable;</li><li>maintenance may occur;</li><li>third-party dependencies can affect availability.</li></ul>
  </> },
  { id: "disclaimers", nav: "Disclaimers", title: "Disclaimers", body: <>
    <p>WIN DEALS provides decision-support information. It does not guarantee that:</p>
    <ul><li>a deal will close;</li><li>revenue will increase;</li><li>a recommendation will produce a specific outcome;</li><li>AI outputs will always be accurate.</li></ul>
    <p>The product helps salespeople make decisions. It does not guarantee business results.</p>
  </> },
  { id: "limitation-of-liability", nav: "Limitation of Liability", title: "Limitation of Liability", body: <p>To the extent permitted by applicable law, WIN DEALS's liability in connection with the service is limited. The specific terms of this limitation will be set out here once finalized.</p> },
  { id: "indemnification", nav: "Indemnification", title: "Indemnification", body: <p>To the extent permitted by applicable law, you agree to be responsible for claims arising from your misuse of the service or your violation of these Terms. The specific terms of this section will be set out here once finalized.</p> },
  { id: "termination", nav: "Termination", title: "Termination", body: <>
    <p>We may suspend or terminate access to WIN DEALS in appropriate circumstances, such as a violation of these Terms.</p>
    <p>You may stop using the service at any time.</p>
  </> },
  { id: "changes", nav: "Changes", title: "Changes to Terms", body: <p>We may update these Terms from time to time. When we do, we will update the “Last updated” date at the top of this page.</p> },
  { id: "governing-law", nav: "Governing Law", title: "Governing Law", body: <p>{LEGAL_GOVERNING_LAW ? <>These Terms are governed by the laws of {LEGAL_GOVERNING_LAW}.</> : "The governing law for these Terms will be specified here once confirmed."}</p> },
  { id: "contact", nav: "Contact", title: "Contact", body: <p>Questions about these Terms? Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p> },
];

function Terms() {
  return <PublicPage><LegalDocument title="Terms of Service" intro="The terms that govern your use of WIN DEALS." sections={sections} /></PublicPage>;
}
