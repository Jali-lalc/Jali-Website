export const applicationSections = [
  {
    id: "membership",

    eyebrow: "Membership",

    heading: "Membership application",

    paragraphs: [
      "Use this application to apply for membership with the organisation.",

      "Download the form, complete the required information and submit it using the instructions provided in the document.",
    ],

    document: {
      href: "/documents/applications/membership-application.pdf",
      title: "Membership application form",
      description:
        "Download the current membership application form.",
      downloadName: "membership-application.pdf",
      fileSize: "Add file size",
    },

    tone: "white",
  },
  {
    id: "housing",

    eyebrow: "Housing",

    heading: "Housing application",

    paragraphs: [
      "Use this form to provide the information required for a housing application.",

      "Read the instructions carefully and include any supporting documents requested by the form.",
    ],

    document: {
      href: "/documents/applications/housing-application.pdf",
      title: "Housing application form",
      description:
        "Download the current housing application form.",
      downloadName: "housing-application.pdf",
      fileSize: "Add file size",
    },

    tone: "soft",
  },
  {
    id: "cultural-heritage",

    eyebrow: "Cultural heritage",

    heading: "Cultural heritage application",

    paragraphs: [
      "Use this form for enquiries or applications relating to cultural heritage matters.",

      "The document explains what information should be provided and how the completed application should be submitted.",
    ],

    document: {
      href:
        "/documents/applications/cultural-heritage-application.pdf",
      title: "Cultural heritage application form",
      description:
        "Download the current cultural heritage application form.",
      downloadName:
        "cultural-heritage-application.pdf",
      fileSize: "Add file size",
    },

    tone: "warm",
  },
] as const;