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

export interface ConditionDetailSection {
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface ConditionDetail {
  slug: string;
  title: string;
  heroTagline: string;
  intro: string[];
  sections?: ConditionDetailSection[];
  services: string[];
  commonSymptoms?: string[];
  possibleCauses?: string[];
  faq?: ConditionDetailFaqItem[];
  cta?: ConditionDetailCta;
}
