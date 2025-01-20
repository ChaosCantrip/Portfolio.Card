/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
                port: "",
                pathname: "/bucket_chaoscantrip_portfolio_images/**",
                search: ""
            }
        ]
    }
};

export default nextConfig;
