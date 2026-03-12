import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "headaches",
  title: "Headache Treatment",
  heroTagline: "Addressing Neck- and Tension-Related Headache Patterns",
  intro: [
    "Headaches can involve multiple contributing factors, including cervical joint dysfunction, muscle tension, stress load, and lifestyle triggers.",
    "A focused assessment can help identify likely pain drivers and support a conservative care plan tailored to each patient."
  ],
  commonSymptoms: [
    "Tension around the head or neck",
    "Pain that worsens with neck movement",
    "Muscle tightness in the upper neck and shoulders",
    "Sensitivity to activity or stress"
  ],
  possibleCauses: [
    "Cervical joint irritation",
    "Muscle tension",
    "Postural strain",
    "Sleep disruption",
    "Stress-related triggers"
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
