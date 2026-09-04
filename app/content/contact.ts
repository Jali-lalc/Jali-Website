export const contactSections = [
  {
    id: "services",

    eyebrow: "Services",

    heading: "Service enquiries",

    paragraphs: [
      "For enquiries about our services, contact the organisation using the email address or telephone number provided.",
    ],

    contactMethods: [
      {
        label: "Email",
        value: "[Services email address]",
        href: "mailto:services@example.com.au",
      },
      {
        label: "Phone",
        value: "[Services phone number]",
        href: "tel:+61000000000",
      },
    ],

    tone: "white",
  },
  {
    id: "general-enquiries",

    eyebrow: "Contact us",

    heading: "General enquiries",

    paragraphs: [
      "For general questions or assistance finding the correct service, contact the main office using the details provided.",
    ],

    contactMethods: [
      {
        label: "Email",
        value: "[General enquiries email address]",
        href: "mailto:contact@example.com.au",
      },
      {
        label: "Phone",
        value: "[General enquiries phone number]",
        href: "tel:+61000000000",
      },
    ],

    tone: "soft",
  },
] as const;