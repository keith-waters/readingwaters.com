import React, { Component } from 'react';
import remark from 'remark'
import frontmatter from 'remark-frontmatter'
import yaml from 'js-yaml'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'

class Slug extends Component {
  static async getInitialProps({query}){
    let metadata = {};
    const getMetadata = () => data => {
      const stuff = data.children[0].value;
      metadata = yaml.load(stuff)
    };
    const content = remark()
        .use(frontmatter, ['yaml'])
        .use(getMetadata)
        .use(remark2rehype)
        .use(rehype2react, {createElement: React.createElement})
        .processSync(query.content).contents
    return { content, metadata }
  };

  render() {
    const { content, metadata } = this.props;
    return (
      <>
        <h2>{metadata.title || 'wrong'}</h2>
        <p>{metadata.publishDate || 'nope'}</p>
        {content}
      </>
    )
  }
};

export default Slug;