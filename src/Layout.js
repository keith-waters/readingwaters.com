import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'

import { Container, AppBar, Typography, Button } from '@material-ui/core';

class Layout extends Component {

  render() {
    return (
      <>
        <AppBar position='static' style={{marginBottom:"10px", padding:"5px 0"}}>
          <Container maxWidth="md" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Typography variant="h4" component="a" style={{cursor: "pointer", flexGrow: "1"}} href="/">
              Reading Waters
            </Typography>
            <a href="/articles">
              <Button style={{color: "white"}}>
                Articles
              </Button>
            </a>
          </Container>
        </AppBar>

        <Container maxWidth="md">
          {this.props.children}
        </Container>
      </>
    );
  }
}

export default Layout;