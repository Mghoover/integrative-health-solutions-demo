export const siteConfig = {
  clinicName: "Integrative Health Solutions",
  tagline: "Chiropractic and Wellness Care",
  phone: "(843) 555-1234",
  email: "[info@example.com](mailto:info@example.com)",
  address: {
    street: "",
    city: "Florence",
    state: "SC",
    zip: "",
  },
  heroImages: [
    "/images/gethealthystayhealthy.jpg",
    "/images/focusedcare.jpg",
    "/images/newpatientswelcome.jpg",
  ],
  intakeForms: {
    contact: import.meta.env.JOT_CONTACT_FORM,
    newPatient: import.meta.env.JOT_NEW_PATIENT_FORM,
    infant: import.meta.env.JOT_INFANT_FORM,
    uhc: import.meta.env.JOT_UHC_FORM,
    vz8: import.meta.env.JOT_VZ8_FORM,
  },
};
