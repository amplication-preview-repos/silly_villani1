import * as graphql from "@nestjs/graphql";
import { AboutUsResolverBase } from "./base/aboutUs.resolver.base";
import { AboutUs } from "./base/AboutUs";
import { AboutUsService } from "./aboutUs.service";

@graphql.Resolver(() => AboutUs)
export class AboutUsResolver extends AboutUsResolverBase {
  constructor(protected readonly service: AboutUsService) {
    super(service);
  }
}
