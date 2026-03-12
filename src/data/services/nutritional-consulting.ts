import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "nutritional-consulting",
  title: "Nutritional Consulting",
  heroTagline: "Evidence-Based Guidance for Sustainable Nutrition",

  conditions: [
    "neuropathy",
    "headaches"
  ],
  intro: [
    "Nutrition plays an important role in energy balance, metabolic health, and overall wellness.",
    "Our nutritional consulting services focus on practical, sustainable dietary strategies designed to support long-term health."
  ],

  sections: [
    {
      title: "Why Nutrition Matters",
      paragraphs: [
        "Balanced nutrition provides the nutrients required for normal cellular function and metabolic health.",
        "Long-term dietary patterns influence many aspects of health including cardiovascular risk and energy regulation."
      ]
    },
    {
      title: "Individualized Nutrition Planning",
      paragraphs: [
        "Effective nutrition planning takes into account individual goals, lifestyle, medical history, and activity level.",
        "Consultations focus on developing realistic strategies that patients can maintain long term."
      ]
    },
    {
      title: "Nutrition and Lifestyle",
      paragraphs: [
        "Successful nutrition programs often involve gradual habit changes rather than restrictive short-term diets.",
        "Education and sustainable lifestyle adjustments are key components of effective nutrition guidance."
      ]
    },
    {
      title: "Supporting Long-Term Health",
      paragraphs: [
        "Nutritional consulting is designed to help patients build healthy dietary habits that support overall wellness and metabolic balance."
      ]
    }
  ],

  cta: {
    title: "Schedule a Nutrition Consultation",
    description:
      "If you are interested in improving your diet or developing a sustainable nutrition plan, our clinic offers individualized nutritional consulting.",
    buttonText: "Schedule Consultation"
  }
};

