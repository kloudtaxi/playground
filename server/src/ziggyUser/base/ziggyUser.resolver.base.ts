/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteZiggyUserArgs } from "./DeleteZiggyUserArgs";
import { ZiggyUserFindManyArgs } from "./ZiggyUserFindManyArgs";
import { ZiggyUserFindUniqueArgs } from "./ZiggyUserFindUniqueArgs";
import { ZiggyUser } from "./ZiggyUser";
import { ZiggyUserService } from "../ziggyUser.service";

@graphql.Resolver(() => ZiggyUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ZiggyUserResolverBase {
  constructor(
    protected readonly service: ZiggyUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ZiggyUser",
    action: "read",
    possession: "any",
  })
  async _ziggyUsersMeta(
    @graphql.Args() args: ZiggyUserFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ZiggyUser])
  @nestAccessControl.UseRoles({
    resource: "ZiggyUser",
    action: "read",
    possession: "any",
  })
  async ziggyUsers(
    @graphql.Args() args: ZiggyUserFindManyArgs
  ): Promise<ZiggyUser[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ZiggyUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ZiggyUser",
    action: "read",
    possession: "own",
  })
  async ziggyUser(
    @graphql.Args() args: ZiggyUserFindUniqueArgs
  ): Promise<ZiggyUser | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ZiggyUser)
  @nestAccessControl.UseRoles({
    resource: "ZiggyUser",
    action: "delete",
    possession: "any",
  })
  async deleteZiggyUser(
    @graphql.Args() args: DeleteZiggyUserArgs
  ): Promise<ZiggyUser | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
