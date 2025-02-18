export type User = {
  id: string;
  email: string;
  password: string;
};

export type TaskContents = {
  id: string;
  user_id: string;
  description: string;
  date: Date;
};

export const tasksList: string[] = [];
