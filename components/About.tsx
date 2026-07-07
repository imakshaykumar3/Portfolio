import FadeIn from "@/components/FadeIn";
import { EDUCATION } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-4">About</p>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <FadeIn delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-secondary">
              <p>
                Most demos stop at a clever prompt. What actually holds a
                system together in production is the part nobody screenshots:
                state that survives a restart, retries that don&apos;t
                duplicate side effects, and an API contract the rest of the
                team can trust. That&apos;s the layer I like working in.
              </p>
              <p>
                At Virtusa, that meant building the reasoning layer for an
                agentic compliance system — routing risk-classified policy
                documents through LangGraph, then wrapping the whole thing in
                FastAPI services boring enough to deploy on a Friday. At Tata
                Steel, it meant getting a YOLOv8 + PaddleOCR vision pipeline
                out of a notebook and onto a production network, gating
                physical access for real vehicles in real time.
              </p>
              <p>
                I think about agentic AI the same way I think about
                distributed systems: as a graph of nodes with explicit state,
                not a single long prompt hoping for the best. That&apos;s the
                thread running through SARTHI.AI&apos;s 13-node StateGraph and
                ContextGPT&apos;s retrieval pipeline — and it&apos;s the
                standard I hold any system I ship to.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="card-surface p-6">
              <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-secondary">
                Currently
              </p>
              <ul className="space-y-4 text-sm text-secondary">
                <li>
                  <span className="block text-primary">{EDUCATION.degree}</span>
                  {EDUCATION.school}
                  <br />
                  {EDUCATION.period} · {EDUCATION.gpa}
                </li>
                <li className="border-t border-border pt-4">
                  <span className="block text-primary">Based in</span>
                  Bengaluru, India — open to Bengaluru, Noida & remote-hybrid
                  roles
                </li>
                <li className="border-t border-border pt-4">
                  <span className="block text-primary">Focused on</span>
                  Agentic AI systems, RAG infrastructure, and backend
                  platforms that run those systems reliably
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
