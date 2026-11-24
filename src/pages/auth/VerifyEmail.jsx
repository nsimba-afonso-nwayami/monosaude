import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import verifyEmailSchema from "../../validations/auth/verifyEmailSchema";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(verifyEmailSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Código de verificação:", data);

    // Simulação da verificação do código.
    toast.success("Email verificado com sucesso!");

    navigate("/login", {
      state: {
        email: email,
      },
    });
  };

  const onInvalid = () => {
    toast.error("Introduza um código de verificação válido.");
  };

  const handleResendCode = () => {
    // Simulação do reenvio do código.
    toast.success("Um novo código foi enviado para o seu email!");
  };

  return (
    <>
      <title>Verificar email | Mono Saúde</title>

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

          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-envelope-open-text text-2xl text-green-700"></i>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">
            Verificar email
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Enviámos um código de verificação para{" "}
            <span className="font-semibold text-green-800">
              {email || "o seu endereço de email"}
            </span>
            . Introduza o código abaixo para confirmar a sua conta.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          noValidate
          className="space-y-5"
        >
          <Input
            id="code"
            type="text"
            label="Código de verificação"
            placeholder="Introduza os 6 dígitos"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            error={errors.code}
            {...register("code")}
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
              Verificar email
              <i className="fas fa-check-circle ml-2"></i>
            </Button>
          </div>
        </form>

        {/* Reenviar código */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Não recebeu o código?{" "}
          <button
            type="button"
            onClick={handleResendCode}
            className="text-green-700 font-semibold hover:text-green-600 transition-colors cursor-pointer"
          >
            Reenviar código
          </button>
        </p>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Já possui uma conta?{" "}
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
