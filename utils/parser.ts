import { Rule } from "@/types/rule";
import { RuleGroup } from "@/types/ruleGroup";

const getFieldName = (field?: string): string => {
  if (!field) return "";

  return field.toLowerCase().replaceAll(" ", "_");
};

const RuleConditions = {
  equals: "==",
  does_not_equal: "!=",
  like: "LIKE",
  not_like: "!LIKE",
  is_empty: "IS_NULL",
  is: "===",
  is_not: "!==",
};

const RuleConjunctions = {
  and: "&&",
  or: "||",
};

const getCondition = (condition?: string): string => {
  if (!condition) return "";

  const ruleConditionKey = condition.toLowerCase().replaceAll(" ", "_");

  return RuleConditions[ruleConditionKey as keyof typeof RuleConditions];
};

const getConjunction = (conjunction?: string): string => {
  if (!conjunction) return "";

  const ruleConjunctionKey = conjunction.toLowerCase().replaceAll(" ", "_");

  return RuleConjunctions[ruleConjunctionKey as keyof typeof RuleConjunctions];
};

const isValidRule = (rule: Rule): boolean => {
  if (!rule.field || !rule.condition || !rule.criteria) return false;

  return true;
};

export const parseRuleGroups = (ruleGroups: RuleGroup[]): string => {
  let queryString = "";

  ruleGroups.forEach((ruleGroup, ruleGroupIndex) => {
    ruleGroup.children.forEach((rule, ruleIndex) => {
      if (!isValidRule(rule)) return;

      if (ruleIndex !== 0) {
        queryString += ` ${getConjunction(ruleGroup.conjunction)} `;
      }

      queryString += `"(field.${getFieldName(rule.field)}) ${getCondition(
        rule.condition
      )} \\"${rule.criteria}\\"`;
    });

    if (ruleGroupIndex !== ruleGroups.length - 1) {
      queryString += ` `;
    }
  });

  return queryString;
};
