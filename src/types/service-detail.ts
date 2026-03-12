export interface ServiceDetailSection {
  title: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  faq?: ServiceDetailFaqItem[];
}

export interface ServiceDetailFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailCta {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  heroTagline: string;
  conditions?: string[];
  statusNote?: string;
  intro: string[];
  sections: ServiceDetailSection[];
  cta: ServiceDetailCta;
}
