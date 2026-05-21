import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "neuropathy",
  title: "Neuropathy Support",
  heroTagline: "A Brain Restore-informed approach to nerve symptoms, circulation, and function",
  intro: [
    "Peripheral neuropathy may include numbness, tingling, burning discomfort, weakness, and balance changes.",
    "Since neuropathy has many possible causes, treatment planning should be individualized and based on a thorough clinical evaluation that considers nerves, circulation, metabolism, movement, and recovery capacity."
  ],
  sections: [
    {
      title: "Why Nerve Symptoms Need a Systems View",
      paragraphs: [
        "Neuropathy is not one single problem. Nerve symptoms can be influenced by blood sugar, nutrient status, inflammation, compression, medication effects, autoimmune processes, and other medical factors.",
        "Brain Restore does not reduce neuropathy to a simple protocol. It looks at what may be stressing the nerve system and what support may be appropriate."
      ]
    },
    {
      title: "Function, Balance, and Sensory Confidence",
      paragraphs: [
        "Nerve symptoms can change how patients walk, balance, sleep, and trust their body. The emotional impact is real, especially when symptoms are progressive or hard to explain.",
        "A supportive plan may focus on symptom management, movement confidence, nutritional support, laser therapy, neurological wellness strategies, and referral coordination when needed."
      ]
    },
    {
      title: "Realistic Recovery Framing",
      paragraphs: [
        "Some nerve conditions improve. Some require long-term management. Some are tied to medical causes that need co-management.",
        "The goal is to identify modifiable factors, support function, and avoid exaggerated promises about reversal or cure."
      ],
      bulletPoints: [
        "Clinical evaluation before treatment planning",
        "Support for balance and mobility",
        "Metabolic and nutritional review",
        "Recovery-focused therapies when appropriate"
      ]
    }
  ],
  commonSymptoms: [
    "Numbness or reduced sensation",
    "Tingling or pins-and-needles",
    "Burning pain in the feet or hands",
    "Muscle weakness",
    "Balance changes"
  ],
  possibleCauses: [
    "Diabetes-related nerve injury",
    "Vitamin deficiencies",
    "Medication-related nerve effects",
    "Mechanical nerve compression",
    "Autoimmune or metabolic conditions"
  ],
  faq: [
    {
      question: "Can neuropathy be caused by more than one factor?",
      answer:
        "Yes. Many patients have multiple contributing factors, which is why individualized evaluation is important."
    },
    {
      question: "Is symptom improvement guaranteed?",
      answer:
        "No. Outcomes vary by underlying cause and severity. Care often focuses on symptom management, function, and progression control."
    }
  ],
  services: ["neuropathy", "laser-therapy", "nutritional-consulting", "brain-health"]
};
