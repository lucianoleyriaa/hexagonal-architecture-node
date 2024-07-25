import { TaskModel } from "../models/Task.model";
import { DatabaseException } from "../../../../../shared/exceptions";
import { Task } from "../../../../domain/entities/Task";
import { ITaskRepository } from "../../../../domain/ports/out/TaskRepository";
import { TaskMapper } from "../mappers/TaskMapper";


export class TaskRepositoryMongo implements ITaskRepository {

  public async create(task: Task): Promise<Task> {
    try {
      const newTask = await TaskModel.create(task);

      return TaskMapper.fromDocumentToEntity(newTask);
    } catch (error: any) {
      console.log(error);
      throw new DatabaseException(error.message, error);
    }
  }

  public async getOne(id: string): Promise<Task | null> {
    try {
      const task = await TaskModel.findOne({ id: id });

      if (!task) return null;

      return TaskMapper.fromDocumentToEntity(task);
    } catch (error: any) {
      throw new DatabaseException(error.message, error);
    }
  }

  public async getAll(): Promise<Task[]> {
    try {
      const tasks = await TaskModel.find();
      return TaskMapper.fromDocumentsToEntities(tasks);
    } catch (error: any) {
      throw new DatabaseException(error.message, error);
    }
  }

  public async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async markAsCompleted(id: string): Promise<boolean> {
    try {
      const task = TaskModel.findOne({ id: id });
      
      if (!task) return false;

      await TaskModel.updateOne({ id: id }, { completed: true });

      return true;
    } catch (error: any) {
      throw new DatabaseException(error.message, error);
    }
  }

}