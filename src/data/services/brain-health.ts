import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "brain-health",
  title: "Brain Restore & Brain Health Programs",
  heroTagline: "Objective Neurological Wellness Support for Cognitive Function, Recovery, and Resilience",

  conditions: [
    "headaches",
    "neuropathy"
  ],
  intro: [
    "Brain Restore and brain health programs focus on supporting cognitive function, neurological resilience, and healthy brain physiology throughout life.",
    "Our approach brings together clinical evaluation, neurological wellness strategies, objective monitoring when appropriate, and supportive therapies designed to help patients pursue better function without overpromising outcomes."
  ],

  sections: [
    {
      title: "Factors That Influence Brain and Nervous System Health",
      paragraphs: [
        "Brain function is influenced by many systems in the body including circulation, sleep, metabolism, and stress regulation.",
        "Long-term brain health is often supported by addressing these underlying factors."
      ],
      bulletPoints: [
        "Sleep quality",
        "Cardiovascular health",
        "Metabolic balance",
        "Physical activity",
        "Stress management",
        "Cognitive engagement"
      ]
    },
    {
      title: "Neuroplasticity",
      paragraphs: [
        "The brain has the ability to adapt and reorganize through a process known as neuroplasticity.",
        "Healthy lifestyle habits, rehabilitation, and cognitive stimulation may support this adaptive process."
      ]
    },
    {
      title: "Measurable Evaluation and Monitoring",
      paragraphs: [
        "Some brain health programs incorporate objective assessment tools such as EEG to observe patterns of brain activity.",
        "EEG may help clinicians monitor changes over time when interpreted within the broader clinical context. It is one tool, not a guarantee of outcome."
      ]
    },
    {
      title: "Supportive Brain Restore Strategies",
      paragraphs: [
        "Brain Restore programs may combine multiple approaches including lifestyle optimization, rehabilitation strategies, chiropractic care, nutrition, laser therapy, and HBOT discussion when appropriate.",
        "The goal is to support neurological wellness and recovery capacity rather than to promise rapid or guaranteed cognitive change."
      ]
    }
  ],

  cta: {
    title: "Learn More About Brain Restore",
    description:
      "If you are interested in neurological wellness, cognitive resilience, or Brain Restore planning, contact our clinic for a conversation about next steps.",
    buttonText: "Schedule Evaluation",
    buttonHref: "/contact-us/"
  }
};

