import { Router } from "express";
import { TaskController } from "../controllers/TaskController";
import { CreateTaskUseCase } from "../../../../application/use-cases/CreateTaskUseCase";
import { TaskRepositoryMongo } from "../../persistance/repositories/TaskRepositoryMongo";
import { IdGeneratorService } from "../../../../../shared/services/IdGeneratorService";

export class TaskRoutes {

  public static get routes(): Router {
    const router = Router();
    const taskRepositoryMongo = new TaskRepositoryMongo(); 
    const idGeneratorService = new IdGeneratorService();
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMongo, idGeneratorService);
    const taskController = new TaskController(createTaskUseCase);

    router.
      post('/create', taskController.createTask.bind(taskController));

    return router;
  }

}