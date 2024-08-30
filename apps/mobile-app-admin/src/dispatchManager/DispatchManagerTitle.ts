import { DispatchManager as TDispatchManager } from "../api/dispatchManager/DispatchManager";

export const DISPATCHMANAGER_TITLE_FIELD = "id";

export const DispatchManagerTitle = (record: TDispatchManager): string => {
  return record.id?.toString() || String(record.id);
};
