import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HelpService } from "./help.service";
import { HelpControllerBase } from "./base/help.controller.base";

@swagger.ApiTags("helps")
@common.Controller("helps")
export class HelpController extends HelpControllerBase {
  constructor(protected readonly service: HelpService) {
    super(service);
  }
}
