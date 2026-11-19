import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // A lógica de cadastro será integrada posteriormente.
  };

  const userTypes = [
    // { value: "patient", label: "Paciente" },
    { value: "professional", label: "Profissional de saúde" },
    { value: "institution", label: "Instituição de saúde" },
    { value: "pharmacy", label: "Farmácia" },
    { value: "laboratory", label: "Laboratório" },
  ];

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
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            id="name"
            name="name"
            type="text"
            label="Nome completo"
            placeholder="Introduza o seu nome completo"
            autoComplete="name"
            required
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="exemplo@email.com"
            autoComplete="email"
            required
          />

          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Telefone"
            placeholder="+244 9XX XXX XXX"
            autoComplete="tel"
            required
          />

          <Select
            id="userType"
            name="userType"
            label="Tipo de usuário"
            placeholder="Selecione o seu perfil"
            options={userTypes}
            required
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="Senha"
            placeholder="Introduza uma senha"
            autoComplete="new-password"
            required
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirmar senha"
            placeholder="Confirme a sua senha"
            autoComplete="new-password"
            required
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
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
