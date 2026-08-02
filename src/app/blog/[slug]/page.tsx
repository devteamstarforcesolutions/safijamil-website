import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostBody from "@/components/PostBody";
import { getPost, publishedPosts } from "@/data/posts";

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Safi Jamil`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://safijamil.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Safi Jamil"],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Safi Jamil",
      url: "https://safijamil.com",
    },
    mainEntityOfPage: `https://safijamil.com/blog/${post.slug}`,
  };

  return (
    <>
      <Nav />
      <main className="section" style={{ paddingTop: 150, minHeight: "70vh" }}>
        <article style={{ maxWidth: 760, margin: "0 auto" }}>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <Link href="/blog" style={{ fontSize: 14 }}>
            ← All posts
          </Link>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", margin: "26px 0 14px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 12.5,
                letterSpacing: 1.5,
                color: "var(--accent-2)",
                textTransform: "uppercase",
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              {post.tag}
            </span>
            <span style={{ fontSize: 13.5, color: "var(--muted)" }}>
              {new Date(post.date + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · Safi Jamil
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: -0.5,
              margin: "0 0 28px",
            }}
          >
            {post.title}
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/blog/${post.slug}.svg`}
            alt=""
            width={1200}
            height={480}
            style={{ width: "100%", height: "auto", display: "block", margin: "0 0 32px", border: "1px solid rgba(var(--accent-rgb),.14)" }}
          />
          <PostBody content={post.content} />
          <div
            style={{
              marginTop: 48,
              padding: "28px 32px",
              background: "var(--card)",
              border: "1px solid rgba(var(--accent-rgb),.14)",
            }}
          >
            <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
              Want this done for your business?
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--text-2)", margin: "0 0 16px" }}>
              I&apos;m Safi — a brand strategist and Google Ads specialist managing $261K+ in active ad
              spend. Tell me about your goals and I&apos;ll give you an honest read.
            </p>
            <Link
              href="/#contact"
              className="btn-primary"
              style={{
                display: "inline-block",
                padding: "12px 26px",
                background: "var(--accent)",
                color: "var(--on-accent)",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Get in touch
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
