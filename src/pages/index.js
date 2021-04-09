import { Component } from 'react';

class Index extends Component {

  render() {
    return (
      <>
        <div style={{padding:"10px", textAlign:"center"}}>
          <img src="/keith-waters-headshot.jpg" alt="Keith Waters" component="img" style={{display:"inline", width:"200px", borderRadius:"4px"}} />
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"center"}}>
            <h1>
              Hi, I'm Keith
            </h1>
            <p>
              I hang out and write code.
            </p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              What I'm doing now
            </h2>
            <ul>
              <li>
                Reading Clean Code Links: <a target="_blank" href="https://youtu.be/7EmboKQH8lM">lectures on youtube</a>, <a target="_blank" href="https://www.goodreads.com/book/show/3735293-clean-code">Goodreads link</a>
              </li>
              <li>
                Reading Structure and Interpretations of Computer Programs Links: <a target="_blank" href="https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html">SICP</a>
              </li>
              <li>
                Working as a React Developer at <a target="_blank" href="https://www.bidwrangler.com/">BidWrangler</a>
              </li>
            </ul>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              Want to contact me?
            </h2>
            <p>
              Send an email to <a href="mailto:readingwaters@gmail.com">readingwaters@gmail.com</a>
            </p>
          </div>
        </div>
      </>
    )
  }
};

export default Index;
