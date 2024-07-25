import { NotFoundException } from "../../domain/exceptions";
import { MarkTaskAsCompleted } from "../../domain/ports/in";
import { ITaskRepository } from "../../domain/ports/out/TaskRepository";

export class MarkTaskAsCompletedUseCase implements MarkTaskAsCompleted {

  constructor(
    private readonly taskRepository: ITaskRepository,
  ) {}

  async execute(id: string): Promise<boolean> {
    const task = await this.taskRepository.getOne(id);

    if (!task) {
      throw new NotFoundException(`Task with id ${ id } not found!`);
    }

    await this.taskRepository.markAsCompleted(id);

    return true;
  }
  

}