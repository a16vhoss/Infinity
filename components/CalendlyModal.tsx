import React, { useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Replace this link with your actual Calendly booking link
  const calendlyUrl = "https://calendly.com/andreevillehoss/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=d4af37&background_color=000000&text_color=ffffff";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6 bg-black/95 backdrop-blur-xl transition-all duration-500 animate-fadeIn">
      <div className="relative w-full h-full max-w-6xl md:h-[90vh] bg-black border border-[#D4AF37]/40 rounded-none md:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.15)] flex flex-col">

        {/* Modal Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-[#0A0A0A] z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/20">
              <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">Agenda tu Sesión Elite</h3>
              <p className="text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-bold">30 Minutos • Reprogramación Gratis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="group p-3 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Cerrar calendario"
          >
            <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow bg-[#000000] relative">
          {/* Direct Iframe Implementation - More robust than JS widget */}
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Scheduling"
            allowFullScreen
            className="relative z-10 w-full h-full"
          ></iframe>

          {/* Helpful overlay while loading (behind iframe) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 bg-black">
            <div className="animate-spin w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full mb-4"></div>
            <p className="text-[#C0C0C0] uppercase tracking-widest text-xs">Cargando Sistema de Agendamiento...</p>
          </div>
        </div>

        {/* Footer info for users */}
        <div className="px-8 py-4 bg-[#0A0A0A] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#666666] uppercase tracking-[0.2em]">
            Al agendar, recibirás un link de Zoom automático y recordatorios por email.
          </p>
          <div className="hidden md:flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <span className="text-[10px] text-white/50 uppercase tracking-widest">Cupos Limitados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
