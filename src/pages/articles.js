import React, { Component } from 'react';
import Link from 'next/link'

class Articles extends Component {
  render() {
    return (
      <>
        <p>the future Articles page</p>
        <Link href={'/articles/test'} key={Math.random()}><a>Basics of HTML</a></Link>
      </>
    )
  }
};

export default Articles;