const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const fs = require('fs');

const file = fs.readFileSync('./content/test.md', 'utf8')


module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/articles/stat': { page: '/articles', query: { data: file }},
    }
  },
})