import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clarke Needles | Computer Engineer",
    short_name: "Clarke Needles",
    description: "Clarke Needles is a computer engineer with a passion for firmware, embedded systems, and robotics. With a focus on building reliable, low-level systems, Clarke has experience in C programming, real-time operating systems (RTOS), microcontroller development, and hardware-software integration. Explore Clarke's portfolio to see projects in robotics, autonomous systems, UAV software, computer vision, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "firmware",
      "embedded systems",
      "robotics",
      "autonomous systems",
      "software engineering",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  }
}
