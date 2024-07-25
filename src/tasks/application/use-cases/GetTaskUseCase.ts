import { Task } from "../../domain/entities/Task";
import { IGetTask } from "../../domain/ports/in";
import { ITaskRepository } from "../../domain/ports/out/TaskRepository";

export class GetTaskUseCase implements IGetTask {
  constructor(
    private taskRepository: ITaskRepository,
  ) {}

  async execute(id: string): Promise<Task> {
    const task = await this.taskRepository.getOne(id);
    return task;
  }
}