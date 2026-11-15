import { Users } from './Users';
 
export interface LoginResponse {

  success: boolean;
  message: string;
  data: {

    token: string;
    expiration: string;
    user: Users;

  };

}

 