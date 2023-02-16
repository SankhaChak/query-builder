import { Rule } from "@/types/rule";
import { RuleGroup } from "@/types/ruleGroup";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_RULE: Rule = {
  id: uuidv4(),
  type: "rule",
};

export const INITIAL_RULE_GROUP: RuleGroup = {
  id: uuidv4(),
  children: [INITIAL_RULE],
  conjunction: "AND",
  not: false,
  type: "rule_group",
};

export const RULE_CONJUNCTION_OPTIONS: {
  label: string;
  value: RuleGroup["conjunction"];
}[] = [
  { label: "AND", value: "AND" },
  { label: "OR", value: "OR" },
];
