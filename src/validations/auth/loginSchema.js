import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Introduza um endereço de email válido.")
    .required("O email é obrigatório."),

  password: yup
    .string()
    .required("A senha é obrigatória."),
});

export default loginSchema;
