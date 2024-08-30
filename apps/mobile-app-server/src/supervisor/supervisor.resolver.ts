import * as graphql from "@nestjs/graphql";
import { SupervisorResolverBase } from "./base/supervisor.resolver.base";
import { Supervisor } from "./base/Supervisor";
import { SupervisorService } from "./supervisor.service";

@graphql.Resolver(() => Supervisor)
export class SupervisorResolver extends SupervisorResolverBase {
  constructor(protected readonly service: SupervisorService) {
    super(service);
  }
}
