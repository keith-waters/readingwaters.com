import React, { Component } from 'react';
import Link from 'next/link'
import articlesList from '../utils/articlesList'

class Articles extends Component {
  render() {
    return (
      <>
        <h2>Articles</h2>
        {
          articlesList.map(article => {
            return (
              <Link href={"/articles" + article.url} key={Math.random()}><a>{article.title}</a></Link>

            )
          })
        }
      </>
    )
  }
};

export default Articles;