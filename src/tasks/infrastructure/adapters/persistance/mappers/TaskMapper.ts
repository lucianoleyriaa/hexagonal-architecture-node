// import { Document } from "mongoose";
import { Task } from '../../../../domain/entities/Task';
import { TaskModel } from '../models/Task.model';


export class TaskMapper {

  static fromDocumentToEntity(task: any): Task {
    return new Task(
      task.id,
      task.title,
      task.description,
      task.createdAt,
      task.completed
    );
  }

  static fromDocumentsToEntities(tasks: any[]): Task[] {
    return tasks.map(task => {
      return new Task(
        task.id,
        task.title,
        task.description,
        task.createdAt,
        task.completed
      )
    })
  }
}