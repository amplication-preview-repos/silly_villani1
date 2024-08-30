import { InteriorDesigner as TInteriorDesigner } from "../api/interiorDesigner/InteriorDesigner";

export const INTERIORDESIGNER_TITLE_FIELD = "id";

export const InteriorDesignerTitle = (record: TInteriorDesigner): string => {
  return record.id?.toString() || String(record.id);
};
