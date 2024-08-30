/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ServiceManager } from "./ServiceManager";
import { ServiceManagerCountArgs } from "./ServiceManagerCountArgs";
import { ServiceManagerFindManyArgs } from "./ServiceManagerFindManyArgs";
import { ServiceManagerFindUniqueArgs } from "./ServiceManagerFindUniqueArgs";
import { DeleteServiceManagerArgs } from "./DeleteServiceManagerArgs";
import { ServiceManagerService } from "../serviceManager.service";
@graphql.Resolver(() => ServiceManager)
export class ServiceManagerResolverBase {
  constructor(protected readonly service: ServiceManagerService) {}

  async _serviceManagersMeta(
    @graphql.Args() args: ServiceManagerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ServiceManager])
  async serviceManagers(
    @graphql.Args() args: ServiceManagerFindManyArgs
  ): Promise<ServiceManager[]> {
    return this.service.serviceManagers(args);
  }

  @graphql.Query(() => ServiceManager, { nullable: true })
  async serviceManager(
    @graphql.Args() args: ServiceManagerFindUniqueArgs
  ): Promise<ServiceManager | null> {
    const result = await this.service.serviceManager(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ServiceManager)
  async deleteServiceManager(
    @graphql.Args() args: DeleteServiceManagerArgs
  ): Promise<ServiceManager | null> {
    try {
      return await this.service.deleteServiceManager(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
