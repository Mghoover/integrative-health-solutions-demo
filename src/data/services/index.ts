import type { ServiceDetail } from "../../types/service-detail";

type ServiceModule = {
  service?: ServiceDetail;
};

export interface ServiceLinkItem {
  slug: string;
  title: string;
}

const modules = import.meta.glob<ServiceModule>("./*.ts", { eager: true });

const preferredOrder = [
  "laser-therapy",
  "chiropractic",
  "dry-needling",
  "neuropathy",
  "personal-injury",
  "body-contouring",
  "brain-health",
  "hbot",
  "nutrition",
  "nutritional-consulting",
  "nir-sauna"
];

const rank = new Map(preferredOrder.map((slug, index) => [slug, index]));

export const serviceLinks: ServiceLinkItem[] = Object.values(modules)
  .map((module) => module.service)
  .filter((service): service is ServiceDetail => Boolean(service))
  .map((service) => ({
    slug: service.slug,
    title: service.title
  }))
  .sort((a, b) => {
    const aRank = rank.get(a.slug) ?? Number.POSITIVE_INFINITY;
    const bRank = rank.get(b.slug) ?? Number.POSITIVE_INFINITY;
    if (aRank !== bRank) return aRank - bRank;
    return a.title.localeCompare(b.title);
  });

export const getRelatedServices = (currentSlug: string, limit = 4): ServiceLinkItem[] =>
  serviceLinks.filter((service) => service.slug !== currentSlug).slice(0, limit);
