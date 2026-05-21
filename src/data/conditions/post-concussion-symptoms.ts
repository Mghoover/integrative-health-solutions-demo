import type { ConditionDetail } from "../../types/condition-detail";

export const condition: ConditionDetail = {
  slug: "post-concussion-symptoms",
  title: "Post-Concussion Symptom Support",
  heroTagline: "Support for lingering symptoms after head or neck trauma",
  intro: [
    "After a concussion or acceleration-deceleration injury, some patients continue to experience headaches, dizziness, light sensitivity, brain fog, fatigue, sleep disruption, or emotional overload.",
    "These symptoms should be evaluated by qualified medical professionals. When emergency and structural concerns have been addressed, functional neurological recovery may still need thoughtful support."
  ],
  sections: [
    {
      title: "Why Symptoms Can Persist",
      paragraphs: [
        "A concussion can affect more than the head. Neck mechanics, visual-vestibular systems, autonomic stress, sleep, inflammation, and cognitive load can all influence recovery.",
        "Imaging may be normal even when the nervous system is still struggling with tolerance, regulation, and stamina."
      ]
    },
    {
      title: "Brain Restore Approach",
      paragraphs: [
        "Brain Restore does not treat concussion with a one-size-fits-all protocol. It looks for the systems that remain overloaded and builds a conservative plan around tolerance, safety, and progression.",
        "HBOT is discussed carefully as an emerging neurological recovery interest, not as a guaranteed concussion treatment."
      ],
      bulletPoints: [
        "Neck and movement assessment",
        "Dizziness and balance screening",
        "Brain health and cognitive load review",
        "Recovery pacing and referral coordination when needed"
      ]
    },
    {
      title: "When to Seek Urgent Care",
      paragraphs: [
        "New or worsening neurological symptoms after head trauma require prompt medical evaluation.",
        "Severe headache, repeated vomiting, confusion, weakness, seizure, slurred speech, or loss of consciousness should be treated as urgent medical concerns."
      ]
    }
  ],
  commonSymptoms: [
    "Headaches or pressure",
    "Dizziness or balance difficulty",
    "Brain fog and slowed processing",
    "Light or sound sensitivity",
    "Fatigue after screens, reading, or work",
    "Neck pain or stiffness"
  ],
  possibleCauses: [
    "Concussion-related nervous system stress",
    "Cervical spine injury",
    "Vestibular or visual strain",
    "Sleep disruption",
    "Autonomic dysregulation",
    "Cognitive overload"
  ],
  faq: [
    {
      question: "Can symptoms persist even if imaging is normal?",
      answer:
        "Yes. Imaging can be important for ruling out serious structural injury, but functional symptoms may persist even when imaging does not show an obvious abnormality."
    },
    {
      question: "Is HBOT proven to cure concussion?",
      answer:
        "No. HBOT for concussion-related symptoms remains an area of active research. We frame it conservatively and only as one possible discussion point within a broader recovery plan."
    }
  ],
  cta: {
    title: "Schedule a Post-Concussion Support Evaluation",
    description:
      "If lingering symptoms are disrupting work, school, driving, screens, or daily life, our team can help evaluate supportive next steps.",
    buttonText: "Schedule Evaluation"
  },
  services: ["brain-health", "hbot", "chiropractic", "rehabilitation-exercises"]
};
