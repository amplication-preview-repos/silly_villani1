import { ServiceManagerWhereInput } from "./ServiceManagerWhereInput";
import { ServiceManagerOrderByInput } from "./ServiceManagerOrderByInput";

export type ServiceManagerFindManyArgs = {
  where?: ServiceManagerWhereInput;
  orderBy?: Array<ServiceManagerOrderByInput>;
  skip?: number;
  take?: number;
};
