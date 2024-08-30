import * as graphql from "@nestjs/graphql";
import { HelpResolverBase } from "./base/help.resolver.base";
import { Help } from "./base/Help";
import { HelpService } from "./help.service";

@graphql.Resolver(() => Help)
export class HelpResolver extends HelpResolverBase {
  constructor(protected readonly service: HelpService) {
    super(service);
  }
}
