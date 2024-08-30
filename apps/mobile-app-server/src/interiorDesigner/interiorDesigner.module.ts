import { Module } from "@nestjs/common";
import { InteriorDesignerModuleBase } from "./base/interiorDesigner.module.base";
import { InteriorDesignerService } from "./interiorDesigner.service";
import { InteriorDesignerController } from "./interiorDesigner.controller";
import { InteriorDesignerResolver } from "./interiorDesigner.resolver";

@Module({
  imports: [InteriorDesignerModuleBase],
  controllers: [InteriorDesignerController],
  providers: [InteriorDesignerService, InteriorDesignerResolver],
  exports: [InteriorDesignerService],
})
export class InteriorDesignerModule {}
