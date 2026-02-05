import type { NextConfig } from "next";

// Use BASE_PATH env variable to set subdirectory deployment (e.g., "/Algo" for Hostinger)
// Leave unset or empty for root deployment (e.g., Vercel)
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",

  ...(basePath && {
    basePath: basePath,
    assetPrefix: basePath,
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
