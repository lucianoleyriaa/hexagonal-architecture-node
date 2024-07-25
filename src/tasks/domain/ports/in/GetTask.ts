import { Task } from "../../entities/Task";

export interface IGetTask {
  execute(id: string): Promise<Task>
}