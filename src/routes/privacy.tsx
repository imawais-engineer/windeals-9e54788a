import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/components/win-deals/page-meta";
import { PublicPage } from "@/components/marketing/public-page";
import { LegalDocument, type LegalSection } from "@/components/marketing/legal-document";
import { CONTACT_EMAIL } from "@/data/legal";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta("Privacy Policy — WIN DEALS", "Learn how WIN DEALS handles information when you use our website and services.", true, "/privacy"),
  component: Privacy,
});

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

// Legal review required before production launch.
const sections: LegalSection[] = [
  { id: "information-we-collect", nav: "Information We Collect", title: "Information We Collect", body: <>
    <p>Depending on how you use WIN DEALS, we may collect the following categories of information:</p>
    <ul><li><strong>Account information</strong>, such as your name and email address when you create an account.</li><li><strong>Contact information</strong> you share with us, for example when you reach out.</li><li><strong>Information submitted through forms</strong> on our website, such as early access or contact requests.</li><li><strong>CRM information you authorize</strong> us to access through a connected service.</li><li><strong>Usage information</strong> about how you interact with WIN DEALS.</li><li><strong>Device and browser information</strong>, such as browser type and general technical details.</li><li><strong>Communications</strong> you send to WIN DEALS.</li></ul>
    <p>The information we actually collect depends on the features you use.</p>
  </> },
  { id: "how-we-use-information", nav: "How We Use Information", title: "How We Use Information", body: <>
    <p>We may use information to:</p>
    <ul><li>provide the service;</li><li>operate and maintain WIN DEALS;</li><li>analyze CRM information you have authorized;</li><li>provide deal intelligence, such as signals, diagnoses, and recommended actions;</li><li>communicate with you;</li><li>improve the product;</li><li>protect the service and its users;</li><li>comply with legal obligations.</li></ul>
  </> },
  { id: "crm-and-third-party-data", nav: "CRM and Third-Party Data", title: "CRM and Third-Party Data", body: <>
    <p>You may authorize WIN DEALS to access information from services you connect. Our initial integration is <strong>HubSpot</strong>.</p>
    <p>The exact information accessed depends on the permissions you grant and how the integration is configured. You can disconnect an integration at any time.</p>
  </> },
  { id: "ai-processing", nav: "AI Processing", title: "AI Processing", body: <p>WIN DEALS may use AI systems to analyze authorized business information and generate deal intelligence, including signals, diagnoses, summaries, and recommended actions.</p> },
  { id: "sharing-information", nav: "Sharing Information", title: "How We Share Information", body: <>
    <p>We share information only as necessary to:</p>
    <ul><li>operate the service;</li><li>provide integrations you choose to connect;</li><li>work with service providers who help us run WIN DEALS;</li><li>comply with law;</li><li>protect the rights and safety of WIN DEALS, our users, and others.</li></ul>
  </> },
  { id: "security", nav: "Security", title: "Data Security", body: <p>We take reasonable measures designed to protect information handled through WIN DEALS. However, no internet-based service can guarantee absolute security.</p> },
  { id: "data-retention", nav: "Data Retention", title: "Data Retention", body: <p>We retain information for as long as reasonably necessary to provide the service, maintain legitimate business records, resolve disputes, enforce agreements, and comply with legal obligations, subject to applicable law and our operational requirements.</p> },
  { id: "your-choices", nav: "Your Choices", title: "Your Choices", body: <>
    <p>Depending on your situation, you may be able to:</p>
    <ul><li>update your account information;</li><li>contact WIN DEALS with questions about your information;</li><li>disconnect connected integrations;</li><li>request access to or deletion of your information where applicable law provides that right.</li></ul>
  </> },
  { id: "cookies", nav: "Cookies", title: "Cookies and Similar Technologies", body: <>
    <p>Our website may use cookies or similar technologies for:</p>
    <ul><li>essential website functionality;</li><li>remembering your preferences;</li><li>analytics, if enabled.</li></ul>
  </> },
  { id: "childrens-privacy", nav: "Children's Privacy", title: "Children's Privacy", body: <p>WIN DEALS is intended for business users and is not directed toward children.</p> },
  { id: "changes", nav: "Changes", title: "Changes to This Policy", body: <p>We may update this policy from time to time. When we make material updates, we will change the “Last updated” date at the top of this page.</p> },
  { id: "contact", nav: "Contact", title: "Contact", body: <><p><strong>Questions about privacy?</strong></p><p>Contact us at {mail}.</p></> },
];

function Privacy() {
  return <PublicPage><LegalDocument title="Privacy Policy" intro="How WIN DEALS collects, uses, and protects information when you use our website and services." sections={sections} /></PublicPage>;
}
