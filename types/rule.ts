export type RuleField =
  | "Theme"
  | "Sub-theme"
  | "Reason"
  | "Language"
  | "Source"
  | "Rating"
  | "Time Period"
  | "Customer ID";

export type RuleCondition =
  | "Equals"
  | "Does not equal"
  | "Like"
  | "Not like"
  | "Is Empty"
  | "Is"
  | "Is not";

export enum ThemeCriteria {
  OFFERS = "Offers",
  PERFORMANCE = "Performance",
  PLATFORM = "Platform",
  PRODUCT_FEEDBACK = "Product Feedback",
}

export enum SubThemeCriteria {
  SUB_THEME_1 = "Sub Theme 1",
  SUB_THEME_2 = "Sub Theme 2",
  SUB_THEME_3 = "Sub Theme 3",
  SUB_THEME_4 = "Sub Theme 4",
}

export enum ReasonCriteria {
  REASON_1 = "Reason 1",
  REASON_2 = "Reason 2",
  REASON_3 = "Reason 3",
  REASON_4 = "Reason 4",
}

export enum LanguageCriteria {
  ENGLISH = "English",
  FRENCH = "French",
  GERMAN = "German",
  SPANISH = "Spanish",
}

export type Criteria =
  | ThemeCriteria
  | SubThemeCriteria
  | ReasonCriteria
  | LanguageCriteria;

export interface Rule {
  id: string;
  field?: RuleField;
  condition?: RuleCondition;
  criteria?: Criteria;
  value?: string[]; // Not sure why we need value
  type: "rule";
}
