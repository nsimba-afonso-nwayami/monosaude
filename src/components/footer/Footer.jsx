
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Identidade */}
          <div className="lg:col-span-1">

            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <i className="fas fa-heartbeat text-green-600 text-3xl"></i>

              <div>
                <span className="block text-xl font-bold tracking-tight">
                  Mono Saúde
                </span>

                <span className="block text-[10px] text-green-100 tracking-widest uppercase">
                  Saúde integrada
                </span>
              </div>
            </Link>

            <p className="text-sm text-green-100 leading-7 max-w-xs">
              Uma plataforma integrada que conecta hospitais, clínicas,
              farmácias, laboratórios, profissionais de saúde e pacientes
              num único ecossistema.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-base font-semibold mb-6">
              Navegação
            </h3>

            <div className="flex flex-col gap-4">

              <Link to="/" className="text-sm text-green-100 hover:text-white transition-colors">
                Início
              </Link>

              <HashLink smooth to="/#sobre" className="text-sm text-green-100 hover:text-white transition-colors">
                Sobre nós
              </HashLink>

              <HashLink smooth to="/#como-funciona" className="text-sm text-green-100 hover:text-white transition-colors">
                Como funciona
              </HashLink>

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Módulos
              </HashLink>

              <HashLink smooth to="/#planos" className="text-sm text-green-100 hover:text-white transition-colors">
                Planos
              </HashLink>

              <HashLink smooth to="/#contactos" className="text-sm text-green-100 hover:text-white transition-colors">
                Contactos
              </HashLink>

            </div>
          </div>

          {/* Módulos */}
          <div>
            <h3 className="text-base font-semibold mb-6">
              Ecossistema
            </h3>

            <div className="flex flex-col gap-4">

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Hospitais e clínicas
              </HashLink>

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Farmácias
              </HashLink>

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Laboratórios
              </HashLink>

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Médicos
              </HashLink>

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Pacientes
              </HashLink>

              <HashLink smooth to="/#modulos" className="text-sm text-green-100 hover:text-white transition-colors">
                Administração
              </HashLink>

            </div>
          </div>

          {/* Acesso e contacto */}
          <div>
            <h3 className="text-base font-semibold mb-6">
              Acesso e contacto
            </h3>

            <div className="flex flex-col gap-4">

              <Link to="/login" className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors">
                <i className="fas fa-sign-in-alt text-green-600"></i>
                Entrar na plataforma
              </Link>

              <Link to="/register" className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors">
                <i className="fas fa-user-plus text-green-600"></i>
                Criar conta
              </Link>

              <a href="mailto:contacto@monosaude.ao" className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors">
                <i className="fas fa-envelope text-green-600"></i>
                Email
              </a>

              <a href="tel:+244000000000" className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors">
                <i className="fas fa-phone text-green-600"></i>
                Telefone
              </a>

              <div className="flex items-center gap-3 text-sm text-green-100">
                <i className="fas fa-map-marker-alt text-green-600"></i>
                Angola
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-xs text-green-100 text-center md:text-left">
              &copy; {currentYear} Mono Saúde. Todos os direitos reservados.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                to="/privacidade"
                className="text-xs text-green-100 hover:text-white transition-colors"
              >
                Política de privacidade
              </Link>

              <Link
                to="/termos"
                className="text-xs text-green-100 hover:text-white transition-colors"
              >
                Termos de utilização
              </Link>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
