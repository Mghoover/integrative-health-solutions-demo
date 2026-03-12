import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "back-pain",
  title: "Back Pain Treatment",
  heroTagline: "Helping Patients Find Relief From Back Pain",
  intro: [
    "Back pain is one of the most common musculoskeletal concerns and can affect daily activity, work, and sleep.",
    "Many cases involve a combination of muscle strain, joint irritation, and movement dysfunction, so care begins with clinical evaluation and a personalized treatment plan."
  ],
  commonSymptoms: [
    "Stiffness in the lower back",
    "Pain when bending or lifting",
    "Muscle tension",
    "Reduced mobility"
  ],
  possibleCauses: [
    "Muscle strain",
    "Joint irritation",
    "Disc-related irritation",
    "Poor posture",
    "Overuse injuries"
  ],
  faq: [
    {
      question: "When should back pain be evaluated?",
      answer:
        "Back pain that persists, worsens, or limits daily function should be evaluated to help identify likely causes and treatment options."
    },
    {
      question: "Do all cases of back pain require imaging?",
      answer:
        "Not always. Imaging is usually based on symptoms, exam findings, and whether there are signs that suggest a more serious condition."
    }
  ],
  services: ["chiropractic", "laser-therapy", "dry-needling"]
};
