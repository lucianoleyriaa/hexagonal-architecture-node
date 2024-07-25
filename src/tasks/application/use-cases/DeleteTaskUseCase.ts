import { IDeleteTask } from "../../domain/ports/in";
import { ITaskRepository } from "../../domain/ports/out/TaskRepository";

export class DeleteTaskUseCase implements IDeleteTask {

  constructor(
    private taskRepository: ITaskRepository,
  ) {}

  execute(id: string): void {
    this.taskRepository.delete(id);
  }
}