
import React, { useState } from 'react';
import { X, BookOpen, Send } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger PDF download
    setTimeout(() => {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/FLOW.pdf';
      link.download = 'FLOW-Infinity-Beyond.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      onClose();
      setSubmitted(false);
      setName('');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-[#D4AF37]/10 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-[#D4AF37]" />
            </div>
          </div>

          <h3 className="text-2xl font-display font-bold text-center mb-2">Descubriendo el Flow</h3>
          <p className="text-white/70 text-center mb-8">
            Accede a nuestra guía premium de 60 páginas para dominar tu concentración y eliminar distracciones.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C0C0C0] mb-2">Nombre</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre completo"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C0C0C0] mb-2">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-50"
            >
              {submitted ? "Preparando descarga..." : (
                <>
                  <Send className="w-4 h-4" />
                  Descargar Guía Gratis
                </>
              )}
            </button>
            <p className="text-[10px] text-white/30 text-center uppercase tracking-tighter">
              Sin spam. Solo valor real. Protección de datos garantizada.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
