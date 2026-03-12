import type { ServiceDetail } from "../../types/service-detail";

export const service: ServiceDetail = {
  slug: "lifestyle-wellness-coaching",
  title: "Lifestyle and Wellness Coaching",
  heroTagline: "Practical Habit Change to Support Long-Term Health",

  conditions: [],
  intro: [
    "Lifestyle and wellness coaching helps patients translate health recommendations into consistent daily routines.",
    "Coaching focuses on realistic behavior change in areas such as sleep, stress, movement, and recovery habits."
  ],

  sections: [
    {
      title: "Core Areas of Coaching",
      bulletPoints: [
        "Sleep quality and recovery routines",
        "Stress regulation strategies",
        "Daily movement and activity habits",
        "Nutrition consistency and planning",
        "Self-monitoring and accountability"
      ]
    },
    {
      title: "Behavior Change Framework",
      paragraphs: [
        "Plans are built around small, measurable changes that can be sustained over time.",
        "Coaching sessions identify barriers, refine strategies, and reinforce progress with objective check-ins."
      ]
    },
    {
      title: "How Coaching Supports Clinical Care",
      paragraphs: [
        "Lifestyle factors often influence pain, inflammation, energy, and overall treatment response.",
        "Addressing these factors can improve outcomes from chiropractic, rehabilitation, and nutrition programs."
      ],
      bulletPoints: [
        "Improved treatment adherence",
        "Better recovery consistency",
        "Reduced relapse from avoidable triggers",
        "Stronger long-term self-management"
      ]
    },
    {
      title: "Individualized and Goal-Directed",
      paragraphs: [
        "No two care plans are identical; coaching is tailored to your schedule, responsibilities, and current health priorities.",
        "Goals are regularly updated as your function and confidence improve."
      ]
    }
  ],

  cta: {
    title: "Schedule a Consultation",
    description:
      "If you want help building sustainable health habits, we can create a coaching plan tailored to your goals.",
    buttonText: "Schedule Appointment"
  }
};

