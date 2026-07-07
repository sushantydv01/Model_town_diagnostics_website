export interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
}

export const seoContent: Record<string, PageSEO> = {
  home: {
    title: "Model Town Diagnostics | Premium Pathology Services",
    description:
      "Accurate and timely pathology and diagnostic services in Model Town. Book your tests and home collections online today.",
    canonical: "/",
  },
  tests: {
    title: "Book Lab Tests | Model Town Diagnostics",
    description:
      "Browse our comprehensive catalog of pathology tests. High-quality diagnostics you can trust.",
    canonical: "/tests",
  },
  packages: {
    title: "Health Packages | Model Town Diagnostics",
    description:
      "Explore our specialized preventive health checkup packages for you and your family.",
    canonical: "/packages",
  },
  homeCollection: {
    title: "Home Sample Collection | Model Town Diagnostics",
    description:
      "Book a comfortable and safe home sample collection with our trained phlebotomists.",
    canonical: "/home-collection",
  },
  about: {
    title: "About Us | Model Town Diagnostics",
    description:
      "Learn about our mission, vision, accreditations, and the technology powering our laboratory.",
    canonical: "/about",
  },
  contact: {
    title: "Contact Us | Model Town Diagnostics",
    description:
      "Get in touch with Model Town Diagnostics for support, inquiries, or locating our lab.",
    canonical: "/contact",
  },
  login: {
    title: "Patient & Technician Login | Model Town Diagnostics",
    description:
      "Securely log in to access your reports, manage appointments, and view your profile.",
    canonical: "/login",
  },
};
