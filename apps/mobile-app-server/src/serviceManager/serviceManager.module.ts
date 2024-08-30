import { Module } from "@nestjs/common";
import { ServiceManagerModuleBase } from "./base/serviceManager.module.base";
import { ServiceManagerService } from "./serviceManager.service";
import { ServiceManagerController } from "./serviceManager.controller";
import { ServiceManagerResolver } from "./serviceManager.resolver";

@Module({
  imports: [ServiceManagerModuleBase],
  controllers: [ServiceManagerController],
  providers: [ServiceManagerService, ServiceManagerResolver],
  exports: [ServiceManagerService],
})
export class ServiceManagerModule {}
