import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
    };

    // A lógica de recuperação será integrada posteriormente.
    console.log(data);
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
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="exemplo@email.com"
            autoComplete="email"
            required
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
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
