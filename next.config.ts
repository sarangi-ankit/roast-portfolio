import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 serverExternalPackages: ["@sparticuz/chromium"],
  
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
