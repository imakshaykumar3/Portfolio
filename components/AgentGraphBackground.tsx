"use client";

import { useEffect, useRef } from "react";

/**
 * The site's signature visual element.
 *
 * Rather than generic particles, this renders a lightweight animated
 * node-graph — a literal, simplified stand-in for the 13-node LangGraph
 * StateGraph that orchestrates SARTHI.AI. Edges pulse with signal traveling
 * between nodes, echoing how state actually flows through Akshay's systems.
 * The same visual language is reused in the project architecture diagrams,
 * so the hero doubles as a thesis statement for the whole page.
 */
export default function AgentGraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    type Edge = { a: number; b: number; phase: number; speed: number };

    let nodes: Node[] = [];
    let edges: Edge[] = [];

    const NODE_COUNT = 13; // mirrors the 13-node StateGraph in SARTHI.AI
    const colors = ["#3B82F6", "#8B5CF6", "#22D3EE"];

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.5 + 1.5,
      }));

      edges = [];
      // connect each node to its 1-2 nearest neighbours for an organic mesh
      nodes.forEach((n, i) => {
        const distances = nodes
          .map((m, j) => ({ j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
          .filter((d) => d.j !== i)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);
        distances.forEach((d) => {
          edges.push({
            a: i,
            b: d.j,
            phase: Math.random(),
            speed: 0.15 + Math.random() * 0.2,
          });
        });
      });
    }

    let raf: number;
    function tick() {
      ctx!.clearRect(0, 0, width, height);

      // edges
      edges.forEach((e) => {
        const a = nodes[e.a];
        const b = nodes[e.b];
        if (!a || !b) return;
        ctx!.strokeStyle = "rgba(148, 163, 184, 0.12)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();

        if (!prefersReducedMotion) {
          e.phase = (e.phase + e.speed * 0.01) % 1;
          const px = a.x + (b.x - a.x) * e.phase;
          const py = a.y + (b.y - a.y) * e.phase;
          ctx!.fillStyle = colors[e.a % colors.length];
          ctx!.globalAlpha = 0.8;
          ctx!.beginPath();
          ctx!.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.globalAlpha = 1;
        }
      });

      // nodes
      nodes.forEach((n, i) => {
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
        ctx!.fillStyle = colors[i % colors.length];
        ctx!.globalAlpha = 0.9;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.globalAlpha = 1;
      });

      raf = requestAnimationFrame(tick);
    }

    resize();
    init();
    tick();

    const handleResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-60"
    />
  );
}
