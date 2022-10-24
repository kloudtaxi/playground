import { ZiggyUser as TZiggyUser } from "../api/ziggyUser/ZiggyUser";

export const ZIGGYUSER_TITLE_FIELD = "id";

export const ZiggyUserTitle = (record: TZiggyUser): string => {
  return record.id || record.id;
};
