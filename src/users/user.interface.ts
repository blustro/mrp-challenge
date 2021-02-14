export interface BaseUser {
  email: string;
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User extends BaseUser {
  id: number;
}
