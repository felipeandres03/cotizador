const urlBase = "http://localhost:3000";

export type customer = {
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
};

export async function createCustomer(customer: customer) {
  const response = await fetch(`${urlBase}/customer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });

  if (!response) {
    throw new Error("Error al cargar cliente");
  }
  {
    return await response.json();
  }
}
