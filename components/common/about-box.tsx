"use client";

import { useState } from "react";
import Link from "next/link";

export function AboutBox() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full p-5 sm:p-8 border border-border bg-card text-card-foreground rounded-none text-left space-y-6 shadow-sm relative">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-rose-500/70" />
          <span className="h-2 w-2 rounded-full bg-amber-500/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
          <p className="text-xs font-mono text-muted-foreground ml-2 select-none">README.md</p>
        </div>
      </div>
      <div 
        className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[2000px]" : "max-h-[250px]"
        }`}
      >
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            I am a Computer Engineering student at{" "}
            <Link href="https://queensu.ca" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              Queen's University
            </Link>{" "}
            and a varsity student-athlete on the{" "}
            <Link href="https://gogaelsgo.com" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              Queen's Baseball team
            </Link>{", "}
            currently completing a 16-month co-op as a Firmware Designer at{" "}
            <Link href="https://semtech.com" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground 
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary 
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              Semtech
            </Link>{". "}
            My work focuses heavily on low-level firmware engineering, embedded systems, and hardware-software integration.
          </p>
          <p>
            On campus, I build autonomy frameworks for the{" "}
            <Link href="https://qadt.ca" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground 
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary 
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              Queen's Aerospace Design Team (QADT)
            </Link>{" "}
            where I implement ROS2 nodes, Nav2 localization stacks, SLAM mapping, and PX4 flight controls for autonomous UAVs. 
          </p>
          <p>
            Parallel to this, I served as a Project Manager leading first-year engineering teams through the system design and iterative implementation of a carbon footprint tracking application. In this role, I owned timeline management, client communication, and mentored junior cohorts on software architecture and stack selection.
          </p>
          <p>
            Previously, I was at{" "}
            <Link href="https://visualsonics.com" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground 
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary 
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              FUJIFILM VisualSonics
            </Link>{", "}
            where I engineered automated testing frameworks and developed core features for large-scale biomedical software systems using C, C++, C#, WinAPI, ATL, and COM objects.
          </p>
          <p>
            Right now, I am focusing heavily on embedded systems and hardware interaction. I am currently working on an RTOS based weather dashboard with custom peripheral drivers (I2C/SPI/UART){" "}
            <Link href="https://github.com" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground 
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary 
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              freertos-can-telematics
            </Link>{" "}
            and a CUDA-OpenGL fractal generator that acts as a GPU vs. CPU benchmark{" "}
            <Link href="https://github.com" 
              target="_blank" className="font-mono text-xs sm:text-sm inline-flex items-center text-foreground 
              underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-primary hover:text-primary 
              transition-colors bg-muted px-1 py-0.5 mx-0.5 rounded-none">
              cuda-opengl-fractals
            </Link>.
          </p>
        </div>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
        )}
      </div>
      <div className="flex justify-start pt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono border border-border px-3 py-1.5 hover:bg-muted transition-colors text-foreground select-none"
        >
          {isExpanded ? "read less" : "read more..."}
        </button>
      </div>
    </div>
  );
}
