import { useCallback, useContext, useEffect, useMemo } from "react";
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

  const ruleCriteriaOptions = useMemo(() => {
    const fieldKey = field?.toLowerCase().split(" ").join("_");
    return RULE_CRITERIA_OPTIONS[
      fieldKey as keyof typeof RULE_CRITERIA_OPTIONS
    ];
  }, [field]);

  useEffect(() => {
    handleChangeRuleFields(RuleKeys.CONDITION, "");
    handleChangeRuleFields(RuleKeys.CRITERIA, "");
  }, [field, handleChangeRuleFields]);

  return (
    <div className="flex items-end gap-4">
      <Dropdown
        label={RuleKeys.FIELD}
        placeholder="Select field"
        options={RULE_FIELD_OPTIONS}
        selectedOption={field}
        handleSelect={handleChangeRuleFields}
      />
      <Dropdown
        label={RuleKeys.CONDITION}
        placeholder="Select condition"
        options={field ? RULE_CONDITION_OPTIONS : []}
        selectedOption={condition}
        handleSelect={handleChangeRuleFields}
      />
      <Dropdown
        label={RuleKeys.CRITERIA}
        placeholder="Select criteria"
        options={field && condition ? ruleCriteriaOptions : []}
        selectedOption={criteria}
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
