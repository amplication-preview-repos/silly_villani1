import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { AdministratorModule } from "./administrator/administrator.module";
import { BookingModule } from "./booking/booking.module";
import { PaymentModule } from "./payment/payment.module";
import { ServiceManagerModule } from "./serviceManager/serviceManager.module";
import { HelpModule } from "./help/help.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { ReportModule } from "./report/report.module";
import { DispatchManagerModule } from "./dispatchManager/dispatchManager.module";
import { SupplierModule } from "./supplier/supplier.module";
import { DriverModule } from "./driver/driver.module";
import { InventoryManagerModule } from "./inventoryManager/inventoryManager.module";
import { ContactModule } from "./contact/contact.module";
import { ProductModule } from "./product/product.module";
import { SearchModule } from "./search/search.module";
import { SupervisorModule } from "./supervisor/supervisor.module";
import { FinanceManagerModule } from "./financeManager/financeManager.module";
import { QuoteModule } from "./quote/quote.module";
import { AboutUsModule } from "./aboutUs/aboutUs.module";
import { OrderModule } from "./order/order.module";
import { InteriorDesignerModule } from "./interiorDesigner/interiorDesigner.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CustomerModule,
    AdministratorModule,
    BookingModule,
    PaymentModule,
    ServiceManagerModule,
    HelpModule,
    FeedbackModule,
    ReportModule,
    DispatchManagerModule,
    SupplierModule,
    DriverModule,
    InventoryManagerModule,
    ContactModule,
    ProductModule,
    SearchModule,
    SupervisorModule,
    FinanceManagerModule,
    QuoteModule,
    AboutUsModule,
    OrderModule,
    InteriorDesignerModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
