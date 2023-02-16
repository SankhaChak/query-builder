export const RULE_FIELD_OPTIONS = [
  {
    title: "Prediction",
    options: [
      { label: "Theme", value: "theme" },
      { label: "Subtheme", value: "subtheme" },
      { label: "Reason", value: "reason" },
      { label: "Language", value: "language" },
      { label: "Source", value: "source" },
      { label: "Rating", value: "rating" },
      { label: "Time Period", value: "time_period" },
    ],
  },
  {
    title: "Common",
    options: [{ label: "Customer ID", value: "customer_id" }],
  },
];

export const RULE_CONDITION_OPTIONS = [
  {
    title: "",
    options: [
      { label: "Equals", value: "equals" },
      { label: "Does not equal", value: "does_not_equal" },
      { label: "Like", value: "like" },
      { label: "Not like", value: "not_like" },
      { label: "Is Empty", value: "is_empty" },
      { label: "Is", value: "is" },
      { label: "Is not", value: "is_not" },
    ],
  },
];

export const RULE_CRITERIA_OPTIONS = {
  theme: [
    {
      title: "",
      options: [
        { label: "Offers", value: "offers" },
        { label: "Performance", value: "performance" },
        { label: "Platform", value: "platform" },
        { label: "Product Feedback", value: "product_feedback" },
      ],
    },
  ],
  subtheme: [
    {
      title: "",
      options: [
        { label: "Sub Theme 1", value: "sub_theme_1" },
        { label: "Sub Theme 2", value: "sub_theme_2" },
        { label: "Sub Theme 3", value: "sub_theme_3" },
        { label: "Sub Theme 4", value: "sub_theme_4" },
      ],
    },
  ],
  reason: [
    {
      title: "",
      options: [
        { label: "Reason 1", value: "reason_1" },
        { label: "Reason 2", value: "reason_2" },
        { label: "Reason 3", value: "reason_3" },
        { label: "Reason 4", value: "reason_4" },
      ],
    },
  ],
  language: [
    {
      title: "",
      options: [
        { label: "English", value: "english" },
        { label: "French", value: "french" },
        { label: "German", value: "german" },
        { label: "Spanish", value: "spanish" },
      ],
    },
  ],
  source: [
    {
      title: "",
      options: [
        { label: "Source 1", value: "source_1" },
        { label: "Source 2", value: "source_2" },
        { label: "Source 3", value: "source_3" },
        { label: "Source 4", value: "source_4" },
      ],
    },
  ],
  rating: [
    {
      title: "",
      options: [
        { label: "Rating 1", value: "rating_1" },
        { label: "Rating 2", value: "rating_2" },
        { label: "Rating 3", value: "rating_3" },
      ],
    },
  ],
  time_period: [
    {
      title: "",
      options: [
        { label: "Time Period 1", value: "time_period_1" },
        { label: "Time Period 2", value: "time_period_2" },
        { label: "Time Period 3", value: "time_period_3" },
      ],
    },
  ],
  customer_id: [
    {
      title: "",
      options: [
        { label: "Customer ID 1", value: "customer_id_1" },
        { label: "Customer ID 2", value: "customer_id_2" },
        { label: "Customer ID 3", value: "customer_id_3" },
      ],
    },
  ],
};
