interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function SEO({
  title = "Model Town Diagnostics",
  description = "Providing premium pathology and diagnostic services.",
  canonicalUrl,
}: SEOProps) {
  // React 19 natively supports hoisting document metadata
  // However, we can also use a side-effect if strictly rendering outside the head
  // But using React 19 document metadata capabilities:

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}
