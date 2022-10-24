import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ZiggyUserService } from "./ziggyUser.service";
import { ZiggyUserControllerBase } from "./base/ziggyUser.controller.base";

@swagger.ApiTags("ziggyUsers")
@common.Controller("ziggyUsers")
export class ZiggyUserController extends ZiggyUserControllerBase {
  constructor(
    protected readonly service: ZiggyUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
