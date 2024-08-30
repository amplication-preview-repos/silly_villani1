import { InventoryManager as TInventoryManager } from "../api/inventoryManager/InventoryManager";

export const INVENTORYMANAGER_TITLE_FIELD = "id";

export const InventoryManagerTitle = (record: TInventoryManager): string => {
  return record.id?.toString() || String(record.id);
};
