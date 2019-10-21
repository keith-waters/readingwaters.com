import React, { Component } from 'react';
import remark from 'remark'
import frontmatter from 'remark-frontmatter'
import yaml from 'js-yaml'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'

class Slug extends Component {
  static async getInitialProps({query}){
    return { ...query }
  };

  render() {
    const { content, metadata } = this.props;
    return (
      <>
        {
        remark()
            .use(frontmatter, ['yaml'])
            .use(remark2rehype)
            .use(rehype2react, {createElement: React.createElement})
            .processSync(content).contents
        }
      </>
    )
  }
};

export default Slug;