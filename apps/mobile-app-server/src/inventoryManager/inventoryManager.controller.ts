import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryManagerService } from "./inventoryManager.service";
import { InventoryManagerControllerBase } from "./base/inventoryManager.controller.base";

@swagger.ApiTags("inventoryManagers")
@common.Controller("inventoryManagers")
export class InventoryManagerController extends InventoryManagerControllerBase {
  constructor(protected readonly service: InventoryManagerService) {
    super(service);
  }
}
