import { siteConfig } from "@/config/site";

export interface FooterContent {
  brandDescription: string;
  copyright: string;
  legalLinks: { label: string; path: string }[];
}

export const footerContent: FooterContent = {
  brandDescription:
    "Providing premium pathology and diagnostic services with a commitment to accuracy and patient care.",
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};
