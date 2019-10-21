import React, { Component } from 'react';
import Link from 'next/link'

class Articles extends Component {
  static async getInitialProps({query}){
    return { list: query.data || [] }
  }

  render() {
    const { list } = this.props;
    return (
      <>
        <p>Articles</p>
        {
          list.map(item => {
            return (
              <a href={`/articles/${item.slug}`} key={Math.random()}>{item.title}</a>
            )
          })
        }
      </>
    )
  }
};

export default Articles;