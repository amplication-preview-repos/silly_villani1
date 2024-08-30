import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DispatchManagerServiceBase } from "./base/dispatchManager.service.base";

@Injectable()
export class DispatchManagerService extends DispatchManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
