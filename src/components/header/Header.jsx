
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Início", to: "/" },
    { label: "Sobre", to: "/#sobre", hash: true },
    { label: "Como funciona", to: "/#como-funciona", hash: true },
    { label: "Módulos", to: "/#modulos", hash: true },
    { label: "Planos", to: "/#planos", hash: true },
    { label: "Contactos", to: "/#contactos", hash: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="min-h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 shrink-0"
          >
            <i className="fas fa-heartbeat text-green-600 text-3xl"></i>

            <div>
              <span className="block text-xl font-bold text-green-900 tracking-tight">
                Mono Saúde
              </span>

              <span className="block text-[10px] text-gray-500 tracking-widest uppercase">
                Saúde integrada
              </span>
            </div>
          </Link>

          {/* Menu único responsivo */}
          <nav
            className={`
              absolute lg:static
              top-20 left-0 w-full lg:w-auto
              bg-white lg:bg-transparent
              border-b lg:border-0 border-gray-100
              shadow-lg lg:shadow-none
              flex flex-col lg:flex-row
              items-stretch lg:items-center
              gap-0 lg:gap-7
              px-6 lg:px-0
              overflow-hidden lg:overflow-visible
              transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "max-h-[600px] opacity-100 visible translate-y-0 py-5 lg:py-0"
                  : "max-h-0 opacity-0 invisible -translate-y-2 py-0 lg:max-h-none lg:opacity-100 lg:visible lg:translate-y-0"
              }
            `}
          >
            {/* Links de navegação */}
            {navLinks.map((link) => {
              const LinkComponent = link.hash ? HashLink : Link;

              return (
                <LinkComponent
                  key={link.label}
                  to={link.to}
                  smooth={link.hash || undefined}
                  onClick={closeMenu}
                  className="py-3 lg:py-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </LinkComponent>
              );
            })}

            {/* Autenticação */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6 mt-5 lg:mt-0 lg:ml-5 lg:pl-6 lg:border-l lg:border-gray-200">

              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-2 text-sm font-semibold text-green-900 hover:text-green-600 transition-colors"
              >
                <i className="fas fa-sign-in-alt"></i>
                Entrar
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="flex items-center gap-2 text-sm font-semibold text-green-900 hover:text-green-600 transition-colors"
              >
                <i className="fas fa-user-plus"></i>
                Criar conta
              </Link>

            </div>
          </nav>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-green-900 text-xl hover:text-green-600 transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

        </div>
      </div>
    </header>
  );
}
