/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:'export',
  env: {
    app_url: process.env.app_url,
    apidev_url: process.env.apidev_url,
    MUI_PRO_LICENSE_KEY: process.env.MUI_PRO_LICENSE_KEY,
  },
};

export default nextConfig;
