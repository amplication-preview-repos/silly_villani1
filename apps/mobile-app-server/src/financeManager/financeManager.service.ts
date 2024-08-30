import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinanceManagerServiceBase } from "./base/financeManager.service.base";

@Injectable()
export class FinanceManagerService extends FinanceManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
