import * as graphql from "@nestjs/graphql";
import { DispatchManagerResolverBase } from "./base/dispatchManager.resolver.base";
import { DispatchManager } from "./base/DispatchManager";
import { DispatchManagerService } from "./dispatchManager.service";

@graphql.Resolver(() => DispatchManager)
export class DispatchManagerResolver extends DispatchManagerResolverBase {
  constructor(protected readonly service: DispatchManagerService) {
    super(service);
  }
}
