export class Email {
  private readonly value: string;
  constructor(value: string) {
    if (!this.isValueEmail(value)) {
      throw new Error("Invalid email address");
    }

    this.value = value;
  }

  private isValueEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  getValue(): string {
    return this.value;
  }
}
