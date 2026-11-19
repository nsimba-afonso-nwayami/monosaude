
import ButtonLink from "../ui/ButtonLink";

export default function CallToAction() {
  return (
    <section className="w-full bg-green-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Texto */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              O futuro da saúde começa com uma conexão.
            </h2>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Junte-se à Mono Saúde e descubra como a tecnologia pode
              transformar a forma de gerir, conectar e cuidar da saúde.
            </p>
          </div>

          {/* Botão */}
          <div className="shrink-0">
            <ButtonLink
              to="/register"
              variant="primary"
              size="lg"
            >
              Começar agora
              <i className="fas fa-arrow-right"></i>
            </ButtonLink>
          </div>

        </div>

      </div>
    </section>
  );
}
