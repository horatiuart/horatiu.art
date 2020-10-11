module.exports = {
  isProduction: process.env.ELEVENTY_ENV === 'production',
  isDevelopment: process.env.ELEVENTY_ENV === 'development',
};