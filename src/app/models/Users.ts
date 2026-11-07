export interface Users
{
     id: number;
    userName: string;
    email: string;
    password: string;
    firstName: string;
    middleName?: string | null;
    lastName: string;
    displayName: string;
    phoneNumber: string;
    alternatePhone?: string | null;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    dateOfBirth: string | null;
    isActive: boolean;
    LastLoginDate: string | null;

}
export interface UserFilter {

  userName: string;
  email: string;
  city: string;
  isActive: boolean | null;
  pageNumber: number;
  pageSize: number;

}

export interface UserRequest {

  userName: string;
  email: string;
  password?: string; 
  firstName: string;
  middleName: string | null;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  alternatePhone: string | null;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  dateOfBirth: string | null;
  isActive: boolean;

}

 