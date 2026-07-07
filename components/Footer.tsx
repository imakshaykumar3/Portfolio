import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-xs text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}.
        </p>
        <p className="font-mono">Designed and engineered from scratch.</p>
      </div>
    </footer>
  );
}
