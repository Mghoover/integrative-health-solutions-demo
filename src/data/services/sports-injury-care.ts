import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "sports-injury-care",
  title: "Sports Injury Care",
  heroTagline: "Evidence-Informed Recovery and Return-to-Activity Planning",

  conditions: [
    "back-pain",
    "neck-pain",
    "headaches"
  ],
  intro: [
    "Sports injury care addresses pain, mobility loss, and performance limitations related to training and competition.",
    "Treatment plans are designed to reduce symptoms, restore function, and support a safe return to activity."
  ],

  sections: [
    {
      title: "Common Sports-Related Conditions",
      bulletPoints: [
        "Muscle strains and tendon irritation",
        "Joint sprains and overuse injuries",
        "Runner and jumping-related pain syndromes",
        "Shoulder, hip, and knee dysfunction",
        "Back and neck pain from repetitive loading"
      ]
    },
    {
      title: "Assessment and Load Management",
      paragraphs: [
        "A detailed evaluation identifies injured tissues, movement deficits, and training factors that may contribute to recurrence.",
        "Load progression is adjusted to protect healing tissue while maintaining conditioning where possible."
      ]
    },
    {
      title: "Treatment Components",
      paragraphs: [
        "Treatment may combine manual therapy, mobility work, neuromuscular retraining, and sport-specific strengthening.",
        "Programming is progressed in phases based on pain response and objective function."
      ],
      bulletPoints: [
        "Pain and inflammation management",
        "Joint and soft tissue mobility restoration",
        "Strength and control progression",
        "Return-to-play movement testing"
      ]
    },
    {
      title: "Injury Prevention and Performance Support",
      paragraphs: [
        "Recovery planning includes prevention strategies to reduce re-injury risk.",
        "Movement quality, recovery habits, and workload control are emphasized for long-term performance."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If an injury is limiting your training or competition, we can evaluate the issue and design a focused recovery plan.",
    buttonText: "Schedule Appointment"
  }
};

