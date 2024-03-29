import { QueryContext } from "@/context/QueryContext";
import { parseRuleGroups } from "@/utils/parser";
import { useContext, useMemo } from "react";
import Button from "../layout/Button";
import Modal from "../layout/Modal";
import RuleGroup from "./RuleGroup";

type Props = {};

const QueryBuilderModal = (props: Props) => {
  const { ruleGroups, handleAddRuleGroup, handleShowFinalQuery } =
    useContext(QueryContext);

  const query = parseRuleGroups(ruleGroups);

  const isValidQuery = useMemo(() => query?.length > 0, [query]);

  return (
    <Modal
      title={isValidQuery ? "Build your query" : "Create tag and query"}
      description="The query you build will be saved in your active view"
      showResultBox={isValidQuery}
      resultBoxTitle="Query"
      result={query}
      primaryButtonLabel="Finish"
      secondaryButtonLabel="Back"
      handlePrimaryButtonClick={handleShowFinalQuery}
    >
      <div className="flex h-full flex-col justify-end py-9 px-7">
        <div className="flex max-h-full flex-col items-start overflow-y-auto">
          {ruleGroups.map((ruleGroup) => (
            <div className="w-full" key={ruleGroup.id}>
              <RuleGroup
                ruleGroupId={ruleGroup.id}
                rules={ruleGroup.children}
                conjunction={ruleGroup.conjunction}
              />
              <div className="h-5 w-0 translate-x-8 transform border border-primary-card-border" />
            </div>
          ))}

          <Button handleOnClick={handleAddRuleGroup}>
            + Add new group filter
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default QueryBuilderModal;
