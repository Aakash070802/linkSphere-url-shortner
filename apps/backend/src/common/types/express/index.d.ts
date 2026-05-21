import type { JwtUserPayload } from "../../utils/token.js";

declare global {
  namespace Express {
    interface Request {
      user: JwtUserPayload;
    }
  }
}

export {};
