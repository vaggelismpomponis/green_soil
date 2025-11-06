/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["zod"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
        {
          key: "Content-Security-Policy",
          // Adjust 'connect-src' for your domains if needed
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "font-src 'self' data:",
            "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
            "frame-ancestors 'none'",
            "base-uri 'self'"
          ].join("; ")
        },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
};

export default nextConfig;


