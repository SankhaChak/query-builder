import { RULE_CONJUNCTION_OPTIONS } from "@/constants";
import { QueryContext } from "@/context/QueryContext";
import { Rule as RuleType } from "@/types/rule";
import { useCallback, useContext, useMemo } from "react";
import InformationIcon from "../icons/Information";
import Button from "../layout/Button";
import OptionsPill from "../layout/OptionsPill";
import Rule from "./Rule";

type Props = {
  ruleGroupId: string;
  rules: RuleType[];
  conjunction: "AND" | "OR";
};

const RuleGroup = (props: Props) => {
  const { ruleGroupId, rules, conjunction } = props;
  const { handleChangeRuleGroupConjunction, handleAddRule } =
    useContext(QueryContext);

  const ruleConjunctionOptions = useMemo(
    () =>
      RULE_CONJUNCTION_OPTIONS.map((option) => ({
        label: option.label,
        isActive: option.label === conjunction,
        handleClick: () =>
          handleChangeRuleGroupConjunction(ruleGroupId, option.value),
      })),
    [conjunction, handleChangeRuleGroupConjunction, ruleGroupId]
  );

  const handleAddGroupRule = useCallback(() => {
    handleAddRule(ruleGroupId);
  }, [ruleGroupId, handleAddRule]);

  return (
    <div className="flex w-full flex-col items-start rounded border border-primary-card-border bg-primary-card-background p-5">
      {rules.length > 1 && (
        <div className="mb-7 flex items-center gap-3">
          <OptionsPill options={ruleConjunctionOptions} />
          <InformationIcon className="h-3 w-3" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        {rules.map((rule, index) => (
          <Rule
            key={rule.id}
            ruleGroupId={ruleGroupId}
            ruleId={rule.id}
            field={rule.field}
            condition={rule.condition}
            criteria={rule.criteria}
            allowDeletion={index !== 0}
          />
        ))}
      </div>
      <Button handleOnClick={handleAddGroupRule} className="mt-4">
        + Add filter
      </Button>
    </div>
  );
};

export default RuleGroup;
