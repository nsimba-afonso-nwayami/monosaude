
import Button from "../ui/Button";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("Dados do contacto:", data);
  };

  return (
    <section
      id="contactos"
      className="w-full bg-gray-50 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
            Estamos prontos para ouvir e ajudar
          </h2>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Tem dúvidas ou pretende conhecer melhor a Mono Saúde?
            Entre em contacto connosco. Teremos todo o gosto em ajudar.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Imagem */}
          <div className="relative min-h-[400px] lg:min-h-full overflow-hidden rounded-lg group">
            <img
              src="/img/contato.png"
              alt="Equipa de profissionais de saúde"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-900/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                  Vamos transformar a saúde juntos.
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  A nossa equipa está disponível para esclarecer dúvidas,
                  apresentar soluções e ajudar a encontrar o melhor caminho
                  para a sua instituição.
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-sm">

            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-3">
                Envie-nos uma mensagem
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
                Preencha o formulário e entraremos em contacto consigo.
                Estamos disponíveis para ajudar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Nome e Email */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nome completo
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="O seu nome"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-700 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@email.com"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-700 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/10 transition-all duration-300"
                  />
                </div>

              </div>

              {/* Telefone e Assunto */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+244 900 000 000"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-700 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Assunto
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-700 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/10 transition-all duration-300"
                  >
                    <option value="" disabled>
                      Selecione um assunto
                    </option>
                    <option value="Informações gerais">
                      Informações gerais
                    </option>
                    <option value="Planos e preços">
                      Planos e preços
                    </option>
                    <option value="Parcerias">
                      Parcerias
                    </option>
                    <option value="Suporte">
                      Suporte
                    </option>
                    <option value="Outros">
                      Outros assuntos
                    </option>
                  </select>
                </div>

              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Escreva a sua mensagem..."
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-700 text-sm outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-600/10 transition-all duration-300"
                ></textarea>
              </div>

              {/* Botão */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
              >
                Enviar mensagem
                <i className="fas fa-paper-plane"></i>
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
