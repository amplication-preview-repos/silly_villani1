import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceManagerServiceBase } from "./base/serviceManager.service.base";

@Injectable()
export class ServiceManagerService extends ServiceManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
