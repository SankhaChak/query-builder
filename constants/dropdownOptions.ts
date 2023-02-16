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
