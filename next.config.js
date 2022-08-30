/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_URL:
      'mongodb+srv://mike:mikemike@pet-social.5anhhev.mongodb.net/?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
