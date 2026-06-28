import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server's client JS/HMR to load when testing on other devices
  // over the LAN (e.g. your phone hitting the Network URL). Without this,
  // cross-origin dev resources are blocked, React never hydrates, and
  // interactive elements like the mobile menu button stop working.
  allowedDevOrigins: ["10.2.0.2"],
};

export default nextConfig;
