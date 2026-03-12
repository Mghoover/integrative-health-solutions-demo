import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "chiropractic",
  title: "Chiropractic Care",
  heroTagline: "Restoring Movement and Supporting Musculoskeletal Health",

  conditions: [
    "back-pain",
    "neck-pain",
    "whiplash",
    "headaches"
  ],
  intro: [
    "Chiropractic care focuses on improving the movement and function of the spine and joints.",
    "Doctors of Chiropractic use hands-on techniques such as spinal adjustments, joint mobilization, and soft tissue therapy to help restore normal movement patterns and reduce irritation of surrounding tissues."
  ],

  sections: [
    {
      title: "What Chiropractic Care Treats",
      paragraphs: [
        "Chiropractic care is commonly used to address musculoskeletal conditions involving the spine, joints, and surrounding soft tissues.",
        "Treatment focuses on restoring joint mobility and improving overall function."
      ],
      bulletPoints: [
        "Low back pain",
        "Neck pain",
        "Joint stiffness",
        "Muscle tension",
        "Headaches related to neck dysfunction",
        "Sports and activity-related injuries"
      ]
    },
    {
      title: "How Spinal Adjustments Work",
      paragraphs: [
        "A spinal adjustment involves a precise, controlled movement applied to a specific joint.",
        "These adjustments aim to restore normal joint motion, reduce mechanical irritation, and improve movement of surrounding tissues."
      ]
    },
    {
      title: "Mechanical and Neurological Effects",
      paragraphs: [
        "Research suggests spinal manipulation may influence both mechanical and neurological processes.",
        "These may include improved joint mobility, changes in muscle activity, and modulation of pain signaling within the nervous system."
      ],
      bulletPoints: [
        "Improved joint motion",
        "Reduced mechanical stiffness",
        "Changes in muscle activity",
        "Modulation of pain pathways"
      ]
    },
    {
      title: "Evidence for Chiropractic Treatment",
      paragraphs: [
        "Clinical guidelines and systematic reviews indicate spinal manipulation can provide modest improvements in pain and function for certain musculoskeletal conditions, particularly low back pain.",
        "Many modern treatment plans combine chiropractic adjustments with exercise and rehabilitation strategies."
      ]
    },
    {
      title: "A Comprehensive Approach to Care",
      paragraphs: [
        "Chiropractic care often includes more than spinal adjustments.",
        "Treatment plans may incorporate exercise therapy, soft tissue techniques, postural guidance, and lifestyle recommendations to support long-term musculoskeletal health."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If you are experiencing back pain, neck pain, or joint stiffness, chiropractic care may help restore movement and support your recovery.",
    buttonText: "Schedule Appointment"
  }
};

