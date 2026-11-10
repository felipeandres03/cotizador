export class Nit {
  private readonly digits: string;
  private readonly verificationDigit: string;

  constructor(digits: string, verificationDigit: string) {
    if (
      !this.validateDigitsFormat(digits, verificationDigit) ||
      !this.validateVerificationDigit(digits, verificationDigit)
    ) {
      throw new Error("Invalid NIT: Digits or verification digit is invalid.");
    }
    this.digits = digits;
    this.verificationDigit = verificationDigit;
  }

  private validateDigitsFormat(
    digits: string,
    verificationDigit: string,
  ): boolean {
    const isValidDigits = /^\d{9}$/.test(digits);
    const isValidVerificationDigit = /^\d{1}$/.test(verificationDigit);
    return isValidDigits && isValidVerificationDigit;
  }

  private validateVerificationDigit(
    digits: string,
    verificationDigit: string,
  ): boolean {
    const weights = [41, 37, 29, 23, 19, 17, 13, 7, 3];
    let sum = 0;

    const digitsArray = digits.split("").map((d) => parseInt(d, 10));
    for (let i = 0; i < digitsArray.length; i++) {
      sum += digitsArray[i]! * weights[i]!;
    }
    const remainder = sum % 11;

    if (remainder === 0 || remainder === 1) {
      return remainder === parseInt(verificationDigit, 10);
    }

    const calculatedVerificationDigit = 11 - remainder;
    return calculatedVerificationDigit === parseInt(verificationDigit, 10);
  }

  getValue(): string {
    return `${this.digits}-${this.verificationDigit}`;
  }
}
