/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
    prependData: `@import "all.scss";`,
  },
};

module.exports = nextConfig;
