import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import TrackHeroEffects from "./components/TrackHeroEffects";
import WhatsAppLink from "./components/WhatsAppLink";

const WHATSAPP_DEMO_URL = `https://wa.me/5519996141749?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar uma demonstração gratuita da plataforma TrackHero."
)}`;

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--orange)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="8" width="12" height="7" />
      <path d="M13 11h4l3.2 3.2V15H13z" />
      <circle cx="6" cy="17" r="1.8" fill="var(--orange)" stroke="none" />
      <circle cx="17" cy="17" r="1.8" fill="var(--orange)" stroke="none" />
    </svg>
  );
}

function RadarVisual() {
  return (
    <div className="radar-wrap">
      <div className="radar-ring" style={{ width: "100%", height: "100%" }} />
      <div className="radar-ring" style={{ width: "70%", height: "70%" }} />
      <div className="radar-ring" style={{ width: "40%", height: "40%" }} />
      <div className="radar-ping" />
      <div className="radar-ping" />
      <div className="radar-ping" />
      <div className="orbit orbit-1">
        <div className="truck-badge b1">
          <TruckIcon />
        </div>
      </div>
      <div className="orbit orbit-2">
        <div className="truck-badge b2">
          <TruckIcon />
        </div>
      </div>
      <div className="orbit orbit-3">
        <div className="truck-badge b3">
          <TruckIcon />
        </div>
      </div>
      <div className="radar-core">
        <svg viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      </div>
    </div>
  );
}

