import { Module } from "@nestjs/common";
import { InventoryManagerModuleBase } from "./base/inventoryManager.module.base";
import { InventoryManagerService } from "./inventoryManager.service";
import { InventoryManagerController } from "./inventoryManager.controller";
import { InventoryManagerResolver } from "./inventoryManager.resolver";

@Module({
  imports: [InventoryManagerModuleBase],
  controllers: [InventoryManagerController],
  providers: [InventoryManagerService, InventoryManagerResolver],
  exports: [InventoryManagerService],
})
export class InventoryManagerModule {}
