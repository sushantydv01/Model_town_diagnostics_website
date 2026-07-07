export interface SiteConfig {
  name: string;
  contact: {
    phonePrimary: string;
    phoneSecondary: string;
    email: string;
    whatsapp: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    mapUrl: string;
  };
  hours: {
    weekdays: string;
    weekend: string;
    status: string;
  };
  socials: Record<string, string>;
  emails: {
    support: string;
    booking: string;
  };
  logo: {
    light: string;
    dark: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Model Town Diagnostics",
  contact: {
    phonePrimary: "+91 98765 43210",
    phoneSecondary: "+91 98765 43211",
    email: "info@modeltowndiagnostics.com",
    whatsapp: "+91 98765 43210",
  },
  address: {
    street: "123 Health Avenue, Model Town",
    city: "New Delhi",
    state: "Delhi",
    zip: "110009",
    mapUrl: "https://maps.google.com/?q=Model+Town+Diagnostics",
  },
  hours: {
    weekdays: "7:00 AM - 8:00 PM",
    weekend: "7:00 AM - 2:00 PM",
    status: "Open 7 days a week",
  },
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  emails: {
    support: "support@modeltowndiagnostics.com",
    booking: "appointments@modeltowndiagnostics.com",
  },
  logo: {
    light: "/assets/logo-light.svg",
    dark: "/assets/logo-dark.svg",
  },
};