export default function TrackHeroLanding() {
  return (
    <>
      <div id="track-progress">
        <div id="track-progress-fill" />
      </div>

      <SiteHeader />
      <TrackHeroEffects />

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="eyebrow reveal in">Inteligência logística</div>
            <h1 className="reveal in">
              Sua frota, <span>sempre visível.</span>
            </h1>
            <p className="lead reveal in reveal-delay-1">
              Rastreamento em tempo real, manutenção preditiva e segurança
              antifurto em uma só plataforma. Menos custo, mais controle.
            </p>
            <div className="hero-cta-row reveal in reveal-delay-2">
              <a href="#contato" className="btn">
                Fale com um Especialista
              </a>
              <a href="#solucao" className="btn btn-ghost">
                Ver a plataforma
              </a>
            </div>
            <div className="hero-stats reveal in reveal-delay-3">
              <div className="hero-stat">
                <div className="num" data-count="10" data-suffix="+">
                  0
                </div>
                <div className="label">Anos de mercado</div>
              </div>
              <div className="hero-stat">
                <div className="num" data-count="5000" data-suffix="+">
                  0
                </div>
                <div className="label">Veículos monitorados</div>
              </div>
              <div className="hero-stat">
                <div className="num" data-count="98" data-suffix="%">
                  0
                </div>
                <div className="label">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <RadarVisual />
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container trust-inner">
          <div className="trust-item reveal">
            <div className="num">
              <span data-count="10" data-suffix="+">
                0
              </span>{" "}
              Anos
            </div>
            <div className="label">de experiência no mercado</div>
          </div>
          <div className="trust-item reveal reveal-delay-1">
            <div className="num">
              <span data-count="5000" data-suffix="+">
                0
              </span>
            </div>
            <div className="label">veículos monitorados</div>
          </div>
          <div className="trust-item reveal reveal-delay-2">
            <div className="num">
              <span data-count="98" data-suffix="%">
                0
              </span>
            </div>
            <div className="label">de satisfação dos clientes</div>
          </div>
        </div>
      </div>

      <section id="sobre">
        <div className="container split">
          <div className="split-text reveal">
            <div className="eyebrow">Sobre a TrackHero</div>
            <h2 className="section-title">Quem somos</h2>
            <p className="section-sub">
              Empresa brasileira especializada em gestão de frotas — GPS, IA e
              dados em uma plataforma só. Mais de uma década atendendo
              transportadoras, distribuidoras e frotas próprias em todo o
              Brasil, com visibilidade total e redução real de custo.
            </p>
          </div>
          <div className="split-media reveal reveal-delay-1">
            <Image
              src="/images/quem-somos.png"
              alt="Central de monitoramento TrackHero"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section id="desafio" className="bg-navy-deep">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">O desafio</div>
            <h2 className="section-title">
              Gerenciar frota no Brasil é complexo
            </h2>
            <p className="section-sub">
              Combustível, manutenção não planejada, roubo de carga e falta de
              visibilidade drenam recursos e comprometem a operação.
            </p>
          </div>
          <div className="grid-3">
            <div className="card card-accent-left reveal">
              <h3>Custos incontrolados</h3>
              <p>
                Combustível, manutenção corretiva e multas chegam a 40% dos
                custos operacionais.
              </p>
            </div>
            <div className="card card-accent-left reveal reveal-delay-1">
              <h3>Falta de visibilidade</h3>
              <p>
                Sem rastreamento em tempo real, gestores perdem controle de
                rotas e condução.
              </p>
            </div>
            <div className="card card-accent-left reveal reveal-delay-2">
              <h3>Segurança de carga</h3>
              <p>
                Milhares de roubos por ano no Brasil geram prejuízos
                bilionários ao setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solucao">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">A solução</div>
            <h2 className="section-title">Visibilidade total da sua frota</h2>
            <p className="section-sub">
              GPS de alta precisão, telemetria e inteligência de dados em um
              único painel, acessível de qualquer lugar.
            </p>
          </div>
          <div className="grid-4">
            <div className="card reveal">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>
              <h3>Rastreamento em tempo real</h3>
              <p>
                Toda a frota em um mapa interativo, com atualização a cada 30
                segundos.
              </p>
            </div>
            <div className="card reveal reveal-delay-1">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3 8 4-16 3 8h4" />
                </svg>
              </div>
              <h3>Telemetria avançada</h3>
              <p>
                Velocidade, frenagens, aceleração e consumo monitorados em
                tempo real.
              </p>
            </div>
            <div className="card reveal reveal-delay-2">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
              </div>
              <h3>Segurança antifurto</h3>
              <p>
                Alertas imediatos de desvio de rota, jamming ou movimento fora
                de horário.
              </p>
            </div>
            <div className="card reveal reveal-delay-3">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
                </svg>
              </div>
              <h3>Manutenção preditiva</h3>
              <p>
                Revisões agendadas por quilometragem, uso e diagnóstico do
                veículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="modulos" className="bg-navy-deep">
        <div className="container split">
          <div className="split-media reveal">
            <Image
              src="/images/modulos-plataforma.png"
              alt="Dashboard de gestão de frotas"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
          <div className="split-text reveal reveal-delay-1">
            <div className="eyebrow">Módulos da plataforma</div>
            <h2 className="section-title">
              Funcionalidades que transformam a operação
            </h2>
            <div className="flow flow-tight">
              <div className="flow-step flow-step-plain">
                <div className="flow-num flow-num-square">◆</div>
                <div>
                  <h4>Gestão de rotas</h4>
                  <p>
                    Planejamento e otimização automática para reduzir distância
                    e tempo de entrega.
                  </p>
                </div>
              </div>
              <div className="flow-step flow-step-plain">
                <div className="flow-num flow-num-square">◆</div>
                <div>
                  <h4>Controle de motoristas</h4>
                  <p>
                    Jornada, pontuação de comportamento e relatórios
                    individuais.
                  </p>
                </div>
              </div>
              <div className="flow-step flow-step-plain">
                <div className="flow-num flow-num-square">◆</div>
                <div>
                  <h4>Relatórios e BI</h4>
                  <p>
                    Dashboards com KPIs, exportação de dados e integração via
                    API com ERPs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rastreamento">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Rastreamento</div>
            <h2 className="section-title">
              Monitoramento GPS de alta precisão
            </h2>
            <p className="section-sub">
              GPS/GLONASS dual com comunicação 4G, precisão mesmo em áreas
              remotas. Hardware resistente a vibração, temperatura extrema e
              sabotagem.
            </p>
          </div>
          <div className="grid-3">
            <div className="card reveal">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 8h20" />
                </svg>
              </div>
              <h3>Hardware embarcado</h3>
              <p>
                Instalação oculta, com bateria de backup ativa mesmo com o
                veículo desligado.
              </p>
            </div>
            <div className="card reveal reveal-delay-1">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3>App mobile</h3>
              <p>
                Acompanhe a frota pelo celular, Android e iOS, com push em
                tempo real.
              </p>
            </div>
            <div className="card reveal reveal-delay-2">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18.4 5.6a9 9 0 010 12.8M5.6 5.6a9 9 0 000 12.8M15 8.5a5 5 0 010 7M9 8.5a5 5 0 000 7M12 12h.01" />
                </svg>
              </div>
              <h3>Central de monitoramento</h3>
              <p>
                Suporte 24/7 com equipe própria para emergência, roubo ou
                acidente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="seguranca" className="bg-navy-deep">
        <div className="container split reverse">
          <div className="split-media reveal">
            <Image
              src="/images/scania.jpg"
              alt="Segurança de carga e caminhão"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
          <div className="split-text reveal reveal-delay-1">
            <div className="eyebrow">Segurança de carga</div>
            <h2 className="section-title">
              Proteção inteligente contra roubos
            </h2>
            <p className="section-sub">
              Cerca eletrônica virtual, detecção de bloqueadores de sinal e
              bloqueio remoto — a proteção mais completa do mercado.
            </p>
            <div className="grid-3 security-features">
              <div className="card-accent-left security-feature">
                <h3>Cerca virtual</h3>
                <p>Alertas instantâneos ao sair do perímetro autorizado.</p>
              </div>
              <div className="card-accent-left security-feature">
                <h3>Bloqueio remoto</h3>
                <p>
                  Acione o bloqueio do motor pelo painel ou app em caso de
                  roubo.
                </p>
              </div>
              <div className="card-accent-left security-feature">
                <h3>Anti-jammer</h3>
                <p>
                  Detecção imediata de bloqueadores de sinal GPS, com alerta à
                  central.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="stat-band">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Eficiência operacional</div>
            <h2 className="section-title">Redução de custo comprovada</h2>
            <p className="section-sub">
              Dados precisos sobre consumo, comportamento e manutenção
              substituem suposições por decisão.
            </p>
          </div>
          <div className="grid-4">
            <div className="stat-block reveal">
              <div className="num" data-count="25" data-suffix="%">
                0
              </div>
              <div className="title">Combustível</div>
              <p>Otimização de rotas e monitoramento de condução.</p>
            </div>
            <div className="stat-block reveal reveal-delay-1">
              <div className="num" data-count="40" data-suffix="%">
                0
              </div>
              <div className="title">Manutenção corretiva</div>
              <p>
                Menos paradas não programadas com manutenção preditiva.
              </p>
            </div>
            <div className="stat-block reveal reveal-delay-2">
              <div className="num" data-count="30" data-suffix="%">
                0
              </div>
              <div className="title">Produtividade</div>
              <p>Entregas mais eficientes com rotas otimizadas.</p>
            </div>
            <div className="stat-block reveal reveal-delay-3">
              <div className="num" data-count="60" data-suffix="%">
                0
              </div>
              <div className="title">Incidentes</div>
              <p>Menos acidentes e multas com gestão comportamental.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="motoristas">
        <div className="container split">
          <div className="split-text reveal">
            <div className="eyebrow">Gestão de motoristas</div>
            <h2 className="section-title">
              Comportamento e segurança no trânsito
            </h2>
            <p className="section-sub">
              Excesso de velocidade, frenagens bruscas e uso de celular são
              monitorados automaticamente, gerando um score individual.
            </p>
            <div className="flow">
              <div className="flow-step">
                <div className="flow-num">1</div>
                <div>
                  <h4>Monitorar</h4>
                  <p>
                    Comportamento registrado automaticamente em toda viagem.
                  </p>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-num">2</div>
                <div>
                  <h4>Avaliar</h4>
                  <p>Score individual, ranking e histórico de evolução.</p>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-num">3</div>
                <div>
                  <h4>Treinar</h4>
                  <p>
                    Relatórios direcionados para treinamento e gamificação.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="split-media reveal reveal-delay-1">
            <Image
              src="/images/gestao-motoristas.png"
              alt="Motorista em cabine de caminhão"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section id="manutencao" className="bg-navy-deep">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Manutenção</div>
            <h2 className="section-title">Da corretiva à preditiva</h2>
            <p className="section-sub">
              Telemetria OBD com alertas automáticos elimina custo com reboque,
              perda de carga e improdutividade.
            </p>
          </div>
          <div className="grid-4">
            <div className="card reveal card-center">
              <div className="flow-num">1</div>
              <h3>Monitoramento</h3>
              <p>Coleta dados do veículo em tempo real.</p>
            </div>
            <div className="card reveal reveal-delay-1 card-center">
              <div className="flow-num">2</div>
              <h3>Análise</h3>
              <p>Identifica desgaste e risco de falha.</p>
            </div>
            <div className="card reveal reveal-delay-2 card-center">
              <div className="flow-num">3</div>
              <h3>Agendamento</h3>
              <p>Revisões programadas automaticamente.</p>
            </div>
            <div className="card reveal reveal-delay-3 card-center">
              <div className="flow-num">4</div>
              <h3>Alerta</h3>
              <p>Antes que a falha aconteça.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="relatorios">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Relatórios e inteligência</div>
            <h2 className="section-title">
              Dados que geram decisão estratégica
            </h2>
            <p className="section-sub">
              Mais de 50 relatórios configuráveis, exportação em PDF/Excel e
              integração via API com os principais ERPs.
            </p>
          </div>
          <div className="grid-3">
            <div className="card reveal">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3>Consumo de combustível</h3>
              <p>Por veículo, rota ou motorista, com tendência mensal.</p>
            </div>
            <div className="card reveal reveal-delay-1">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8 2 5 5 5 9c0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <h3>Histórico de rotas</h3>
              <p>Replay completo de cada viagem, paradas e eventos.</p>
            </div>
            <div className="card reveal reveal-delay-2">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3>Jornada de trabalho</h3>
              <p>Controle de horas e conformidade com a legislação.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="segmentos" className="bg-navy-deep">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Segmentos atendidos</div>
            <h2 className="section-title">
              Soluções para cada tipo de frota
            </h2>
          </div>
          <div className="grid-3">
            <div className="segment-card reveal">
              <Image
                src="/images/scania.jpg"
                alt="Transporte de cargas"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="segment-content">
                <h3>Transporte de cargas</h3>
                <p>
                  Rotas otimizadas e controle para cargas refrigeradas.
                </p>
              </div>
            </div>
            <div className="segment-card reveal reveal-delay-1">
              <Image
                src="/images/transporte-passageiros.png"
                alt="Transporte de passageiros"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="segment-content">
                <h3>Transporte de passageiros</h3>
                <p>
                  Escolares, fretados e público com foco em segurança.
                </p>
              </div>
            </div>
            <div className="segment-card reveal reveal-delay-2">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
                alt="Frotas corporativas"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="segment-content">
                <h3>Frotas corporativas</h3>
                <p>Política de uso e relatórios para RH e financeiro.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="implementacao">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Implementação</div>
            <h2 className="section-title">
              Onboarding rápido, suporte dedicado
            </h2>
            <p className="section-sub">
              Instalação, configuração e treinamento completos em até 72 horas.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-track">
              <div className="timeline-item reveal">
                <div className="timeline-dot">1</div>
                <h4>Contrato e kickoff</h4>
                <p>Alinhamento, levantamento da frota e planejamento.</p>
              </div>
              <div className="timeline-item reveal reveal-delay-1">
                <div className="timeline-dot">2</div>
                <h4>Instalação</h4>
                <p>Técnicos certificados instalam os dispositivos.</p>
              </div>
              <div className="timeline-item reveal reveal-delay-2">
                <div className="timeline-dot">3</div>
                <h4>Treinamento</h4>
                <p>Capacitação da equipe na web e no app.</p>
              </div>
              <div className="timeline-item reveal reveal-delay-3">
                <div className="timeline-dot">4</div>
                <h4>Operação</h4>
                <p>Frota monitorada com suporte 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="bg-navy-deep">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Depoimentos</div>
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>
          <div className="grid-3">
            <div className="testi-card reveal">
              <div className="testi-quote">&ldquo;</div>
              <p className="txt">
                Reduzimos 28% no consumo de combustível em 4 meses. A
                visibilidade mudou como gerenciamos a frota.
              </p>
              <div className="testi-person">
                <div className="testi-avatar">CM</div>
                <div>
                  <div className="name">Carlos Mendes</div>
                  <div className="role">Diretor de Logística, Rota Sul</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-1">
              <div className="testi-quote">&ldquo;</div>
              <p className="txt">
                Implantação rápida, em 3 dias já tínhamos toda a frota
                monitorada e a equipe treinada.
              </p>
              <div className="testi-person">
                <div className="testi-avatar">AR</div>
                <div>
                  <div className="name">Ana Paula Ribeiro</div>
                  <div className="role">
                    Gerente de Frota, Distribuidora Central
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="testi-quote">&ldquo;</div>
              <p className="txt">
                O bloqueio remoto nos salvou de um roubo de carga. A central
                agiu em menos de 5 minutos.
              </p>
              <div className="testi-person">
                <div className="testi-avatar">RA</div>
                <div>
                  <div className="name">Roberto Alves</div>
                  <div className="role">Transportes Alves &amp; Filhos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow eyebrow-center">Fale conosco</div>
            <h2>Pronto para transformar a gestão da sua frota?</h2>
            <p>
              Demonstração personalizada e um plano sob medida para a realidade
              da sua empresa.
            </p>
            <div className="final-cta-row">
              <WhatsAppLink href={WHATSAPP_DEMO_URL} className="btn">
                Solicitar Demonstração Gratuita
              </WhatsAppLink>
            </div>
            <div className="contact-line">
              José Souza · Especialista em Gestão de Frotas ·{" "}
              <b>(19) 99614-1749</b>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <a href="#top" className="footer-logo">
              <Image
                src="/images/track-hero-logo2.png"
                alt="TrackHero"
                width={180}
                height={56}
                style={{ height: 56, width: "auto" }}
              />
            </a>
            <div className="footer-links">
              <a href="#solucao">Solução</a>
              <a href="#modulos">Módulos</a>
              <a href="#seguranca">Segurança</a>
              <a href="#resultados">Resultados</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} TrackHero Fleet Management. Todos os
              direitos reservados.
            </span>
          </div>
        </div>
      </footer>

      <WhatsAppLink
        href={WHATSAPP_DEMO_URL}
        className="wa-float"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden>
          <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.4.7 4.63 1.9 6.5L4 29l7.66-1.85a11.9 11.9 0 004.35.82h.01c6.63 0 12.01-5.38 12.01-12.01C28.02 8.38 22.64 3 16.01 3zm0 21.8c-1.5 0-2.94-.4-4.2-1.16l-.3-.18-4.55 1.1 1.12-4.44-.2-.31a9.8 9.8 0 01-1.5-5.2c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82-.01 5.43-4.41 9.82-9.83 9.82zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 01-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.48.7.3 1.26.49 1.68.62.7.22 1.35.19 1.85.12.57-.09 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.35z" />
        </svg>
      </WhatsAppLink>
    </>
  );
}
