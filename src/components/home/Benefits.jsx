
export default function Benefits() {
  const benefits = [
    {
      icon: "fa-network-wired",
      title: "Integração total",
      description:
        "Conecte hospitais, clínicas, farmácias, laboratórios e profissionais num único ecossistema digital.",
    },
    {
      icon: "fa-bolt",
      title: "Mais eficiência",
      description:
        "Simplifique processos, reduza tarefas manuais e torne a gestão dos serviços de saúde mais eficiente.",
    },
    {
      icon: "fa-shield-alt",
      title: "Segurança e confiança",
      description:
        "Tenha uma gestão organizada das informações, com controlo de acesso e proteção dos dados.",
    },
    {
      icon: "fa-chart-line",
      title: "Gestão inteligente",
      description:
        "Acompanhe informações e indicadores importantes para tomar decisões mais informadas.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Introdução */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
              Mais simplicidade, eficiência e confiança na gestão da saúde
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Uma plataforma pensada para transformar a gestão dos serviços
              de saúde, aproximando pessoas, instituições e profissionais
              através da tecnologia.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <i className="fas fa-heartbeat text-green-600 text-xl"></i>
              </div>

              <div>
                <p className="font-bold text-green-900">
                  Um ecossistema. Muitas possibilidades.
                </p>
                <p className="text-sm text-gray-500">
                  Tecnologia ao serviço da saúde.
                </p>
              </div>
            </div>
          </div>

          {/* Cartões de benefícios */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-md border border-gray-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors duration-300">
                  <i
                    className={`fas ${benefit.icon} text-green-600 text-xl group-hover:text-white transition-colors duration-300`}
                  ></i>
                </div>

                <h3 className="text-lg font-bold text-green-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
