import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  return (
    <>
      <title>Entrar | Mono Saúde</title>

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
            Bem-vindo de volta!
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Entre na sua conta para continuar a utilizar a Mono Saúde.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            autoComplete="email"
          />

          <div className="relative">
            <Input
              label="Senha"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Introduza a sua senha"
              autoComplete="current-password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-gray-400 hover:text-green-700 transition-colors"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </button>
          </div>

          {/* Opções */}
          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                className="w-4 h-4 accent-green-600 cursor-pointer"
              />
              Lembrar-me
            </label>

            <Link
              to="/forgot-password"
              className="text-green-700 font-medium hover:text-green-900 transition-colors"
            >
              Esqueceu a senha?
            </Link>
          </div>

          {/* Botão */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
          >
            Entrar
          </Button>

        </form>

        {/* Cadastro */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Ainda não tem uma conta?{" "}
          <Link
            to="/register"
            className="text-green-700 font-semibold hover:text-green-900 transition-colors"
          >
            Criar conta
          </Link>
        </p>

      </div>
    </>
  );
}
