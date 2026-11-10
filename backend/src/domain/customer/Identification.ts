export class Identification {
  private readonly value: string;

  constructor(value: string) {
    if (
      !this.isValidIdentification(value) ||
      value.length < 3 ||
      value.length > 10
    ) {
      throw new Error("Invalid identification");
    }

    this.value = value;
  }

  private isValidIdentification(value: string): boolean {
    return /^\d+$/.test(value);
  }

  getValue(): string {
    return this.value;
  }
}
