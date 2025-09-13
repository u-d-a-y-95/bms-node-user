import { authenticMiddleware } from "@/lib/middlewares/authentic.middleware";
import { validate, validateQuery } from "@/lib/middlewares/validate.middleware";
import expres from "express";
import { CreateCustomerDto } from "./dtos/create-customer.dto";
import { CustomerController } from "./customer.controller";
import { container } from "tsyringe";
import { GetCustomerDto } from "./dtos/get-customer.dto";

export const customerRouter = expres.Router();

const customerController = container.resolve(CustomerController);

customerRouter.get(
  "/:id",
  authenticMiddleware,
  customerController.getCustomerByUserId,
);

customerRouter.get(
  "",
  authenticMiddleware,
  validateQuery(GetCustomerDto),
  customerController.getCustomers,
);

customerRouter.post(
  "",
  authenticMiddleware,
  validate(CreateCustomerDto),
  customerController.createCustomer,
);
