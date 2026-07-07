import { Outlet } from "react-router-dom";
import { PageWrapper, ContentWrapper } from "@/components/common/Container";
import { SkipLink } from "@/components/common/SkipLink";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

export function PatientLayout() {
  return (
    <ErrorBoundary>
      <PageWrapper className="flex-row">
        <SkipLink />
        {/* Placeholder for Sidebar */}
        <aside className="w-64 hidden lg:block bg-surface-elevated border-r border-border min-h-screen p-4">
          <p className="text-body text-text-secondary font-medium">
            Sidebar Placeholder
          </p>
        </aside>

        <div className="flex-1 flex flex-col w-full">
          {/* Placeholder for Top Bar */}
          <header className="h-[72px] bg-surface border-b border-border flex items-center px-4 sm:px-6">
            <p className="text-body text-text-secondary font-medium">
              Top Bar Placeholder
            </p>
          </header>

          <ContentWrapper className="p-4 sm:p-6 lg:p-8 bg-background">
            <Outlet />
          </ContentWrapper>
        </div>
      </PageWrapper>
    </ErrorBoundary>
  );
}
