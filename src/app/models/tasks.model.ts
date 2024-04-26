export interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  dueHour: Date;
}
