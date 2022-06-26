export type User = {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
};

export type InitialState = {
  user: User | null;
  auth: boolean;
};
