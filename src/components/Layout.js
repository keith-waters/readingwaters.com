import React, { Component } from 'react';
import Link from 'next/link'

class Layout extends Component {

  render() {
    return (
      <>
        <div style={{position:"static", backgroundColor: "purple", marginBottom:"10px", padding:"5px 0"}}>
          <div style={{padding:"0 10px", margin: "auto", maxWidth: "800px", display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Link href="/">
              <img src="/favicon.ico" alt="ReadingWaters Book" style={{marginRight: "10px", cursor: "pointer"}}/>
            </Link>
            <Link href="/">
              <a style={{flexGrow: "1", color: "white", textDecoration: "none", fontSize: "1.5em"}}>ReadingWaters</a>
            </Link>
            <Link href="/notes">
              <a style={{color: "white", textDecoration: "none"}}>Notes</a>
            </Link>
          </div>
        </div>

        <div style={{padding:"0 10px", margin: "auto", maxWidth: "800px"}}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Layout;
