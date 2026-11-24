import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";

import registerSchema from "../../validations/auth/registerSchema";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      userType: "",
      password: "",
      confirmPassword: "",
    },
  });

  const userTypes = [
    // { value: "patient", label: "Paciente" },
    { value: "professional", label: "Profissional de saúde" },
    { value: "institution", label: "Instituição de saúde" },
    { value: "pharmacy", label: "Farmácia" },
    { value: "laboratory", label: "Laboratório" },
  ];

  const onSubmit = (data) => {
    console.log("Dados do cadastro:", data);

    toast.success("Cadastro realizado com sucesso!");

    navigate("/verify-email", {
      state: {
        email: data.email,
      },
    });
  };

  const onInvalid = () => {
    toast.error("Verifique os campos e corrija os erros indicados.");
  };

  return (
    <>
      <title>Criar conta | Mono Saúde</title>

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
            Criar uma conta
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Preencha os seus dados para fazer parte da Mono Saúde e
            conectar-se ao nosso ecossistema de saúde.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          noValidate
          className="space-y-5"
        >

          <Input
            id="name"
            type="text"
            label="Nome completo"
            placeholder="Introduza o seu nome completo"
            autoComplete="name"
            error={errors.name}
            {...register("name")}
          />

          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="exemplo@email.com"
            autoComplete="email"
            error={errors.email}
            {...register("email")}
          />

          <Input
            id="phone"
            type="tel"
            label="Telefone"
            placeholder="+244 9XX XXX XXX"
            autoComplete="tel"
            error={errors.phone}
            {...register("phone")}
          />

          <Select
            id="userType"
            label="Tipo de usuário"
            placeholder="Selecione o seu perfil"
            options={userTypes}
            error={errors.userType}
            {...register("userType")}
          />

          {/* Senha */}
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              label="Senha"
              placeholder="Introduza uma senha"
              autoComplete="new-password"
              error={errors.password}
              {...register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-gray-400 hover:text-green-700 transition-colors cursor-pointer"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
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
              label="Confirmar senha"
              placeholder="Confirme a sua senha"
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
                showConfirmPassword ? "Ocultar senha" : "Mostrar senha"
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
              Criar conta
            </Button>
          </div>

        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:text-green-600 transition-colors"
          >
            Entrar
          </Link>
        </p>

        {/* Termos e privacidade */}
        <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
          Ao criar uma conta, concorda com os nossos{" "}
          <Link
            to="/termos"
            className="text-green-700 hover:underline"
          >
            Termos e Condições
          </Link>{" "}
          e{" "}
          <Link
            to="/privacidade"
            className="text-green-700 hover:underline"
          >
            Política de Privacidade
          </Link>.
        </p>

      </div>
    </>
  );
}
