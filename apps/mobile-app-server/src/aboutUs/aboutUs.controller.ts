import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AboutUsService } from "./aboutUs.service";
import { AboutUsControllerBase } from "./base/aboutUs.controller.base";

@swagger.ApiTags("aboutuses")
@common.Controller("aboutuses")
export class AboutUsController extends AboutUsControllerBase {
  constructor(protected readonly service: AboutUsService) {
    super(service);
  }
}
