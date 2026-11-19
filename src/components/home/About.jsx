
import ButtonLink from "../ui/ButtonLink";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full bg-gray-50 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagem */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="/img/sobre.jpg"
              alt="Profissionais de saúde utilizando tecnologia digital"
              className="w-full h-[560px] sm:h-[680px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/0 transition-colors duration-500"></div>
          </div>

          {/* Conteúdo */}
          <div className="pt-5 lg:pt-0">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
              Uma nova forma de conectar e transformar a saúde
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              A Mono Saúde é uma plataforma digital integrada, desenvolvida
              para aproximar instituições de saúde, profissionais e pacientes
              num único ambiente tecnológico.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              A nossa proposta é simplificar processos, facilitar o acesso
              à informação e tornar a gestão dos serviços de saúde mais
              organizada, eficiente e acessível.
            </p>

            {/* Missão e visão */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">

              <div className="group flex items-start gap-3 p-4 rounded-md border border-transparent hover:border-green-100 hover:bg-white hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <i className="fas fa-bullseye text-green-600 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <div>
                  <h3 className="font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    A nossa missão
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Simplificar e integrar os serviços de saúde através
                    da tecnologia.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 p-4 rounded-md border border-transparent hover:border-green-100 hover:bg-white hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <i className="fas fa-eye text-green-600 group-hover:text-white transition-colors duration-300"></i>
                </div>

                <div>
                  <h3 className="font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    A nossa visão
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Construir um ecossistema de saúde mais conectado,
                    acessível e eficiente.
                  </p>
                </div>
              </div>

            </div>

            {/* Botão */}
            <ButtonLink
              to="/#como-funciona"
              isHashLink
              variant="primary"
              size="md"
            >
              Descobrir como funciona
              <i className="fas fa-arrow-right"></i>
            </ButtonLink>

          </div>
        </div>
      </div>
    </section>
  );
}
