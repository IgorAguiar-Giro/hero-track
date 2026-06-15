import Image from "next/image";
import Link from "next/link";
import MaintenanceFlowDiagram from "./components/MaintenanceFlowDiagram";

const BRAND_ORANGE = "#fd510f";
const BRAND_BLUE = "#013469";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs sm:text-sm font-bold text-gray-900 mb-2">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
      {children}
    </h2>
  );
}

function Logo({
  className = "h-16 w-16 object-contain",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/images/hero-track-logo.jpeg"
      alt="HeroTrack — Fleet Management"
      width={180}
      height={180}
      className={className}
      priority
    />
  );
}

type Corner = "top-right" | "top-left" | "bottom-left" | "bottom-right";
type LogoSize = "sm" | "md" | "lg";

const cornerPosition: Record<Corner, string> = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const logoBoxSize: Record<LogoSize, string> = {
  sm: "size-16 sm:size-24",
  md: "size-24 sm:size-32",
  lg: "size-28 sm:size-40",
};

const logoImageSize: Record<LogoSize, string> = {
  sm: "h-[3.25rem] w-[3.25rem] sm:h-[4.25rem] sm:w-[4.25rem]",
  md: "h-[4.5rem] w-[4.5rem] sm:h-[5.75rem] sm:w-[5.75rem]",
  lg: "h-[5.5rem] w-[5.5rem] sm:h-[7.25rem] sm:w-[7.25rem]",
};

function LogoSquare({
  size = "md",
  className = "",
}: {
  size?: LogoSize;
  className?: string;
}) {
  return (
    <div
      className={`${logoBoxSize[size]} bg-white flex items-center justify-center p-2 shrink-0 ${className}`}
    >
      <Logo className={`${logoImageSize[size]} object-contain`} />
    </div>
  );
}

function CornerLogo({
  position = "top-right",
  size = "md",
}: {
  position?: Corner;
  size?: LogoSize;
}) {
  return (
    <LogoSquare
      size={size}
      className={`absolute ${cornerPosition[position]} z-10 scale-90 sm:scale-100`}
    />
  );
}

const onboardingSteps = [
  {
    day: "Dia 1 — Contrato e Kickoff",
    text: "Reunião de alinhamento, levantamento da frota e planejamento da instalação.",
  },
  {
    day: "Dia 2 — Instalação",
    text: "Técnicos certificados instalam os dispositivos em todos os veículos da frota.",
  },
  {
    day: "Dia 3 — Treinamento",
    text: "Capacitação dos gestores na plataforma web e no aplicativo mobile HeroTrack.",
  },
  {
    day: "Dia 4+ — Operação",
    text: "Frota 100% monitorada com suporte técnico 24/7 disponível por telefone, chat e e-mail.",
  },
];

