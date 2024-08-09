import { Module } from "@nestjs/common";
import { SubtaskModuleBase } from "./base/subtask.module.base";
import { SubtaskService } from "./subtask.service";
import { SubtaskController } from "./subtask.controller";
import { SubtaskResolver } from "./subtask.resolver";

@Module({
  imports: [SubtaskModuleBase],
  controllers: [SubtaskController],
  providers: [SubtaskService, SubtaskResolver],
  exports: [SubtaskService],
})
export class SubtaskModule {}
