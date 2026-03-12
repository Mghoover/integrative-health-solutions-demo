import type { ServiceDetail } from "../types/service-detail";

type ServiceModule = {
  service: ServiceDetail;
};

const modules = import.meta.glob<ServiceModule>("./services/*.ts", { eager: true });

export const serviceDetails = Object.values(modules)
  .map((module) => module.service)
  .filter((service): service is ServiceDetail => Boolean(service));

export const serviceDetailsBySlug = new Map(
  serviceDetails.map((service) => [service.slug, service])
);

/*
  How to add a new service page:
  1. Create a new file in src/data/services/ that exports `service`.
  2. Add a link/card to /services/<slug> on the services page.
  3. The [slug] route auto-loads all files in src/data/services/.
  4. The shared ServiceDetailLayout renders the page automatically.
*/
