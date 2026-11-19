import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import Hero from "../../components/home/Hero";
import Benefits from "../../components/home/Benefits";
import About from "../../components/home/About";
import HowItWorks from "../../components/home/HowItWorks";
import Modules from "../../components/home/Modules";
import Plans from "../../components/home/Plans";
import CallToAction from "../../components/home/CallToAction";

export default function Home() {
  return (
    <>
      <title>Mono Saúde</title>

      <Hero />
      <Benefits />
      <About />
      <HowItWorks />
      <Modules />
      <Plans />
      <CallToAction />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
