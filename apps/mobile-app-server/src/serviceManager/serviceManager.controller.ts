import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceManagerService } from "./serviceManager.service";
import { ServiceManagerControllerBase } from "./base/serviceManager.controller.base";

@swagger.ApiTags("serviceManagers")
@common.Controller("serviceManagers")
export class ServiceManagerController extends ServiceManagerControllerBase {
  constructor(protected readonly service: ServiceManagerService) {
    super(service);
  }
}
