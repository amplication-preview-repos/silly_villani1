import { Module } from "@nestjs/common";
import { AboutUsModuleBase } from "./base/aboutUs.module.base";
import { AboutUsService } from "./aboutUs.service";
import { AboutUsController } from "./aboutUs.controller";
import { AboutUsResolver } from "./aboutUs.resolver";

@Module({
  imports: [AboutUsModuleBase],
  controllers: [AboutUsController],
  providers: [AboutUsService, AboutUsResolver],
  exports: [AboutUsService],
})
export class AboutUsModule {}
