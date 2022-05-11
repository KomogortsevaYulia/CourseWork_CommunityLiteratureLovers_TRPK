export interface User {
  email: string;
  token: string;
  username: string;
  fio:string;
  is_superuser?: boolean;
}
