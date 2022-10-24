import { ZiggyUserWhereInput } from "./ZiggyUserWhereInput";
import { ZiggyUserOrderByInput } from "./ZiggyUserOrderByInput";

export type ZiggyUserFindManyArgs = {
  where?: ZiggyUserWhereInput;
  orderBy?: Array<ZiggyUserOrderByInput>;
  skip?: number;
  take?: number;
};
