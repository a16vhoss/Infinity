
import React, { useState, useEffect } from 'react';
import { 
  Infinity, 
  Instagram, 
  Youtube, 
  ChevronRight, 
  Check, 
  X as CloseIcon, 
  MessageCircle,
  Trophy,
  GraduationCap,
  Heart,
  Book,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { CalendlyModal } from './components/CalendlyModal';
import { MENTAL_LIMITS, HISTORY_TIMELINE, INFINITY_PHASES, PRICE_TIERS } from './constants';

const App: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isPricingExpanded, setIsPricingExpanded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const FAQS = [
    { q: "¿Cómo funcionan las sesiones?", a: "Son videollamadas 1:1 de 60 minutos donde aplicamos frameworks específicos del Sistema Infinity." },
    { q: "¿Es terapia o coaching?", a: "Es coaching de mentalidad de alto rendimiento. No reemplaza terapia clínica, se enfoca en ejecución y futuro." },
    { q: "¿Cuántas sesiones necesito?", a: "Depende de tus objetivos, pero la mayoría ve cambios radicales entre 4 a 8 sesiones." },
    { q: "¿Qué pasa si no puedo asistir?", a: "Puedes reprogramar con 24h de anticipación sin costo adicional." },
    { q: "¿Trabajas con menores de edad?", a: "Solo con autorización legal de padres o tutores." },
    { q: "¿Las sesiones son por videollamada?", a: "Sí, utilizamos Zoom o Google Meet para mayor flexibilidad geográfica." },
    { q: "¿Hay garantía o reembolso?", a: "Si tras la primera sesión no sientes que hay valor real, te devolvemos el 100%." }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <LeadMagnetModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />

      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer reveal-left">
            <Infinity className="text-[#D4AF37] w-10 h-10 transition-transform duration-700 group-hover:rotate-180" />
            <span className="font-display font-bold text-xl uppercase tracking-[0.2em] hidden sm:inline transition-colors group-hover:text-[#D4AF37]">Infinity Beyond</span>
          </div>
          <div className="flex gap-4 reveal-right">
            <button 
              onClick={openCalendly}
              className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#D4AF37]/10"
            >
              Agenda Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/15 to-transparent opacity-40"></div>
          {/* Infinity Symbol Background - Restored visibility */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] animate-float pointer-events-none">
            <Infinity className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-[#D4AF37]" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto stagger-container">
            <div className="reveal">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-light leading-none mb-8 tracking-tighter">
                ¿Listo para ser quien <br />
                <span className="font-bold text-[#D4AF37] text-shimmer">siempre soñaste?</span>
              </h1>
            </div>
            <div className="reveal" style={{ '--delay': 2 } as any}>
              <p className="text-xl md:text-2xl text-[#C0C0C0] mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                Reprogramación mental profunda para jóvenes ambiciosos hartos de la motivación superficial. <span className="text-white font-medium">Frameworks reales. Transformación medible.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center reveal" style={{ '--delay': 4 } as any}>
              <button 
                onClick={openCalendly}
                className="bg-[#D4AF37] text-black px-10 py-6 rounded-lg text-lg font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-2xl quantum-glow"
              >
                Agenda Sesión Gratis
              </button>
              <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="border border-[#C0C0C0]/40 text-white px-10 py-6 rounded-lg text-lg font-light uppercase tracking-widest hover:bg-white/5 transition-all duration-500 backdrop-blur-sm"
              >
                Descarga: El Flow
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 reveal" style={{ '--delay': 8 } as any}>
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Social Bar */}
      <div className="border-y border-white/5 bg-[#080808] py-14">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-16 stagger-container">
          {['IG', 'Tik', 'YT'].map((platform, idx) => (
            <a key={platform} href="#" className="flex flex-col items-center group transition-all reveal" style={{ '--delay': idx } as any}>
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mb-4 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-500">
                <span className="font-bold text-lg text-white/40 group-hover:text-[#D4AF37]">{platform}</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#444] group-hover:text-white/80 transition-colors">
                {platform === 'IG' ? 'Instagram' : platform === 'Tik' ? 'TikTok' : 'YouTube'}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Mental Limits / The Problem */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-display font-light mb-6">6 Límites Mentales</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {MENTAL_LIMITS.map((limit, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-white/5 p-12 rounded-3xl hover:border-[#D4AF37]/30 transition-all duration-700 group reveal" style={{ '--delay': idx } as any}>
                <div className="text-[#D4AF37] mb-8 transition-all duration-500 bg-[#D4AF37]/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-[#D4AF37]/10 group-hover:scale-110 group-hover:bg-[#D4AF37]/10">
                  {limit.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-[#D4AF37] transition-colors">{limit.title}</h3>
                <p className="text-[#888] font-light leading-relaxed group-hover:text-[#C0C0C0] transition-colors">{limit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My History Timeline - Refined Side Entries */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-radial-gradient from-[#D4AF37]/5 to-transparent pointer-events-none opacity-40"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="reveal">
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.6em] mb-6">mi camino</p>
            <h2 className="text-4xl md:text-5xl font-display mb-24">De Límites a Libertad</h2>
          </div>
          <div className="relative space-y-24 text-left">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent"></div>
            {HISTORY_TIMELINE.map((m, idx) => (
              <div key={idx} className={`relative flex items-center gap-12 ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-1/2 ${idx % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                  <div className={`p-10 bg-[#080808] rounded-3xl border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-700 shadow-2xl ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4 block opacity-60">{m.year}</span>
                    <h3 className="text-2xl font-display font-bold mb-4">{m.title}</h3>
                    <p className="text-[#666] font-light leading-relaxed">{m.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-[#D4AF37] rounded-full z-10 shadow-[0_0_15px_#D4AF37]">
                   <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-10"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution / Phases - Horizontal Fade/Scale */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-24 uppercase tracking-[0.4em] reveal">Sistema Infinity</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 stagger-container">
            {INFINITY_PHASES.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center text-center reveal group" style={{ '--delay': idx } as any}>
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-8 text-xl font-bold transition-all duration-700 group-hover:scale-110 border border-white/5"
                  style={{ backgroundColor: p.color, color: '#000' }}
                >
                  {idx + 1}
                </div>
                <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-4" style={{ color: p.color }}>{p.name}</h3>
                <p className="text-[#444] text-xs font-light leading-relaxed group-hover:text-[#888] transition-colors">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Slide In From Sides */}
      <section className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-24 reveal">60 Minutos de Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { t: "1. Exploración", d: "15 min. Identificar el bloqueo raíz del momento con precisión quirúrgica." },
              { t: "2. Deconstrucción", d: "20 min. Romper el framework mental obsoleto." },
              { t: "3. Reprogramación", d: "20 min. Instalar el nuevo sistema de ejecución." },
              { t: "4. Plan de Acción", d: "5 min. Pasos exactos para dominar tu semana." }
            ].map((step, idx) => (
              <div key={idx} className={`border-l border-white/5 pl-8 py-6 hover:border-[#D4AF37] transition-all duration-700 group ${idx < 2 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">{step.t}</h3>
                <p className="text-[#555] font-light leading-relaxed group-hover:text-[#888]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-display mb-16 tracking-tight">Inversión en tu Futuro</h2>
          </div>
          
          {!isPricingExpanded ? (
            <button 
              onClick={() => setIsPricingExpanded(true)}
              className="bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] px-16 py-6 rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-500 reveal"
            >
              Ver Opciones de Sesiones
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-container">
              {PRICE_TIERS.map((tier, idx) => (
                <div key={idx} className={`p-12 rounded-[2.5rem] flex flex-col items-center border transition-all duration-1000 reveal ${tier.isPopular ? 'bg-[#080808] border-[#D4AF37]/40 scale-105 shadow-[0_0_80px_rgba(212,175,55,0.05)]' : 'bg-black border-white/5'}`} style={{ '--delay': idx } as any}>
                  {tier.isPopular && <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-6 py-2 rounded-full text-[10px] font-black uppercase mb-8 tracking-widest">⭐ Más Popular</span>}
                  <h3 className="text-2xl font-display mb-2">{tier.name}</h3>
                  <div className="flex flex-col items-center mb-10">
                    <span className="text-5xl font-bold tracking-tighter mb-2">{tier.price}</span>
                    {tier.discount && <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">{tier.discount}</span>}
                  </div>
                  <ul className="space-y-5 mb-12 text-left w-full">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex gap-4 text-xs text-[#555] items-start">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={openCalendly}
                    className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest transition-all duration-500 hover:scale-[1.02] ${tier.isPopular ? 'bg-[#D4AF37] text-black hover:bg-white' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                  >
                    Agenda Ya
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* For Whom It Is - Horizontal Entries */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-12 reveal-left p-2">
              <h3 className="text-3xl font-display font-bold text-[#D4AF37] tracking-wider">Es para ti si...</h3>
              <ul className="space-y-6">
                {[
                  "Buscas excelencia en todas las áreas de tu vida.",
                  "Estás harto de los mismos resultados mediocres.",
                  "Valoras la profundidad intelectual y el rigor.",
                  "Eres responsable de tu propio crecimiento.",
                  "Entiendes que la mente es el software principal.",
                  "Buscas libertad geográfica y financiera real.",
                  "Eres proactivo y ejecutor por naturaleza.",
                  "Sabes que tienes un potencial aún no explotado."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-5 items-start text-[#888] group">
                    <div className="bg-[#D4AF37]/5 p-1.5 rounded-full group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Check className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="group-hover:text-[#C0C0C0] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* NO section with improved visibility and subtle border box */}
            <div className="space-y-12 reveal-right p-8 border border-white/10 rounded-3xl bg-white/[0.02] shadow-2xl">
              <h3 className="text-3xl font-display font-bold text-white/60 tracking-wider">NO es para ti si...</h3>
              <ul className="space-y-6">
                {[
                  "Buscas 'trucos mágicos' sin esfuerzo real.",
                  "Prefieres culpar al entorno que a tu mentalidad.",
                  "No estás dispuesto a invertir en ti mismo.",
                  "Te sientes cómodo en tu zona de confort actual.",
                  "Solo quieres motivación momentánea barata.",
                  "No tienes 60 minutos a la semana para crecer."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-5 items-start text-white/40 group">
                    <div className="bg-white/5 p-1.5 rounded-full group-hover:bg-white/10 transition-colors">
                      <CloseIcon className="w-5 h-5 text-white/50" />
                    </div>
                    <span className="group-hover:text-white/70 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promise + Metrics - Manifest In Place */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#080808] border border-white/5 p-16 rounded-[3rem] shadow-2xl relative overflow-hidden reveal group hover:border-[#D4AF37]/20 transition-all duration-1000">
             <Infinity className="absolute top-[-50px] right-[-50px] w-96 h-96 text-[#D4AF37]/5 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-1000 pointer-events-none" />
             <div className="relative z-10">
               <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.8em] mb-10 opacity-60">Promesa</h3>
               <p className="text-3xl md:text-5xl font-display leading-tight mb-20 text-white/90 tracking-tighter">
                 "No te daré frases bonitas. Te entregaré los <span className="text-[#D4AF37]">sistemas de precisión</span> que me permitieron alcanzar la excelencia antes de los 20."
               </p>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 stagger-container">
                 {[
                   { i: <Trophy />, v: "Top 5%", l: "Atleta" },
                   { i: <GraduationCap />, v: "#1 Rank", l: "Universidad" },
                   { i: <Heart />, v: "1+ Año", l: "Relación" },
                   { i: <Book />, v: "50+ Lib.", l: "Neurociencia" },
                   { i: <Infinity />, v: "Crec.", l: "Infinito" }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col gap-4 reveal" style={{ '--delay': i } as any}>
                     <div className="bg-white/5 w-12 h-12 flex items-center justify-center rounded-2xl text-[#D4AF37]">{stat.i}</div>
                     <div>
                       <p className="text-xl font-bold tracking-tight">{stat.v}</p>
                       <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">{stat.l}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ - Subtle Fade In */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-display text-center mb-20 reveal">FAQs</h2>
          <div className="space-y-4 stagger-container">
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`bg-black border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 reveal ${activeFaq === idx ? 'faq-active border-[#D4AF37]/30 ring-1 ring-[#D4AF37]/5 shadow-2xl' : 'hover:border-white/10'}`} style={{ '--delay': idx } as any}>
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-8 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${activeFaq === idx ? 'text-[#D4AF37]' : 'text-white/60 group-hover:text-white'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-700 ${activeFaq === idx ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <div className="faq-content">
                  <div className="px-8 pb-8 text-[#666] font-light leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Large Manifesto Entry */}
      <section className="py-48 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#D4AF37]/5 rounded-full animate-rotate-slow"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto stagger-container">
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 leading-none tracking-tighter reveal">El momento es <span className="text-shimmer">ahora.</span></h2>
            <p className="text-xl md:text-2xl text-[#666] font-light mb-16 reveal" style={{ '--delay': 2 } as any}>Tu máximo potencial no es una meta futura, es un sistema presente.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center reveal" style={{ '--delay': 4 } as any}>
              <button 
                onClick={openCalendly}
                className="bg-[#D4AF37] text-black px-12 py-7 rounded-2xl text-xl font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-2xl quantum-glow"
              >
                Agenda Gratis
              </button>
              <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="border border-white/10 text-white/60 px-12 py-7 rounded-2xl text-xl font-light uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all duration-500 backdrop-blur-md"
              >
                Ebook Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#030303] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-2 reveal-left">
              <div className="flex items-center gap-4 mb-8">
                <Infinity className="text-[#D4AF37] w-12 h-12" />
                <span className="font-display font-bold text-2xl uppercase tracking-widest">Infinity Beyond</span>
              </div>
              <p className="text-[#444] text-lg font-light italic mb-10 max-w-sm">"Transciende con la precisión de un sistema."</p>
              <div className="flex gap-6">
                {['IG', 'YT'].map((p) => (
                  <a key={p} href="#" className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-500">{p}</a>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ '--delay': 2 } as any}>
              <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] mb-8 opacity-40">Ecosistema</h4>
              <ul className="space-y-5 text-sm font-light text-[#444]">
                <li><a href="#" className="hover:text-white transition-colors">Sistema Infinity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sesión Directa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ebook Premium</a></li>
              </ul>
            </div>
            <div className="reveal" style={{ '--delay': 4 } as any}>
              <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] mb-8 opacity-40">Legal</h4>
              <ul className="space-y-5 text-sm font-light text-[#444]">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 reveal">
            <p className="text-[10px] text-[#333] uppercase tracking-[0.5em]">Copyright © 2026 Infinity Beyond.</p>
            <p className="text-[10px] text-[#D4AF37] font-black tracking-[0.2em] uppercase bg-white/5 px-6 py-2 rounded-full opacity-40">Arquitectura del 1%</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
