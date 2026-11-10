import { type CustomerRepository } from "../../../application/customer/ports/CustomerRepository.js";
import type { Customer } from "../../../domain/customer/Customer.js";

export class InMemoryCustomerRepository implements CustomerRepository {
  private customers: Customer[] = [];

  async save(customer: Customer): Promise<void> {
    this.customers.push(customer);
  }

  findAll(): Customer[] {
    return this.customers;
  }
}
