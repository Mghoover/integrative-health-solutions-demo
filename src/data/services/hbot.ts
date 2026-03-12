import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "hbot",
  title: "Hyperbaric Oxygen Therapy",
  heroTagline: "Pressurized Oxygen Therapy for Evidence-Aware Recovery Support",
  conditions: [
    "neuropathy",
    "post-concussion"
  ],
  statusNote: "Coming Soon: This service is currently in development and pending installation.",

  intro: [
    "Hyperbaric oxygen therapy (HBOT) is a treatment in which a patient breathes concentrated oxygen inside a pressurized chamber.",
    "HBOT has established medical uses for selected conditions and is also being actively studied in additional recovery-oriented and neurologic applications."
  ],

  sections: [
    {
      title: "What HBOT Is",
      paragraphs: [
        "During HBOT, the patient is placed in a chamber where atmospheric pressure is increased above normal levels while oxygen is delivered in a controlled clinical setting.",
        "This process can increase the amount of oxygen dissolved in the blood and delivered to tissue."
      ]
    },
    {
      title: "How HBOT May Help",
      paragraphs: [
        "HBOT is used in medicine because increased oxygen delivery may support tissue recovery in selected settings.",
        "Research literature discusses effects on oxygenation, tissue repair, inflammatory signaling, and other recovery-related processes."
      ],
      bulletPoints: [
        "Supports oxygen delivery to tissue",
        "May assist selected healing and recovery processes",
        "Requires condition-specific screening and protocol selection"
      ]
    },
    {
      title: "Established Uses and Emerging Uses",
      paragraphs: [
        "Some uses of HBOT are well-established in medical practice, while others remain areas of active research.",
        "For that reason, treatment discussions should always be based on the patient's condition, goals, and the current state of the evidence."
      ]
    },
    {
      title: "HBOT and Brain-Related Applications",
      paragraphs: [
        "HBOT has attracted significant interest in neurologic and recovery-focused care, including research related to brain injury and cognitive function.",
        "However, evidence is still evolving, and not all proposed neurologic uses are considered established standards of care."
      ]
    },
    {
      title: "EEG Monitoring and Objective Assessment",
      paragraphs: [
        "Our clinic plans to incorporate EEG-based assessment as part of a broader monitoring process for selected patients.",
        "EEG may help document patterns of brain activity before and after care, but it should be understood as one assessment tool rather than stand-alone proof of clinical success."
      ]
    },
    {
      title: "Safety and Screening",
      paragraphs: [
        "HBOT should be performed only in an appropriate clinical environment with trained personnel, proper monitoring, and established safety procedures.",
        "Not every patient is a candidate, so treatment begins with evaluation, screening, and individualized clinical decision-making."
      ],
      bulletPoints: [
        "Requires trained supervision",
        "Requires patient screening",
        "Requires strict safety procedures",
        "Not appropriate for every condition or every patient"
      ]
    },
    {
      title: "A Careful, Evidence-Aware Approach",
      paragraphs: [
        "Our goal is to bring HBOT into the clinic responsibly, with attention to patient safety, appropriate expectations, and objective monitoring.",
        "We intend to position HBOT as part of a broader clinical strategy rather than as a stand-alone promise of guaranteed results."
      ]
    }
  ],

  cta: {
    title: "Ask About HBOT Availability",
    description:
      "HBOT is a planned future service for our clinic. If you would like to be notified when it becomes available, contact us to learn more.",
    buttonText: "Contact Us"
  }
};

