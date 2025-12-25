const dashboardSections = [
  {
    title: "Codename",
    items: [],
    defaultOpen: false,
    hideToggle: true,
  },
  {
    title: "Shared With Me",
    items: [
      { label: "Cargo2go" },
      { label: "Claudz3r", badge: "2" },
      { label: "Idioma" },
      { label: "Syllables" },
      { label: "x-Ob" },
    ],
    defaultOpen: true,
  },
];

const reportsSections = [
  {
    title: "Share With Me",
    items: [{ label: "Deals by user" }, { label: "Deal duration" }],
    defaultOpen: true,
  },
  {
    title: "My reports",
    items: [
      { label: "Emails received" },
      { label: "Deal duration" },
      { label: "New report" },
      { label: "Analytics", badge: "7" },
    ],
    defaultOpen: true,
  },
];

export { dashboardSections, reportsSections };
