/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/careers/:path*",
        destination:
          "https://shape-your-career-at-his-p4ukej0.gamma.site/:path*",
      },
      {
        source: "/careers",
        destination:
          "https://shape-your-career-at-his-p4ukej0.gamma.site/",
      },
      {
        source: "/blogs/:path*",
        destination: "https://blog-rzdfysg.gamma.site/:path*",
      },
      {
        source: "/blogs",
        destination: "https://blog-rzdfysg.gamma.site/",
      },
    ];
  },
};

module.exports = nextConfig;
