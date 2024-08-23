/** @type {import('next').NextConfig} */
const nextConfig = {
    'output' : 'export',
    typescript :{
        ignoreBuildErrors: true
    },
    images: {
        domains: ['getswipe.in',
          'assets.aceternity.com'
        ],
      },

};

export default nextConfig;
