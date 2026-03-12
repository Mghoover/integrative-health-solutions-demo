import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "neuropathy",
  title: "Neuropathy Treatment",
  heroTagline: "Supporting Patients With Nerve-Related Symptoms",
  intro: [
    "Peripheral neuropathy may include numbness, tingling, burning discomfort, weakness, and balance changes.",
    "Since neuropathy has many possible causes, treatment planning should be individualized and based on a thorough clinical evaluation."
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
  services: ["neuropathy", "laser-therapy", "nutritional-consulting"]
};
