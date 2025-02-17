export type User = {
  id: string;
  email: string;
  password: string;
};

export type TaskContents = {
  id: string;
  description: string;
};

export const tasksList: string[] = [];
