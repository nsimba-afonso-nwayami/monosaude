
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Mono Saúde</title>

      <section className="min-h-screen w-full bg-white flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Imagem */}
          <div className="flex items-center justify-center">
            <img
              src="/img/404-error.gif"
              alt="Página não encontrada"
              className="w-full max-w-lg object-contain"
            />
          </div>

          {/* Conteúdo */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 leading-tight mb-6">
              Ops! Esta página não foi encontrada.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-9">
              Parece que a página que procura não existe, foi movida
              ou está temporariamente indisponível. Mas não se preocupe,
              estamos aqui para ajudar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-green-950/10"
              >
                <i className="fas fa-home"></i>
                Voltar ao início
              </Link>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-lg border border-green-600 text-green-700 hover:bg-green-50 font-semibold transition-all duration-300 cursor-pointer"
              >
                <i className="fas fa-arrow-left"></i>
                Voltar à página anterior
              </button>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
