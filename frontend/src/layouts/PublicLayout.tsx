import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { PageWrapper, ContentWrapper } from "@/components/common/Container";
import { SkipLink } from "@/components/common/SkipLink";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

export function PublicLayout() {
  return (
    <ErrorBoundary>
      <PageWrapper>
        <SkipLink />
        <Navbar />
        <ContentWrapper className="pt-[72px]">
          <Outlet />
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </ErrorBoundary>
  );
}
