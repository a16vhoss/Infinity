
import React from 'react';
import { Timer, Skull, ShieldAlert, UserCheck, AlertOctagon, Layers } from 'lucide-react';
import { MentalLimit, Milestone, Phase, PriceTier } from './types';

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  silver: '#C0C0C0',
  gold: '#D4AF37',
  grayDark: '#1A1A1A',
  grayMedium: '#666666',
  grayLight: '#E5E5E5',
};

export const MENTAL_LIMITS: MentalLimit[] = [
  {
    title: "Procrastinación Paralizante",
    description: "No es flojera, es miedo disfrazado. Sabes qué hacer pero el 'mañana sí' nunca llega, erosionando tu autoestima.",
    icon: <Timer className="w-8 h-8" />
  },
  {
    title: "Miedo al Fracaso",
    description: "Prefieres no intentar que fallar. El análisis infinito te mantiene en el mismo lugar por años.",
    icon: <AlertOctagon className="w-8 h-8" />
  },
  {
    title: "Autosabotaje Inexplicable",
    description: "Te boicoteas cuando estás cerca del éxito. Encuentras la forma de arruinar lo que va bien.",
    icon: <Skull className="w-8 h-8" />
  },
  {
    title: "Síndrome del Impostor",
    description: "Sientes que tu éxito es suerte. Temes que un día descubran que no eres 'tan capaz' como dicen.",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    title: "Coaching Superficial",
    description: "Harto de frases motivacionales vacías. Necesitas frameworks profundos que respeten tu inteligencia.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    title: "Falsa Dicotomía",
    description: "Crees que debes elegir entre éxito profesional o salud y relaciones. Buscas excelencia integral.",
    icon: <Layers className="w-8 h-8" />
  }
];

export const HISTORY_TIMELINE: Milestone[] = [
  { year: "Punto 0", title: "El Despertar", description: "El reconocimiento de que el camino convencional no era suficiente." },
  { year: "Año 1", title: "Pequeños Pasos", description: "Experimentación con neurociencia y hábitos atómicos." },
  { year: "Año 2", title: "Sistemas Sofisticados", description: "Diseño de frameworks propietarios de alto rendimiento." },
  { year: "Año 3", title: "Lo Imposible Logrado", description: "Excelencia multidisciplinaria demostrada en el mundo real." }
];

export const INFINITY_PHASES: Phase[] = [
  { id: 1, name: "Consciencia", color: "#C0C0C0", description: "Identificar patrones ciegos que frenan tu potencial." },
  { id: 2, name: "Deconstrucción", color: "#C0C0C0", description: "Eliminar las creencias que ya no sirven a tu visión." },
  { id: 3, name: "Reprogramación", color: "#D4AF37", description: "Instalar nuevos modelos mentales de ejecución." },
  { id: 4, name: "Integración", color: "#D4AF37", description: "Unificar el nuevo ser con tus metas diarias." },
  { id: 5, name: "Expansión ∞", color: "#D4AF37", description: "Escalado ilimitado de resultados y propósito." }
];

export const PRICE_TIERS: PriceTier[] = [
  {
    name: "Sesión Individual",
    price: "$500 MXN",
    features: ["60 minutos 1:1", "Diagnóstico Inicial", "Plan de Acción Inmediato", "Grabación de Sesión"]
  },
  {
    name: "Paquete Transformación",
    price: "$1,800 MXN",
    discount: "10% OFF",
    isPopular: true,
    features: ["4 Sesiones de 60 min", "Workbook Personalizado", "Seguimiento WhatsApp", "Acceso a Comunidad"]
  },
  {
    name: "Paquete Elite",
    price: "$3,200 MXN",
    discount: "20% OFF",
    features: ["8 Sesiones Intensivas", "Protocolo Biohacking", "Soporte 24/7", "Mentoria Vitalicia"]
  }
];
