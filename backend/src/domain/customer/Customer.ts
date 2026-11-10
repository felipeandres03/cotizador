import { Identification } from "./Identification.js";
import { CustomerId } from "./CustomerId.js";
import { Email } from "./Email.js";
import { Address, type AddressData } from "./Address.js";
import { PhoneNumber, type PhoneNumberData } from "./PhoneNumber.js";
import { Nit } from "./Nit.js";

interface CustomerData {
  id: string;
  identification: string;
  name: string;
  email: string;
  address: AddressData;
  phoneNumber: PhoneNumberData;
  nit?: string | undefined;
}

export class Customer {
  private readonly id: CustomerId;
  private readonly identification: Identification;
  private readonly name: string;
  private email: Email;
  private address: Address;
  private phoneNumber: PhoneNumber;
  private nit: Nit | undefined;
  constructor(
    id: CustomerId,
    identification: Identification,
    name: string,
    email: Email,
    address: Address,
    phoneNumber: PhoneNumber,
    nit?: Nit | undefined,
  ) {
    if (!this.validateName(name)) {
      throw new Error("Invalid customer data");
    }
    this.id = id;
    this.identification = identification;
    this.name = name.trim();
    this.email = email;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.nit = nit;
  }
  private validateName(name: string): boolean {
    const cleanName = name.trim();
    return /^[\p{L}\s]+$/u.test(cleanName);
  }

  changeEmail(newEmail: Email): void {
    this.email = newEmail;
  }

  changeAddress(newAddress: Address): void {
    this.address = newAddress;
  }

  changePhoneNumber(newPhoneNumber: PhoneNumber): void {
    this.phoneNumber = newPhoneNumber;
  }

  addNit(digits: string, verificationDigit: string): void {
    this.nit = new Nit(digits, verificationDigit);
  }

  removeNit(): void {
    this.nit = undefined;
  }

  getValue(): CustomerData {
    return {
      id: this.id.getValue(),
      identification: this.identification.getValue(),
      name: this.name,
      email: this.email.getValue(),
      address: this.address.getValue(),
      phoneNumber: this.phoneNumber.getValue(),
      nit: this.nit?.getValue(),
    };
  }
}
