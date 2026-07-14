"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Snap the window position immediately to the top left
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Stops transitions from smoothly drifting downward
    });
  }, [pathname]);

  return null;
}