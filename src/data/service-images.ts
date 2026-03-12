import type { ImageMetadata } from "astro";
import autoAccidentImage from "../assets/services/auto-accident.jpg";
import bodyContouringImage from "../assets/services/body-contouring.jpg";
import brainHealthImage from "../assets/services/brain-health.jpg";
import chiropracticImage from "../assets/services/chiropractic.jpg";
import dryNeedlingImage from "../assets/services/dry-needling.jpg";
import hbotImage from "../assets/services/hbot.jpg";
import infraredSaunaImage from "../assets/services/infrared-sauna.jpg";
import laserTherapyImage from "../assets/services/laser-therapy.jpg";
import neuropathyImage from "../assets/services/neuropathy.jpg";
import nutritionImage from "../assets/services/nutrition.jpg";

export const serviceImagesBySlug: Record<string, ImageMetadata> = {
  "auto-accident": autoAccidentImage,
  "body-contouring": bodyContouringImage,
  "brain-health": brainHealthImage,
  chiropractic: chiropracticImage,
  "dry-needling": dryNeedlingImage,
  hbot: hbotImage,
  "infrared-sauna": infraredSaunaImage,
  "laser-therapy": laserTherapyImage,
  neuropathy: neuropathyImage,
  nutrition: nutritionImage
};

export const getServiceImageBySlug = (slug: string) => serviceImagesBySlug[slug];
