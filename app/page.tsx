import Image from "next/image";
import MaintenanceFlowDiagram from "./components/MaintenanceFlowDiagram";
import SiteHeader from "./components/SiteHeader";
import WhatsAppLink from "./components/WhatsAppLink";

const BRAND_ORANGE = "#fd510f";
const BRAND_BLUE = "#013469";
const WHATSAPP_NUMBER = "5519996141749";
const WHATSAPP_DEMO_MESSAGE =
  "Olá! Gostaria de solicitar uma demonstração gratuita da plataforma HeroTrack.";
const WHATSAPP_DEMO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEMO_MESSAGE)}`;

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-[3px] w-10 shrink-0 rounded-full bg-[#fd510f]" />
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm ${
          light ? "text-[#fd510f]" : "text-[#fd510f]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-4 sm:mb-6">
      <h2
        className={`text-2xl font-bold leading-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-[#013469]"
        }`}
      >
        {children}
      </h2>
      <div
        className={`mt-4 h-1 w-20 rounded-full ${
          light
            ? "bg-gradient-to-r from-[#fd510f] to-white/25"
            : "bg-gradient-to-r from-[#fd510f] via-[#fd510f]/50 to-transparent"
        }`}
      />
    </div>
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
        <div className="absolute left-[17px] top-2 bottom-2 w-px bg-[#013469]/20" />
        {onboardingSteps.map((item, i) => (
          <div key={item.day} className="relative">
            <div className="absolute -left-11 top-0 flex h-9 w-9 items-center justify-center rounded-lg border border-[#013469]/15 bg-[#e8eef5] text-sm font-bold text-[#013469]">
              {i + 1}
            </div>
            <h3 className="mb-1 text-sm font-bold text-[#013469]">
              {item.day}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: centered zigzag timeline */}
      <div className="hidden md:block relative max-w-lg">
        <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-[#013469]/20" />
        {onboardingSteps.map((item, i) => {
          const isLeft = i % 2 === 0;
          const content = (
            <>
              <h3 className="mb-1 text-base font-bold text-[#013469]">
                {item.day}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
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
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#013469]/15 bg-[#e8eef5] text-sm font-bold text-[#013469]">
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
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SiteHeader />

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
                Inteligência Logística
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
              {[
                {
                  value: "+10 Anos",
                  label: "de experiência no mercado",
                },
                {
                  value: "+5.000",
                  label: "veículos monitorados",
                },
                {
                  value: "98%",
                  label: "de satisfação dos clientes",
                  span: "col-span-2",
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className={`rounded-xl border border-[#013469]/10 border-t-[3px] border-t-[#fd510f] bg-white p-3 text-center shadow-sm sm:p-5 ${
                    stat.span ?? ""
                  }`}
                >
                  <div className="mb-1 text-xl font-black text-[#013469] sm:text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
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
      <section className="grid md:grid-cols-5 bg-[#f6f9fc]">
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
        <div className="md:col-span-3 flex flex-col justify-center bg-[#f6f9fc] px-4 py-10 sm:px-6 sm:py-16 md:px-12 lg:px-16">
          <SectionLabel>O Desafio</SectionLabel>
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
                className="rounded-lg border border-[#013469]/10 border-l-4 border-l-[#fd510f] bg-white p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-[#013469]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO — Slide 4 */}
      <section className="border-t border-[#013469]/10 bg-white px-4 py-10 sm:px-6 sm:py-16 md:px-12 lg:px-16">
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
                  <h3 className="mb-2 font-bold text-[#013469]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS — Slide 5 */}
      <section className="border-t border-[#013469]/10 bg-[#fff8f4] px-4 py-10 sm:px-6 sm:py-16 md:px-12 lg:px-16">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#013469] text-xl font-bold text-white">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-[#013469]">
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
                <h3 className="mb-2 font-bold text-[#013469]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURANÇA — Slide 7 */}
      <section className="grid border-t border-[#013469]/10 bg-[#f6f9fc] md:grid-cols-2">
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
                className={`rounded-xl border border-[#013469]/10 bg-[#013469]/5 p-5 ${
                  item.span ?? ""
                }`}
              >
                <h3 className="mb-2 font-bold text-[#013469]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
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
      <section className="relative overflow-hidden bg-[#013469] px-4 py-10 sm:px-6 sm:py-16 md:px-12 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 bg-gradient-to-l from-[#fd510f]/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel light>Eficiência Operacional</SectionLabel>
              <SectionTitle light>Redução de Custos Comprovada</SectionTitle>
            </div>
            <LogoSquare size="sm" className="hidden md:flex" />
          </div>
          <p className="mb-8 max-w-4xl text-sm leading-relaxed text-blue-100/90 sm:mb-12 sm:text-base">
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
                  className="mb-2 text-4xl font-black sm:mb-3 sm:text-5xl md:text-6xl"
                  style={{ color: BRAND_ORANGE }}
                >
                  {item.pct}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-blue-200/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO DE MOTORISTAS — Slide 9 */}
      <section className="border-t border-[#013469]/10 bg-[#f6f9fc] px-4 py-10 sm:px-6 sm:py-16 md:px-12 lg:px-16">
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
                  className="flex overflow-hidden rounded-lg border border-[#013469]/10"
                >
                  <div className="flex w-14 shrink-0 items-center justify-center bg-[#fd510f] text-2xl font-bold text-white">
                    {item.num}
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-bold text-[#013469]">
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
      <section className="grid border-t border-[#013469]/10 bg-[#f6f9fc] md:grid-cols-5">
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
                <div className="flex h-16 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8eef5] text-xl ring-2 ring-[#fd510f]/30">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#013469]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
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
                <h3 className="mb-2 font-bold text-[#013469]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTAÇÃO — Slide 13 */}
      <section className="border-t border-[#013469]/10 bg-[#fff8f4] px-4 py-10 sm:px-6 sm:py-16 md:px-12 lg:px-16">
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
      <section className="grid border-t border-[#013469]/10 bg-white md:grid-cols-5">
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
                className="relative rounded-xl border border-[#013469]/15 bg-white p-4 shadow-sm sm:p-6"
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
                <div className="font-bold text-[#013469]">{item.name}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            ))}
            <div className="relative rounded-xl border border-[#013469]/15 bg-white p-4 shadow-sm sm:p-6 md:col-span-2">
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
              <div className="font-bold text-[#013469]">Roberto Alves</div>
              <div className="text-sm text-slate-500">
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
        className="grid border-t border-[#013469]/10 bg-gradient-to-br from-[#f6f9fc] via-white to-[#fff8f4] md:grid-cols-5"
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
          <SectionLabel>Fale Conosco</SectionLabel>
          <SectionTitle>Fale com um Especialista</SectionTitle>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-700 sm:mb-8 sm:text-base">
            Pronto para transformar a gestão da sua frota? Nossa equipe está
            disponível para apresentar uma demonstração personalizada, tirar
            todas as suas dúvidas e montar o plano ideal para a realidade da sua
            empresa.
          </p>
          <div className="mb-4 w-full max-w-md rounded-xl border border-[#013469]/15 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-1 text-lg font-bold text-[#013469] sm:text-xl">
              José Souza
            </div>
            <div className="mb-3 text-slate-600">
              Especialista em Gestão de Frotas HeroTrack
            </div>
            <WhatsAppLink
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2.5 text-lg font-bold text-[#013469] transition-colors hover:text-[#25D366]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 shrink-0 text-[#25D366]"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              (19) 99614-1749
            </WhatsAppLink>
          </div>
          <div className="bg-green-50 border border-green-100 p-4 sm:p-5 rounded-xl w-full max-w-2xl flex gap-3 items-start">
            <span className="text-green-600 text-xl shrink-0">✓</span>
            <p className="text-gray-700 text-sm leading-relaxed">
              Entre em contato agora e receba uma{" "}
              <strong>demonstração gratuita</strong> da plataforma HeroTrack
              para a sua frota!
            </p>
          </div>
          <WhatsAppLink
            href={WHATSAPP_DEMO_URL}
            className="animate-cta-glow mt-6 sm:mt-8 inline-block w-full rounded-md bg-[#fd510f] px-6 py-3 text-center text-base font-bold text-white shadow-lg shadow-[#fd510f]/40 transition-all hover:scale-[1.02] hover:bg-orange-600 hover:shadow-xl hover:shadow-[#fd510f]/50 sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            Solicitar Demonstração Gratuita
          </WhatsAppLink>
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
