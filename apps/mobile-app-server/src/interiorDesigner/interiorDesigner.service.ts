import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InteriorDesignerServiceBase } from "./base/interiorDesigner.service.base";

@Injectable()
export class InteriorDesignerService extends InteriorDesignerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
