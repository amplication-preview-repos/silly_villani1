import * as graphql from "@nestjs/graphql";
import { InteriorDesignerResolverBase } from "./base/interiorDesigner.resolver.base";
import { InteriorDesigner } from "./base/InteriorDesigner";
import { InteriorDesignerService } from "./interiorDesigner.service";

@graphql.Resolver(() => InteriorDesigner)
export class InteriorDesignerResolver extends InteriorDesignerResolverBase {
  constructor(protected readonly service: InteriorDesignerService) {
    super(service);
  }
}
