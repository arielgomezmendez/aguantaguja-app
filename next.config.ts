import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
