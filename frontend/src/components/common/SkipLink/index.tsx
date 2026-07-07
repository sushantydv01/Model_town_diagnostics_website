import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function SkipLink() {
  const location = useLocation();

  // Reset focus when route changes for accessibility
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus({ preventScroll: true });
    }
  }, [location.pathname]);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-tooltip bg-surface text-primary px-4 py-2 font-medium rounded-md shadow-overlay ring-2 ring-focus-ring outline-none"
    >
      Skip to main content
    </a>
  );
}
