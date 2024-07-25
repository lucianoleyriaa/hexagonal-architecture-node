import { NextFunction, Request, Response } from "express";
import { CreateTaskUseCase } from '../../../../application/use-cases';


export class TaskController {

  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase
  ) {}

  public async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, completed } = req.body;

      const task = await this.createTaskUseCase.execute(title, description, completed);

      res.status(201).json({
        status: 'ok',
        task,
      });
    } catch (error) {
      next(error);
    }
  }

}