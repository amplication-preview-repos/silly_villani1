import { Module } from "@nestjs/common";
import { SupervisorModuleBase } from "./base/supervisor.module.base";
import { SupervisorService } from "./supervisor.service";
import { SupervisorController } from "./supervisor.controller";
import { SupervisorResolver } from "./supervisor.resolver";

@Module({
  imports: [SupervisorModuleBase],
  controllers: [SupervisorController],
  providers: [SupervisorService, SupervisorResolver],
  exports: [SupervisorService],
})
export class SupervisorModule {}
