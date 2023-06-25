import { object, string, ref } from "yup";

const signUpValidationScheme = object({
  email: string().email().max(255).required().label("Email"),
  username: string()
    .min(3)
    .max(16)
    .matches(/^\w*$/g, "Username should contain only letters and numbers")
    .required()
    .label("Username"),
  password: string()
    .min(8)
    .max(64)
    .matches(/[0-9]/g, "Password should contain a number")
    .matches(/[a-z]/g, "Password should contain a lowercase letter")
    .matches(/[A-Z]/g, "Password should contain an uppercase letter")
    .matches(/\W/g, "Password should contain a symbol")
    .matches(/^\S*$/g, "Password shouldn't contain whitespaces")
    .required()
    .label("Password"),
  confirmPassword: string().oneOf([ref("password")], "Passwords should match"),
});

export default signUpValidationScheme;
