type NodeDef = { x: number; y: number; w: number; h: number; label: string; sub?: string; accent?: "blue" | "purple" | "cyan" };
type EdgeDef = { from: [number, number]; to: [number, number]; label?: string; dashed?: boolean };

const ACCENTS: Record<string, string> = {
  blue: "#3B82F6",
  purple: "#8B5CF6",
  cyan: "#22D3EE",
};

function Node({ x, y, w, h, label, sub, accent = "blue" }: NodeDef) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="#111827"
        stroke={ACCENTS[accent]}
        strokeOpacity={0.5}
        strokeWidth={1.2}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono)"
        fontSize="10.5"
        fill="#F5F7FA"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 11}
          textAnchor="middle"
          fontFamily="var(--font-inter)"
          fontSize="8.5"
          fill="#94A3B8"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Edge({ from, to, label, dashed }: EdgeDef) {
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  return (
    <g>
      <path
        d={`M ${from[0]} ${from[1]} L ${to[0]} ${to[1]}`}
        stroke="#334155"
        strokeWidth={1.2}
        strokeDasharray={dashed ? "4 3" : undefined}
        markerEnd="url(#arrow)"
        fill="none"
      />
      {label && (
        <text
          x={midX}
          y={midY - 6}
          textAnchor="middle"
          fontFamily="var(--font-jetbrains-mono)"
          fontSize="8"
          fill="#64748B"
        >
          {label}
        </text>
      )}
    </g>
  );
}

const DEFS = (
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
    </marker>
  </defs>
);

function SarthiDiagram() {
  return (
    <svg viewBox="0 0 760 300" className="h-auto w-full">
      {DEFS}
      <Node x={20} y={125} w={90} h={50} label="Client" sub="Next.js UI" accent="cyan" />
      <Node x={150} y={125} w={110} h={50} label="FastAPI" sub="SSE stream" accent="blue" />
      <Node x={300} y={40} w={130} h={45} label="Router Node" sub="conditional edge" accent="purple" />
      <Node x={300} y={125} w={130} h={45} label="Flight Agent" sub="Amadeus API" accent="blue" />
      <Node x={300} y={210} w={130} h={45} label="Hotel / Activity" sub="Tavily + Unsplash" accent="blue" />
      <Node x={470} y={125} w={130} h={45} label="Aggregator Node" sub="Pydantic schema" accent="purple" />
      <Node x={640} y={125} w={100} h={45} label="GPT-4 / Gemini" sub="multi-LLM" accent="cyan" />
      <Node x={470} y={210} w={130} h={45} label="AsyncSqliteSaver" sub="checkpoint memory" accent="cyan" />

      <Edge from={[110, 150]} to={[150, 150]} label="request" />
      <Edge from={[260, 148]} to={[300, 62]} />
      <Edge from={[260, 148]} to={[300, 148]} />
      <Edge from={[260, 148]} to={[300, 232]} />
      <Edge from={[430, 148]} to={[470, 148]} />
      <Edge from={[535, 210]} to={[535, 170]} label="persist" dashed />
      <Edge from={[600, 148]} to={[640, 148]} />
      <Edge from={[690, 125]} to={[260, 150]} label="stream tokens (SSE)" dashed />
    </svg>
  );
}

function ContextGptDiagram() {
  return (
    <svg viewBox="0 0 760 260" className="h-auto w-full">
      {DEFS}
      <Node x={20} y={95} w={110} h={50} label="Audio / Video" sub="+ YouTube URL" accent="cyan" />
      <Node x={170} y={95} w={120} h={50} label="Faster-Whisper" sub="transcription" accent="blue" />
      <Node x={330} y={95} w={120} h={50} label="Chunk + Embed" sub="bge-small-en-v1.5" accent="blue" />
      <Node x={490} y={30} w={120} h={50} label="ChromaDB" sub="vector store" accent="purple" />
      <Node x={490} y={150} w={120} h={50} label="PostgreSQL" sub="sessions" accent="purple" />
      <Node x={650} y={95} w={95} h={50} label="FastAPI" sub="JWT-secured" accent="cyan" />

      <Edge from={[130, 120]} to={[170, 120]} />
      <Edge from={[290, 120]} to={[330, 120]} />
      <Edge from={[450, 115]} to={[490, 60]} label="index" />
      <Edge from={[450, 125]} to={[490, 165]} label="metadata" />
      <Edge from={[610, 60]} to={[650, 110]} label="retrieve" />
      <Edge from={[610, 170]} to={[650, 130]} />
      <Edge from={[745, 95]} to={[745, 40]} dashed />
      <text x={745} y={30} textAnchor="middle" fontFamily="var(--font-jetbrains-mono)" fontSize="8" fill="#64748B">
        RAG-grounded answer
      </text>
    </svg>
  );
}

export default function ArchitectureDiagram({
  type,
}: {
  type: "sarthi" | "contextgpt";
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-base-elevated/60 p-4">
      {type === "sarthi" ? <SarthiDiagram /> : <ContextGptDiagram />}
    </div>
  );
}
