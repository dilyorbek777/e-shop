/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                pathname: '**',
            },
        ],
        // ['fakestoreapi.com','dummyimage.com']
    },
    experimental: {
        appDir: false,
    },
}

module.exports = nextConfig
