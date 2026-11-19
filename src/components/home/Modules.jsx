
export default function Modules() {
  const modules = [
    {
      icon: "fa-hospital",
      title: "Instituições de saúde",
      description:
        "Centralize a gestão hospitalar e clínica, organize serviços, acompanhe atividades e otimize os processos da sua instituição.",
    },
    {
      icon: "fa-user-md",
      title: "Profissionais de saúde",
      description:
        "Aceda a ferramentas para gerir consultas, acompanhar pacientes, organizar agendas e consultar informações clínicas.",
    },
    {
      icon: "fa-user-injured",
      title: "Pacientes",
      description:
        "Tenha acesso às suas informações de saúde, acompanhe consultas e mantenha uma relação mais próxima com os serviços de saúde.",
    },
    {
      icon: "fa-prescription-bottle-alt",
      title: "Farmácias",
      description:
        "Organize produtos, controle o stock, acompanhe vendas e simplifique a gestão das operações farmacêuticas.",
    },
    {
      icon: "fa-flask",
      title: "Laboratórios",
      description:
        "Organize solicitações de exames, acompanhe processos laboratoriais e facilite a gestão e disponibilização de resultados.",
    },
    {
      icon: "fa-file-invoice-dollar",
      title: "Faturação",
      description:
        "Gira faturação, acompanhe pagamentos, emita documentos e organize os processos financeiros dos serviços de saúde.",
    },
    {
      icon: "fa-chart-line",
      title: "Administração e gestão",
      description:
        "Acompanhe indicadores, controle operações e tenha uma visão organizada das atividades da plataforma.",
    },
  ];

  return (
    <section
      id="modulos"
      className="w-full bg-gray-50 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
            Tudo o que precisa para gerir e conectar a saúde
          </h2>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Diferentes módulos, pensados para responder às necessidades
            de cada participante do ecossistema Mono Saúde.
          </p>
        </div>

        {/* Cartões dos módulos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center bg-white p-8 lg:p-9 rounded-lg border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
            >
              {/* Ícone */}
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <i
                  className={`fas ${module.icon} text-green-600 text-xl group-hover:text-white transition-colors duration-300`}
                ></i>
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {module.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
