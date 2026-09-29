import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_COLORS = [
  "#dc2626", // red-600
  "#ef4444", // red-500
  "#b91c1c", // red-700
  "#991b1b", // red-800
  "#f87171", // red-400
  "#be123c", // rose-700
  "#e11d48", // rose-600
  "#7f1d1d", // red-900
];

const DEFAULT_ROWS = [
  [{ label: "Python" }, { label: "Java" }, { label: "C++" }, { label: "SQL" }],
  [{ label: "LangChain" }, { label: "FAISS" }, { label: "Scikit-Learn" }, { label: "Spring Boot" }, { label: "React" }],
];

export function HighlightGrid({
  rows = DEFAULT_ROWS,
  colors = DEFAULT_COLORS,
  transitionDuration = 250,
  highlightFirst = true,
  className,
}) {
  const gridRef = useRef(null);
  const highlightRef = useRef(null);
  const cellRefs = useRef(new Map());
  const activeRef = useRef(null);
  const [active, setActive] = useState(highlightFirst ? 0 : null);

  const gridRows = useMemo(() => {
    let gi = 0;
    return rows.map((row) =>
      row.map((item) => {
        const idx = gi++;
        return { label: item.label, color: item.color ?? colors[idx % colors.length], gi: idx };
      })
    );
  }, [rows, colors]);

  const moveTo = useCallback((gi, color) => {
    const grid = gridRef.current;
    const highlight = highlightRef.current;
    const el = cellRefs.current.get(gi);
    if (!grid || !highlight || !el) return;

    const rect = el.getBoundingClientRect();
    const crect = grid.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    highlight.style.opacity = "0.9";
    highlight.style.transform = `translate(${rect.left - crect.left}px, ${rect.top - crect.top}px)`;
    highlight.style.width = `${rect.width}px`;
    highlight.style.height = `${rect.height}px`;
    highlight.style.backgroundColor = color;
    activeRef.current = { gi, color };
  }, []);

  useEffect(() => {
    let rafId;
    const updatePosition = () => {
      if (activeRef.current) {
        moveTo(activeRef.current.gi, activeRef.current.color);
      } else if (highlightFirst && gridRows[0]?.[0]) {
        const first = gridRows[0][0];
        const h = highlightRef.current;
        if (h) {
          h.style.transitionDuration = "0s";
          moveTo(first.gi, first.color);
          rafId = requestAnimationFrame(() => {
            if (h) h.style.transitionDuration = `${transitionDuration}ms`;
          });
        }
      }
    };

    rafId = requestAnimationFrame(updatePosition);

    let resizeRaf;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (activeRef.current) moveTo(activeRef.current.gi, activeRef.current.color);
      });
    };

    const grid = gridRef.current;
    const ro = grid ? new ResizeObserver(onResize) : null;
    if (grid && ro) ro.observe(grid);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(resizeRaf);
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [gridRows, highlightFirst, moveTo, transitionDuration]);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-x-auto overflow-y-hidden py-4",
        className
      )}
    >
      <div
        ref={gridRef}
        className="relative mx-auto flex h-[160px] sm:h-[180px] w-full max-w-4xl shrink-0 flex-col rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden shadow-xl shadow-red-950/20"
      >
        {/* Sliding highlight */}
        <div
          ref={highlightRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-0 opacity-0 rounded-xl"
          style={{
            backgroundImage:
              "radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.25), rgba(255,255,255,0) 50%), linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 100%)",
            transitionProperty: "transform, width, height, background-color, opacity",
            transitionDuration: `${transitionDuration}ms`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {gridRows.map((row, r) => (
          <div
            key={r}
            className={cn(
              "flex flex-1",
              r < gridRows.length - 1 && "border-b border-white/10"
            )}
          >
            {row.map((cell, c) => {
              const isActive = active === cell.gi;
              return (
                <div
                  key={cell.gi}
                  ref={(el) => {
                    if (el) cellRefs.current.set(cell.gi, el);
                    else cellRefs.current.delete(cell.gi);
                  }}
                  onMouseEnter={() => {
                    setActive(cell.gi);
                    moveTo(cell.gi, cell.color);
                  }}
                  className={cn(
                    "flex h-full flex-1 items-center justify-center p-2 text-center cursor-pointer transition-colors",
                    c < row.length - 1 && "border-r border-white/10"
                  )}
                >
                  <p
                    className={cn(
                      "relative z-[2] whitespace-nowrap font-mono text-xs sm:text-sm font-semibold uppercase transition-colors duration-200 select-none",
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {cell.label}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightGrid;
