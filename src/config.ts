import { object, string } from "yup";

const schema = object({
  BACKEND_URL: string().required(),
});

const envData = {
  BACKEND_URL: window.BACKEND_URL ?? process.env.BACKEND_URL,
};

const env = schema.validateSync(envData, { abortEarly: false });

export const config = {
  backendUrl: env.BACKEND_URL,
};
