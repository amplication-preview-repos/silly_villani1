import * as graphql from "@nestjs/graphql";
import { FinanceManagerResolverBase } from "./base/financeManager.resolver.base";
import { FinanceManager } from "./base/FinanceManager";
import { FinanceManagerService } from "./financeManager.service";

@graphql.Resolver(() => FinanceManager)
export class FinanceManagerResolver extends FinanceManagerResolverBase {
  constructor(protected readonly service: FinanceManagerService) {
    super(service);
  }
}
