"use client";

import { useEffect } from "react";

type ClickOutsideHandler = (event: MouseEvent) => void;

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: ClickOutsideHandler,
  excludeClass?: string
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (
          excludeClass &&
          (event.target as Element).closest(`.${excludeClass}`)
        ) {
          return;
        }
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler, excludeClass]);
};
