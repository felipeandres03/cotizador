import { type IdGenerator } from "../../../application/shared/ports/IdGenerator.js";
import { randomUUID } from "node:crypto";

export class RandomIdGenerator implements IdGenerator {
  generate(): string {
    return randomUUID();
  }
}
