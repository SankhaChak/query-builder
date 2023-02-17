export const RULE_FIELD_OPTIONS = [
  {
    title: "Prediction",
    options: [
      "Theme",
      "Subtheme",
      "Reason",
      "Language",
      "Source",
      "Rating",
      "Time Period",
    ],
  },
  {
    title: "Common",
    options: ["Customer ID"],
  },
];

export const RULE_CONDITION_OPTIONS = [
  {
    title: "",
    options: [
      "Equals",
      "Does not equal",
      "Like",
      "Not like",
      "Is Empty",
      "Is",
      "Is not",
    ],
  },
];

export const RULE_CRITERIA_OPTIONS = {
  theme: [
    {
      title: "",
      options: ["Offers", "Performance", "Platform", "Product Feedback"],
    },
  ],
  subtheme: [
    {
      title: "",
      options: ["Sub Theme 1", "Sub Theme 2", "Sub Theme 3", "Sub Theme 4"],
    },
  ],
  reason: [
    {
      title: "",
      options: ["Reason 1", "Reason 2", "Reason 3", "Reason 4"],
    },
  ],
  language: [
    {
      title: "",
      options: ["English", "French", "German", "Spanish"],
    },
  ],
  source: [
    {
      title: "",
      options: ["Source 1", "Source 2", "Source 3", "Source 4"],
    },
  ],
  rating: [
    {
      title: "",
      options: ["Rating 1", "Rating 2", "Rating 3"],
    },
  ],
  time_period: [
    {
      title: "",
      options: ["Time Period 1", "Time Period 2", "Time Period 3"],
    },
  ],
  customer_id: [
    {
      title: "",
      options: ["Customer ID 1", "Customer ID 2", "Customer ID 3"],
    },
  ],
};
