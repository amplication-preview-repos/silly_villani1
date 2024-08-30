import { FinanceManager as TFinanceManager } from "../api/financeManager/FinanceManager";

export const FINANCEMANAGER_TITLE_FIELD = "id";

export const FinanceManagerTitle = (record: TFinanceManager): string => {
  return record.id?.toString() || String(record.id);
};
