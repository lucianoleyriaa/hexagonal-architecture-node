import * as uuid from 'uuid';
import { IIdGenerator } from "../../tasks/domain/ports/out/IdGenerator";

export class IdGeneratorService implements IIdGenerator {

  generateId(): string {
    return uuid.v4();
  }

}