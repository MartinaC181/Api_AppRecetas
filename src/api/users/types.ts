type UserRole = "admin" | "user" | undefined;

export interface IUser {
  _id: string | undefined;
  user_name: string;
  email: string;
  password: string;
  role: UserRole;
}
