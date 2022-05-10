export interface User {
  email: string;
  token: string;
  username: string;
  fio:string;
  bio: string;
  image: string;
  is_superuser?: boolean;
}
