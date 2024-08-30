import * as graphql from "@nestjs/graphql";
import { InventoryManagerResolverBase } from "./base/inventoryManager.resolver.base";
import { InventoryManager } from "./base/InventoryManager";
import { InventoryManagerService } from "./inventoryManager.service";

@graphql.Resolver(() => InventoryManager)
export class InventoryManagerResolver extends InventoryManagerResolverBase {
  constructor(protected readonly service: InventoryManagerService) {
    super(service);
  }
}
