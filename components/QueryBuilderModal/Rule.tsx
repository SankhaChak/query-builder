import { useCallback, useContext, useMemo } from "react";
import { QueryContext } from "@/context/QueryContext";
import {
  RULE_CONDITION_OPTIONS,
  RULE_CRITERIA_OPTIONS,
  RULE_FIELD_OPTIONS,
} from "@/constants/dropdownOptions";
import { Criteria, RuleCondition, RuleField, RuleKeys } from "@/types/rule";
import Dropdown from "../layout/Dropdown";
import TrashIcon from "../icons/Trash";

type Props = {
  ruleGroupId: string;
  ruleId: string;
  field?: RuleField;
  condition?: RuleCondition;
  criteria?: Criteria;
  allowDeletion?: boolean;
};

type Options = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
}[];

const Rule = (props: Props) => {
  const { ruleGroupId, ruleId, field, condition, criteria, allowDeletion } =
    props;

  const { handleUpdateRuleData, handleRemoveRule } = useContext(QueryContext);

  const handleChangeRuleFields = useCallback(
    (ruleKey: RuleKeys, value: string) => {
      handleUpdateRuleData(ruleKey, value, ruleId, ruleGroupId);
    },
    [handleUpdateRuleData, ruleGroupId, ruleId]
  );

  const handleDeleteRule = useCallback(() => {
    handleRemoveRule(ruleGroupId, ruleId);
  }, [handleRemoveRule, ruleGroupId, ruleId]);

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
    <div className="flex items-end gap-4">
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
      {allowDeletion && (
        <button
          onClick={handleDeleteRule}
          className="rounded bg-primary bg-opacity-10 p-[9px] transition-all duration-300 hover:bg-opacity-20"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default Rule;
