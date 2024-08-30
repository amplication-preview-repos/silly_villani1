import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelpServiceBase } from "./base/help.service.base";

@Injectable()
export class HelpService extends HelpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
