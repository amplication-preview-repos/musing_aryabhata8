import { Subtask as TSubtask } from "../api/subtask/Subtask";

export const SUBTASK_TITLE_FIELD = "id";

export const SubtaskTitle = (record: TSubtask): string => {
  return record.id?.toString() || String(record.id);
};
