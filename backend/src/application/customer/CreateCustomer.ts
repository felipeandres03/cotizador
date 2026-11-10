import { type CustomerRepository } from "./ports/CustomerRepository.js";
import { Customer } from "../../domain/customer/Customer.js";
import { CustomerId } from "../../domain/customer/CustomerId.js";
import { Address } from "../../domain/customer/Address.js";
import { Email } from "../../domain/customer/Email.js";
import { Identification } from "../../domain/customer/Identification.js";
import { Nit } from "../../domain/customer/Nit.js";
import { PhoneNumber } from "../../domain/customer/PhoneNumber.js";
import { type IdGenerator } from "../shared/ports/IdGenerator.js";

interface CreateCustomerInput {
  name: string;
  email: string;
  identification: string;
  address: {
    city: string;
    neighborhood: string;
    street: string;
  };
  phoneNumber: {
    countryCode: string;
    number: string;
  };
  nit?: {
    digits: string;
    verificationDigit: string;
  };
}

export class CreateCustomer {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(input: CreateCustomerInput): Promise<Customer> {
    const address = new Address(
      input.address.city,
      input.address.neighborhood,
      input.address.street,
    );

    const email = new Email(input.email);

    const identification = new Identification(input.identification);

    const phoneNumber = new PhoneNumber(
      input.phoneNumber.countryCode,
      input.phoneNumber.number,
    );

    const nit = input.nit
      ? new Nit(input.nit.digits, input.nit.verificationDigit)
      : undefined;

    const customerId = this.idGenerator.generate();

    const customer = new Customer(
      new CustomerId(customerId),
      identification,
      input.name,
      email,
      address,
      phoneNumber,
      nit,
    );

    await this.customerRepository.save(customer);

    return customer;
  }
}
