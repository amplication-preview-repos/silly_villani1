import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DispatchManagerService } from "./dispatchManager.service";
import { DispatchManagerControllerBase } from "./base/dispatchManager.controller.base";

@swagger.ApiTags("dispatchManagers")
@common.Controller("dispatchManagers")
export class DispatchManagerController extends DispatchManagerControllerBase {
  constructor(protected readonly service: DispatchManagerService) {
    super(service);
  }
}
