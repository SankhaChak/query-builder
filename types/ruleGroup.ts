import { Rule } from "./rule";

export interface RuleGroup {
  id: string;
  children: Rule[];
  conjunction: "AND" | "OR";
  not: boolean; // Not sure why this needs to be here
  type: "rule_group";
}
