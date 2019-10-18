import { Component } from 'react';
import { Box, Card, CardMedia, Typography } from '@material-ui/core';

class Articles extends Component {

  render() {
    return (
      <>
        <Card style={{padding:"10px", textAlign:"center"}}>
            <Typography>
                Articles
            </Typography>
        </Card>
      </>
    )
  }
};

export default Articles;