import React, { Component } from 'react';
import Link from 'next/link'

class Articles extends Component {
  render() {
    return (
      <>
        <p>Articles</p>
        <Link href={'/articles/jam'} key={Math.random()}><a>Basics of HTML</a></Link>
      </>
    )
  }
};

export default Articles;