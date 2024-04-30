export interface Task {
  _id?: string;
  title: string;
  category: string;
  completed: boolean;
  // createdAt: Date;
  dueHour: string;
}

export interface CreateTask {
  title: string;
  category: string;
  dueHour: string;
  completed: boolean;
}
