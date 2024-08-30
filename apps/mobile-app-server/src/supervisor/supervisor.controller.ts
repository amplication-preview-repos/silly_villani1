import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupervisorService } from "./supervisor.service";
import { SupervisorControllerBase } from "./base/supervisor.controller.base";

@swagger.ApiTags("supervisors")
@common.Controller("supervisors")
export class SupervisorController extends SupervisorControllerBase {
  constructor(protected readonly service: SupervisorService) {
    super(service);
  }
}
