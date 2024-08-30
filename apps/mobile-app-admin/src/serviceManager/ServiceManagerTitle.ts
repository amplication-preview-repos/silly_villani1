import { ServiceManager as TServiceManager } from "../api/serviceManager/ServiceManager";

export const SERVICEMANAGER_TITLE_FIELD = "id";

export const ServiceManagerTitle = (record: TServiceManager): string => {
  return record.id?.toString() || String(record.id);
};
