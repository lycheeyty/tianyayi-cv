/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/tianyayi-cv" : "",
  assetPrefix: isGithubPages ? "/tianyayi-cv/" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
