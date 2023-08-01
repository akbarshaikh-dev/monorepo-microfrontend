/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["gravity-design"],
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "/:path*"
            },
            {
                source: "/landing-page",
                destination: "http://localhost:3001/lp"
            },
            {
                source: "/landing-page/:path*",
                destination: "http://localhost:3001/lp/:path*"
            },
        ]
    }
}

module.exports = nextConfig
