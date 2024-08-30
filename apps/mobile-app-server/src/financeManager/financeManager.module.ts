import { Module } from "@nestjs/common";
import { FinanceManagerModuleBase } from "./base/financeManager.module.base";
import { FinanceManagerService } from "./financeManager.service";
import { FinanceManagerController } from "./financeManager.controller";
import { FinanceManagerResolver } from "./financeManager.resolver";

@Module({
  imports: [FinanceManagerModuleBase],
  controllers: [FinanceManagerController],
  providers: [FinanceManagerService, FinanceManagerResolver],
  exports: [FinanceManagerService],
})
export class FinanceManagerModule {}
