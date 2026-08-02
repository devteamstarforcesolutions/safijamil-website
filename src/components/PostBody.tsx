const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontSize: 26,
  fontWeight: 600,
  margin: "40px 0 14px",
  letterSpacing: -0.3,
};

const pStyle: React.CSSProperties = {
  fontSize: 16.5,
  lineHeight: 1.8,
  color: "var(--text-2)",
  margin: "0 0 18px",
};

export default function PostBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.trim().split("\n");
        if (lines[0].startsWith("## ")) {
          return (
            <h2 key={i} style={h2Style}>
              {lines[0].slice(3)}
            </h2>
          );
        }
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} style={{ margin: "0 0 18px", padding: "0 0 0 22px", color: "var(--text-2)", fontSize: 16.5, lineHeight: 1.8 }}>
              {lines.map((l, j) => (
                <li key={j}>{l.slice(2)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} style={pStyle}>
            {block.trim()}
          </p>
        );
      })}
    </>
  );
}
