export type UserData = {
  name?: string;
  email?: string;
  imageUrl?: string;
};

export type User = {
  data: UserData;
  token: string | null;
};

export type RegisterData = {
  name?: string;
  email?: string;
  password?: string;
};

export type LoginData = {
  email?: string;
  password?: string;
  remember: boolean;
};
