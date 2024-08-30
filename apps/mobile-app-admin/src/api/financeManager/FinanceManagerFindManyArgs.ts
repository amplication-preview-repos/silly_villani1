import { FinanceManagerWhereInput } from "./FinanceManagerWhereInput";
import { FinanceManagerOrderByInput } from "./FinanceManagerOrderByInput";

export type FinanceManagerFindManyArgs = {
  where?: FinanceManagerWhereInput;
  orderBy?: Array<FinanceManagerOrderByInput>;
  skip?: number;
  take?: number;
};
