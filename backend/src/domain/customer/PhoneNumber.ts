export interface PhoneNumberData {
  countryCode: string;
  number: string;
}

export class PhoneNumber {
  private readonly number: string;
  private readonly countryCode: string;

  constructor(countryCode: string, number: string) {
    if (
      !this.isValidCountryCode(countryCode) ||
      !this.isValidPhoneNumber(number)
    ) {
      throw new Error("Invalid phone number or country code");
    }

    this.countryCode = countryCode;
    this.number = number;
  }

  private isValidCountryCode(countryCode: string): boolean {
    return /^\+\d{1,3}$/.test(countryCode);
  }

  private isValidPhoneNumber(number: string): boolean {
    return /^\d{10}$/.test(number);
  }

  getValue(): PhoneNumberData {
    return {
      countryCode: this.countryCode,
      number: this.number,
    };
  }

  getCountryCode(): string {
    return this.countryCode;
  }

  getNumber(): string {
    return this.number;
  }
}
