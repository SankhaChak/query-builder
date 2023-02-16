import {
  RULE_CONDITION_OPTIONS,
  RULE_FIELD_OPTIONS,
} from "@/constants/dropdownOptions";
import { Criteria, RuleCondition, RuleField } from "@/types/rule";
import Dropdown from "../layout/Dropdown";

type Props = {
  ruleGroupId: string;
  ruleId: string;
  field?: RuleField;
  condition?: RuleCondition;
  criteria?: Criteria;
};

const Rule = (props: Props) => {
  const { ruleGroupId, ruleId, field, condition, criteria } = props;

  return (
    <div className="flex gap-4">
      <Dropdown
        label="Field"
        placeholder="Select field"
        options={RULE_FIELD_OPTIONS}
        value={field}
      />
      <Dropdown
        label="Condition"
        placeholder="Select condition"
        options={field ? RULE_CONDITION_OPTIONS : []}
        value={condition}
      />
      <Dropdown
        label="Criteria"
        placeholder="Select criteria"
        value={criteria}
      />
    </div>
  );
};

export default Rule;
