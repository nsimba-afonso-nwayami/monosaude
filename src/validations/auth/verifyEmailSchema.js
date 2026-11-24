import * as yup from "yup";

const verifyEmailSchema = yup.object().shape({
  code: yup
    .string()
    .required("O código de verificação é obrigatório.")
    .matches(/^[0-9]{6}$/, "O código deve conter exatamente 6 dígitos."),
});

export default verifyEmailSchema;
