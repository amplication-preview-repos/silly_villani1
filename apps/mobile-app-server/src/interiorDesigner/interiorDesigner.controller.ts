import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InteriorDesignerService } from "./interiorDesigner.service";
import { InteriorDesignerControllerBase } from "./base/interiorDesigner.controller.base";

@swagger.ApiTags("interiorDesigners")
@common.Controller("interiorDesigners")
export class InteriorDesignerController extends InteriorDesignerControllerBase {
  constructor(protected readonly service: InteriorDesignerService) {
    super(service);
  }
}
