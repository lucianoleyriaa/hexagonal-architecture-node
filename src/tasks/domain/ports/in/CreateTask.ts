import { Task } from "../../entities/Task";

export interface ICreateTask {
  execute(title: string, description: string, completed: boolean): Promise<Task>;
}