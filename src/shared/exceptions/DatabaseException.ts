
export class DatabaseException extends Error {
  public error: any;

  constructor(error: any, message: string) {
    super(message);
    this.error = error;
  }

}