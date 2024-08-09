import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubtaskServiceBase } from "./base/subtask.service.base";

@Injectable()
export class SubtaskService extends SubtaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
