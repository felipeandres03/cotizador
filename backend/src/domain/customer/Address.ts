export interface AddressData {
  city: string;
  neighborhood: string;
  street: string;
}

export class Address {
  private readonly city: string;
  private readonly neighborhood: string;
  private readonly street: string;

  constructor(city: string, neighborhood: string, street: string) {
    const cleanCity = city.trim();
    const cleanNeighborhood = neighborhood.trim();
    const cleanStreet = street.trim();

    if (!this.validateAddress(cleanCity, cleanNeighborhood, cleanStreet)) {
      throw new Error("Invalid address");
    }
    this.city = cleanCity;
    this.neighborhood = cleanNeighborhood;
    this.street = cleanStreet;
  }

  private validateAddress(
    city: string,
    neighborhood: string,
    street: string,
  ): boolean {
    const isValidCity = /^[\p{L}\s]+$/u.test(city);
    const isValidNeighborhood = /^[\p{L}\d\s]+$/u.test(neighborhood);
    const isValidStreet = /^[\p{L}\d\s#.,-]+$/u.test(street);
    return isValidCity && isValidNeighborhood && isValidStreet;
  }

  getValue(): AddressData {
    return {
      street: this.street,
      neighborhood: this.neighborhood,
      city: this.city,
    };
  }
}
