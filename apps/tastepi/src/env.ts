import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.union([
    z.literal("development"),
    z.literal("testing"),
    z.literal("production"),
  ]),
});

const env = envSchema.parse(process.env);

export default env;
