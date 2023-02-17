import { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { INITIAL_RULE, INITIAL_RULE_GROUP } from "@/constants";
import { RuleGroup } from "@/types/ruleGroup";
import { RuleKeys } from "@/types/rule";

type QueryProviderProps = {
  children: React.ReactNode;
};

type QueryContextType = {
  ruleGroups: RuleGroup[];
  handleAddRuleGroup: () => void;
  handleChangeRuleGroupConjunction: (
    ruleGroupId: string,
    ruleGroupConjunction: RuleGroup["conjunction"]
  ) => void;
  handleAddRule: (ruleGroupId: string) => void;
  handleRemoveRule: (ruleGroupId: string, ruleId: string) => void;
  handleUpdateRuleData: (
    ruleKey: RuleKeys,
    updatedValue: string,
    ruleId: string,
    ruleGroupId: string
  ) => void;
};

export const QueryContext = createContext<QueryContextType>(
  {} as QueryContextType
);

export const QueryProvider = (props: QueryProviderProps) => {
  const { children } = props;

  const [ruleGroups, setRuleGroups] = useState<RuleGroup[]>([
    { ...INITIAL_RULE_GROUP },
  ]);

  const handleAddRuleGroup = useCallback(() => {
    const newRuleGroup = {
      ...INITIAL_RULE_GROUP,
      id: uuidv4(),
      children: [{ ...INITIAL_RULE, id: uuidv4() }],
    };
    setRuleGroups((prevRuleGroups) => [...prevRuleGroups, newRuleGroup]);
  }, []);

  const handleChangeRuleGroupConjunction = useCallback(
    (ruleGroupId: string, ruleGroupConjunction: RuleGroup["conjunction"]) => {
      setRuleGroups((prevRuleGroups) => {
        const ruleGroupIndex = prevRuleGroups.findIndex(
          (ruleGroup) => ruleGroup.id === ruleGroupId
        );
        const newRuleGroups = [...prevRuleGroups];
        newRuleGroups[ruleGroupIndex].conjunction = ruleGroupConjunction;
        return newRuleGroups;
      });
    },
    []
  );

  const handleAddRule = useCallback((ruleGroupId: string) => {
    const newRule = {
      ...INITIAL_RULE,
      id: uuidv4(),
    };

    setRuleGroups((ruleGroups) => {
      const newRuleGroups = [...ruleGroups];
      const ruleGroupIndex = newRuleGroups.findIndex(
        (ruleGroup) => ruleGroup.id === ruleGroupId
      );
      newRuleGroups[ruleGroupIndex].children.push(newRule);
      return newRuleGroups;
    });
  }, []);

  const handleRemoveRule = useCallback(
    (ruleGroupId: string, ruleId: string) => {
      setRuleGroups((prevRuleGroups) => {
        const newRuleGroups = [...prevRuleGroups];
        const ruleGroup = newRuleGroups.find(
          (ruleGroup) => ruleGroup.id === ruleGroupId
        );
        if (ruleGroup) {
          ruleGroup.children = ruleGroup.children.filter(
            (rule) => rule.id !== ruleId
          );
        }
        return newRuleGroups;
      });
    },
    []
  );

  const handleUpdateRuleData = useCallback(
    (
      ruleKey: RuleKeys,
      updatedValue: string,
      ruleId: string,
      ruleGroupId: string
    ) => {
      setRuleGroups((prevRuleGroups) => {
        const newRuleGroups = [...prevRuleGroups];
        const ruleGroupIndex = newRuleGroups.findIndex(
          (ruleGroup) => ruleGroup.id === ruleGroupId
        );
        const ruleIndex = newRuleGroups[ruleGroupIndex].children.findIndex(
          (rule) => rule.id === ruleId
        );
        newRuleGroups[ruleGroupIndex].children[ruleIndex][ruleKey] =
          updatedValue as any;
        return newRuleGroups;
      });
    },
    []
  );

  const providerValue: QueryContextType = {
    ruleGroups,
    handleAddRuleGroup,
    handleChangeRuleGroupConjunction,
    handleAddRule,
    handleRemoveRule,
    handleUpdateRuleData,
  };

  return (
    <QueryContext.Provider value={providerValue}>
      {children}
    </QueryContext.Provider>
  );
};
