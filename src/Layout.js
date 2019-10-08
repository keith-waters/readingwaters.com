import React, { Component } from 'react';

import { Container, AppBar, Typography } from '@material-ui/core';

class Layout extends Component {

  render() {
    return (
      <>
        <AppBar position='static' style={{marginBottom:"10px", padding:"5px 0"}}>
          <Container>
            <Typography variant="h4" component="h1">
              Reading Waters
            </Typography>
          </Container>
        </AppBar>

        <Container>
          {this.props.children}
        </Container>
      </>
    );
  }
}

export default Layout;