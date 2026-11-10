import { Router } from "express";
import { CreateCustomerController } from "../controllers/CreateCustomerController.js";

export function CreateCustomerRoutes(
  controller: CreateCustomerController,
): Router {
  const router = Router();

  router.post("/customer", controller.handle.bind(controller));

  return router;
}
