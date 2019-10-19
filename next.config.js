const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const fs = require('fs');
const remark = require('remark')
const frontmatter = require('remark-frontmatter')
const yaml = require('js-yaml')

const routes = {};
const articlesList = [];
const files = fs.readdirSync('./content/')

files.forEach(file => {
  const data = fs.readFileSync(`./content/${file}`, 'utf8');
  const logger = () => log => {
    const stuff = log.children[0].value;
    const thing = yaml.load(stuff)
    routes[`/articles/${thing.slug}`] = { page: '/articles/[slug].js', query: {data}}
    articlesList.push(thing)
  };

  remark()
    .use(frontmatter, ['yaml'])
    .use(logger)
    .processSync(data)
})
console.log(articlesList)

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
console.log('export', articlesList)
    return {
      '/': { page: '/' },
      '/articles': { page: '/articles', query: {data: articlesList} },
      ...routes,
    }
  },
})