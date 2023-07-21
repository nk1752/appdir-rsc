/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        nk: 'nadeem',
    },
    experimental: {
        serverActions: true,
        
    }
}

module.exports = nextConfig
