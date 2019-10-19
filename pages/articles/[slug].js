import React, { Component } from 'react';
import remark from 'remark'
import frontmatter from 'remark-frontmatter'
import yaml from 'js-yaml'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'

class Articles extends Component {
  static async getInitialProps({query}){
    return { data: query.data }
  }

  render() {
    const { data } = this.props;
    const logger = () => log => {
      const stuff = log.children[0].value;
      const thing = yaml.load(stuff)
      console.log(thing)
    }
    return (
      <>
        <p>Articles</p>
        {
          remark()
            .use(frontmatter, ['yaml'])
            .use(logger)
            .use(remark2rehype)
            .use(rehype2react, {createElement: React.createElement})
            .processSync(data).contents
        }
      </>
    )
  }
};

export default Articles;