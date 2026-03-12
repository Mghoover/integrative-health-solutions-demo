import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "nir-sauna",
  title: "Near-Infrared Sauna",
  heroTagline: "Gentle Heat Therapy for Relaxation and Recovery",

  conditions: [
    "back-pain",
    "neck-pain"
  ],
  intro: [
    "Near-infrared sauna therapy uses infrared light energy to warm the body and promote relaxation.",
    "Unlike traditional saunas that heat the air around the body, infrared saunas deliver radiant heat that directly warms tissues at lower ambient temperatures."
  ],

  sections: [
    {
      title: "How Infrared Sauna Works",
      paragraphs: [
        "Infrared saunas use specialized emitters that produce infrared wavelengths capable of warming tissues through radiant energy.",
        "This allows the body to experience the physiological effects of heat exposure without requiring extremely high air temperatures."
      ]
    },
    {
      title: "Physiological Effects of Sauna Therapy",
      paragraphs: [
        "Heat exposure activates several natural physiological responses including increased circulation, sweating, and relaxation of muscles.",
        "These responses are part of the body's normal thermoregulation process."
      ],
      bulletPoints: [
        "Increased circulation",
        "Muscle relaxation",
        "Temporary reduction in stiffness",
        "Activation of the body's cooling and sweating mechanisms"
      ]
    },
    {
      title: "Potential Wellness Benefits",
      paragraphs: [
        "Research on sauna bathing suggests possible benefits for cardiovascular health, relaxation, and overall well-being.",
        "Many individuals use sauna sessions as part of a recovery or stress-management routine."
      ]
    },
    {
      title: "Sauna and Recovery",
      paragraphs: [
        "Heat therapy may help relax muscles and improve blood flow to tissues.",
        "Because of these effects, infrared sauna sessions are sometimes used alongside exercise programs, chiropractic care, or other recovery-focused therapies."
      ]
    },
    {
      title: "Safety Considerations",
      paragraphs: [
        "Sauna use is generally safe for healthy individuals when used appropriately and with proper hydration.",
        "People with certain medical conditions or cardiovascular concerns should consult a healthcare professional before using sauna therapy."
      ],
      bulletPoints: [
        "Stay hydrated before and after sessions",
        "Avoid excessively long sessions",
        "Stop if dizziness or discomfort occurs",
        "Consult a healthcare professional if you have medical conditions"
      ]
    },
    {
      title: "A Supportive Wellness Tool",
      paragraphs: [
        "Near-infrared sauna therapy is best understood as a supportive wellness and recovery tool rather than a primary medical treatment.",
        "Our clinic offers sauna therapy as a way to support relaxation, circulation, and overall recovery as part of a broader care approach."
      ]
    }
  ],

  cta: {
    title: "Schedule a Session",
    description:
      "If you are interested in using infrared sauna therapy as part of your wellness or recovery routine, contact our clinic to learn more.",
    buttonText: "Book a Session"
  }
};

