const items = [
  "React",
  "Python",
  "JavaScript",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "GenAI",
  "RAG",
  "Dashboards",
  "Voice AI",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}
