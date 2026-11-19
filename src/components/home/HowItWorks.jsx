import ButtonLink from "../ui/ButtonLink";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tudo começa com o seu acesso.",
      description:
        "Entre na Mono Saúde e identifique o seu perfil. Seja uma instituição, um profissional ou um paciente, terá um ambiente adequado à sua utilização.",
      icon: "fa-user-circle",
    },
    {
      number: "02",
      title: "Encontre tudo no mesmo ambiente.",
      description:
        "Aceda às ferramentas e aos recursos disponíveis para o seu perfil, sem precisar de alternar entre diferentes plataformas.",
      icon: "fa-layer-group",
    },
    {
      number: "03",
      title: "Conecte. Organize. Simplifique.",
      description:
        "Aproveite um ambiente integrado para facilitar a comunicação, organizar atividades e aproximar os diferentes intervenientes da saúde.",
      icon: "fa-project-diagram",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="w-full bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
            A saúde conectada começa com uma forma mais simples de fazer as coisas
          </h2>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl">
            Um único ambiente digital para aproximar pessoas, instituições
            e serviços. Descubra como a Mono Saúde torna essa conexão possível.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Imagem */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="/img/como-funciona.png"
              alt="Como funciona a plataforma Mono Saúde"
              className="w-full h-[440px] sm:h-[500px] lg:h-[560px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/0 transition-colors duration-500"></div>
          </div>

          {/* Etapas */}
          <div className="relative">

            {/* Linha de conexão */}
            <div className="absolute left-[23px] top-8 bottom-16 w-px bg-green-100"></div>

            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative flex gap-6"
                >

                  {/* Ícone */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border border-green-100 flex items-center justify-center text-green-600 shadow-sm group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-900/10 transition-all duration-300">
                      <i className={`fas ${step.icon} text-lg`}></i>
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="flex-1 pb-2">
                    <span className="text-xs font-bold tracking-widest text-green-600">
                      ETAPA {step.number}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-green-900 mt-3 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Botão */}
            <div className="mt-8 pl-[72px]">
              <ButtonLink
                to="/register"
                variant="primary"
                size="md"
              >
                Fazer parte da Mono Saúde
                <i className="fas fa-arrow-right"></i>
              </ButtonLink>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
