import express from "express";
import cors from "cors";

import { RandomIdGenerator } from "../adapters/shared/RamdonIdGenerator.js";
import { InMemoryCustomerRepository } from "../adapters/customer/InMemoryCustomerRepository.js";

import { CreateCustomer } from "../../application/customer/CreateCustomer.js";

import { CreateCustomerController } from "./controllers/CreateCustomerController.js";
import { CreateCustomerRoutes } from "./routes/CustomerRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

const idGenerator = new RandomIdGenerator();

const customerRepository = new InMemoryCustomerRepository();

const createCustomer = new CreateCustomer(customerRepository, idGenerator);

const createCustomerController = new CreateCustomerController(createCustomer);

const customerRoutes = CreateCustomerRoutes(createCustomerController);

app.use(customerRoutes);

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
