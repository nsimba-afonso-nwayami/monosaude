
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";

export default function Contact() {
  const subjects = [
    { value: "Informações gerais", label: "Informações gerais" },
    { value: "Planos e preços", label: "Planos e preços" },
    { value: "Parcerias", label: "Parcerias" },
    { value: "Suporte", label: "Suporte" },
    { value: "Outros", label: "Outros assuntos" },
  ];

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
                <Input
                  id="name"
                  name="name"
                  label="Nome completo"
                  placeholder="O seu nome"
                />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="exemplo@email.com"
                />
              </div>

              {/* Telefone e Assunto */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Telefone"
                  placeholder="+244 900 000 000"
                />

                <Select
                  id="subject"
                  name="subject"
                  label="Assunto"
                  placeholder="Selecione um assunto"
                  options={subjects}
                />
              </div>

              {/* Mensagem */}
              <Textarea
                id="message"
                name="message"
                label="Mensagem"
                placeholder="Escreva a sua mensagem..."
                rows={5}
              />

              {/* Botão */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
              >
                Enviar mensagem
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
