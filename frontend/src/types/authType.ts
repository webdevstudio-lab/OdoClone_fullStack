export type RegisterType = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export interface UserType {
  id: string;
  email: string;
  name: string;
  role: string;
  createAt: Date;
  updateAt: Date;
}
