import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

type UseMouseOptions = {
  resetOnExit?: boolean;
};

type MousePosition = {
  x: number;
  y: number;
};

export function useMouse<T extends HTMLElement = HTMLElement>(
  options: UseMouseOptions = { resetOnExit: false },
) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const ref = useRef<T | null>(null);

  const setMousePosition = (event: MouseEvent<HTMLElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const x = Math.max(0, Math.round(event.clientX - rect.left));
      const y = Math.max(0, Math.round(event.clientY - rect.top));

      setPosition({ x, y });
    } else {
      setPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const resetMousePosition = () => setPosition({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current || document;
    element.addEventListener("mousemove", setMousePosition as any);
    if (options.resetOnExit)
      element.addEventListener("mouseleave", resetMousePosition as any);

    return () => {
      element.removeEventListener("mousemove", setMousePosition as any);
      if (options.resetOnExit)
        element.removeEventListener("mouseleave", resetMousePosition as any);
    };
  }, [options.resetOnExit]);

  return { ref, ...position };
}
