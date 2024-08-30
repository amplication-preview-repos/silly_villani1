import { Module } from "@nestjs/common";
import { HelpModuleBase } from "./base/help.module.base";
import { HelpService } from "./help.service";
import { HelpController } from "./help.controller";
import { HelpResolver } from "./help.resolver";

@Module({
  imports: [HelpModuleBase],
  controllers: [HelpController],
  providers: [HelpService, HelpResolver],
  exports: [HelpService],
})
export class HelpModule {}
