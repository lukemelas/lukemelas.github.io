/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  async redirects() {
    return [
      {
        source: '/im-3d',
        destination: '/IM-3D',
        permanent: true, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
      {
        source: '/im-3D',
        destination: '/IM-3D',
        permanent: true, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
      {
        source: '/IM-3d',
        destination: '/IM-3D',
        permanent: true, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
    ];
  },

}
 
module.exports = nextConfig