/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/CFA",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/CFA",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
