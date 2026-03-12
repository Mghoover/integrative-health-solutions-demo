import type { ConditionDetail } from "../../types/condition-detail";

type ConditionModule = {
  condition?: ConditionDetail;
};

const modules = import.meta.glob<ConditionModule>("./*.ts", { eager: true });

export const conditionEntries: ConditionDetail[] = Object.values(modules)
  .map((module) => module.condition)
  .filter((condition): condition is ConditionDetail => Boolean(condition))
  .sort((a, b) => a.title.localeCompare(b.title));

export const conditionsBySlug = new Map(
  conditionEntries.map((condition) => [condition.slug, condition])
);

export default conditionEntries;
