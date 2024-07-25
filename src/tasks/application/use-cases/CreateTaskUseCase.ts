import { Task } from "../../domain/entities/Task";
import { ICreateTask } from "../../domain/ports/in/CreateTask";
import { IIdGenerator } from "../../domain/ports/out/IdGenerator";
import { ITaskRepository } from "../../domain/ports/out/TaskRepository";


export class CreateTaskUseCase implements ICreateTask {

  constructor(
    private taskRepository: ITaskRepository,
    private idGenerator: IIdGenerator,
  ) {}

  async execute(title: string, description: string, completed: boolean): Promise<Task> {
    const id = this.idGenerator.generateId();

    const task = new Task(id, title, description, new Date(), completed);

    return await this.taskRepository.create(task);
  }


}