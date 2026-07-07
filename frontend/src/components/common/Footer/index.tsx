import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/constants/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated border-t border-border pt-16 pb-8">
      <div className="w-full max-w-[var(--container-default)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-heading-3 text-primary font-bold focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm inline-block"
            >
              Model Town
              <br />
              Diagnostics
            </Link>
            <p className="text-body text-text-secondary max-w-xs">
              Providing premium pathology and diagnostic services with a
              commitment to accuracy and patient care.
            </p>
          </div>

          {/* About Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-heading-4 text-text-primary font-semibold">
              About Us
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-body text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-heading-4 text-text-primary font-semibold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-body text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-heading-4 text-text-primary font-semibold">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 mb-4">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-body text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {FOOTER_LINKS.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.path}
                  className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-surface transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
                  aria-label={`Visit our ${social.label}`}
                >
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-small text-text-muted">
            &copy; {currentYear} Model Town Diagnostics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-small text-text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-small text-text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
