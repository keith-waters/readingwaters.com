import { Component } from 'react';
import { Box, Card, CardMedia, Typography } from '@material-ui/core';
import { textAlign } from '@material-ui/system';

class Index extends Component {

  render() {
    return (
      <>
        <Card style={{padding:"10px", textAlign:"center"}}>
          <CardMedia image="/keith-waters-headshot.jpg" component="img" style={{display:"inline", width:"200px", borderRadius:"4px"}} />
          <Box ml="10px" style={{flexGrow:"1", textAlign:"center"}}>
            <Typography variant="h3" component="h1">
              Hi, I'm Keith
            </Typography>
            <Typography>
              I build web apps with React and Node.
            </Typography>
          </Box>
        </Card>
      </>
    )
  }
};

export default Index;