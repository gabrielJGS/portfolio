/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gabrieljs.online",
        port: "",
        pathname: "/image/upload/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/image/upload/**",

      }
    ],
  },
  assetPrefix: "",
};

export default nextConfig;
