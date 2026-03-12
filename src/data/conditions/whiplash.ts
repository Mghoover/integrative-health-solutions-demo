import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "whiplash",
  title: "Whiplash Treatment",
  heroTagline: "Evaluation and Recovery Support After Sudden Neck Injury",
  intro: [
    "Whiplash can occur when the neck is rapidly forced forward and backward during a collision or other high-force event.",
    "Because symptoms may appear hours or days later, early evaluation helps guide treatment decisions and document injury-related findings."
  ],
  commonSymptoms: [
    "Neck pain and stiffness",
    "Headaches",
    "Shoulder or upper back tension",
    "Reduced range of motion",
    "Dizziness or fatigue"
  ],
  possibleCauses: [
    "Rapid acceleration-deceleration forces",
    "Ligament and muscle strain",
    "Cervical joint irritation",
    "Inflammatory response after collision",
    "Associated upper back soft tissue injury"
  ],
  faq: [
    {
      question: "Should I seek care even if symptoms are mild at first?",
      answer:
        "Yes. Whiplash symptoms may be delayed, and early evaluation can help identify injuries and guide appropriate follow-up care."
    },
    {
      question: "Can whiplash affect areas beyond the neck?",
      answer:
        "Yes. Symptoms may involve the shoulders, upper back, and headache patterns related to cervical and muscular dysfunction."
    }
  ],
  services: ["personal-injury", "chiropractic", "rehabilitation-exercises"]
};
