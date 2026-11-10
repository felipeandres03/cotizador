import { Customer } from "../../../domain/customer/Customer.js";

export interface CustomerRepository {
  save(customer: Customer): Promise<void>;
}
