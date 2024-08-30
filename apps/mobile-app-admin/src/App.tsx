import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AdministratorList } from "./administrator/AdministratorList";
import { AdministratorCreate } from "./administrator/AdministratorCreate";
import { AdministratorEdit } from "./administrator/AdministratorEdit";
import { AdministratorShow } from "./administrator/AdministratorShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ServiceManagerList } from "./serviceManager/ServiceManagerList";
import { ServiceManagerCreate } from "./serviceManager/ServiceManagerCreate";
import { ServiceManagerEdit } from "./serviceManager/ServiceManagerEdit";
import { ServiceManagerShow } from "./serviceManager/ServiceManagerShow";
import { HelpList } from "./help/HelpList";
import { HelpCreate } from "./help/HelpCreate";
import { HelpEdit } from "./help/HelpEdit";
import { HelpShow } from "./help/HelpShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { DispatchManagerList } from "./dispatchManager/DispatchManagerList";
import { DispatchManagerCreate } from "./dispatchManager/DispatchManagerCreate";
import { DispatchManagerEdit } from "./dispatchManager/DispatchManagerEdit";
import { DispatchManagerShow } from "./dispatchManager/DispatchManagerShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { InventoryManagerList } from "./inventoryManager/InventoryManagerList";
import { InventoryManagerCreate } from "./inventoryManager/InventoryManagerCreate";
import { InventoryManagerEdit } from "./inventoryManager/InventoryManagerEdit";
import { InventoryManagerShow } from "./inventoryManager/InventoryManagerShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { SearchList } from "./search/SearchList";
import { SearchCreate } from "./search/SearchCreate";
import { SearchEdit } from "./search/SearchEdit";
import { SearchShow } from "./search/SearchShow";
import { SupervisorList } from "./supervisor/SupervisorList";
import { SupervisorCreate } from "./supervisor/SupervisorCreate";
import { SupervisorEdit } from "./supervisor/SupervisorEdit";
import { SupervisorShow } from "./supervisor/SupervisorShow";
import { FinanceManagerList } from "./financeManager/FinanceManagerList";
import { FinanceManagerCreate } from "./financeManager/FinanceManagerCreate";
import { FinanceManagerEdit } from "./financeManager/FinanceManagerEdit";
import { FinanceManagerShow } from "./financeManager/FinanceManagerShow";
import { QuoteList } from "./quote/QuoteList";
import { QuoteCreate } from "./quote/QuoteCreate";
import { QuoteEdit } from "./quote/QuoteEdit";
import { QuoteShow } from "./quote/QuoteShow";
import { AboutUsList } from "./aboutUs/AboutUsList";
import { AboutUsCreate } from "./aboutUs/AboutUsCreate";
import { AboutUsEdit } from "./aboutUs/AboutUsEdit";
import { AboutUsShow } from "./aboutUs/AboutUsShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { InteriorDesignerList } from "./interiorDesigner/InteriorDesignerList";
import { InteriorDesignerCreate } from "./interiorDesigner/InteriorDesignerCreate";
import { InteriorDesignerEdit } from "./interiorDesigner/InteriorDesignerEdit";
import { InteriorDesignerShow } from "./interiorDesigner/InteriorDesignerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MobileApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Administrator"
          list={AdministratorList}
          edit={AdministratorEdit}
          create={AdministratorCreate}
          show={AdministratorShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="ServiceManager"
          list={ServiceManagerList}
          edit={ServiceManagerEdit}
          create={ServiceManagerCreate}
          show={ServiceManagerShow}
        />
        <Resource
          name="Help"
          list={HelpList}
          edit={HelpEdit}
          create={HelpCreate}
          show={HelpShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="DispatchManager"
          list={DispatchManagerList}
          edit={DispatchManagerEdit}
          create={DispatchManagerCreate}
          show={DispatchManagerShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="InventoryManager"
          list={InventoryManagerList}
          edit={InventoryManagerEdit}
          create={InventoryManagerCreate}
          show={InventoryManagerShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Search"
          list={SearchList}
          edit={SearchEdit}
          create={SearchCreate}
          show={SearchShow}
        />
        <Resource
          name="Supervisor"
          list={SupervisorList}
          edit={SupervisorEdit}
          create={SupervisorCreate}
          show={SupervisorShow}
        />
        <Resource
          name="FinanceManager"
          list={FinanceManagerList}
          edit={FinanceManagerEdit}
          create={FinanceManagerCreate}
          show={FinanceManagerShow}
        />
        <Resource
          name="Quote"
          list={QuoteList}
          edit={QuoteEdit}
          create={QuoteCreate}
          show={QuoteShow}
        />
        <Resource
          name="AboutUs"
          list={AboutUsList}
          edit={AboutUsEdit}
          create={AboutUsCreate}
          show={AboutUsShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="InteriorDesigner"
          list={InteriorDesignerList}
          edit={InteriorDesignerEdit}
          create={InteriorDesignerCreate}
          show={InteriorDesignerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
