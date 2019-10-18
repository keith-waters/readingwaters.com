import { Component } from 'react';
import { Box, Card, CardMedia, Typography } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';

const H1 = props => <Typography {...props} component="h1" variant="h3" />

let MDXDocument;
class Blog extends Component {
  static async getInitialProps({ query }){
    let obj = {};
    await import('../content/test.md')
      .then(component => {
        console.log('workinit', component.default)
        obj.Component = component.default
      })
    return obj;
  }

  render() {
    const components = {
      h1: H1,
    }
    const { Component } = this.props;

    return (
      <MDXProvider components={components}>
        <Component /> 
      </MDXProvider>
    )
  }
};

export default Blog;