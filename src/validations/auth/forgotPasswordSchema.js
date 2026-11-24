import * as yup from "yup";

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Introduza um endereço de email válido.")
    .required("O email é obrigatório."),
});

export default forgotPasswordSchema;
