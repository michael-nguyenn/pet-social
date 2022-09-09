/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_URL:
      'mongodb+srv://mike:mikemike@pet-social.5anhhev.mongodb.net/?retryWrites=true&w=majority',
    AWS_BUCKET_NAME: 'awbuckit',
    AWS_BUCKET_REGION: 'us-east-2',
    AWS_ACCESS_KEY: 'AKIA4X6FZRBN56ACQHN2',
    AWS_SECRET_ACCESS_KEY: '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',
    AWS_BUCKET_URL: 'http://awbuckit.s3-website.us-east-2.amazonaws.com/',
  },
};

module.exports = nextConfig;
