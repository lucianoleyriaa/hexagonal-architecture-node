import { Task } from "../../domain/entities/Task";
import { IGetTasks } from "../../domain/ports/in";
import { ITaskRepository } from "../../domain/ports/out/TaskRepository";

export class GetTasksUseCase implements IGetTasks {

  constructor(
    private taskRepository: ITaskRepository
  ) {}

  async execute(): Promise<Task[]> {
    const tasks = await this.taskRepository.getAll();
    return tasks;
  }

}