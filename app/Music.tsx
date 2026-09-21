"use client";

import { useEffect, useRef, useState } from "react";

// Suena con el primer clic en la página (el navegador no permite antes) y se puede silenciar.
export default function Music({ src, title }: { src: string; title: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  function play() {
    const a = audio.current;
    if (!a) return;
    a.volume = 0.4;
    a.play().then(() => setOn(true)).catch(() => {});
  }

  useEffect(() => {
    const first = () => play();
    addEventListener("pointerdown", first, { once: true });
    return () => removeEventListener("pointerdown", first);
  }, []);

  function toggle(e: React.MouseEvent) {
    e.stopPropagation();
    const a = audio.current;
    if (!a) return;
    if (a.paused) play();
    else {
      a.pause();
      setOn(false);
    }
  }

  return (
    <>
      <audio ref={audio} src={src} loop preload="auto" />
      <button type="button" className={`music ${on ? "on" : ""}`} onClick={toggle} aria-pressed={on}>
        <i aria-hidden />
        {title} {on ? "suena" : "en silencio"}
      </button>
    </>
  );
}
