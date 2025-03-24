import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  async redirects() {
    return [
        {
            source: '/',
            destination: '/home',
            permanent: true, // Use true para redirecionamento 308 permanente
        },
    ];
},
};

export default nextConfig;
