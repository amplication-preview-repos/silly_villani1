import { HelpWhereInput } from "./HelpWhereInput";
import { HelpOrderByInput } from "./HelpOrderByInput";

export type HelpFindManyArgs = {
  where?: HelpWhereInput;
  orderBy?: Array<HelpOrderByInput>;
  skip?: number;
  take?: number;
};
