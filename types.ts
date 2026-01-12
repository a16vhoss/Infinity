
import React from 'react';

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Phase {
  id: number;
  name: string;
  color: string;
  description: string;
}

export interface MentalLimit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PriceTier {
  name: string;
  price: string;
  discount?: string;
  features: string[];
  isPopular?: boolean;
}
