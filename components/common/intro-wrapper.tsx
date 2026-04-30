"use client";

import { useEffect, useState } from "react";

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    localStorage.setItem("intro_seen", "true");
    setStarted(true);
  };

  useEffect(() => {
    setMounted(true);

    const seen = localStorage.getItem("intro_seen");
    if (seen === "true") {
      setStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleStart();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mounted]);

  if (!mounted) {
    return <div className="h-screen bg-background" />;
  }

  if (!started) {
    return (
      <div
        className="h-screen flex flex-col items-center justify-center font-mono text-primary cursor-pointer"
        onClick={handleStart}
      >
        <p className="text-2xl md:text-4xl">
          clarke@portfolio:~$ whoami
          <span className="cursor">█</span>
        </p>

        <p className="text-sm mt-4">press enter</p>
        <p className="text-xs text-muted-foreground mt-2">
          (or click anywhere)
        </p>
      </div>
    );
  }

  return <>{children}</>;
}