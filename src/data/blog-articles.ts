import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ngao.store";

export const BLOG_ARTICLE_SLUGS = [
  "sim-ghep-ha-noi",
  "sim-ghep-da-nang",
  "ghep-sim-iphone-lock",
  "mua-sim-ghep",
] as const;

export type BlogArticleSlug = (typeof BLOG_ARTICLE_SLUGS)[number];

function blogUrl(slug: string) {
  return `${SITE_URL}/blogs/${slug}`;
}

export const BLOG_ARTICLE_METADATA: Record<
  BlogArticleSlug,
  { title: string; description: string; keywords: string[]; breadcrumbName: string }
> = {
  "sim-ghep-ha-noi": {
    title: "Sim Ghép Hà Nội | Ghép Sim iPhone Lock & Mở Khóa Chuyên Nghiệp | Ngáo Store",
    description:
      "Sim ghép hà nội uy tín. Ghép sim iPhone Lock hà nội, mở khóa iPhone Lock hà nội tận nơi. Ngáo Store - Thanh Xuân, Cầu Giấy, Hoàng Mai. Bảo hành 3 tháng. Zalo: 0988 012 895.",
    keywords: [
      "sim ghép hà nội",
      "ghép sim iphone lock hà nội",
      "mở khóa iphone lock hà nội",
      "sim ghép thanh xuân",
      "sim ghép cầu giấy",
      "sim ghép hoàng mai",
      "ghép sim tận nơi hà nội",
      "mở khóa iphone lock tại hà nội",
    ],
    breadcrumbName: "Sim Ghép Hà Nội",
  },
  "sim-ghep-da-nang": {
    title: "Sim Ghép Đà Nẵng | Ghép Sim iPhone Lock & Mở Khóa Tận Nơi | Ngáo Store",
    description:
      "Sim ghép Đà Nẵng uy tín. Ghép sim iPhone Lock Đà Nẵng, mở khóa iPhone Lock Đà Nẵng tận nơi. Ngáo Store - Hòa Quý, Ngũ Hành Sơn. Bảo hành 3 tháng. Zalo: 0988 012 895.",
    keywords: [
      "sim ghép đà nẵng",
      "ghép sim iphone lock đà nẵng",
      "mở khóa iphone lock đà nẵng",
      "sim ghép hòa quý",
      "ghép sim tận nơi đà nẵng",
      "sim ghép ngũ hành sơn",
    ],
    breadcrumbName: "Sim Ghép Đà Nẵng",
  },
  "ghep-sim-iphone-lock": {
    title: "Ghép Sim iPhone Lock | Dịch Vụ Ghép Sim Chuyên Nghiệp Hà Nội & Đà Nẵng | Ngáo Store",
    description:
      "Ghép sim iPhone Lock chuyên nghiệp. Sim ghép Bison, Heicard chính hãng. Ghép sim tận nơi Hà Nội, Đà Nẵng. Hỗ trợ iPhone 6-16, bảo hành 3 tháng. Zalo: 0988 012 895.",
    keywords: [
      "ghép sim iphone lock",
      "ghép sim iphone lock hà nội",
      "ghép sim iphone lock đà nẵng",
      "dịch vụ ghép sim iphone lock",
      "ghép sim tận nơi",
      "sim ghép iphone lock",
    ],
    breadcrumbName: "Ghép Sim iPhone Lock",
  },
  "mua-sim-ghep": {
    title: "Mua Sim Ghép | Sim Ghép iPhone Lock Bison, Heicard Chính Hãng | Ngáo Store",
    description:
      "Mua sim ghép iPhone Lock chính hãng Bison, Heicard. Giá từ 99.000đ. Bảo hành 3 tháng, giao hàng toàn quốc. Hỗ trợ iPhone 6-16. Mua sim ghép tại Shopee hoặc Zalo: 0988 012 895.",
    keywords: [
      "mua sim ghép",
      "mua sim ghép iphone lock",
      "sim ghép bison",
      "sim ghép heicard",
      "sim ghép giá rẻ",
      "mua sim ghép ở đâu",
    ],
    breadcrumbName: "Mua Sim Ghép",
  },
};

export function getBlogArticleMetadata(slug: string): Metadata | null {
  const meta = BLOG_ARTICLE_METADATA[slug as BlogArticleSlug];
  if (!meta) return null;
  const url = blogUrl(slug);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
    },
  };
}

export function getBlogArticleJsonLd(slug: string) {
  const meta = BLOG_ARTICLE_METADATA[slug as BlogArticleSlug];
  if (!meta) return null;
  const url = blogUrl(slug);

  if (slug === "sim-ghep-ha-noi") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ngáo Store - Sim Ghép Hà Nội",
      description: meta.description,
      url,
      telephone: "+84988012895",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Số 10 ngõ 28B Hạ Đình, Thanh Xuân",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      areaServed: { "@type": "City", name: "Hà Nội" },
      priceRange: "99.000đ - 300.000đ",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    };
  }

  if (slug === "sim-ghep-da-nang") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ngáo Store - Sim Ghép Đà Nẵng",
      description: meta.description,
      url,
      telephone: "+84988012895",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hòa Quý",
        addressLocality: "Đà Nẵng",
        addressCountry: "VN",
      },
      areaServed: { "@type": "City", name: "Đà Nẵng" },
      priceRange: "99.000đ - 300.000đ",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    };
  }

  if (slug === "ghep-sim-iphone-lock") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Ghép Sim iPhone Lock - Ngáo Store",
      description: meta.description,
      provider: { "@type": "LocalBusiness", name: "Ngáo Store", telephone: "+84988012895" },
      areaServed: [{ "@type": "City", name: "Hà Nội" }, { "@type": "City", name: "Đà Nẵng" }],
    };
  }

  if (slug === "mua-sim-ghep") {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Mua Sim Ghép - Ngáo Store",
      description: meta.description,
      url,
      numberOfItems: 5,
    };
  }

  return null;
}

export function getBlogArticleBreadcrumb(slug: string) {
  const meta = BLOG_ARTICLE_METADATA[slug as BlogArticleSlug];
  if (!meta) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
      { "@type": "ListItem", position: 3, name: meta.breadcrumbName, item: blogUrl(slug) },
    ],
  };
}

export function isBlogArticleSlug(slug: string): slug is BlogArticleSlug {
  return BLOG_ARTICLE_SLUGS.includes(slug as BlogArticleSlug);
}
