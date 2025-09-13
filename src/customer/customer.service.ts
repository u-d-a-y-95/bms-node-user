import { injectable } from "tsyringe";
import { CustomerRepository } from "./customer.repository";
import { CreateCustomerDto } from "./dtos/create-customer.dto";
import { QueryFailedError } from "typeorm";
import { ConflictError, HttpError } from "@/lib/error";
import { logger } from "@/lib/logger";
import { v4 as uuidv4 } from "uuid";

@injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}
  async create(dto: CreateCustomerDto) {
    try {
      const userId = uuidv4();
      const customer = this.customerRepository.create({ ...dto, userId });
      const insertedUser = await this.customerRepository.save(customer);
      return insertedUser;
    } catch (error) {
      logger.debug({ error });
      if (error instanceof QueryFailedError) {
        const { code, detail } = error.driverError as {
          code?: string;
          detail: string;
        };
        if (code === "23505") {
          if (detail.includes("email"))
            throw new ConflictError("Email is already exist");
          if (detail.includes("phone"))
            throw new ConflictError("Phone is already exist");
        }
      }
      throw new HttpError(500, "Something went wrong");
    }
  }

  getByUserId = async (userId: string) => {
    return this.customerRepository.findOneBy({ userId });
  };

  get = async (limit: number, offset: number) => {
    return this.customerRepository.find({ skip: offset, take: limit });
  };
}
