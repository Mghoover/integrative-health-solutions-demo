import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "brain-fog",
  title: "Brain Fog Support",
  heroTagline: "A clearer path for patients who know something feels off",
  intro: [
    "Brain fog can feel like slow processing, poor focus, word-finding difficulty, mental heaviness, or a sense that your brain is working harder than it should.",
    "It is not a diagnosis by itself. It is a functional symptom pattern that deserves careful listening, neurological context, and a plan that looks beyond one isolated system."
  ],
  sections: [
    {
      title: "Why Brain Fog Can Be So Frustrating",
      paragraphs: [
        "Many patients with brain fog have been told that basic testing looks normal, yet they still feel less sharp, less resilient, or less like themselves.",
        "Conventional testing is important, but it does not always explain changes in attention, cognitive stamina, sleep quality, autonomic stress, inflammation load, or recovery capacity."
      ]
    },
    {
      title: "The Brain Restore View",
      paragraphs: [
        "Brain Restore looks at brain fog through the lens of nervous system regulation, metabolic support, oxygenation, neuroplasticity, sleep, stress load, and movement.",
        "The goal is to identify factors that may be making the brain work inefficiently and then support the systems that help the nervous system adapt."
      ],
      bulletPoints: [
        "Neurological wellness evaluation",
        "Metabolic and lifestyle pattern review",
        "Brain health and recovery planning",
        "HBOT discussion when clinically appropriate"
      ]
    },
    {
      title: "What Evaluation May Explore",
      paragraphs: [
        "A Brain Restore evaluation may review symptom patterns, injury history, sleep, dizziness, headaches, nerve symptoms, cognitive load, and daily recovery response.",
        "The plan is individualized and may include chiropractic care, brain health strategies, nutrition, laser therapy, rehabilitation, or other supportive care options."
      ]
    }
  ],
  commonSymptoms: [
    "Trouble focusing or concentrating",
    "Mental fatigue after routine tasks",
    "Word-finding difficulty",
    "Feeling disconnected or slowed down",
    "Poor tolerance for screens, stress, or multitasking"
  ],
  possibleCauses: [
    "Sleep disruption",
    "Post-concussion or post-injury stress",
    "Metabolic or inflammatory load",
    "Autonomic nervous system stress",
    "Cognitive overload",
    "Medication or medical contributors requiring physician review"
  ],
  faq: [
    {
      question: "Does brain fog mean something is permanently wrong?",
      answer:
        "Not necessarily. Brain fog can come from many reversible or manageable factors, but persistent symptoms should be evaluated carefully."
    },
    {
      question: "Can Brain Restore guarantee clearer thinking?",
      answer:
        "No. Outcomes vary. The goal is to evaluate contributing factors and support healthier neurological function through an individualized plan."
    }
  ],
  cta: {
    title: "Schedule a Brain Fog Evaluation",
    description:
      "If you know something feels off but have not found a clear explanation, a Brain Restore evaluation can help organize the next step.",
    buttonText: "Schedule Evaluation"
  },
  services: ["brain-health", "hbot", "nutrition", "chiropractic"]
};
