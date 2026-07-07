export interface NavLink {
  label: string;
  path: string;
}

export interface NavigationContent {
  public: NavLink[];
  patient: NavLink[];
  technician: NavLink[];
  footer: {
    about: NavLink[];
    quickLinks: NavLink[];
    contact: NavLink[];
    socials: NavLink[];
  };
  ctas: {
    primary: NavLink;
    secondary: NavLink;
  };
}

export const navigationContent: NavigationContent = {
  public: [
    { label: "Home", path: "/" },
    { label: "Tests", path: "/tests" },
    { label: "Packages", path: "/packages" },
    { label: "Home Collection", path: "/home-collection" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  patient: [
    { label: "Dashboard", path: "/patient/dashboard" },
    { label: "Appointments", path: "/patient/appointments" },
    { label: "Profile", path: "/patient/profile" },
    { label: "Payments", path: "/patient/payments" },
    { label: "Support", path: "/patient/support" },
  ],
  technician: [
    { label: "Dashboard", path: "/technician/dashboard" },
    { label: "Appointments", path: "/technician/appointments" },
    { label: "Patients", path: "/technician/patients" },
    { label: "Tests", path: "/technician/tests" },
    { label: "Packages", path: "/technician/packages" },
    { label: "Reports", path: "/technician/reports" },
    { label: "Settings", path: "/technician/settings" },
  ],
  footer: {
    about: [
      { label: "Our Story", path: "/about" },
      { label: "Accreditations", path: "/about#accreditations" },
      { label: "Quality Policy", path: "/about#quality" },
    ],
    quickLinks: [
      { label: "Book a Test", path: "/tests" },
      { label: "Health Packages", path: "/packages" },
      { label: "Home Collection", path: "/home-collection" },
    ],
    contact: [
      { label: "Find a Lab", path: "/contact" },
      { label: "Support", path: "/contact" },
      { label: "FAQs", path: "/contact#faqs" },
    ],
    socials: [
      { label: "Facebook", path: "https://facebook.com" },
      { label: "Twitter", path: "https://twitter.com" },
      { label: "Instagram", path: "https://instagram.com" },
      { label: "LinkedIn", path: "https://linkedin.com" },
    ],
  },
  ctas: {
    primary: { label: "Book Test", path: "/tests" },
    secondary: { label: "Login", path: "/login" },
  },
};
