import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "headaches",
  title: "Headaches & Migraine Support",
  heroTagline: "A nervous-system-informed approach to recurring head pain patterns",
  intro: [
    "Headaches and migraine patterns can involve the neck, nervous system sensitivity, stress physiology, sleep, hydration, hormones, visual strain, and other medical factors.",
    "A focused assessment can help identify likely contributors and support a conservative care plan while respecting when referral or medical co-management is needed."
  ],
  sections: [
    {
      title: "Why Headaches Can Be More Than Head Pain",
      paragraphs: [
        "For many patients, headaches arrive with light sensitivity, nausea, neck tension, cognitive fatigue, dizziness, or a sense that the nervous system is overloaded.",
        "Brain Restore views recurring headaches as a pattern that may involve pain processing, cervical mechanics, sleep, metabolism, visual-vestibular strain, and stress regulation."
      ]
    },
    {
      title: "Functional Triggers and Neurological Load",
      paragraphs: [
        "Some patients have structural testing that does not fully explain why their symptoms keep returning. That does not mean the symptoms are not real.",
        "A functional evaluation looks at the systems that may be raising neurological load and reducing recovery capacity."
      ],
      bulletPoints: [
        "Neck and shoulder mechanics",
        "Screen and visual tolerance",
        "Sleep and hydration patterns",
        "Stress physiology and muscle tension",
        "Nerve sensitivity and recovery capacity"
      ]
    },
    {
      title: "How Care May Be Structured",
      paragraphs: [
        "Care may include chiropractic treatment, soft tissue support, dry needling, laser therapy, nutrition, brain health strategies, and pacing guidance.",
        "The goal is to reduce contributing stressors, improve function, and help the patient understand patterns that may be driving symptoms."
      ]
    }
  ],
  commonSymptoms: [
    "Tension around the head or neck",
    "Pain that worsens with neck movement",
    "Muscle tightness in the upper neck and shoulders",
    "Sensitivity to activity, light, screens, or stress",
    "Brain fog or fatigue with headache episodes"
  ],
  possibleCauses: [
    "Cervical joint irritation",
    "Muscle tension",
    "Postural strain",
    "Sleep disruption",
    "Stress-related triggers",
    "Visual-vestibular strain",
    "Metabolic or inflammatory contributors"
  ],
  faq: [
    {
      question: "Are all headaches the same type?",
      answer:
        "No. Headaches have different patterns and possible causes, so assessment is important before selecting treatment."
    },
    {
      question: "Can neck dysfunction contribute to headaches?",
      answer:
        "Yes. In some patients, cervical joint and muscle dysfunction can contribute to headache symptoms."
    }
  ],
  services: ["chiropractic", "dry-needling", "brain-health"]
};
