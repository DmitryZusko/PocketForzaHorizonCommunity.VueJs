import { object, string } from "yup";

const signInValidationScheme = object({
  email: string().email().required().label("Email"),
  password: string().required().label("Password"),
});

export default signInValidationScheme;
