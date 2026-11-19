import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";

export default function Termos() {
  const sections = [
    {
      id: "aceitacao",
      title: "1. Aceitação dos termos",
      content: [
        "Ao aceder ou utilizar a plataforma Mono Saúde, o utilizador declara que leu, compreendeu e aceita os presentes Termos e Condições.",
        "Caso não concorde com alguma das disposições aqui estabelecidas, deverá interromper a utilização da plataforma.",
      ],
    },
    {
      id: "plataforma",
      title: "2. Sobre a Mono Saúde",
      content: [
        "A Mono Saúde é uma plataforma digital integrada que procura aproximar instituições de saúde, profissionais, pacientes, farmácias e laboratórios através de ferramentas tecnológicas.",
        "Os serviços disponibilizados podem incluir funcionalidades de gestão, organização, comunicação, consulta de informações e acompanhamento de atividades relacionadas com o setor da saúde.",
      ],
    },
    {
      id: "registo",
      title: "3. Registo e conta de utilizador",
      content: [
        "Para aceder a determinadas funcionalidades, poderá ser necessário criar uma conta e fornecer informações verdadeiras, completas e atualizadas.",
        "O utilizador é responsável pela confidencialidade das suas credenciais de acesso e por todas as atividades realizadas através da sua conta.",
        "Qualquer utilização não autorizada da conta deverá ser comunicada à equipa da Mono Saúde com a maior brevidade possível.",
      ],
    },
    {
      id: "responsabilidades",
      title: "4. Responsabilidades dos utilizadores",
      content: [
        "Os utilizadores comprometem-se a utilizar a plataforma de forma responsável, lícita e de acordo com as finalidades dos serviços disponibilizados.",
        "Não é permitido utilizar a plataforma para atividades fraudulentas, ilícitas, prejudiciais a terceiros ou que comprometam a segurança e o funcionamento dos sistemas.",
        "As instituições e os profissionais são responsáveis pela exatidão, legalidade e atualização das informações que introduzem na plataforma.",
      ],
    },
    {
      id: "saude",
      title: "5. Utilização dos serviços de saúde",
      content: [
        "A Mono Saúde disponibiliza ferramentas tecnológicas de apoio à gestão e à organização de serviços de saúde.",
        "A plataforma não substitui o julgamento clínico, a avaliação médica presencial ou a responsabilidade profissional dos prestadores de cuidados de saúde.",
        "As decisões de diagnóstico, tratamento e acompanhamento clínico permanecem sob responsabilidade dos profissionais de saúde devidamente habilitados.",
      ],
    },
    {
      id: "dados",
      title: "6. Proteção de dados e privacidade",
      content: [
        "O tratamento de dados pessoais através da plataforma deverá respeitar a legislação aplicável e os princípios de confidencialidade, segurança e utilização adequada das informações.",
        "Os utilizadores devem consultar a nossa Política de Privacidade para conhecer as práticas relacionadas com a recolha, utilização, conservação e proteção dos seus dados.",
      ],
    },
    {
      id: "disponibilidade",
      title: "7. Disponibilidade da plataforma",
      content: [
        "A Mono Saúde procura assegurar a disponibilidade e o funcionamento adequado dos seus serviços.",
        "No entanto, poderão ocorrer interrupções temporárias devido a manutenção, atualizações, falhas técnicas, problemas de conectividade ou circunstâncias alheias ao nosso controlo.",
        "Sempre que possível, serão adotadas medidas para reduzir os impactos dessas interrupções.",
      ],
    },
    {
      id: "propriedade",
      title: "8. Propriedade intelectual",
      content: [
        "Os elementos que compõem a plataforma, incluindo a sua identidade visual, marca, estrutura, conteúdos, interfaces, funcionalidades e materiais disponibilizados, encontram-se protegidos pelos direitos de propriedade intelectual aplicáveis.",
        "Não é permitida a reprodução, distribuição, modificação ou utilização desses elementos sem autorização prévia, salvo nos casos permitidos por lei.",
      ],
    },
    {
      id: "planos",
      title: "9. Planos e condições comerciais",
      content: [
        "O acesso a determinadas funcionalidades poderá estar sujeito a planos de utilização, condições comerciais ou modalidades de subscrição específicas.",
        "Os preços, períodos de utilização, funcionalidades incluídas e condições de contratação serão apresentados pelos canais oficiais da Mono Saúde.",
        "A eventual alteração de planos ou condições comerciais deverá ser comunicada aos utilizadores afetados, quando aplicável.",
      ],
    },
    {
      id: "suspensao",
      title: "10. Suspensão e encerramento de contas",
      content: [
        "A Mono Saúde poderá restringir, suspender ou encerrar contas em situações de utilização indevida, violação destes termos, riscos de segurança ou cumprimento de obrigações legais.",
        "Sempre que possível e legalmente permitido, o utilizador será informado sobre a medida adotada e os respetivos fundamentos.",
      ],
    },
    {
      id: "responsabilidade",
      title: "11. Limitação de responsabilidade",
      content: [
        "A Mono Saúde não poderá ser responsabilizada por prejuízos decorrentes de utilização indevida da plataforma, fornecimento de informações incorretas pelos utilizadores ou falhas provocadas por fatores externos fora do seu controlo.",
        "Nada nestes termos pretende excluir responsabilidades que não possam ser afastadas nos termos da legislação aplicável.",
      ],
    },
    {
      id: "alteracoes",
      title: "12. Alterações aos termos",
      content: [
        "A Mono Saúde poderá atualizar estes Termos e Condições para refletir alterações nos serviços, funcionalidades, práticas operacionais ou requisitos legais.",
        "A versão atualizada será disponibilizada nesta página, com indicação da respetiva data de atualização.",
      ],
    },
    {
      id: "legislacao",
      title: "13. Legislação aplicável",
      content: [
        "Os presentes Termos e Condições deverão ser interpretados de acordo com a legislação aplicável na República de Angola, sem prejuízo de normas imperativas que sejam aplicáveis.",
        "Eventuais conflitos serão tratados pelos mecanismos legalmente competentes.",
      ],
    },
    {
      id: "contacto",
      title: "14. Contactos",
      content: [
        "Para esclarecer dúvidas, comunicar problemas ou obter informações adicionais sobre estes Termos e Condições, poderá contactar a equipa da Mono Saúde através dos canais oficiais disponibilizados na plataforma.",
      ],
    },
  ];

  return (
    <>
      <title>Termos e Condições | Mono Saúde</title>

      {/* Hero */}
      <section className="w-full bg-green-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-7">
              <i className="fas fa-file-contract text-2xl text-green-400"></i>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Termos e Condições
            </h1>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">
              Conheça as condições que regulam o acesso e a utilização
              da Mono Saúde. A transparência e a responsabilidade são
              fundamentais para a nossa relação com os utilizadores.
            </p>

            <div className="flex items-center gap-2 mt-8 text-sm text-white/60">
              <i className="far fa-calendar-alt"></i>
              <span>Última atualização: Novembro de 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

            {/* Índice */}
            <aside className="bg-white rounded-lg border border-gray-100 p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-bold text-green-900 mb-5">
                Nesta página
              </h2>

              <div className="flex flex-col gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </aside>

            {/* Texto dos termos */}
            <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-10 lg:p-12">

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  Bem-vindo à Mono Saúde
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Os presentes Termos e Condições estabelecem as regras
                  e responsabilidades aplicáveis à utilização da plataforma
                  Mono Saúde. O seu objetivo é garantir uma utilização
                  transparente, segura e adequada dos nossos serviços,
                  protegendo os interesses da plataforma e dos seus utilizadores.
                </p>
              </div>

              <div className="flex flex-col gap-10">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    <h3 className="text-xl font-bold text-green-900 mb-4">
                      {section.title}
                    </h3>

                    <div className="flex flex-col gap-4">
                      {section.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 text-sm sm:text-base leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Nota final */}
              <div className="mt-12 p-5 bg-green-50 border-l-4 border-green-600 rounded-r-md">
                <p className="text-sm text-green-900 leading-relaxed">
                  Ao utilizar a Mono Saúde, contribui para um ecossistema
                  digital mais organizado, conectado e responsável.
                  Agradecemos a sua confiança.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
