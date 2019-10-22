import React, { Component } from 'react';
import Link from 'next/link'

class Articles extends Component {
  render() {
    return (
      <>
        <p>Articles</p>
        <a href={'/articles/jam'} key={Math.random()}>amoino</a>
      </>
    )
  }
};

export default Articles;