import * as winston from "winston";
import { CONFIG } from "../config";

export const logger = winston.createLogger({
  level: "debug",
  defaultMeta: { service: CONFIG.SERVICE_NAME },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.colorize({
      all: true,
      colors: {
        info: "white",
      },
    }),
  ),
  transports: [new winston.transports.Console()],
});
