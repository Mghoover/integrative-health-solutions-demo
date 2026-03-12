import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "spinal-decompression",
  title: "Spinal Decompression",
  heroTagline: "Non-Surgical Traction-Based Support for Lumbar and Cervical Symptoms",

  conditions: [
    "back-pain",
    "neck-pain",
    "neuropathy"
  ],
  intro: [
    "Spinal decompression uses controlled mechanical traction to apply progressive unloading to targeted spinal segments.",
    "It is commonly used as part of a broader conservative care plan for selected neck and low back conditions."
  ],

  sections: [
    {
      title: "How Decompression Therapy Works",
      paragraphs: [
        "Treatment applies cyclical traction forces to reduce compressive load across selected spinal structures.",
        "This may help improve tolerance for movement and reduce pain in appropriately selected patients."
      ]
    },
    {
      title: "Conditions Commonly Considered",
      bulletPoints: [
        "Disc-related low back symptoms",
        "Radiating pain into arms or legs",
        "Chronic neck or lumbar stiffness",
        "Mechanical pain aggravated by compression",
        "Recurrent spine-related activity limitation"
      ]
    },
    {
      title: "Treatment Planning and Progression",
      paragraphs: [
        "A clinical exam determines candidacy and helps set treatment parameters such as force, duration, and frequency.",
        "Decompression is typically paired with stabilization exercises and mobility work to improve long-term outcomes."
      ],
      bulletPoints: [
        "Individualized protocol setup",
        "Gradual progression over a treatment series",
        "Symptom and function tracking",
        "Integration with active rehabilitation"
      ]
    },
    {
      title: "Comprehensive Conservative Care",
      paragraphs: [
        "Spinal decompression is one tool within a broader non-surgical strategy.",
        "Care often includes chiropractic treatment, soft tissue management, and home-based exercise support."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If chronic neck or back symptoms are limiting your activity, we can assess whether spinal decompression is appropriate for your plan of care.",
    buttonText: "Schedule Appointment"
  }
};

