
import ButtonLink from "../ui/ButtonLink";

export default function Plans() {
  const plans = [
    {
      name: "Teste",
      description: "Conheça a Mono Saúde e descubra as possibilidades da plataforma.",
      price: "Gratuito",
      period: "Durante 2 anos",
      features: [
        "Acesso experimental à plataforma",
        "Conhecimento dos módulos disponíveis",
        "Exploração das funcionalidades",
        "Suporte inicial",
      ],
      button: "Começar gratuitamente",
      variant: "outline",
      featured: false,
    },
    {
      name: "Essencial",
      description: "O necessário para começar a digitalizar os seus serviços de saúde.",
      price: "Sob consulta",
      period: "Plano pago",
      features: [
        "Acesso aos módulos contratados",
        "Gestão das atividades",
        "Organização de informações",
        "Suporte ao utilizador",
      ],
      button: "Escolher plano",
      variant: "outline",
      featured: false,
    },
    {
      name: "Profissional",
      description: "Mais recursos para uma gestão integrada e eficiente.",
      price: "Sob consulta",
      period: "Plano pago",
      features: [
        "Acesso ampliado aos módulos",
        "Gestão integrada de serviços",
        "Relatórios e indicadores",
        "Gestão de utilizadores",
        "Suporte prioritário",
      ],
      button: "Escolher plano",
      variant: "primary",
      featured: true,
    },
    {
      name: "Empresarial",
      description: "Uma solução completa para instituições com necessidades avançadas.",
      price: "Sob consulta",
      period: "Plano pago",
      features: [
        "Acesso personalizado aos módulos",
        "Gestão avançada de operações",
        "Relatórios e indicadores completos",
        "Gestão de múltiplas unidades",
        "Acompanhamento especializado",
        "Suporte dedicado",
      ],
      button: "Contactar equipa",
      variant: "outline",
      featured: false,
    },
  ];

  return (
    <section
      id="planos"
      className="w-full bg-white py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
            Escolha o plano ideal para a sua instituição
          </h2>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Comece gratuitamente e descubra uma nova forma de gerir
            e conectar os serviços de saúde. Temos soluções para
            diferentes necessidades e dimensões.
          </p>
        </div>

        {/* Cartões dos planos */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col p-7 rounded-lg border
                transition-all duration-300
                ${
                  plan.featured
                    ? "bg-green-900 border-green-900 shadow-xl shadow-green-900/15 lg:-translate-y-3"
                    : "bg-white border-gray-200 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
                }
              `}
            >
              {/* Destaque */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  MAIS POPULAR
                </div>
              )}

              {/* Identificação */}
              <div className="text-center mb-7">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    plan.featured ? "text-white" : "text-green-900"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-sm leading-relaxed min-h-[60px] ${
                    plan.featured ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6">
                  <p
                    className={`text-2xl font-bold ${
                      plan.featured ? "text-white" : "text-green-900"
                    }`}
                  >
                    {plan.price}
                  </p>

                  <p
                    className={`text-sm mt-2 ${
                      plan.featured ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </p>
                </div>
              </div>

              {/* Separador */}
              <div
                className={`border-t ${
                  plan.featured ? "border-white/15" : "border-gray-100"
                }`}
              ></div>

              {/* Funcionalidades */}
              <div className="flex-1 flex flex-col gap-4 py-7">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <i
                      className={`fas fa-check-circle mt-1 ${
                        plan.featured ? "text-green-400" : "text-green-600"
                      }`}
                    ></i>

                    <span
                      className={`text-sm leading-relaxed ${
                        plan.featured ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botão */}
              <ButtonLink
                to={
                  plan.name === "Empresarial"
                    ? "/#contactos"
                    : "/register"
                }
                isHashLink={plan.name === "Empresarial"}
                variant={plan.featured ? "primary" : plan.variant}
                size="md"
                fullWidth
                className={
                  plan.featured
                    ? "!bg-white !text-green-900 hover:!bg-green-50 shadow-none"
                    : ""
                }
              >
                {plan.button}
                <i className="fas fa-arrow-right"></i>
              </ButtonLink>
            </div>
          ))}
        </div>

        {/* Nota final */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            Precisa de uma solução personalizada? Entre em contacto
            com a nossa equipa para conhecer outras possibilidades.
          </p>

          <ButtonLink
            to="/#contactos"
            isHashLink
            variant="secondary"
            size="md"
            className="mt-5"
          >
            Falar com a nossa equipa
            <i className="fas fa-headset"></i>
          </ButtonLink>
        </div>

      </div>
    </section>
  );
}
