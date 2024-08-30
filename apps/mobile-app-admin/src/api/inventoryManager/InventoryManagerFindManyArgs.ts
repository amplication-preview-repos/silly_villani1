import { InventoryManagerWhereInput } from "./InventoryManagerWhereInput";
import { InventoryManagerOrderByInput } from "./InventoryManagerOrderByInput";

export type InventoryManagerFindManyArgs = {
  where?: InventoryManagerWhereInput;
  orderBy?: Array<InventoryManagerOrderByInput>;
  skip?: number;
  take?: number;
};
