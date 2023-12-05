/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
        ]
    },
 async headers() {
  return [
    {
      // matching all API routes
      source: "/api/:path*",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: ["zenl.com","https://zenl.vercel.app/"] },
        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS," },
        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Cache-Control" }, // Add Cache-Control here
      ]
    }
  ]
}



}

module.exports = nextConfig
