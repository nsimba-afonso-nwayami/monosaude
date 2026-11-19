import { Outlet } from "react-router-dom";

export default function AuthLayout({ image }) {
  return (
    <main className="min-h-screen w-full grid lg:grid-cols-2 bg-white">

      {/* Área da imagem */}
      <div className="hidden lg:block relative min-h-screen overflow-hidden">
        <img
          src={image}
          alt="Mono Saúde"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-900/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-14">
          <div className="max-w-lg">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
              Toda a saúde conectada. Num só lugar.
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              Entre na Mono Saúde e descubra uma nova forma de conectar,
              gerir e transformar os serviços de saúde.
            </p>
          </div>
        </div>
      </div>

      {/* Área dos formulários */}
      <div className="min-h-screen flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14 xl:px-20">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

    </main>
  );
}
