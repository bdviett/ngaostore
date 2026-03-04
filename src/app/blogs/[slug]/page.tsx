import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import {
  BLOG_ARTICLE_SLUGS,
  isBlogArticleSlug,
  getBlogArticleMetadata,
  getBlogArticleJsonLd,
  getBlogArticleBreadcrumb,
} from "@/data/blog-articles";

const SimGhepHaNoi = dynamic(() => import("@/components/blog-articles/SimGhepHaNoi"), { ssr: true });
const SimGhepDaNang = dynamic(() => import("@/components/blog-articles/SimGhepDaNang"), { ssr: true });
const GhepSimIphoneLock = dynamic(() => import("@/components/blog-articles/GhepSimIphoneLock"), { ssr: true });
const MuaSimGhep = dynamic(() => import("@/components/blog-articles/MuaSimGhep"), { ssr: true });
const ThayOSimIphoneLock = dynamic(() => import("@/components/blog-articles/ThayOSimIphoneLock"), { ssr: true });

const ARTICLE_COMPONENTS = {
  "sim-ghep-ha-noi": SimGhepHaNoi,
  "sim-ghep-da-nang": SimGhepDaNang,
  "ghep-sim-iphone-lock": GhepSimIphoneLock,
  "mua-sim-ghep": MuaSimGhep,
  "thay-o-sim-eid-iphone-lock": ThayOSimIphoneLock,
} as const;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getBlogArticleMetadata(slug);
  if (!metadata) return {};
  return metadata;
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  if (!isBlogArticleSlug(slug)) {
    notFound();
  }

  const ArticleComponent = ARTICLE_COMPONENTS[slug];
  const jsonLd = getBlogArticleJsonLd(slug);
  const breadcrumb = getBlogArticleBreadcrumb(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <ArticleComponent />
    </>
  );
}
