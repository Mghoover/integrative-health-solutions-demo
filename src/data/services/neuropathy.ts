import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "neuropathy",
  title: "Peripheral Neuropathy Care",
  heroTagline: "Understanding and Managing Nerve-Related Symptoms",

  conditions: [
    "neuropathy"
  ],
  intro: [
    "Peripheral neuropathy refers to damage or dysfunction of the nerves outside the brain and spinal cord.",
    "These nerves help control sensation, movement, and certain automatic body functions."
  ],

  sections: [
    {
      title: "Common Symptoms",
      paragraphs: [
        "Neuropathy symptoms vary depending on which nerves are affected.",
        "Symptoms often begin gradually and may progress over time."
      ],
      bulletPoints: [
        "Numbness or reduced sensation",
        "Tingling or 'pins and needles'",
        "Burning pain in the feet or hands",
        "Muscle weakness",
        "Sensitivity to touch",
        "Loss of balance or coordination"
      ]
    },
    {
      title: "Common Causes of Neuropathy",
      paragraphs: [
        "Peripheral neuropathy is not a single disease. It can develop from many different medical conditions or exposures.",
        "Identifying the underlying cause is an important part of care."
      ],
      bulletPoints: [
        "Diabetes",
        "Vitamin deficiencies",
        "Medication side effects",
        "Autoimmune disorders",
        "Alcohol-related nerve injury",
        "Mechanical nerve compression"
      ]
    },
    {
      title: "How Neuropathy Affects Nerves",
      paragraphs: [
        "Peripheral nerves transmit signals between the brain, spinal cord, and the rest of the body.",
        "When these nerves are damaged, signals may be slowed, distorted, or lost."
      ]
    },
    {
      title: "Evaluation and Diagnosis",
      paragraphs: [
        "A clinical evaluation typically includes a detailed medical history, physical examination, and sometimes diagnostic testing.",
        "These steps help determine the possible cause of neuropathy and guide treatment decisions."
      ]
    },
    {
      title: "Approaches to Neuropathy Care",
      paragraphs: [
        "Treatment strategies vary depending on the cause of the neuropathy and the symptoms involved.",
        "Care may involve addressing underlying conditions, improving circulation and mobility, and helping patients manage symptoms."
      ]
    },
    {
      title: "Realistic Expectations",
      paragraphs: [
        "Peripheral neuropathy can be complex and outcomes vary depending on the underlying cause.",
        "Treatment often focuses on symptom management, functional improvement, and slowing progression rather than guaranteeing reversal."
      ]
    }
  ],

  cta: {
    title: "Schedule a Neuropathy Consultation",
    description:
      "If you are experiencing numbness, tingling, burning pain, or other nerve-related symptoms, a clinical evaluation may help determine possible causes and treatment options.",
    buttonText: "Schedule Consultation"
  }
};

