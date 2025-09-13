import { injectable } from "tsyringe";
import { Request, Response } from "express";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dtos/create-customer.dto";
import { NotFoundError } from "@/lib/error";
import { GetCustomerDto } from "./dtos/get-customer.dto";

@injectable()
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  createCustomer = async (req: Request, res: Response) => {
    const dto = req.body as CreateCustomerDto;
    try {
      const customer = await this.customerService.create(dto);
      return res.success({ data: customer, status: 201 });
    } catch (error) {
      return res.error({ error });
    }
  };

  getCustomerByUserId = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      if (!userId) throw new NotFoundError();
      const customer = await this.customerService.getByUserId(userId);
      return res.success({ data: customer });
    } catch (error) {
      return res.error({ error });
    }
  };

  getCustomers = async (req: Request, res: Response) => {
    try {
      const { limit = 10, offset = 0 } = req.validatedQuery as GetCustomerDto;
      const customer = await this.customerService.get(limit, offset);
      return res.success({ data: customer });
    } catch (error) {
      return res.error({ error });
    }
  };
}
