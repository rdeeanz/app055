import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ComparisonRow {
  feature: string;
  pirated: string;
  official: string;
}