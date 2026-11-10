import { type Request, type Response } from "express";
import { CreateCustomer } from "../../../application/customer/CreateCustomer.js";

export class CreateCustomerController {
  constructor(private readonly createcustomer: CreateCustomer) {}

  async handle(req: Request, res: Response): Promise<void> {
    const customer = await this.createcustomer.execute(req.body);

    const data = customer.getValue();

    res.status(201).json({
      mesage: `Usuario ${data.id} creado`,
      customer: data,
    });
  }
}
