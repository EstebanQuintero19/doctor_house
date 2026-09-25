"use client";

import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const once = { once: true, margin: "-10% 0px" } as const;

// Ficha que se clava en la pared: cae con un giro y se asienta.
export function Pinned({ children, className, i = 0 }: { children: React.ReactNode; className: string; i?: number }) {
  return (
    <motion.article className={className}
      initial={{ opacity: 0, y: -24, rotate: i % 2 ? 3 : -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={once}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay: (i % 4) * 0.08 }}>
      {children}
    </motion.article>
  );
}

// Línea de tiempo que se llena al bajar.
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  return (
    <ol className="timeline" ref={ref}>
      <motion.span className="timeline-fill" style={{ scaleY: scrollYProgress }} aria-hidden />
      {children}
    </ol>
  );
}

// Cuenta hasta el número al entrar en pantalla ("2004–12" queda tal cual).
export function Count({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, once);
  const [text, setText] = useState(value);
  useEffect(() => {
    if (!/^\d+$/.test(value) || !seen || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = animate(0, +value, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setText(String(Math.round(v))) });
    return () => c.stop();
  }, [seen, value]);
  return <b ref={ref}>{text}</b>;
}

// Interpola con función y no con rangos: framer acelera los rangos de opacidad con ScrollTimeline
// nativa y, pasado el rango, el valor vuelve al inicial en lugar de quedarse en el final.
function useRamp(p: MotionValue<number>, [a, b]: [number, number], from: number, to: number) {
  return useTransform(p, (v) => from + (to - from) * Math.min(1, Math.max(0, (v - a) / (b - a))));
}

// Diagnóstico diferencial: la pizarra se queda fija y, al bajar, se tacha cada hipótesis.
const ddx = [
  ["Infección", "Cultivos negativos."],
  ["Sarcoidosis", "No hay granulomas."],
  ["Cáncer", "El TAC está limpio."],
  ["Amiloidosis", "Biopsia negativa."],
  ["Vasculitis", "No responde a los esteroides."],
  ["Toxinas", "Foreman ya ha registrado la casa."],
];
export function Differential() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = ddx.length + 1;
  const circle = useTransform(p, [(n - 1) / n, 0.97], [0, 1]);
  const final = useRamp(p, [0.9, 0.98], 0, 1);
  return (
    <section ref={ref} className="ddx-sec" aria-labelledby="h-ddx">
      <div className="ddx-stick wrap">
        <div className="board ddx-board">
          <h2 id="h-ddx" className="marker ddx-title">Diagnóstico diferencial</h2>
          <ol className="ddx-list marker">
            {ddx.map(([d, why], i) => <Hypothesis key={d} d={d} why={why} p={p} range={[(i + 0.2) / n, (i + 0.8) / n]} />)}
            <li className="ddx-lupus">
              <span>Lupus</span>
              <svg viewBox="0 0 220 90" aria-hidden><motion.path d="M20 50 C 10 10, 200 5, 205 45 C 210 85, 30 90, 15 55 C 8 40, 40 22, 70 20" style={{ pathLength: circle }} /></svg>
              <motion.em style={{ opacity: final }}>Nunca es lupus. Esta vez, sí.</motion.em>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
function Hypothesis({ d, why, p, range }: { d: string; why: string; p: MotionValue<number>; range: [number, number] }) {
  const line = useTransform(p, range, [0, 1]);
  const note = useRamp(p, [range[1] - 0.02, range[1] + 0.03], 0, 1);
  const fade = useRamp(p, range, 1, 0.45);
  return (
    <li>
      <motion.span className="hyp" style={{ opacity: fade }}>{d}<motion.i style={{ scaleX: line }} /></motion.span>
      <motion.small style={{ opacity: note }}>{why}</motion.small>
    </li>
  );
}
