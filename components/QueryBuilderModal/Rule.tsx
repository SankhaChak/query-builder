import { useCallback, useContext, useMemo } from "react";
import { QueryContext } from "@/context/QueryContext";
import {
  RULE_CONDITION_OPTIONS,
  RULE_CRITERIA_OPTIONS,
  RULE_FIELD_OPTIONS,
} from "@/constants/dropdownOptions";
import { Criteria, RuleCondition, RuleField, RuleKeys } from "@/types/rule";
import Dropdown from "../layout/Dropdown";

type Props = {
  ruleGroupId: string;
  ruleId: string;
  field?: RuleField;
  condition?: RuleCondition;
  criteria?: Criteria;
};

type Options = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
}[];

const Rule = (props: Props) => {
  const { ruleGroupId, ruleId, field, condition, criteria } = props;

  const { handleUpdateRuleData } = useContext(QueryContext);

  const handleChangeRuleFields = useCallback(
    (ruleKey: RuleKeys, value: string) => {
      handleUpdateRuleData(ruleKey, value, ruleId, ruleGroupId);
    },
    [handleUpdateRuleData, ruleGroupId, ruleId]
  );

  const getSelectedOption = useCallback((options: Options, value: string) => {
    const selectedOption = options
      ?.map((option) => option.options)
      .flat()
      .find((option) => option.value === value);
    return selectedOption;
  }, []);

  const selectedFieldOption = useMemo(
    () => getSelectedOption(RULE_FIELD_OPTIONS, field as string),
    [field, getSelectedOption]
  );

  const selectedConditionOption = useMemo(
    () => getSelectedOption(RULE_CONDITION_OPTIONS, condition as string),
    [condition, getSelectedOption]
  );

  const selectedCriteriaOption = useMemo(
    () =>
      getSelectedOption(
        RULE_CRITERIA_OPTIONS[field as keyof typeof RULE_CRITERIA_OPTIONS],
        criteria as string
      ),
    [field, criteria, getSelectedOption]
  );

  return (
    <div className="flex gap-4">
      <Dropdown
        label={RuleKeys.FIELD}
        placeholder="Select field"
        options={RULE_FIELD_OPTIONS}
        selectedOption={selectedFieldOption}
        handleSelect={handleChangeRuleFields}
      />
      <Dropdown
        label={RuleKeys.CONDITION}
        placeholder="Select condition"
        options={field ? RULE_CONDITION_OPTIONS : []}
        selectedOption={selectedConditionOption}
        handleSelect={handleChangeRuleFields}
      />
      <Dropdown
        label={RuleKeys.CRITERIA}
        placeholder="Select criteria"
        options={
          field && condition
            ? RULE_CRITERIA_OPTIONS[
                selectedFieldOption!.value as keyof typeof RULE_CRITERIA_OPTIONS
              ]
            : []
        }
        selectedOption={selectedCriteriaOption}
        handleSelect={handleChangeRuleFields}
      />
    </div>
  );
};

export default Rule;
