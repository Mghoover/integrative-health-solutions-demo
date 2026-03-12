import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "brain-health",
  title: "Brain Health Programs",
  heroTagline: "Supporting Cognitive Function and Neurological Wellness",

  conditions: [
    "headaches",
    "neuropathy"
  ],
  intro: [
    "Brain health refers to maintaining cognitive function, neurological resilience, and healthy brain physiology throughout life.",
    "Our brain health programs focus on lifestyle factors, neurological monitoring, and supportive therapies designed to help optimize brain function."
  ],

  sections: [
    {
      title: "Factors That Influence Brain Health",
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
      title: "Objective Monitoring",
      paragraphs: [
        "Some brain health programs incorporate objective assessment tools such as EEG to observe patterns of brain activity.",
        "EEG may help clinicians monitor changes over time when interpreted within the broader clinical context."
      ]
    },
    {
      title: "Supportive Strategies",
      paragraphs: [
        "Brain health programs often combine multiple approaches including lifestyle optimization, rehabilitation strategies, and supportive therapies.",
        "The goal is to support neurological wellness rather than to promise rapid or guaranteed cognitive change."
      ]
    }
  ],

  cta: {
    title: "Learn More About Brain Health Programs",
    description:
      "If you are interested in supporting long-term brain health or learning more about neurological wellness programs, contact our clinic for more information.",
    buttonText: "Contact Us"
  }
};

