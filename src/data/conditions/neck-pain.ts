import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "neck-pain",
  title: "Neck Pain Treatment",
  heroTagline: "Conservative Care for Neck Pain and Stiffness",
  intro: [
    "Neck pain can be related to posture, repetitive strain, joint stiffness, and muscular tension.",
    "Symptoms often improve most consistently when treatment addresses both pain and the movement patterns that continue to stress the cervical spine."
  ],
  commonSymptoms: [
    "Neck stiffness",
    "Pain with turning the head",
    "Muscle tightness in the neck and upper back",
    "Reduced cervical range of motion"
  ],
  possibleCauses: [
    "Postural strain",
    "Joint irritation in the cervical spine",
    "Muscle overuse",
    "Repetitive work or activity stress",
    "Previous minor injury"
  ],
  faq: [
    {
      question: "Can posture contribute to neck pain?",
      answer:
        "Yes. Sustained forward-head posture and prolonged desk or device use can increase stress on cervical joints and surrounding muscles."
    },
    {
      question: "How long does recovery usually take?",
      answer:
        "Recovery time varies by severity, contributing factors, and treatment consistency. Many patients improve gradually with a structured care plan."
    }
  ],
  services: ["chiropractic", "dry-needling", "laser-therapy"]
};
