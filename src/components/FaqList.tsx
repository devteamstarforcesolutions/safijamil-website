export type FaqEntry = { q: string; a: string };

export default function FaqList({ faqs, firstOpen = true }: { faqs: FaqEntry[]; firstOpen?: boolean }) {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      {faqs.map((f, i) => (
        <details key={f.q} className="faq-item" open={firstOpen && i === 0}>
          <summary>{f.q}</summary>
          <div className="faq-answer">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
