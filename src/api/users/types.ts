type UserRole = "admin" | "user" | undefined;

export interface IUser {
  _id: string | undefined;
  username: string;
  email: string;
  password: string;
  is_admin: boolean;
  role?: UserRole;
}
