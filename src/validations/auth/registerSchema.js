import * as yup from "yup";

const registerSchema = yup.object().shape({
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
    .required("O número de telefone é obrigatório.")
    .matches(
      /^(?:(?:\+244|00244)[\s-]?)?9\d{2}[\s-]?\d{3}[\s-]?\d{3}$/,
      "Introduza um número de telefone angolano válido."
    ),

  userType: yup
    .string()
    .required("Selecione o tipo de utilizador.")
    .oneOf(
      ["professional", "institution", "pharmacy", "laboratory"],
      "Selecione um tipo de utilizador válido."
    ),

  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número."),

  confirmPassword: yup
    .string()
    .required("A confirmação da senha é obrigatória.")
    .oneOf([yup.ref("password")], "As senhas não coincidem."),
});

export default registerSchema;
