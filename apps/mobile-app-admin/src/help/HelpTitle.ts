import { Help as THelp } from "../api/help/Help";

export const HELP_TITLE_FIELD = "id";

export const HelpTitle = (record: THelp): string => {
  return record.id?.toString() || String(record.id);
};
