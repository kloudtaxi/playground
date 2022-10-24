import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ZiggyUserServiceBase } from "./base/ziggyUser.service.base";

@Injectable()
export class ZiggyUserService extends ZiggyUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
