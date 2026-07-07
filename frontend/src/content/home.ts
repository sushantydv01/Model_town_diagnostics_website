export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  trustSection: {
    headline: string;
    stats: { label: string; value: string }[];
  };
  popularTestsIntro: {
    title: string;
    description: string;
    viewAllCta: string;
  };
  packagesIntro: {
    title: string;
    description: string;
    viewAllCta: string;
  };
  homeCollectionIntro: {
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  whyChooseUs: {
    title: string;
    reasons: { title: string; description: string; iconKey: string }[];
  };
  location: {
    title: string;
    description: string;
    address: string;
  };
  finalCta: {
    headline: string;
    subheadline: string;
    buttonLabel: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    title: "Precision Diagnostics You Can Trust",
    subtitle:
      "Experience world-class pathology services with highly accurate testing, swift reporting, and compassionate care.",
    primaryCta: "Book a Test",
    secondaryCta: "View Packages",
    imageAlt: "Medical professionals working in a modern laboratory",
  },
  trustSection: {
    headline: "Certified Excellence",
    stats: [
      { label: "Happy Patients", value: "50k+" },
      { label: "Tests Available", value: "500+" },
      { label: "Years Experience", value: "15+" },
    ],
  },
  popularTestsIntro: {
    title: "Frequently Booked Tests",
    description:
      "Quick and accurate results for the most common diagnostic requirements.",
    viewAllCta: "View All Tests",
  },
  packagesIntro: {
    title: "Preventive Health Packages",
    description:
      "Comprehensive health checkups tailored for all age groups and specific medical needs.",
    viewAllCta: "Explore Packages",
  },
  homeCollectionIntro: {
    title: "Comfortable Home Sample Collection",
    description:
      "Get your blood tests done from the safety and comfort of your home by our certified phlebotomists.",
    features: ["Safe & Hygienic", "Flexible Timings", "Quick Reports"],
    cta: "Book Home Visit",
  },
  whyChooseUs: {
    title: "Why Choose Model Town Diagnostics?",
    reasons: [
      {
        title: "Advanced Technology",
        description:
          "State-of-the-art laboratory equipment for accurate results.",
        iconKey: "microscope",
      },
      {
        title: "Expert Team",
        description: "Highly qualified pathologists and trained technicians.",
        iconKey: "users",
      },
      {
        title: "Timely Reports",
        description: "Get your digital reports quickly without any delays.",
        iconKey: "clock",
      },
    ],
  },
  location: {
    title: "Visit Our Lab",
    description:
      "Centrally located and equipped with the latest diagnostic technology.",
    address: "123 Health Avenue, Model Town, New Delhi 110009",
  },
  finalCta: {
    headline: "Take Charge of Your Health Today",
    subheadline: "Book your appointment online and skip the queue.",
    buttonLabel: "Book Appointment Now",
  },
};
