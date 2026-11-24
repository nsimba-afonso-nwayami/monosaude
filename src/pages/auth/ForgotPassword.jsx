import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import forgotPasswordSchema from "../../validations/auth/forgotPasswordSchema";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Email para recuperação:", data);

    // Simulação do envio das instruções de recuperação.
    toast.success("Instruções de recuperação enviadas com sucesso!");

    navigate("/reset-password/", {
      state: {
        email: data.email,
      },
    });
  };

  const onInvalid = () => {
    toast.error("Introduza um endereço de email válido.");
  };

  return (
    <>
      <title>Recuperar senha | Mono Saúde</title>

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
            Recuperar senha
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Esqueceu a sua senha? Não se preocupe. Introduza o email
            associado à sua conta e enviaremos as instruções para
            recuperar o seu acesso.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          noValidate
          className="space-y-5"
        >
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="exemplo@email.com"
            autoComplete="email"
            error={errors.email}
            {...register("email")}
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Recuperar senha
            </Button>
          </div>
        </form>

        {/* Voltar ao login */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Lembrou-se da sua senha?{" "}
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
