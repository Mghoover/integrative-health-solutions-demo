export interface ConditionDetailCta {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export interface ConditionDetailFaqItem {
  question: string;
  answer: string;
}

export interface ConditionDetail {
  slug: string;
  title: string;
  heroTagline: string;
  intro: string[];
  services: string[];
  commonSymptoms?: string[];
  possibleCauses?: string[];
  faq?: ConditionDetailFaqItem[];
  cta?: ConditionDetailCta;
}
