import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinanceManagerService } from "./financeManager.service";
import { FinanceManagerControllerBase } from "./base/financeManager.controller.base";

@swagger.ApiTags("financeManagers")
@common.Controller("financeManagers")
export class FinanceManagerController extends FinanceManagerControllerBase {
  constructor(protected readonly service: FinanceManagerService) {
    super(service);
  }
}
