const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const fs = require('fs');
const remark = require('remark')
const frontmatter = require('remark-frontmatter')
const yaml = require('js-yaml')

const routes = {};
const files = fs.readdirSync('./content/')
files.forEach(file => {
  const data = fs.readFileSync(`./content/${file}`, 'utf8');
  const logger = () => log => {
    const stuff = log.children[0].value;
    const thing = yaml.load(stuff)
    routes[`/articles/${thing.slug}`] = { page: '/articles', query: {data}}
  }
  remark()
    .use(frontmatter, ['yaml'])
    .use(logger)
    .processSync(data)
})


module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      ...routes,
    }
  },
})