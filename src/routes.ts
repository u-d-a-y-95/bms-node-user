import express from "express";
import { customerRouter } from "./customer/customer.route";

export const routes = express.Router();

routes.use("/customers", customerRouter);
