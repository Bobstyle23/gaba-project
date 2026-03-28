import type { Address } from "./Address";
import type { Company } from "./Company";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  phone: string;
  age: number;
  gender: string;
  birthDate: string;
  address: Address;
  company: Company;
  username: string;
  height: number;
  weight: number;
}
