import { Task } from "../../entities/Task";

export interface ITaskRepository {
  create(task: Task): Promise<Task>;
  getOne(id: string): Promise<Task | null>;
  getAll(): Promise<Task[]>;
  delete(id: string): Promise<void>;
  markAsCompleted(id: string): Promise<boolean>;
}