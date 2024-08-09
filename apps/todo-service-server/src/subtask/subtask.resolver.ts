import * as graphql from "@nestjs/graphql";
import { SubtaskResolverBase } from "./base/subtask.resolver.base";
import { Subtask } from "./base/Subtask";
import { SubtaskService } from "./subtask.service";

@graphql.Resolver(() => Subtask)
export class SubtaskResolver extends SubtaskResolverBase {
  constructor(protected readonly service: SubtaskService) {
    super(service);
  }
}
