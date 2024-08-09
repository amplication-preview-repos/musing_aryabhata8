import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubtaskService } from "./subtask.service";
import { SubtaskControllerBase } from "./base/subtask.controller.base";

@swagger.ApiTags("subtasks")
@common.Controller("subtasks")
export class SubtaskController extends SubtaskControllerBase {
  constructor(protected readonly service: SubtaskService) {
    super(service);
  }
}
