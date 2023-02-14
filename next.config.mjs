/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    loader: "akamai",
    path: isProd ? 'https://gabrieljs.online' : "/",
    // formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "gabrieljs.online",
    //     port: "",
    //     pathname: "/image/upload/**",
    //   },
    //   {
    //     protocol: "http",
    //     hostname: "localhost",
    //     port: "3000",
    //     pathname: "/image/upload/**",
    //   }
    // ],
  },
  assetPrefix: isProd ? 'https://gabrieljs.online' : undefined,
};

export default nextConfig;
