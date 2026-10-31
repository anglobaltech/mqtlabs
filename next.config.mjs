/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/testing",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/testing/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
