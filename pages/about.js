import { Component } from 'react';
import { Box, Card, CardMedia, Typography } from '@material-ui/core';

import MDXDocument from '../content/test.md';

class Index extends Component {

  render() {
    return (
      <>
        <Card style={{padding:"10px", textAlign:"center"}}>
          <MDXDocument />
        </Card>
      </>
    )
  }
};

export default Index;