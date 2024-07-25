export interface MarkTaskAsCompleted {
  execute(id: string): Promise<boolean>
}