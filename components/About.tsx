// components/About.tsx
import FadeIn from "@/components/FadeIn";

export default function About() {
  const aboutCards = [
    {
      id: 1,
      title: "The Drive",
      text: "Behind every project is more than code—there's curiosity, countless iterations, lessons learned, and a genuine desire to create something meaningful.",
    },
    {
      id: 2,
      title: "The Mindset",
      text: "I'm driven by the excitement of solving problems that challenge the way I think. I believe growth comes from asking better questions, embracing uncertainty, and continuously pushing beyond what's familiar. Every experience, whether it's a success or a setback, shapes the way I approach both technology and life.",
    },
    {
      id: 3,
      title: "The Philosophy",
      text: "To me, software engineering is about more than building applications. It's about creating solutions that improve experiences, simplify complexity, and make a positive impact. That philosophy guides every project I take on and every skill I choose to learn.",
    },
    {
      id: 4,
      title: "The Purpose",
      text: "As I continue this journey, my purpose remains unchanged: to stay curious, build with intention, and create technology that matters.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <FadeIn>
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            ABOUT <span className="text-purple-400">ME</span>
          </h2>
        </FadeIn>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {aboutCards.map((card, index) => (
            <FadeIn
              key={card.id}
              delay={0.1 * (index + 1)}
              className="w-full h-full"
            >
              <div className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)]">
                
                {/* Increased visibility: Removed opacity and made the font bolder */}
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
                  {card.title}
                </h3>
                
                {/* Increased visibility: Changed text-secondary to text-gray-300 */}
                <p className="flex-grow text-base leading-relaxed text-gray-300 text-justify md:text-lg">
                  {card.text}
                </p>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}