export class Task {
  public id: string;
  public title: string;
  public description: string;
  public createdAt: Date;
  public completed: boolean;

  constructor(id: string, title: string, description: string, createdAt: Date, completed: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.completed = completed;
  }
}