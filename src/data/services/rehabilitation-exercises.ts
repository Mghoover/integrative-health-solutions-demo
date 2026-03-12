import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "rehabilitation-exercises",
  title: "Rehabilitation Exercises",
  heroTagline: "Structured Therapeutic Exercise for Durable Recovery",

  conditions: [
    "back-pain",
    "neck-pain",
    "whiplash",
    "headaches"
  ],
  intro: [
    "Rehabilitation exercise is a core part of musculoskeletal recovery and long-term function.",
    "Programs are individualized to improve mobility, strength, coordination, and tolerance for daily activity."
  ],

  sections: [
    {
      title: "Why Therapeutic Exercise Matters",
      paragraphs: [
        "Hands-on care can reduce pain and improve joint motion, but lasting outcomes typically require active retraining.",
        "Exercise helps tissues adapt to load and supports improved motor control."
      ]
    },
    {
      title: "Program Design Principles",
      paragraphs: [
        "Exercises are selected based on exam findings, current pain levels, and movement goals.",
        "Volume and intensity are progressed gradually to build capacity while minimizing symptom flare."
      ],
      bulletPoints: [
        "Baseline movement and strength testing",
        "Progressive loading strategies",
        "Technique coaching and cueing",
        "Home program integration"
      ]
    },
    {
      title: "Conditions Commonly Supported",
      bulletPoints: [
        "Back and neck pain recovery",
        "Joint stiffness and deconditioning",
        "Post-injury movement deficits",
        "Balance and stability limitations",
        "Recurrent overuse symptoms"
      ]
    },
    {
      title: "Tracking Progress",
      paragraphs: [
        "Progress is monitored through functional measures such as range of motion, strength, balance, and activity tolerance.",
        "Programs are adjusted as goals evolve from pain reduction to performance and prevention."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If you need a structured exercise plan for recovery, we can build a program matched to your goals and current capacity.",
    buttonText: "Schedule Appointment"
  }
};

