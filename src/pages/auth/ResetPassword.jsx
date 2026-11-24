import { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import resetPasswordSchema from "../../validations/auth/resetPasswordSchema";

export default function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    const resetData = {
      token,
      email,
      password: data.password,
    };

    console.log("Dados de redefinição:", resetData);

    // Simulação da redefinição da senha.
    toast.success("Senha redefinida com sucesso!");

    navigate("/login", {
      state: {
        email: email || "",
      },
    });
  };

  const onInvalid = () => {
    toast.error("Verifique os campos e corrija os erros indicados.");
  };

  return (
    <>
      <title>Redefinir senha | Mono Saúde</title>

      <div className="w-full">

        {/* Voltar à página inicial */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-700 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Voltar à página inicial
          </Link>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-9">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-800 font-bold text-2xl mb-7"
          >
            <i className="fas fa-heartbeat text-green-600"></i>
            Mono Saúde
          </Link>

          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">
            Redefinir senha
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Crie uma nova senha para recuperar o acesso à sua conta.
            Escolha uma senha segura e confirme-a abaixo.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          noValidate
          className="space-y-5"
        >

          {/* Nova senha */}
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              label="Nova senha"
              placeholder="Introduza a nova senha"
              autoComplete="new-password"
              error={errors.password}
              {...register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-gray-400 hover:text-green-700 transition-colors cursor-pointer"
              aria-label={
                showPassword ? "Ocultar senha" : "Mostrar senha"
              }
            >
              <i
                className={`fas ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </button>
          </div>

          {/* Confirmar senha */}
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              label="Confirmar nova senha"
              placeholder="Confirme a nova senha"
              autoComplete="new-password"
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-[42px] text-gray-400 hover:text-green-700 transition-colors cursor-pointer"
              aria-label={
                showConfirmPassword
                  ? "Ocultar senha"
                  : "Mostrar senha"
              }
            >
              <i
                className={`fas ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </button>
          </div>

          {/* Botão */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Redefinir senha
            </Button>
          </div>

        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Já conseguiu recuperar o acesso?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:text-green-600 transition-colors"
          >
            Entrar
          </Link>
        </p>

      </div>
    </>
  );
}
