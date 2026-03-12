import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "laser-therapy",
  title: "Laser Therapy",
  heroTagline: "Precision Light Therapy for Cellular Healing",

  conditions: [
    "back-pain",
    "neck-pain",
    "neuropathy",
    "headaches"
  ],
  intro: [
    "Laser therapy, also known as photobiomodulation (PBM), uses specific wavelengths of light to influence biological activity within cells.",
    "Unlike surgical lasers that cut or heat tissue, PBM uses low-power non-thermal light energy that interacts with cellular structures involved in tissue repair and inflammatory signaling."
  ],

  sections: [
    {
      title: "How Laser Therapy Works",
      paragraphs: [
        "Inside each cell are mitochondria responsible for producing energy required for cellular function.",
        "Research suggests certain wavelengths of light interact with mitochondrial enzymes such as cytochrome c oxidase, influencing cellular metabolism and signaling pathways involved in tissue repair."
      ]
    },
    {
      title: "Wavelengths Used in Our Clinic",
      paragraphs: [
        "Our clinic uses three visible-spectrum wavelengths: 405 nm, 532 nm, and 635 nm.",
        "Each wavelength interacts differently with biological tissue and is selected based on the clinical goals of treatment."
      ],
      bulletPoints: [
        "405 nm - violet spectrum for superficial tissue applications",
        "532 nm - green spectrum interacting strongly with hemoglobin and melanin",
        "635 nm - red spectrum providing deeper penetration into soft tissue"
      ]
    },
    {
      title: "Why Dosage Matters",
      paragraphs: [
        "Photobiomodulation research demonstrates a biphasic dose response where proper treatment parameters are critical.",
        "Appropriate wavelength, exposure time, and energy density are required to support beneficial biological responses."
      ]
    },
    {
      title: "Conditions Commonly Treated",
      bulletPoints: [
        "Musculoskeletal pain",
        "Tendon and ligament irritation",
        "Peripheral neuropathy",
        "Arthritis-related inflammation",
        "Sports injuries",
        "Wound healing support"
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If you are experiencing pain, inflammation, or slow tissue healing, laser therapy may be a helpful part of your care plan.",
    buttonText: "Schedule Appointment"
  }
};

