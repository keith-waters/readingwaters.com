import { Component } from 'react';
import { Box, Card, CardMedia, Typography } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';
import MDXDocument from '../../content/test.md';

const H1 = props => <Typography {...props} component="h1" variant="h3" />

class Blog extends Component {
  static getInitialProps(query, stuff){
    console.log('quirey', query)
    return {};
  }

  render() {
    const components = {
      h1: H1,
    }
    return (
      <MDXProvider components={components}>
          <MDXDocument />
      </MDXProvider>
    )
  }
};

export default Blog;