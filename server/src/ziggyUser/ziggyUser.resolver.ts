import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ZiggyUserResolverBase } from "./base/ziggyUser.resolver.base";
import { ZiggyUser } from "./base/ZiggyUser";
import { ZiggyUserService } from "./ziggyUser.service";

@graphql.Resolver(() => ZiggyUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ZiggyUserResolver extends ZiggyUserResolverBase {
  constructor(
    protected readonly service: ZiggyUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
