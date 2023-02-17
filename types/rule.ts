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

export enum RuleKeys {
  FIELD = "field",
  CONDITION = "condition",
  CRITERIA = "criteria",
}

export interface Rule {
  id: string;
  field?: RuleField;
  condition?: RuleCondition;
  criteria?: string;
  value?: string[]; // Not sure why we need value
  type: "rule";
}
