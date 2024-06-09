import type { Lists } from ".keystone/types";
import { UserSchema } from "./src/models/User";
import { list } from "@keystone-6/core";
import { GenerationRecordSchema } from "./src/models/GenerationRecord";
import { BalanceSchema } from "./src/models/Balance";

export const lists: Lists = {
  User: list(UserSchema as any),
  GenerationRecord: list(GenerationRecordSchema as any),
  Balance: list(BalanceSchema as any),
};
