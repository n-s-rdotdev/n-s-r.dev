/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  devIndicators: false,
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/naga-sai-rakshith/",
        permanent: false,
      },
      {
        source: "/github-personal",
        destination: "https://github.com/nagasairakshith2905",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/n-s-rdotdev",
        permanent: false,
      },
      {
        source: "/x",
        destination: "https://x.com/n_s_rdotdev",
        permanent: false,
      },
    ]
  }
}

export default nextConfig
