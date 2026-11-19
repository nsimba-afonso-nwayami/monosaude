import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";

export default function Privacidade() {
  const sections = [
    {
      id: "recolha",
      title: "1. Informações que recolhemos",
      content: [
        "A Mono Saúde poderá recolher informações fornecidas diretamente pelos utilizadores durante o registo, utilização dos serviços ou contacto com a nossa equipa.",
        "Estas informações podem incluir dados de identificação, contactos, informações institucionais e outros elementos necessários ao funcionamento da plataforma.",
      ],
    },
    {
      id: "utilizacao",
      title: "2. Como utilizamos as informações",
      content: [
        "As informações recolhidas são utilizadas para disponibilizar e melhorar os serviços da Mono Saúde, gerir contas, facilitar a comunicação entre os intervenientes e prestar assistência aos utilizadores.",
        "Também poderão ser utilizadas para garantir a segurança da plataforma, cumprir obrigações legais e melhorar a experiência de utilização.",
      ],
    },
    {
      id: "saude",
      title: "3. Dados pessoais e informações de saúde",
      content: [
        "A Mono Saúde reconhece a natureza sensível dos dados pessoais e, em particular, das informações relacionadas com a saúde.",
        "O acesso a estas informações deverá ser limitado a utilizadores autorizados, de acordo com as respetivas permissões e finalidades legítimas de utilização da plataforma.",
      ],
    },
    {
      id: "partilha",
      title: "4. Partilha de informações",
      content: [
        "Os dados dos utilizadores não serão disponibilizados indiscriminadamente a terceiros.",
        "A partilha poderá ocorrer quando necessária à prestação dos serviços, mediante autorização aplicável ou para cumprimento de obrigações legais.",
      ],
    },
    {
      id: "seguranca",
      title: "5. Segurança das informações",
      content: [
        "Adotamos medidas técnicas e organizacionais destinadas a proteger as informações contra acessos não autorizados, perda, alteração ou divulgação indevida.",
        "Apesar dos nossos esforços, nenhum sistema digital pode garantir segurança absoluta. Por isso, trabalhamos continuamente para reforçar a proteção da plataforma.",
      ],
    },
    {
      id: "conservacao",
      title: "6. Conservação dos dados",
      content: [
        "As informações serão conservadas pelo período necessário ao cumprimento das finalidades para as quais foram recolhidas, respeitando os requisitos legais e regulamentares aplicáveis.",
      ],
    },
    {
      id: "direitos",
      title: "7. Direitos dos utilizadores",
      content: [
        "Os utilizadores poderão solicitar informações sobre os seus dados pessoais, bem como requerer a sua atualização, correção ou eliminação, nos termos da legislação aplicável.",
        "Os pedidos deverão ser encaminhados através dos nossos canais oficiais de contacto.",
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies e tecnologias semelhantes",
      content: [
        "A plataforma poderá utilizar cookies e tecnologias semelhantes para melhorar a navegação, compreender a utilização dos serviços e proporcionar uma experiência mais adequada.",
        "Os utilizadores poderão gerir as preferências de cookies através das configurações disponíveis no navegador, quando aplicável.",
      ],
    },
    {
      id: "alteracoes",
      title: "9. Alterações a esta política",
      content: [
        "Esta Política de Privacidade poderá ser atualizada sempre que necessário, nomeadamente para refletir alterações nos serviços, nas práticas de tratamento de dados ou na legislação aplicável.",
        "A versão atualizada será disponibilizada nesta página.",
      ],
    },
    {
      id: "contacto",
      title: "10. Contactos",
      content: [
        "Para esclarecer dúvidas, apresentar solicitações ou obter informações adicionais sobre esta Política de Privacidade, poderá entrar em contacto com a equipa da Mono Saúde através dos canais oficiais disponibilizados na plataforma.",
      ],
    },
  ];

  return (
    <>
      <title>Política de Privacidade | Mono Saúde</title>

      {/* Hero */}
      <section className="w-full bg-green-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-7">
              <i className="fas fa-shield-alt text-2xl text-green-400"></i>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Política de Privacidade
            </h1>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">
              A sua privacidade é importante para nós. Conheça como a Mono
              Saúde trata, utiliza e protege as suas informações durante
              a utilização dos nossos serviços.
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

            {/* Texto da política */}
            <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-10 lg:p-12">

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  O nosso compromisso com a sua privacidade
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  A Mono Saúde compromete-se a respeitar a privacidade
                  e a proteger os dados pessoais dos seus utilizadores.
                  Esta política descreve os princípios que orientam
                  o tratamento das informações recolhidas através
                  da nossa plataforma e dos serviços disponibilizados.
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
                  A proteção dos seus dados é parte essencial do nosso
                  compromisso com uma saúde mais segura, conectada
                  e responsável.
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
