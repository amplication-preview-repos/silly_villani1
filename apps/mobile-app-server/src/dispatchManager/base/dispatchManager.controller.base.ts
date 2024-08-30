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
import { DispatchManagerService } from "../dispatchManager.service";
import { DispatchManagerCreateInput } from "./DispatchManagerCreateInput";
import { DispatchManager } from "./DispatchManager";
import { DispatchManagerFindManyArgs } from "./DispatchManagerFindManyArgs";
import { DispatchManagerWhereUniqueInput } from "./DispatchManagerWhereUniqueInput";
import { DispatchManagerUpdateInput } from "./DispatchManagerUpdateInput";

export class DispatchManagerControllerBase {
  constructor(protected readonly service: DispatchManagerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DispatchManager })
  async createDispatchManager(
    @common.Body() data: DispatchManagerCreateInput
  ): Promise<DispatchManager> {
    return await this.service.createDispatchManager({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DispatchManager] })
  @ApiNestedQuery(DispatchManagerFindManyArgs)
  async dispatchManagers(
    @common.Req() request: Request
  ): Promise<DispatchManager[]> {
    const args = plainToClass(DispatchManagerFindManyArgs, request.query);
    return this.service.dispatchManagers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DispatchManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dispatchManager(
    @common.Param() params: DispatchManagerWhereUniqueInput
  ): Promise<DispatchManager | null> {
    const result = await this.service.dispatchManager({
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
  @swagger.ApiOkResponse({ type: DispatchManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDispatchManager(
    @common.Param() params: DispatchManagerWhereUniqueInput,
    @common.Body() data: DispatchManagerUpdateInput
  ): Promise<DispatchManager | null> {
    try {
      return await this.service.updateDispatchManager({
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
  @swagger.ApiOkResponse({ type: DispatchManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDispatchManager(
    @common.Param() params: DispatchManagerWhereUniqueInput
  ): Promise<DispatchManager | null> {
    try {
      return await this.service.deleteDispatchManager({
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
