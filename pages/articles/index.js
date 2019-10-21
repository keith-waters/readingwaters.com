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
              <Link href={`/articles/${item.slug}`} key={Math.random()}><a>{item.title}</a></Link>
            )
          })
        }
      </>
    )
  }
};

export default Articles;