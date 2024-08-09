import { SubtaskWhereInput } from "./SubtaskWhereInput";
import { SubtaskOrderByInput } from "./SubtaskOrderByInput";

export type SubtaskFindManyArgs = {
  where?: SubtaskWhereInput;
  orderBy?: Array<SubtaskOrderByInput>;
  skip?: number;
  take?: number;
};
