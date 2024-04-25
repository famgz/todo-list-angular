export interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  dueHour: Date;
}

export interface AddTask{
  title: string;
  category: string;
  dueHour: Date;
}