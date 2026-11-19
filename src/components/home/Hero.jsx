import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import ButtonLink from "../ui/ButtonLink";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      image: "/img/hero1.jpg",
      title: "Toda a saúde conectada. Num só lugar",
      description:
        "Uma plataforma que aproxima hospitais, clínicas, farmácias, laboratórios, médicos e pacientes, tornando a gestão da saúde mais simples e eficiente.",
    },
    {
      image: "/img/hero2.jpg",
      title: "Mais eficiência para quem cuida de vidas",
      description:
        "Simplifique processos, centralize informações e tenha uma gestão mais inteligente com soluções digitais pensadas para o setor da saúde.",
    },
    {
      image: "/img/hero3.jpg",
      title: "Conectamos profissionais. Aproximamos pessoas",
      description:
        "Facilitamos a comunicação e a colaboração entre instituições de saúde e pacientes através de um ecossistema digital integrado.",
    },
    {
      image: "/img/hero4.jpg",
      title: "Uma nova forma de cuidar e gerir a saúde",
      description:
        "Descubra uma experiência de saúde mais organizada, acessível e conectada, com tudo o que precisa numa única plataforma.",
    },
  ];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[650px] pt-20 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        grabCursor={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="w-full h-[580px] lg:h-[650px] hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Sobreposição da imagem */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30"></div>

              {/* Conteúdo */}
              <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
                <div className="max-w-3xl">

                  {/* Título */}
                  <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
                    {slide.title}
                  </h1>

                  {/* Descrição */}
                  <p className="hero-description text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mb-7">
                    {slide.description}
                  </p>

                  {/* Botões */}
                  <div className="hero-buttons flex flex-col sm:flex-row gap-3">
                    <ButtonLink
                      to="/register"
                      variant="primary"
                      size="md"
                    >
                      Começar agora
                      <i className="fas fa-arrow-right"></i>
                    </ButtonLink>

                    <ButtonLink
                      to="/#sobre"
                      isHashLink
                      variant="secondary"
                      size="md"
                      className="!bg-transparent border border-white/40 text-white hover:!bg-white hover:!text-green-900 shadow-none"
                    >
                      Conhecer a plataforma
                      <i className="fas fa-play-circle"></i>
                    </ButtonLink>
                  </div>

                  {/* Indicadores de confiança */}
                  <div className="hero-stats flex flex-wrap items-center gap-5 sm:gap-8 mt-8 pt-5 border-t border-white/20">
                    <div>
                      <p className="text-xl font-bold text-white">Integrado</p>
                      <p className="text-xs sm:text-sm text-white/60">
                        Ecossistema de saúde
                      </p>
                    </div>

                    <div className="w-px h-9 bg-white/20"></div>

                    <div>
                      <p className="text-xl font-bold text-white">Digital</p>
                      <p className="text-xs sm:text-sm text-white/60">
                        Gestão inteligente
                      </p>
                    </div>

                    <div className="w-px h-9 bg-white/20"></div>

                    <div>
                      <p className="text-xl font-bold text-white">Conectado</p>
                      <p className="text-xs sm:text-sm text-white/60">
                        Saúde sem barreiras
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
