/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Help as PrismaHelp } from "@prisma/client";

export class HelpServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HelpCountArgs, "select">): Promise<number> {
    return this.prisma.help.count(args);
  }

  async helps(args: Prisma.HelpFindManyArgs): Promise<PrismaHelp[]> {
    return this.prisma.help.findMany(args);
  }
  async help(args: Prisma.HelpFindUniqueArgs): Promise<PrismaHelp | null> {
    return this.prisma.help.findUnique(args);
  }
  async createHelp(args: Prisma.HelpCreateArgs): Promise<PrismaHelp> {
    return this.prisma.help.create(args);
  }
  async updateHelp(args: Prisma.HelpUpdateArgs): Promise<PrismaHelp> {
    return this.prisma.help.update(args);
  }
  async deleteHelp(args: Prisma.HelpDeleteArgs): Promise<PrismaHelp> {
    return this.prisma.help.delete(args);
  }
}
