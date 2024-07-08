export interface UserData {
  email?: string;
  userName?: string;
  password: string;
  postcode: string;
  street: string;
  streetnumber: string;
  country: string;
  loggedin: boolean;
  confirmed: boolean;
  role: 'user' | 'admin';
}
