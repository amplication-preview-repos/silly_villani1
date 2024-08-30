/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FinanceManagerService } from "../financeManager.service";
import { FinanceManagerCreateInput } from "./FinanceManagerCreateInput";
import { FinanceManager } from "./FinanceManager";
import { FinanceManagerFindManyArgs } from "./FinanceManagerFindManyArgs";
import { FinanceManagerWhereUniqueInput } from "./FinanceManagerWhereUniqueInput";
import { FinanceManagerUpdateInput } from "./FinanceManagerUpdateInput";

export class FinanceManagerControllerBase {
  constructor(protected readonly service: FinanceManagerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinanceManager })
  async createFinanceManager(
    @common.Body() data: FinanceManagerCreateInput
  ): Promise<FinanceManager> {
    return await this.service.createFinanceManager({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FinanceManager] })
  @ApiNestedQuery(FinanceManagerFindManyArgs)
  async financeManagers(
    @common.Req() request: Request
  ): Promise<FinanceManager[]> {
    const args = plainToClass(FinanceManagerFindManyArgs, request.query);
    return this.service.financeManagers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinanceManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async financeManager(
    @common.Param() params: FinanceManagerWhereUniqueInput
  ): Promise<FinanceManager | null> {
    const result = await this.service.financeManager({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FinanceManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFinanceManager(
    @common.Param() params: FinanceManagerWhereUniqueInput,
    @common.Body() data: FinanceManagerUpdateInput
  ): Promise<FinanceManager | null> {
    try {
      return await this.service.updateFinanceManager({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FinanceManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFinanceManager(
    @common.Param() params: FinanceManagerWhereUniqueInput
  ): Promise<FinanceManager | null> {
    try {
      return await this.service.deleteFinanceManager({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
