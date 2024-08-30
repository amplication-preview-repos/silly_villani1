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
import { InventoryManagerService } from "../inventoryManager.service";
import { InventoryManagerCreateInput } from "./InventoryManagerCreateInput";
import { InventoryManager } from "./InventoryManager";
import { InventoryManagerFindManyArgs } from "./InventoryManagerFindManyArgs";
import { InventoryManagerWhereUniqueInput } from "./InventoryManagerWhereUniqueInput";
import { InventoryManagerUpdateInput } from "./InventoryManagerUpdateInput";

export class InventoryManagerControllerBase {
  constructor(protected readonly service: InventoryManagerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InventoryManager })
  async createInventoryManager(
    @common.Body() data: InventoryManagerCreateInput
  ): Promise<InventoryManager> {
    return await this.service.createInventoryManager({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InventoryManager] })
  @ApiNestedQuery(InventoryManagerFindManyArgs)
  async inventoryManagers(
    @common.Req() request: Request
  ): Promise<InventoryManager[]> {
    const args = plainToClass(InventoryManagerFindManyArgs, request.query);
    return this.service.inventoryManagers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InventoryManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async inventoryManager(
    @common.Param() params: InventoryManagerWhereUniqueInput
  ): Promise<InventoryManager | null> {
    const result = await this.service.inventoryManager({
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
  @swagger.ApiOkResponse({ type: InventoryManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInventoryManager(
    @common.Param() params: InventoryManagerWhereUniqueInput,
    @common.Body() data: InventoryManagerUpdateInput
  ): Promise<InventoryManager | null> {
    try {
      return await this.service.updateInventoryManager({
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
  @swagger.ApiOkResponse({ type: InventoryManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInventoryManager(
    @common.Param() params: InventoryManagerWhereUniqueInput
  ): Promise<InventoryManager | null> {
    try {
      return await this.service.deleteInventoryManager({
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
