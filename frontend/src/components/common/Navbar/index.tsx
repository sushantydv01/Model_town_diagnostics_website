import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/components/common/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-sticky h-[72px] transition-all duration-normal ease-standard",
          isScrolled
            ? "bg-surface/80 backdrop-blur-md border-b border-border shadow-soft"
            : "bg-transparent",
        )}
      >
        <div className="w-full max-w-[var(--container-default)] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo (Left) */}
          <Link
            to="/"
            className="text-heading-4 text-primary font-bold focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm"
          >
            Model Town
            <br />
            Diagnostics
          </Link>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-body text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm px-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions (Right) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-body text-text-secondary hover:text-primary font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-sm px-2"
            >
              Login
            </Link>
            <Link
              to="/tests"
              className="bg-primary hover:bg-primary-hover text-surface px-5 h-[44px] inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
            >
              Book Test
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-md"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-overlay flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-overlay backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="relative ml-auto w-4/5 max-w-sm h-full bg-surface shadow-overlay flex flex-col animate-in slide-in-from-right duration-normal ease-standard"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-heading-4 font-bold text-primary">
                Menu
              </span>
              <button
                className="p-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-heading-4 text-text-secondary hover:text-primary transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-ring"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-border flex flex-col gap-3">
              <Link
                to="/login"
                className="w-full border border-border text-center py-3 rounded-md text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Login
              </Link>
              <Link
                to="/tests"
                className="w-full bg-primary text-surface text-center py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
              >
                Book Test
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
