import {
  SuccessResponseOption,
  ErrorResponseOption,
} from "./lib/middlewares/response.middleware";

declare global {
  namespace Express {
    interface Request {
      user: { id: string };
    }
    interface Response {
      success<T>(options: SuccessResponseOption<T>): void | Promise<void>;
      error(options: ErrorResponseOption): void | Promise<void>;
    }
  }
}
