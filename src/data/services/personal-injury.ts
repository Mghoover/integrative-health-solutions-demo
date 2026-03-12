import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "personal-injury",
  title: "Auto Accident & Personal Injury Care",
  heroTagline: "Evaluation, Treatment, and Documentation After Motor Vehicle Accidents",

  conditions: [
    "whiplash",
    "neck-pain",
    "back-pain",
    "headaches"
  ],
  intro: [
    "Motor vehicle accidents can place sudden stress on the spine, muscles, and joints, sometimes causing injuries that may not be immediately obvious.",
    "Our clinic provides evaluation and treatment for patients who have been involved in auto accidents or other personal injury incidents."
  ],

  sections: [
    {
      title: "Common Injuries After Auto Accidents",
      paragraphs: [
        "Car accidents can create rapid acceleration and deceleration forces that affect the spine and surrounding tissues.",
        "Many patients experience symptoms hours or days after the incident."
      ],
      bulletPoints: [
        "Whiplash-associated neck injuries",
        "Lower back strain or joint irritation",
        "Headaches related to neck tension",
        "Muscle stiffness and inflammation",
        "Reduced range of motion",
        "Joint dysfunction"
      ]
    },
    {
      title: "Clinical Evaluation After an Accident",
      paragraphs: [
        "A thorough evaluation is important after any motor vehicle collision, even when symptoms appear mild at first.",
        "Our clinical examination may include assessment of joint movement, neurological function, muscle tenderness, and functional limitations."
      ]
    },
    {
      title: "Imaging and Diagnostic Testing",
      paragraphs: [
        "In some situations additional testing may be recommended to better evaluate injuries.",
        "Our clinic can review imaging and laboratory results from local hospitals and urgent care facilities."
      ],
      bulletPoints: [
        "X-ray imaging",
        "MRI when medically necessary",
        "Review of hospital or urgent care records",
        "Coordination with imaging centers"
      ]
    },
    {
      title: "Treatment and Recovery",
      paragraphs: [
        "Treatment plans are individualized depending on the patient's injuries and symptoms.",
        "Conservative care may include spinal adjustments, soft tissue therapy, and rehabilitation exercises designed to restore mobility and reduce pain."
      ]
    },
    {
      title: "Coordination With Attorneys and Insurance",
      paragraphs: [
        "Personal injury cases often involve communication between healthcare providers, insurance companies, and legal professionals.",
        "Our clinic works with several local attorneys and can provide appropriate clinical documentation related to injury evaluation and treatment."
      ]
    },
    {
      title: "Referrals and Advanced Testing",
      paragraphs: [
        "If additional evaluation is necessary, we can refer patients for MRI or other diagnostic testing.",
        "These services may be covered under personal injury claims when medically necessary."
      ]
    },
    {
      title: "What To Do After a Car Accident",
      paragraphs: [
        "Taking the right steps after a motor vehicle collision can help protect both your health and the documentation of your injuries."
      ],
      bulletPoints: [
        "Seek medical evaluation even if symptoms seem mild",
        "Document any pain, stiffness, headaches, or neurological symptoms",
        "Follow recommended treatment and monitoring",
        "Keep records of all medical visits and imaging"
      ]
    },
    {
      title: "Understanding Whiplash Injuries",
      paragraphs: [
        "Whiplash occurs when the neck is rapidly forced forward and backward during a collision.",
        "This motion can strain muscles, ligaments, joints, and surrounding tissues in the cervical spine."
      ],
      bulletPoints: [
        "Neck pain and stiffness",
        "Headaches",
        "Shoulder or upper back tension",
        "Reduced range of motion",
        "Dizziness or fatigue"
      ]
    },
    {
      title: "Frequently Asked Questions",
      faq: [
        {
          question: "Should I see a doctor even if I feel okay after an accident?",
          answer:
            "Some injuries such as whiplash may take hours or days to produce symptoms, so evaluation is often recommended even if you initially feel well."
        },
        {
          question: "How soon should I seek care?",
          answer:
            "Seeking care soon after the accident allows clinicians to evaluate injuries and document symptoms appropriately."
        },
        {
          question: "Will I need imaging such as an MRI?",
          answer:
            "Imaging is not necessary for every patient but may be recommended when symptoms or clinical findings suggest deeper injury."
        },
        {
          question: "Can chiropractic care help after an auto accident?",
          answer:
            "Chiropractic care may help address musculoskeletal injuries such as joint stiffness, muscle tension, and reduced mobility following a collision."
        }
      ]
    }
  ],

  cta: {
    title: "Schedule an Injury Evaluation",
    description:
      "If you have recently been involved in a motor vehicle accident, a clinical evaluation can help identify injuries and guide appropriate care.",
    buttonText: "Schedule Appointment"
  }
};

