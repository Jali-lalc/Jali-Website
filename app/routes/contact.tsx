import type { Route } from "./+types/contact";

import { ContactSection } from "~/components/sections/ContactSection";
import { PageHeader } from "~/components/sections/PageHeader";

import { contactSections } from "~/content/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | [Organisation Name]" },
    {
      name: "description",
      content:
        "Contact [Organisation Name] for service and general enquiries.",
    },
  ];
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Contact us"
        description="Use the contact details below to reach the appropriate service or speak with the organisation."
      />

      {contactSections.map((section) => (
        <ContactSection
          key={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
          paragraphs={section.paragraphs}
          contactMethods={section.contactMethods}
          tone={section.tone}
        />
      ))}
    </>
  );
}