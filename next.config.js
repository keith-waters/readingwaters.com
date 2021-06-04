const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  cssModules: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    gatrackingid: process.env.gatrackingid,
  },
});
