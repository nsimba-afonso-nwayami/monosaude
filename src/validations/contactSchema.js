import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("O nome completo é obrigatório.")
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .max(100, "O nome não pode ultrapassar 100 caracteres."),

  email: yup
    .string()
    .trim()
    .email("Introduza um endereço de email válido.")
    .required("O email é obrigatório."),

  phone: yup
    .string()
    .trim()
    .notRequired()
    .test(
      "valid-phone",
      "Introduza um número de telefone angolano válido.",
      (value) =>
        !value ||
        /^(?:(?:\+244|00244)[\s-]?)?9\d{2}[\s-]?\d{3}[\s-]?\d{3}$/.test(value)
    ),

  subject: yup
    .string()
    .required("Selecione o assunto da mensagem.")
    .oneOf(
      [
        "Informações gerais",
        "Planos e preços",
        "Parcerias",
        "Suporte",
        "Outros",
      ],
      "Selecione um assunto válido."
    ),

  message: yup
    .string()
    .trim()
    .required("A mensagem é obrigatória.")
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(1000, "A mensagem não pode ultrapassar 1000 caracteres."),
});

export default contactSchema;
