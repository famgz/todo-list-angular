export interface Task {
  _id?: string;
  title: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  dueHour: Date;
}

export interface CreateTask{
  title: string;
  category: string;
  dueHour: Date;
  completed: boolean;
}