function OnboardingTimeline() {
  return (
    <>
      {/* Mobile: left-aligned vertical timeline */}
      <div className="md:hidden relative pl-11 space-y-8">
        <div className="absolute left-[17px] top-2 bottom-2 w-px bg-indigo-200" />
        {onboardingSteps.map((item, i) => (
          <div key={item.day} className="relative">
            <div className="absolute -left-11 top-0 w-9 h-9 bg-indigo-100 border border-indigo-200 rounded-lg flex items-center justify-center text-sm font-bold text-[#013469]">
              {i + 1}
            </div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.day}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Desktop: centered zigzag timeline */}
      <div className="hidden md:block relative max-w-lg">
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-indigo-200 -translate-x-1/2" />
        {onboardingSteps.map((item, i) => {
          const isLeft = i % 2 === 0;
          const content = (
            <>
              <h3 className="font-bold text-gray-900 mb-1 text-base">
                {item.day}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </>
          );

          return (
            <div
              key={item.day}
              className="relative grid grid-cols-[1fr_auto_1fr] gap-x-6 items-center mb-10 last:mb-0"
            >
              <div className={isLeft ? "text-right pr-4" : ""}>
                {isLeft && content}
              </div>
              <div className="relative z-10 w-10 h-10 bg-indigo-100 border border-indigo-200 rounded-lg flex items-center justify-center text-sm font-bold text-[#013469] shrink-0">
                {i + 1}
              </div>
              <div className={isLeft ? "" : "text-left pl-4"}>
                {!isLeft && content}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function HeroTrackLanding() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-100 py-2.5 sm:py-3 px-4 sm:px-6 md:px-12 flex justify-between items-center gap-3 sticky top-0 z-50 shadow-sm">
        <Link href="#" className="flex items-center shrink-0">
          <LogoSquare size="sm" />
        </Link>
        <a
          href="#contato"
          className="bg-[#fd510f] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-md font-semibold hover:bg-orange-600 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
        >
          <span className="sm:hidden">Contato</span>
          <span className="hidden sm:inline">Fale com um Especialista</span>
        </a>
      </header>

      {/* HERO — Slide 1 (Corporate / Enterprise Design) */}
      <section className="relative w-full min-h-[75vh] flex items-center bg-[#013469] overflow-hidden">
        {/* Background Horizontal Image with Corporate Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-frota.png"
            alt="Frota de veículos corporativos"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Deep blue gradient overlay. Solid on the left for text readability, fading to the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#013469] via-[#013469]/90 to-[#013469]/20"></div>
          {/* Fallback darker overlay for mobile to ensure text pops */}
          <div className="absolute inset-0 bg-[#013469]/60 sm:hidden"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Corporate Kicker */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-[#fd510f]"></div>
              <span className="text-[#fd510f] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                Telemetria & Gestão
              </span>
            </div>

            {/* Serious, Authoritative Headline */}
            <h1 className="inline-block  px-5 py-3 sm:px-6 sm:py-4 mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold italic uppercase  ">
              <span className="text-[#fd510f]">HERO</span>
              <span className="text-white">TRACK</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed font-light">
              Reduza custos e aumente a eficiência da sua frota com
              monitoramento em tempo real, manutenção preditiva e segurança
              antifurto de nível empresarial.
            </p>

            {/* Straightforward CTAs with sharper edges (rounded-sm) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-[#fd510f] text-white px-8 py-4 rounded-sm font-bold text-base hover:bg-orange-600 transition-colors text-center"
              >
                Fale com um Especialista
              </a>
              {/* <a
                href="#solucao"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-base hover:bg-white hover:text-[#013469] transition-colors text-center"
              >
                Conheça a Plataforma
              </a>
              */}
            </div>
          </div>
        </div>

        {/* Corporate Trust Bar at the bottom of the Hero */}
        <div className="absolute bottom-0 left-0 w-full bg-[#013469]/95 border-t border-blue-800 z-20 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <span className="font-black text-2xl leading-none">GESTÃO</span>
                <span className="text-blue-300 text-xs uppercase tracking-wider mt-1">
                  De toda sua frota
                </span>
              </div>
              <div className="w-px h-10 bg-blue-800"></div>
              <div className="flex flex-col">
                <span className="font-black text-2xl leading-none">
                  RASTREAMENTO
                </span>
                <span className="text-blue-300 text-xs uppercase tracking-wider mt-1">
                  Em tempo real
                </span>
              </div>
              <div className="w-px h-10 bg-blue-800"></div>
              <div className="flex flex-col">
                <span className="font-black text-2xl leading-none">98%</span>
                <span className="text-blue-300 text-xs uppercase tracking-wider mt-1">
                  Índice de Retenção
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              <span className="font-semibold text-sm text-blue-100 tracking-wide">
                Suporte Operacional 24/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE — Slide 2 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <SectionLabel>Sobre a HeroTrack</SectionLabel>
            <SectionTitle>Quem Somos</SectionTitle>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A HeroTrack é uma empresa brasileira especializada em soluções de
              gestão de frotas, combinando rastreamento por GPS, inteligência
              artificial e análise de dados para transformar a maneira como as
              empresas gerenciam seus veículos.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Com mais de uma década de experiência no mercado logístico,
              atendemos transportadoras, distribuidoras e empresas com frotas
              próprias em todo o Brasil, entregando visibilidade total,
              segurança e redução de custos operacionais.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-indigo-50 p-3 sm:p-5 rounded-xl text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
                  +10 Anos
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  de experiência no mercado
                </div>
              </div>
              <div className="bg-indigo-50 p-3 sm:p-5 rounded-xl text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
                  +5.000
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  veículos monitorados
                </div>
              </div>
              <div className="bg-indigo-50 p-3 sm:p-5 rounded-xl text-center col-span-2">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  de satisfação dos clientes
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-56 sm:h-80 md:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/quem-somos.png"
              alt="Central de monitoramento HeroTrack"
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* DESAFIO — Slide 3 */}
      <section className="grid md:grid-cols-5 bg-white">
        <div className="md:col-span-2 relative min-h-[280px] sm:min-h-[360px] md:min-h-[600px]">
          <Image
            src="/images/desafio-gestao-frotas.png"
            alt="Desafio da gestão de frotas no Brasil"
            fill
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <CornerLogo position="bottom-left" size="sm" />
        </div>
        <div className="md:col-span-3 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16 flex flex-col justify-center">
          <SectionTitle>O Desafio da Gestão de Frotas no Brasil</SectionTitle>
          <p className="text-gray-700 mb-4 leading-relaxed font-medium">
            Gerenciar uma frota no Brasil é uma tarefa complexa.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Empresas enfrentam custos crescentes com combustível, manutenção não
            planejada, roubos de carga e falta de visibilidade sobre a operação
            em tempo real — desafios que drenam recursos e comprometem a
            competitividade.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Custos Incontrolados",
                text: "Combustível, manutenção corretiva e multas representam até 40% dos custos operacionais.",
              },
              {
                title: "Falta de Visibilidade",
                text: "Sem rastreamento em tempo real, gestores perdem controle sobre rotas e comportamento dos motoristas.",
              },
              {
                title: "Segurança e Roubo",
                text: "O Brasil registra milhares de roubos de carga anualmente, causando prejuízos bilionários.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-[#013469] bg-white shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO — Slide 4 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8">
            <div>
              <SectionLabel>A Solução</SectionLabel>
              <SectionTitle>
                HeroTrack: Visibilidade Total da Sua Frota
              </SectionTitle>
            </div>
            <LogoSquare size="sm" className="hidden md:flex" />
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-8 sm:mb-12">
            A plataforma HeroTrack integra rastreamento GPS de alta precisão,
            telemetria veicular e inteligência de dados em um único painel de
            controle, acessível de qualquer lugar e a qualquer hora.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
            {[
              {
                icon: "◎",
                title: "Rastreamento em Tempo Real",
                text: "Localize todos os veículos da frota em um mapa interativo, com atualizações a cada 30 segundos.",
              },
              {
                icon: "▣",
                title: "Telemetria Avançada",
                text: "Monitore velocidade, frenagens bruscas, aceleração agressiva e consumo de combustível em tempo real.",
              },
              {
                icon: "⛨",
                title: "Segurança e Antifurto",
                text: "Alertas imediatos em caso de desvio de rota, jamming de sinal ou movimentação fora do horário permitido.",
              },
              {
                icon: "⚙",
                title: "Manutenção Preditiva",
                text: "Agenda automática de revisões com base em quilometragem, horas de uso e alertas de diagnóstico veicular.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-3xl text-[#013469] font-light shrink-0 w-10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS — Slide 5 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 sm:mb-10">
            <div>
              <SectionLabel>Módulos da Plataforma</SectionLabel>
              <SectionTitle>
                Funcionalidades que Transformam a Operação
              </SectionTitle>
            </div>
            <LogoSquare size="sm" className="hidden md:flex" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-52 sm:h-72 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg order-1 md:order-none">
              <Image
                src="/images/modulos-plataforma.png"
                alt="Dashboard HeroTrack — Módulos da Plataforma"
                fill
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 sm:space-y-8 order-2 md:order-none">
              {[
                {
                  num: "1",
                  title: "Gestão de Rotas",
                  text: "Planejamento e otimização automática de rotas para reduzir distância percorrida e tempo de entrega.",
                },
                {
                  num: "2",
                  title: "Controle de Motoristas",
                  text: "Cadastro de motoristas, jornada de trabalho, pontuação de comportamento e relatórios individuais de condução.",
                },
                {
                  num: "3",
                  title: "Relatórios e BI",
                  text: "Dashboards personalizáveis com KPIs operacionais, exportação de dados e integrações via API com ERPs.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5">
                  <div className="bg-indigo-100 text-gray-700 font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RASTREAMENTO — Slide 6 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
            <div>
              <SectionLabel>Rastreamento</SectionLabel>
              <SectionTitle>Monitoramento GPS de Alta Precisão</SectionTitle>
            </div>
            <LogoSquare size="sm" className="hidden md:flex" />
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 sm:mb-12">
            O hardware HeroTrack utiliza tecnologia GPS/GLONASS dual com
            comunicação 4G, garantindo precisão de localização mesmo em áreas
            remotas. O dispositivo é resistente a vibração, temperatura extrema
            e tentativas de sabotagem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
                title: "Hardware Embarcado",
                text: "Dispositivo compacto instalado de forma oculta, com bateria de backup para funcionar mesmo com o veículo desligado.",
              },
              {
                img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
                title: "App Mobile",
                text: "Acompanhe sua frota pelo smartphone com o aplicativo HeroTrack disponível para Android e iOS, com notificações push em tempo real.",
              },
              {
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                title: "Central de Monitoramento",
                text: "Suporte 24/7 com equipe especializada para acionamento rápido em situações de emergência, roubo ou acidente.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 shadow-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURANÇA — Slide 7 */}
      <section className="grid md:grid-cols-2 bg-white border-t border-gray-100">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16 flex flex-col justify-center order-2 md:order-1">
          <SectionLabel>Segurança de Carga</SectionLabel>
          <SectionTitle>Proteção Inteligente Contra Roubos</SectionTitle>
          <p className="text-gray-700 mb-8 leading-relaxed">
            O módulo de segurança da HeroTrack combina cerca eletrônica virtual,
            detecção de bloqueadores de sinal (jammer) e bloqueio remoto do
            veículo para oferecer a proteção mais completa disponível no
            mercado.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Cerca Virtual",
                text: "Defina áreas autorizadas e receba alertas instantâneos quando o veículo sair do perímetro configurado.",
              },
              {
                title: "Bloqueio Remoto",
                text: "Em caso de roubo confirmado, acione o bloqueio do motor remotamente pelo painel ou pelo app.",
              },
              {
                title: "Anti-Jammer",
                text: "Detecção imediata de dispositivos que tentam bloquear o sinal GPS, com alerta para a central de monitoramento.",
                span: "sm:col-span-2",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-indigo-50 p-5 rounded-xl ${item.span ?? ""}`}
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[360px] md:min-h-full order-1 md:order-2">
          <Image
            src="/images/scania.jpg"
            alt="Segurança de carga — caminhão em operação"
            fill
            quality={90}
            priority
            className="object-cover object-left"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <CornerLogo position="top-right" size="sm" />
        </div>
      </section>

      {/* EFICIÊNCIA — Slide 8 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
            <div>
              <SectionLabel>Eficiência Operacional</SectionLabel>
              <SectionTitle>Redução de Custos Comprovada</SectionTitle>
            </div>
            <LogoSquare size="sm" className="hidden md:flex" />
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 sm:mb-12">
            Clientes HeroTrack reportam redução significativa nos custos
            operacionais após a implementação da plataforma. Com dados precisos
            sobre consumo, comportamento e manutenção, as decisões deixam de ser
            baseadas em suposições.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
            {[
              {
                pct: "25%",
                title: "Redução de Combustível",
                text: "Média alcançada pelos clientes com otimização de rotas e monitoramento de condução.",
              },
              {
                pct: "40%",
                title: "Menos Manutenção Corretiva",
                text: "Queda nas paradas não programadas com o programa de manutenção preditiva.",
              },
              {
                pct: "30%",
                title: "Aumento de Produtividade",
                text: "Melhora na eficiência das entregas com rotas otimizadas e controle de jornada.",
              },
              {
                pct: "60%",
                title: "Redução de Incidentes",
                text: "Diminuição de acidentes e multas com o programa de gestão comportamental de motoristas.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <div
                  className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3"
                  style={{ color: BRAND_ORANGE }}
                >
                  {item.pct}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO DE MOTORISTAS — Slide 9 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative h-56 sm:h-80 md:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
            <Image
              src="/images/gestao-motoristas.png"
              alt="Gestão de motoristas HeroTrack"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 90vw, 480px"
            />
          </div>
          <div className="order-2">
            <SectionLabel>Gestão de Motoristas</SectionLabel>
            <SectionTitle>
              Programa de Comportamento e Segurança no Trânsito
            </SectionTitle>
            <p className="text-gray-700 mb-8 leading-relaxed">
              O módulo de gestão de motoristas da HeroTrack monitora
              automaticamente{" "}
              <strong>
                excesso de velocidade, frenagens bruscas, curvas agressivas e
                uso de celular ao volante
              </strong>
              , gerando uma pontuação individual que orienta treinamentos e
              bonificações.
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "Monitorar",
                  text: "Comportamento registrado automaticamente durante todas as viagens.",
                },
                {
                  num: "2",
                  title: "Avaliar",
                  text: "Score individual por motorista com ranking e histórico de evolução.",
                },
                {
                  num: "3",
                  title: "Treinar",
                  text: "Relatórios direcionados para treinamentos precisos e gamificação.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="border border-gray-200 rounded-lg overflow-hidden flex"
                >
                  <div className="bg-indigo-100 text-2xl font-bold text-gray-700 w-14 flex items-center justify-center shrink-0">
                    {item.num}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANUTENÇÃO — Slide 10 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div className="flex-1 min-w-0">
              <SectionLabel>Manutenção</SectionLabel>
              <SectionTitle>
                Da Corretiva à Preditiva: Cuide da Frota Antes do Problema
              </SectionTitle>
            </div>
            <LogoSquare size="sm" className="self-end sm:self-start shrink-0" />
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-10 sm:mb-12">
            A HeroTrack integra dados de telemetria OBD com alertas automáticos
            para criar um plano de manutenção inteligente, reduzindo paradas não
            planejadas e aumentando a vida útil dos veículos.
          </p>

          <MaintenanceFlowDiagram />

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto">
            Com este fluxo automatizado, os gestores recebem alertas{" "}
            <strong>antes que a falha aconteça</strong>, eliminando custos com
            reboque, perda de carga e improdutividade da frota.
          </p>
        </div>
      </section>

      {/* RELATÓRIOS — Slide 11 */}
      <section className="grid md:grid-cols-5 bg-gray-50 border-t border-gray-100">
        <div className="md:col-span-3 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16 order-2 md:order-1">
          <SectionLabel>Relatórios e Inteligência</SectionLabel>
          <SectionTitle>Dados que Geram Decisões Estratégicas</SectionTitle>
          <p className="text-gray-700 mb-8 leading-relaxed">
            A plataforma HeroTrack oferece mais de{" "}
            <strong>50 tipos de relatórios</strong> configuráveis, com
            exportação em PDF e Excel, integração via API com os principais ERPs
            do mercado e dashboards em tempo real acessíveis por qualquer
            dispositivo.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: "⛽",
                title: "Consumo de Combustível",
                text: "Por veículo, por rota ou por motorista, com comparativos e tendências mensais.",
              },
              {
                icon: "📍",
                title: "Histórico de Rotas",
                text: "Replay completo de cada viagem com paradas, velocidades e eventos registrados.",
              },
              {
                icon: "🕐",
                title: "Jornada de Trabalho",
                text: "Controle de horas trabalhadas, tempo em marcha e conformidade com a legislação trabalhista.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="bg-indigo-100 w-12 h-16 rounded-full flex items-center justify-center shrink-0 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 relative min-h-[280px] sm:min-h-[360px] md:min-h-full order-1 md:order-2">
          <Image
            src="/images/dados-decisoes.png"
            alt="Dados que geram decisões estratégicas — HeroTrack"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <CornerLogo position="top-right" size="sm" />
        </div>
      </section>

      {/* SEGMENTOS — Slide 12 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 sm:mb-10">
            <div>
              <SectionLabel>Segmentos Atendidos</SectionLabel>
              <SectionTitle>Soluções para Cada Tipo de Frota</SectionTitle>
            </div>
            <LogoSquare size="sm" className="hidden md:flex" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
                title: "Transporte de Cargas",
                text: "Rotas otimizadas, controle de temperatura para cargas refrigeradas e gestão completa de entregas.",
              },
              {
                img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
                title: "Transporte de Passageiros",
                text: "Monitoramento de escolares, fretados e transporte público com foco em segurança e pontualidade.",
              },
              {
                img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
                title: "Frotas Corporativas",
                text: "Controle de uso de veículos corporativos, política de utilização e relatórios para o RH e financeiro.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTAÇÃO — Slide 13 */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>Implementação</SectionLabel>
            <SectionTitle>Onboarding Rápido e Suporte Dedicado</SectionTitle>
            <p className="text-gray-700 mb-10 leading-relaxed">
              A implementação da HeroTrack é rápida e assistida. Nossa equipe
              técnica realiza a instalação do hardware, configuração da
              plataforma e treinamento da equipe gestora em até{" "}
              <strong>72 horas</strong> após a contratação.
            </p>
            <OnboardingTimeline />
          </div>
          <div className="relative h-56 sm:h-80 md:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
            <Image
              src="/images/onboarding-rapido.png"
              alt="Instalação de hardware HeroTrack"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS — Slide 15 */}
      <section className="grid md:grid-cols-5 bg-white border-t border-gray-100">
        <div className="md:col-span-3 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16 order-2 md:order-1">
          <SectionLabel>Depoimentos</SectionLabel>
          <SectionTitle>O Que Nossos Clientes Dizem</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                quote:
                  "Depois do HeroTrack, reduzimos 28% no consumo de combustível em apenas 4 meses. A visibilidade da operação mudou completamente a forma como gerenciamos nossa frota.",
                name: "Carlos Mendes",
                role: "Diretor de Logística, Transportadora Rota Sul",
              },
              {
                quote:
                  "A implantação foi surpreendentemente rápida. Em 3 dias já tínhamos todos os veículos monitorados e a equipe treinada. O suporte é excepcional.",
                name: "Ana Paula Ribeiro",
                role: "Gerente de Frota, Distribuidora Central",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="border-2 border-indigo-200 rounded-xl p-4 sm:p-6 relative"
              >
                <span
                  className="text-5xl absolute top-2 left-4 leading-none"
                  style={{ color: BRAND_BLUE }}
                >
                  &ldquo;
                </span>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-6 pt-6 relative z-10">
                  {item.quote}
                </p>
                <div className="font-bold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </div>
            ))}
            <div className="border-2 border-indigo-200 rounded-xl p-4 sm:p-6 relative md:col-span-2">
              <span
                className="text-5xl absolute top-2 left-4 leading-none"
                style={{ color: BRAND_BLUE }}
              >
                &ldquo;
              </span>
              <p className="text-gray-600 italic text-sm leading-relaxed mb-6 pt-6 relative z-10">
                O bloqueio remoto nos salvou de um roubo de carga em plena
                madrugada. A central HeroTrack agiu em menos de 5 minutos e
                recuperamos o veículo.
              </p>
              <div className="font-bold text-gray-900">Roberto Alves</div>
              <div className="text-sm text-gray-500">
                Proprietário, Transportes Alves & Filhos
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 relative min-h-[280px] sm:min-h-[360px] md:min-h-full order-1 md:order-2">
          <Image
            src="/images/depoimentos-cliente.png"
            alt="Cliente HeroTrack"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <CornerLogo position="top-right" size="sm" />
        </div>
      </section>

      {/* CTA — Slide 16 */}
      <section
        id="contato"
        className="grid md:grid-cols-5 bg-white border-t border-gray-100"
      >
        <div className="md:col-span-2 relative min-h-[280px] sm:min-h-[360px] md:min-h-full">
          <Image
            src="/images/fale-com-especialista.png"
            alt="Fale com um especialista HeroTrack"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
        </div>
        <div className="md:col-span-3 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16 flex flex-col justify-center">
          <div className="flex justify-end mb-6 sm:mb-8">
            <LogoSquare size="sm" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Fale com um Especialista
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Pronto para transformar a gestão da sua frota? Nossa equipe está
            disponível para apresentar uma demonstração personalizada, tirar
            todas as suas dúvidas e montar o plano ideal para a realidade da sua
            empresa.
          </p>
          <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl mb-4 w-full max-w-md">
            <div className="font-bold text-lg sm:text-xl text-gray-900 mb-1">
              José Souza
            </div>
            <div className="text-gray-600 mb-3">
              Especialista em Gestão de Frotas HeroTrack
            </div>
            <a
              href="tel:+5519996141749"
              className="flex items-center gap-2 font-bold text-gray-900 text-lg hover:text-[#fd510f] transition-colors"
            >
              <span className="text-xl">📞</span>
              (19) 99614-1749
            </a>
          </div>
          <div className="bg-green-50 border border-green-100 p-4 sm:p-5 rounded-xl w-full max-w-2xl flex gap-3 items-start">
            <span className="text-green-600 text-xl shrink-0">✓</span>
            <p className="text-gray-700 text-sm leading-relaxed">
              Entre em contato agora e receba uma{" "}
              <strong>demonstração gratuita</strong> da plataforma HeroTrack
              para a sua frota!
            </p>
          </div>
          <a
            href="tel:+5519996141749"
            className="mt-6 sm:mt-8 inline-block bg-[#fd510f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:bg-orange-600 transition-all shadow-lg text-center w-full sm:w-auto"
          >
            Solicitar Demonstração Gratuita
          </a>
        </div>
      </section>

      <footer className="bg-[#013469] py-6 text-center text-blue-200 text-sm">
        <p>
          &copy; {new Date().getFullYear()} HeroTrack Fleet Management. Todos os
          direitos reservados.
        </p>
        <p className="mt-2 text-blue-300">
          Site criado por{" "}
          <a
            href="https://www.linkedin.com/in/igoraguiar000/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-[#fd510f] transition-colors underline-offset-2 hover:underline"
          >
            Igor Aguiar
          </a>
        </p>
      </footer>
    </div>
  );
}
