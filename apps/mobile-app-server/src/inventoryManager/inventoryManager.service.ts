import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryManagerServiceBase } from "./base/inventoryManager.service.base";

@Injectable()
export class InventoryManagerService extends InventoryManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
