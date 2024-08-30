import * as graphql from "@nestjs/graphql";
import { ServiceManagerResolverBase } from "./base/serviceManager.resolver.base";
import { ServiceManager } from "./base/ServiceManager";
import { ServiceManagerService } from "./serviceManager.service";

@graphql.Resolver(() => ServiceManager)
export class ServiceManagerResolver extends ServiceManagerResolverBase {
  constructor(protected readonly service: ServiceManagerService) {
    super(service);
  }
}
