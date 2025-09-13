import { injectable } from "tsyringe";
import { Repository } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { dataSource } from "@/data-source";

@injectable()
export class CustomerRepository extends Repository<CustomerEntity> {
  constructor() {
    super(CustomerEntity, dataSource.manager);
  }
}
