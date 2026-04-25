"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  hx: number;
  hy: number;
  vx: number;
  vy: number;
  r: number;
};

function createNodes(w: number, h: number, count: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i += 1) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      hx: 0,
      hy: 0,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 0.8 + Math.random() * 1.6,
    });
    nodes[i].hx = nodes[i].x;
    nodes[i].hy = nodes[i].y;
  }
  return nodes;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let nodes: Node[] = [];
    let pointerX = -9999;
    let pointerY = -9999;
    let pointerOn = false;
    let lastInteract = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width > 1400 ? 96 : width > 900 ? 72 : 46;
      nodes = createNodes(width, height, count);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle tinted overlay that matches the yellow/gold network look.
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(255, 186, 92, 0.03)");
      grad.addColorStop(0.5, "rgba(255, 220, 130, 0.015)");
      grad.addColorStop(1, "rgba(255, 186, 92, 0.03)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const maxDist = width > 1200 ? 180 : 140;
      const maxDistSq = maxDist * maxDist;
      const pointerRadius = width > 1200 ? 210 : 160;
      const pointerRadiusSq = pointerRadius * pointerRadius;
      const now = performance.now();
      const pointerStrength = pointerOn || now - lastInteract < 1300 ? 1 : 0;

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];

        if (!reduceMotion) {
          // Spring back to home position so the web restores its original shape.
          const homeDx = a.hx - a.x;
          const homeDy = a.hy - a.y;
          a.vx += homeDx * 0.0028;
          a.vy += homeDy * 0.0028;

          // Cursor interaction: nearby nodes get pushed and then settle back.
          if (pointerStrength > 0) {
            const pdx = a.x - pointerX;
            const pdy = a.y - pointerY;
            const pDistSq = pdx * pdx + pdy * pdy;
            if (pDistSq < pointerRadiusSq) {
              const pDist = Math.sqrt(pDistSq) || 1;
              const power = (1 - pDist / pointerRadius) * 0.55 * pointerStrength;
              a.vx += (pdx / pDist) * power;
              a.vy += (pdy / pDist) * power;
            }
          }

          a.vx *= 0.93;
          a.vy *= 0.93;
          a.x += a.vx;
          a.y += a.vy;
        }

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > maxDistSq) continue;
          const t = 1 - distSq / maxDistSq;
          ctx.strokeStyle = `rgba(255, 196, 100, ${0.02 + t * 0.24})`;
          ctx.lineWidth = 0.35 + t * 0.85;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 214, 138, 0.9)";
        ctx.shadowColor = "rgba(255, 214, 138, 0.5)";
        ctx.shadowBlur = 6;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerOn = true;
      pointerX = e.clientX;
      pointerY = e.clientY;
      lastInteract = performance.now();
    };
    const onPointerLeave = () => {
      pointerOn = false;
      lastInteract = performance.now();
    };
    const onWheel = (e: WheelEvent) => {
      pointerOn = true;
      pointerX = e.clientX;
      pointerY = e.clientY;
      lastInteract = performance.now();
      if (reduceMotion) return;
      const amp = Math.min(Math.abs(e.deltaY), 120) * 0.0016;
      for (let i = 0; i < nodes.length; i += 1) {
        nodes[i].vx += (Math.random() - 0.5) * amp;
        nodes[i].vy += (Math.random() - 0.5) * amp;
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[0] opacity-70 mix-blend-screen"
      aria-hidden
    />
  );
}
