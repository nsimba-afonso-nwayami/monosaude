import * as yup from "yup";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("A nova senha é obrigatória.")
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .matches(
      /[A-Z]/,
      "A senha deve conter pelo menos uma letra maiúscula."
    )
    .matches(
      /[a-z]/,
      "A senha deve conter pelo menos uma letra minúscula."
    )
    .matches(
      /[0-9]/,
      "A senha deve conter pelo menos um número."
    ),

  confirmPassword: yup
    .string()
    .required("A confirmação da senha é obrigatória.")
    .oneOf(
      [yup.ref("password")],
      "As senhas não coincidem."
    ),
});

export default resetPasswordSchema;
