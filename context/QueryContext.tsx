import { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { INITIAL_RULE, INITIAL_RULE_GROUP } from "@/constants";
import { RuleGroup } from "@/types/ruleGroup";

type QueryProviderProps = {
  children: React.ReactNode;
};

type QueryContextType = {
  ruleGroups: RuleGroup[];
  handleAddRuleGroup: () => void;
  handleRemoveRuleGroup: (ruleGroupId: string) => void;
  handleChangeRuleGroupConjunction: (
    ruleGroupId: string,
    ruleGroupConjunction: RuleGroup["conjunction"]
  ) => void;
  handleAddRule: (ruleGroupId: string) => void;
};

export const QueryContext = createContext<QueryContextType>(
  {} as QueryContextType
);

export const QueryProvider = (props: QueryProviderProps) => {
  const { children } = props;

  const [ruleGroups, setRuleGroups] = useState<RuleGroup[]>([
    INITIAL_RULE_GROUP,
  ]);

  const handleAddRuleGroup = useCallback(() => {
    const newRuleGroup = {
      ...INITIAL_RULE_GROUP,
      id: uuidv4(),
      children: [{ ...INITIAL_RULE, id: uuidv4() }],
    };
    setRuleGroups((prevRuleGroups) => [...prevRuleGroups, newRuleGroup]);
  }, []);

  const handleRemoveRuleGroup = useCallback((ruleGroupId: string) => {
    setRuleGroups((prevRuleGroups) =>
      prevRuleGroups.filter((ruleGroup) => ruleGroup.id !== ruleGroupId)
    );
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

  const handleAddRule = useCallback(
    (ruleGroupId: string) => {
      const newRule = {
        ...INITIAL_RULE,
        id: uuidv4(),
      };

      const newRuleGroups = [...ruleGroups];
      const ruleGroupIndex = newRuleGroups.findIndex(
        (ruleGroup) => ruleGroup.id === ruleGroupId
      );
      newRuleGroups[ruleGroupIndex].children.push(newRule);

      setRuleGroups(newRuleGroups);

      // setRuleGroups((ruleGroups) => {
      //   const newRuleGroups = [...ruleGroups];
      //   const ruleGroupIndex = newRuleGroups.findIndex(
      //     (ruleGroup) => ruleGroup.id === ruleGroupId
      //   );
      //   newRuleGroups[ruleGroupIndex].children.push(newRule);
      //   return newRuleGroups;
      // });
    },
    [ruleGroups]
  );

  const providerValue: QueryContextType = {
    ruleGroups,
    handleAddRuleGroup,
    handleRemoveRuleGroup,
    handleChangeRuleGroupConjunction,
    handleAddRule,
  };

  return (
    <QueryContext.Provider value={providerValue}>
      {children}
    </QueryContext.Provider>
  );
};
