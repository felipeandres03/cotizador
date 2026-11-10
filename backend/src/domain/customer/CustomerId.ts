import { EntityPrefix } from "../shared/EntityPrefix.js";

export class CustomerId {
  private readonly prefix = EntityPrefix.CUSTOMER;
  private readonly id: string;
  constructor(id: string) {
    if (!this.validateId(id)) {
      throw new Error("Invalid Customer ID");
    }
    this.id = id;
  }

  private validateId(id: string): boolean {
    const isValidId =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        id,
      );
    return isValidId;
  }

  getValue(): string {
    return `${this.prefix}-${this.id}`;
  }
}
