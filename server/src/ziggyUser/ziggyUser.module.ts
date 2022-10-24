import { Module } from "@nestjs/common";
import { ZiggyUserModuleBase } from "./base/ziggyUser.module.base";
import { ZiggyUserService } from "./ziggyUser.service";
import { ZiggyUserController } from "./ziggyUser.controller";
import { ZiggyUserResolver } from "./ziggyUser.resolver";

@Module({
  imports: [ZiggyUserModuleBase],
  controllers: [ZiggyUserController],
  providers: [ZiggyUserService, ZiggyUserResolver],
  exports: [ZiggyUserService],
})
export class ZiggyUserModule {}
