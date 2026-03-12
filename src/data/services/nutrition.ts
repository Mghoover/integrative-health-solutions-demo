import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "nutrition",
  title: "Clinical Nutrition",
  heroTagline: "Personalized Nutrition Planning for Long-Term Health Support",

  conditions: [
    "neuropathy",
    "headaches"
  ],
  intro: [
    "Clinical nutrition care uses individualized dietary strategy to support metabolic, inflammatory, and musculoskeletal health goals.",
    "Plans are tailored to current health status, symptoms, and lifestyle so recommendations are practical and sustainable."
  ],

  sections: [
    {
      title: "Why Nutrition Matters in Clinical Care",
      paragraphs: [
        "Nutrition influences energy regulation, tissue repair, immune signaling, and recovery from physical stress.",
        "Targeted dietary changes may help support treatment outcomes across a range of health concerns."
      ]
    },
    {
      title: "What a Nutrition Plan May Include",
      paragraphs: [
        "Recommendations are individualized and designed to fit real-world schedules and preferences.",
        "Plans are adjusted over time based on response, progress, and updated goals."
      ],
      bulletPoints: [
        "Macronutrient and meal structure guidance",
        "Inflammation-aware food strategies",
        "Hydration and recovery planning",
        "Supplement review when appropriate",
        "Behavior and habit support"
      ]
    },
    {
      title: "Conditions Commonly Supported",
      paragraphs: [
        "Nutrition care can complement medical and rehabilitation treatment for many chronic and performance-related concerns.",
        "The objective is to improve function and quality of life through measurable lifestyle changes."
      ],
      bulletPoints: [
        "Weight and metabolic health concerns",
        "Chronic inflammation patterns",
        "Energy and recovery challenges",
        "Digestive and dietary tolerance issues",
        "General wellness optimization"
      ]
    },
    {
      title: "Follow-Up and Accountability",
      paragraphs: [
        "Regular follow-up helps reinforce adherence and identify barriers early.",
        "Ongoing adjustments are made to keep the plan effective, realistic, and aligned with your clinical goals."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If you want a more structured and personalized nutrition plan, we can help you build an approach that supports your long-term health goals.",
    buttonText: "Schedule Appointment"
  }
};

