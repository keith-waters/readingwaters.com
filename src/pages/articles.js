import React, { Component } from 'react';
import Link from 'next/link'
import articlesList from '../utils/articlesList'

class Articles extends Component {
  render() {
    return (
      <>
        <h2>Articles</h2>
        <ul>
          {
            articlesList.map(article => {
              return (
                <li key={article.url}>
                  <Link href={"/articles" + article.url}><a>{article.title}</a></Link>
                </li>

              )
            })
          }
        </ul>
      </>
    )
  }
};

export default Articles;