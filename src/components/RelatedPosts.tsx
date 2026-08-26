import Link from "next/link";
import type { Post } from "@/data/posts";

/**
 * Picks up to `count` related posts: same-tag posts first, then falls back
 * to the most recent other posts if there aren't enough same-tag matches.
 */
function pickRelated(current: Post, allPosts: Post[], count = 3): Post[] {
  const others = allPosts.filter((p) => p.slug !== current.slug);
  const sameTag = others.filter((p) => p.tag === current.tag);
  const rest = others.filter((p) => p.tag !== current.tag);
  return [...sameTag, ...rest].slice(0, count);
}

export default function RelatedPosts({
  current,
  allPosts,
}: {
  current: Post;
  allPosts: Post[];
}) {
  const related = pickRelated(current, allPosts);
  if (related.length === 0) return null;

  return (
    <div style={{ marginTop: 56 }}>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: 13,
          letterSpacing: 2.5,
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Related reading
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            style={{
              display: "block",
              padding: "20px 24px",
              border: "1px dashed rgba(var(--accent-rgb),.3)",
              color: "var(--text)",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 1.5,
                color: "var(--muted)",
                textTransform: "uppercase",
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              {p.tag}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 17,
                fontWeight: 600,
                margin: "6px 0 0",
                lineHeight: 1.35,
              }}
            >
              {p.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
