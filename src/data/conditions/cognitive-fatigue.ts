import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "cognitive-fatigue",
  title: "Cognitive Fatigue Support",
  heroTagline: "When thinking, working, or focusing drains you faster than it should",
  intro: [
    "Cognitive fatigue is the sense that mental effort burns through your available energy quickly. Patients may function for a short period, then crash after meetings, screens, reading, driving, or multitasking.",
    "Brain Restore evaluates cognitive fatigue as a nervous system capacity issue, not a character flaw or lack of motivation."
  ],
  sections: [
    {
      title: "Understanding Capacity",
      paragraphs: [
        "The brain depends on oxygen delivery, metabolic flexibility, sleep, autonomic regulation, movement, and sensory processing to maintain stamina.",
        "When those systems are strained, normal cognitive demands can feel disproportionately exhausting."
      ]
    },
    {
      title: "Building a Recovery Pathway",
      paragraphs: [
        "The goal is to identify what increases cognitive load and what helps the system recover. A plan may include pacing, neurological wellness strategies, nutrition, chiropractic care, laser therapy, or discussion of HBOT when appropriate.",
        "Progress is built around tolerance and measurable function rather than forcing the nervous system through symptoms."
      ]
    },
    {
      title: "What Patients Often Notice",
      paragraphs: [
        "Many patients describe feeling capable in short bursts but unable to sustain mental effort across a full day.",
        "A structured evaluation can help separate cognitive fatigue from sleep issues, pain load, dizziness, stress physiology, and other contributors."
      ]
    }
  ],
  commonSymptoms: [
    "Mental exhaustion after routine tasks",
    "Screen intolerance",
    "Difficulty sustaining focus",
    "Needing long recovery after work or errands",
    "Irritability or overwhelm with cognitive demand"
  ],
  possibleCauses: [
    "Post-injury recovery stress",
    "Poor sleep quality",
    "Autonomic nervous system overload",
    "Metabolic or inflammatory strain",
    "Pain and sensory overload",
    "Deconditioning after illness or injury"
  ],
  faq: [
    {
      question: "Is cognitive fatigue the same as being tired?",
      answer:
        "Not exactly. Cognitive fatigue often shows up as reduced mental stamina, slower processing, and longer recovery after thinking-intensive tasks."
    },
    {
      question: "Can this be evaluated without overpromising results?",
      answer:
        "Yes. The goal is to understand contributing factors, support the nervous system, and build a realistic plan around function and tolerance."
    }
  ],
  cta: {
    title: "Schedule a Cognitive Fatigue Evaluation",
    description:
      "If mental effort drains you faster than it should, Brain Restore can help organize a more complete recovery conversation.",
    buttonText: "Schedule Evaluation"
  },
  services: ["brain-health", "nutrition", "hbot", "lifestyle-wellness-coaching"]
};
