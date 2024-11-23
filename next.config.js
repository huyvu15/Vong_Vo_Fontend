/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'res.cloudinary.com'],
  },
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
  },
  basePath: '', // Nếu có basePath, hãy thêm ở đây
  trailingSlash: false, // Thêm dấu `/` ở cuối URL nếu cần
};

module.exports = nextConfig;
