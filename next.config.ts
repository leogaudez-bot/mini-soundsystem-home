import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/mini-soundsystem-home",
  assetPrefix: "/mini-soundsystem-home/",
};

export default nextConfig;
