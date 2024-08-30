import { Module } from "@nestjs/common";
import { DispatchManagerModuleBase } from "./base/dispatchManager.module.base";
import { DispatchManagerService } from "./dispatchManager.service";
import { DispatchManagerController } from "./dispatchManager.controller";
import { DispatchManagerResolver } from "./dispatchManager.resolver";

@Module({
  imports: [DispatchManagerModuleBase],
  controllers: [DispatchManagerController],
  providers: [DispatchManagerService, DispatchManagerResolver],
  exports: [DispatchManagerService],
})
export class DispatchManagerModule {}
