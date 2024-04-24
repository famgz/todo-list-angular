export interface Task {
  id: number;
  title: string;
  category: string;
  createdAt: Date;
  dueDate: Date;
  completionDate?: Date;
  completed: boolean;
}
