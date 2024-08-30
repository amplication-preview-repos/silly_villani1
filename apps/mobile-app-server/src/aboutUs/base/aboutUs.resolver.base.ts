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
import { AboutUs } from "./AboutUs";
import { AboutUsCountArgs } from "./AboutUsCountArgs";
import { AboutUsFindManyArgs } from "./AboutUsFindManyArgs";
import { AboutUsFindUniqueArgs } from "./AboutUsFindUniqueArgs";
import { DeleteAboutUsArgs } from "./DeleteAboutUsArgs";
import { AboutUsService } from "../aboutUs.service";
@graphql.Resolver(() => AboutUs)
export class AboutUsResolverBase {
  constructor(protected readonly service: AboutUsService) {}

  async _aboutusesMeta(
    @graphql.Args() args: AboutUsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AboutUs])
  async aboutuses(
    @graphql.Args() args: AboutUsFindManyArgs
  ): Promise<AboutUs[]> {
    return this.service.aboutuses(args);
  }

  @graphql.Query(() => AboutUs, { nullable: true })
  async aboutUs(
    @graphql.Args() args: AboutUsFindUniqueArgs
  ): Promise<AboutUs | null> {
    const result = await this.service.aboutUs(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AboutUs)
  async deleteAboutUs(
    @graphql.Args() args: DeleteAboutUsArgs
  ): Promise<AboutUs | null> {
    try {
      return await this.service.deleteAboutUs(args);
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