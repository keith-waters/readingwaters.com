const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const fs = require('fs');
const remark = require('remark');
const frontmatter = require('remark-frontmatter');
const yaml = require('js-yaml');

const files = fs.readdirSync('./content/');
const articlesPathMap = {};
const articlesList = [];

files.forEach(file => {
  const content = fs.readFileSync(`./content/${file}`, 'utf8');
  const updateArticlesData = () => data => {
    // Grabbing the first element in children because I know it will be the
    // YAML child. A better way is to find the items in the children array 
    // that have a "type" of "yaml".
    const metadata = yaml.load(data.children[0].value);
    articlesPathMap[`/articles/${metadata.slug}`] = { page: '/articles/[slug]', query: {content}};
    articlesList.push(metadata);
  };

  remark()
    .use(frontmatter, ['yaml'])
    .use(updateArticlesData)
    .processSync(content)
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/articles': { page: '/articles', query: {data: articlesList} },
      ...articlesPathMap,
    }
  },
});