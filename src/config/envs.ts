import * as joi from "joi"
import 'dotenv/config';

interface EnvVars {
  PORT: number,
  DATABASE_URL: string,
} 

const envSchema = joi.object({
  PORT: joi.number().required(),
  DATABASE_URL: joi.string().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);

if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const envVars: EnvVars = value;

export const envs = {
  PORT: envVars.PORT,
  DATABASE_URL: envVars.DATABASE_URL,
}