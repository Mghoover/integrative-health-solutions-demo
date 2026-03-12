import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "postural-correction",
  title: "Postural Correction",
  heroTagline: "Improving Alignment and Movement Efficiency",

  conditions: [
    "back-pain",
    "neck-pain",
    "headaches"
  ],
  intro: [
    "Postural correction focuses on identifying movement and alignment patterns that may contribute to pain, fatigue, and mechanical stress.",
    "Care plans combine hands-on treatment and targeted exercise to improve how the body moves during daily activity."
  ],

  sections: [
    {
      title: "Why Posture Matters",
      paragraphs: [
        "Posture reflects how joints, muscles, and the nervous system coordinate in standing, sitting, and movement.",
        "When load is distributed unevenly, tissues may become overworked and symptoms can develop over time."
      ]
    },
    {
      title: "Common Signs of Postural Dysfunction",
      bulletPoints: [
        "Forward head and rounded shoulders",
        "Persistent neck or upper back tension",
        "Low back strain with prolonged standing",
        "Asymmetrical weight bearing",
        "Movement fatigue during work or exercise"
      ]
    },
    {
      title: "How Treatment Is Structured",
      paragraphs: [
        "Treatment may include joint and soft tissue therapy, mobility work, and strength-based retraining.",
        "Programs are individualized to daily demands, work ergonomics, and current tolerance."
      ],
      bulletPoints: [
        "Movement and alignment assessment",
        "Targeted mobility and stability exercises",
        "Functional strength progression",
        "Ergonomic and habit recommendations"
      ]
    },
    {
      title: "Long-Term Maintenance",
      paragraphs: [
        "Consistent home exercises and movement awareness are key to maintaining changes.",
        "Follow-up visits help refine technique and keep progress aligned with functional goals."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If posture-related strain is affecting your comfort or performance, we can build a personalized correction plan.",
    buttonText: "Schedule Appointment"
  }
};

