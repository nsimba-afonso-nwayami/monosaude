import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function VerifyEmail() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      code: formData.get("code"),
    };

    // A lógica de verificação será integrada posteriormente.
    console.log(data);
  };

  const handleResendCode = () => {
    // A lógica de reenvio do código será integrada posteriormente.
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
            Enviámos um código de verificação para o seu endereço de email.
            Introduza o código abaixo para confirmar a sua conta.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            id="code"
            name="code"
            type="text"
            label="Código de verificação"
            placeholder="Introduza os 6 dígitos"
            inputMode="numeric"
            maxLength={6}
            pattern="[0-9]{6}"
            autoComplete="one-time-code"
            required
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
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
